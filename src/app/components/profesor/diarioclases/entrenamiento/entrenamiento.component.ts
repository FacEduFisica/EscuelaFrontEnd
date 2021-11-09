import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CursosService } from 'src/app/services/cursos.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-entrenamiento',
  templateUrl: './entrenamiento.component.html',
  styleUrls: ['./entrenamiento.component.scss']
})
export class EntrenamientoComponent implements OnInit {

  user;
  entrenamientoFormGroup: FormGroup;
  cursos:any[];

  constructor(private router: Router, private formBuilder: FormBuilder, private cursoService:CursosService, private loginService: LoginService) { }

  ngOnInit() {


    this.entrenamientoFormGroup = this.formBuilder.group({
      fecha: ['', Validators.required],
      objetivoGeneral: ['', Validators.required],
      componentes: ['', Validators.required],
      actividades: ['', Validators.required],
      tiempoDuracion: ['', Validators.required],
      clase: ['', Validators.required],
      curso: ['', Validators.required]
    });
    this.user = this.loginService.getUserInfo();
    this.cursoService.getCursosByProfessor(this.user).subscribe((data: any) => {
      if (data.status == 200) {
        this.cursos = data.data;
      }
    });
  }

  cancelar() {
    this.router.navigate(['/diario-de-clase']);
  }

  guardar() {
    this.cursoService.savePlanTrabajo(this.entrenamientoFormGroup.getRawValue()).subscribe((data) => 
    {
      console.log();
    })
  }

}
