import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { EstudianteService } from 'src/app/services/estudiante.service';
import { TransferenciaServiceService } from 'src/app/services/transferencia-service.service';
import * as XLSX from 'xlsx';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listas',
  templateUrl: './listas.component.html',
  styleUrls: ['./listas.component.scss']
})


export class ListasComponent implements OnInit {

  estudiantes;
  displayedColumns: string[] = ["nombre_completo","Personas_has_Cursos_Personas_numero_doc","asistio","fecha"];
  dataSource = new MatTableDataSource();
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild('pdfTable') pdfTable: ElementRef;


  constructor(private estudiante:EstudianteService, private transferService:TransferenciaServiceService,private router: Router) { }

  ngOnInit() {
    this.estudiante.getAsistenciaByEstudent({idCurso:this.transferService.getCourse()}).subscribe((data) => 
    {
      if(data.status=="200")
      {
        this.estudiantes = data.data;
        this.dataSource.data = this.estudiantes;
        this.dataSource.sort = this.sort;
      }
      
    })
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
 exportPdf() {
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(this.pdfTable.nativeElement);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'asistencia');
    XLSX.writeFile(wb, 'asistencia.xlsx');
  }

  atras()
  {
    this.router.navigate(['/listas-de-clase']);
  }

}
