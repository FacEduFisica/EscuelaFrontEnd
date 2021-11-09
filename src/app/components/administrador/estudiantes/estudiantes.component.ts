import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { EstudianteService } from 'src/app/services/estudiante.service';
import { TransferenciaServiceService } from 'src/app/services/transferencia-service.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-estudiantes',
  templateUrl: './estudiantes.component.html',
  styleUrls: ['./estudiantes.component.scss']
})
export class EstudiantesComponent implements OnInit {
  
  displayedColumns: string[] = ["nombre_completo","apellidos","genero","telefono","correo","detalle"];
  dataSource = new MatTableDataSource();
  estudiantes: any;

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild('pdfTable') pdfTable: ElementRef;
  constructor(private router: Router, private estudianteService: EstudianteService, private transaferenciaService: TransferenciaServiceService) { }

  ngOnInit() {
    this.estudianteService.getEstudiantes().subscribe((data) => {
      this.estudiantes = data;
      this.dataSource.data =  this.estudiantes;
      this.dataSource.sort = this.sort;
    });
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  nuevoNino() {
    this.router.navigateByUrl('nuevo-estudiante-nino');
  }
  nuevoAdulto() {
    this.router.navigateByUrl('nueva-inscripcion-adulto');
  }

  verAlumno(doc) {
    this.transaferenciaService.setDoc(doc);
    this.router.navigate(['hoja-vida-estudiante']);
  }

  exportPdf() {
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(this.pdfTable.nativeElement);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'estudiantes');
    XLSX.writeFile(wb, 'Estudiantes.xlsx');
  }
}
/*
this.personalForm.setValue({
    firstName: ’Rajendra’,
    lastName: ’Taradale’,
    address: ’Dhanori Pune’,
    other: {
        education: ’B C A’,
        age: 30,
        gendar: ’male’
    }
});  */