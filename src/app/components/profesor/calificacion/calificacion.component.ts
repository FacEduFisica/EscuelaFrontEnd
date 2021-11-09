import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { ListasclasesComponent } from '../listasclases/listasclases.component';
import { TransferenciaServiceService } from 'src/app/services/transferencia-service.service';
import { CursosService } from 'src/app/services/cursos.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EstudianteService } from 'src/app/services/estudiante.service';
import { LoginService } from 'src/app/services/login.service';
import { throwToolbarMixedModesError } from '@angular/material/toolbar';


@Component({
  selector: 'app-calificacion',
  templateUrl: './calificacion.component.html',
  styleUrls: ['./calificacion.component.scss']
})
export class CalificacionComponent implements OnInit {

estudiante: any = {nombre_completo:"",apellidos:"",acudiente:""};
doc:any;
cursos: any[];
objetivos:any;
idCurso:any;
notaPerObjetivo:any[] = [];
user:any;
calificacionGroup: FormGroup;
mensaje = "";

  constructor( private servicioTransferencia: TransferenciaServiceService, private cursosServices: CursosService, private formBuilder: FormBuilder,private estudianteService:EstudianteService,private loginService: LoginService) { }
  
 
  ngOnInit() {
    this.calificacionGroup = this.formBuilder.group({
      fecha: ['', Validators.required],
      observacion: ['', [Validators.required]],
      // objetivosArray: this.formBuilder.array([])
    });
    this.user = this.loginService.getUserInfo();
    this.idCurso = this.servicioTransferencia.getCourse();
    this.doc = this.servicioTransferencia.getDoc();
    console.log(this.doc);
    this.estudianteService.getEstudianteByDoc({doc:this.doc}).subscribe((data) => 
    {
        this.estudiante = data;
        console.log(this.estudiante);
    });
    this.cursosServices.getObjetivosByCurso(this.idCurso).subscribe((data) => 
    {
      this.objetivos = data;
    })
  }
  onChange(event,id)
  {
    this.notaPerObjetivo = this.notaPerObjetivo.filter((data) => 
    { 
      return data.objetivo != id;
    });
    this.notaPerObjetivo.push({objetivo:id,nota:event});
    console.log(this.notaPerObjetivo);
  }
  setCalificacion()
  {
    let calificacion; 
    calificacion = { ...this.calificacionGroup.getRawValue(), idProfesor:this.user.email, idEstudiante:this.doc, idCurso:this.idCurso,notas:this.notaPerObjetivo }
    this.estudianteService.setCalificacionByStudent(calificacion).subscribe((data:any) => 
    {
      if(data.status==200)
      {
          this.mensaje =  "Se ha guardado la calficacion"
          this.calificacionGroup.reset();
      }else
      {
        this.mensaje = "Ha ocurrido un error"
      }
    });

  }
}
 