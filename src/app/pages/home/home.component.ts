import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { AdmiService } from 'src/app/services/admi.service';
import { EstudianteService } from 'src/app/services/estudiante.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  widgetTitle: string = 'Escuela de Iniciacion Deportiva Politecnico Colombiano Jaime Isaza Cadavid';
  widgetSubTitle: string = 'Bienvenido';
  noticias;
  listPrograms;

  constructor(private loginService:LoginService, private adminService:AdmiService, private estudiantesService:EstudianteService, private route:Router) { }

  ngOnInit() {
    this.adminService.getNoticias().subscribe((data) => 
    {
      if(data)
      {
        this.noticias = data;
      }
    });
    this.estudiantesService.getProgramas().subscribe((data) => 
    {
      if(data)
      {
        this.listPrograms = data;
      }
    });
  }
  verDetalle(id)
  {
    this.route.navigate([`detalleprograma/${id}`]);
  }

}
