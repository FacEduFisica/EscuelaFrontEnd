import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CursosService } from 'src/app/services/cursos.service';
import { LoginService } from 'src/app/services/login.service';
import { TransferenciaServiceService } from 'src/app/services/transferencia-service.service';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.scss']
})
export class AlumnosComponent implements OnInit {
    
  mostrarEstudiante= false;
  estudiantes;
  user;
  constructor(private router: Router, private cursos:CursosService,private loginService:LoginService,private transaferenciaService:TransferenciaServiceService) { }

  ngOnInit() {
    this.user = this.loginService.getUserInfo();
    this.cursos.getCursosByUser(this.user).subscribe((data) => 
    {
      if(data)
      {
        this.estudiantes = data;
      }
    })
  }
  
  mostrarEstudiantesCurso(){
    this.mostrarEstudiante= true;

  }

  verAlumno(doc,curso)
  {
    // console.log(doc);
  this.transaferenciaService.setDoc(doc);
  this.transaferenciaService.setCourse(curso);
  this.router.navigate(['hoja-vida-estudiante']);
  }
  nuevoNino()
  {
    this.router.navigateByUrl('nuevo-estudiante-nino');
  }
  nuevoAdulto()
  {
    this.router.navigateByUrl('nueva-inscripcion-adulto');
  }
}
