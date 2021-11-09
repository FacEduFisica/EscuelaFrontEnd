import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { isEmpty } from 'rxjs/operators';
import { EstudianteService } from 'src/app/services/estudiante.service';

@Component({
  selector: 'app-programas-detalle',
  templateUrl: './programas-detalle.component.html',
  styleUrls: ['./programas-detalle.component.scss']
})
export class ProgramasDetalleComponent implements OnInit {
  detallePrograma:any;
  many;
  mensaje: any;
  nombre: any;

  constructor(private activatedRoute:ActivatedRoute,private estudianteService:EstudianteService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((parametros) => 
    {
      if(parametros.id)
      {
        this.estudianteService.getProgramById(parametros.id).subscribe((data:any) =>
        {
          this.nombre = data.data.nombre
        }
        )
        this.estudianteService.getDetalleByPrograma(parametros.id).subscribe((data:any) =>
        {
          this.detallePrograma = data.data
          if(this.detallePrograma.length == 0){
            this.many = false;
            this.mensaje = 'No hay cursos disponibles aún, pronto estaremos abriendo inscripciones para que puedas unirte'
          }else {
            this.many = true;
            this.mensaje = ''
          }
        });
      }
    })
  }

}
