import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';
import { CursosService } from 'src/app/services/cursos.service';

@Component({
  selector: 'app-objetivos-curso',
  templateUrl: './objetivos-curso.component.html',
  styleUrls: ['./objetivos-curso.component.scss']
})
export class ObjetivosCursoComponent implements OnInit {
  objetivosGroup: FormGroup;
  constructor(private formBuilder: FormBuilder, private loginService: LoginService, private cursoService: CursosService) { }
  index = 0;
  objetivos: any[] = [];
  user;
  cursos: any[];
  mensaje;
  ngOnInit() {
    this.objetivosGroup = this.formBuilder.group({
      objetivo: ['', Validators.required],
      curso: ['', Validators.required]
    });

    this.user = this.loginService.getUserInfo();
    this.cursoService.getCursosByProfessor(this.user).subscribe((data: any) => {
      if (data.status == 200) {
        this.cursos = data.data;
      }
    });
  }
  setObjetivo() {
    this.index += 1;
    const objetivo = {
      id: this.index,
      objetivo: this.objetivosGroup.getRawValue().objetivo
    };
    this.objetivos.push(objetivo);
    this.objetivosGroup.patchValue({ objetivo: "" });
  }
  deleteObjetivo(id) {
    this.objetivos = this.objetivos.filter((data) => {
      return data.id != id;
    })
  }
  saveObjetivos() {
    const objetivosToSave = { idCurso: this.objetivosGroup.getRawValue().curso, objetivos: this.objetivos };
    console.log(objetivosToSave);
    this.cursoService.saveObjetivos(objetivosToSave).subscribe((data) => {
      if (data) {
        this.mensaje = data.data;
        this.objetivos = [];
      }
    })
  }
}
