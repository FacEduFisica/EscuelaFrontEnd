import { Component, OnInit } from '@angular/core';
import { AdmiService } from 'src/app/services/admi.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.scss']
})
export class NoticiasComponent implements OnInit {
  noticias;
  noticia:any;
  foto:any="";
  fileData:any;
  noticiasForm: FormGroup;
  mensaje = '';
  detalle;
  update = false;
  nuevoN = false;

  constructor(private adminService: AdmiService, private formBuilder: FormBuilder, private loginService: LoginService) { }
  ngOnInit() {
    this.noticiasForm = this.formBuilder.group({
      titulo: ['', Validators.required],
      subtitulo: ['', Validators.required],
      tema: ['', Validators.required],
      contenido: ['', Validators.required],
    });
    this.getNoticias();
  }

  nuevaNoticia() {
    this.nuevoN = true;
  }
  cancelar() {
    this.nuevoN = false;
    this.update = false;
    this.noticiasForm.reset();
    this.mensaje = '';
  }
  onFileChange(event) {
    this.fileData = event.target.files[0];
    this.previewAndUpdateField();

  }
  previewAndUpdateField() {
    const mimeType = this.fileData.type;
    if (mimeType.match(/image\/*/) == null) {
      return // validar que si sea una imagen
    }
    const reader = new FileReader();
    reader.readAsDataURL(this.fileData);
    reader.onload = (event) => {
      this.foto = reader.result;
    }
  }

  setNoticias() {
    const noticiaToSend = { ...this.noticiasForm.value, imagen: this.foto }
    this.adminService.setNoticias(noticiaToSend).subscribe((data) => {
      if (data.status==200) {
        this.noticiasForm.reset();
        this.getNoticias();
        this.foto=""
        this.mensaje ="Se ha guardado correctamente"
      }
    })
  }

  verDetalle(id) {
    this.detalle = true
    this.noticia = this.noticias.find(
      element => element.id === id
    );
  }

  volver() {
    this.detalle = false
  }

  delete(id) {
    this.adminService.deleteNoticias(id).subscribe(
      data => {
        if (data) {
          this.getNoticias()
        }
      }
    )
  }

  editar(id) {
    this.noticia = this.noticias.find(
      element => element.id === id
    );
    this.noticiasForm.patchValue({
      titulo: this.noticia.titulo,
      subtitulo: this.noticia.subtitulo,
      tema: this.noticia.tema,
      contenido: this.noticia.contenido,
    });
    this.nuevoN = true;
    this.update = true;
  }

  getNoticias() {
    this.adminService.getNoticias().subscribe((data) => {
      if (data) {
        this.noticias = data;
      }
    });
  }

  sendUpdateNoticia(id) { 
    this.adminService.setupdateNoticias(id,this.noticiasForm.value).subscribe(
      data =>{
        if(data.status == 200) {
          this.mensaje = data.data;
          this.noticiasForm.reset();
          this.getNoticias();
        }else {
          this.mensaje= 'Error'
        }
      }
    )
  }
}


