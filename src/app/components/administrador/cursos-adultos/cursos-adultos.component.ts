import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DropzoneConfigInterface } from 'ngx-dropzone-wrapper';
import { LoginService } from 'src/app/services/login.service';
import { EstudianteService } from 'src/app/services/estudiante.service';
import { CursosService } from 'src/app/services/cursos.service';
@Component({
  selector: 'app-cursos-adultos',
  templateUrl: './cursos-adultos.component.html',
  styleUrls: ['./cursos-adultos.component.scss']
})
export class CursosAdultosComponent implements OnInit {

  model;

  contactDefaultImg: string
  loggedUser: any;
  DropzoneConfig: DropzoneConfigInterface = {
    url: `http://escuela.poli/documentos/`,
    addRemoveLinks: true,
    clickable: true,
    acceptedFiles: 'image/*,application/pdf',
    createImageThumbnails: true,
    maxFiles: 3,
  };
  edad = 0;
  programasEdadValida: any[] = [];
  newContactForm: FormGroup;
  formSubmitted: boolean = false;
  fileData;
  listPrograms;
  mensaje;
  alerta = false;
  foto: any = './assets/demo/img/contacts/user_empty.png';

  constructor(private formBuilder: FormBuilder, private router: Router, private loginService: LoginService, private estudianteService: EstudianteService, private cursosService: CursosService) { }

  ngOnInit() {
    this.loggedUser = this.loginService.getUserInfo();
    this.newContactForm = this.formBuilder.group({
      //datos del niño

      tipoDocumento: ['', Validators.required],
      numeroDocumento: ['', Validators.required],
      lugarExpedicionDocumento: ['', Validators.required],
      nombreCompleto: ['', Validators.required],
      apellidos: ['', Validators.required],
      fechaNacimiento: ['', Validators.required],
      lugarNacimiento: ['', Validators.required],
      genero: ['', Validators.required],
      direccionResidencia: ['', Validators.required],
      telefono: ['', Validators.required],
      correo: ['', Validators.required, Validators.email],

      //informacion Acudiente
      nombreAcudiente: ['', Validators.required],
      emailAddress: ['', [Validators.required, Validators.email]],
      parentesco: ['', Validators.required],
      celular: ['', Validators.required],

      // informaion academica 
      estudia: ['', Validators.required],
      gradoEscolar: ['', Validators.required],
      nombreEstablecimiento: ['', Validators.required],
      tipoEstablecimiento: ['', Validators.required],

      firstName: ['', Validators.required],
      lastName: ['', Validators.required],

      // informacion adicional
      eps: ['', Validators.required],
      nombrePadre: ['', Validators.required],
      celularPadre: ['', Validators.required],
      nombreMadre: ['', Validators.required],
      celularMadre: ['', Validators.required],
      empresa: ['', Validators.required],
      tipoVinculacion: ['', Validators.required],
      antecedentes: this.formBuilder.array([]),
      //documentos 
      documentos: ['', Validators.required],
      foto: ['', Validators.required],
      //programa seleccionado
      programa: ['', Validators.required]
    });

    if (this.loginService.isGuardian()) {
      this.newContactForm.get('nombreCompleto').disable({ onlySelf: true });
      this.newContactForm.get('correo').disable({ onlySelf: true });
      this.newContactForm.patchValue({ nombreCompleto: this.loggedUser.name, correo: this.loggedUser.email });
    }
    this.cursosService.getCursosDisponibles().subscribe((data) => {
      if (data.status == 200) {
        this.listPrograms = data.data;
        this.programasEdadValida = data.data;
      }
    });
  }
  get f() {
    return this.newContactForm.controls;
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
      console.log(this.foto);
    }
  }
  setStudent(form) {
    let acudiente = this.newContactForm.getRawValue();
    const date = acudiente.fechaNacimiento;
    acudiente.fechaNacimiento = `${date.year}-${date.month}-${date.day}`;
    acudiente.foto = this.foto;
    this.estudianteService.storeGuardianAsStudent(acudiente).subscribe((data) => {
      this.alerta = true
      if (data.status == 200) {
        this.mensaje = "Inscipcion realizada con exito";
        this.newContactForm.reset();
        this.newContactForm.patchValue({ nombreCompleto: this.loggedUser.name, correo: this.loggedUser.email });
      }
      else {
        this.mensaje = data.message;
        console.log(this.mensaje)
      }
    })
    console.log(form.value);
  }

  onChangeDate() {
    const fecha = this.newContactForm.controls.fechaNacimiento.value;
    let fecha1, fecha2;

    if (fecha) {
      if (fecha.year && fecha.month && fecha.day) {
        fecha1 = new Date();
        fecha2 = new Date(fecha.year, fecha.month, fecha.day)
        this.edad = ((fecha1 - fecha2) / 86400000) / 365;

        this.programasEdadValida = this.listPrograms.filter((data) => {
          console.log(data.edad_min, data.edad_max, this.edad);
          console.log(this.edad >= data.edad_min && this.edad <= data.edad_max);
          return (this.edad >= data.edad_min && this.edad <= data.edad_max)
        });
      }
    }
  }
}
