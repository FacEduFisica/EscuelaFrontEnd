import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { CursosService } from 'src/app/services/cursos.service';
import { LoginService } from 'src/app/services/login.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-diarioclases',
  templateUrl: './diarioclases.component.html',
  styleUrls: ['./diarioclases.component.scss']
})
export class DiarioclasesComponent implements OnInit {

  user;
  planes_trabajo;

  displayedColumns: string[] = ["clase","id_curso","nombre","fecha"];
  dataSource = new MatTableDataSource();

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild('pdfTable') pdfTable: ElementRef;
  constructor(private route: Router, private cursoService: CursosService, private loginService: LoginService) { }

  ngOnInit() {
    this.user = this.loginService.getUserInfo();
    this.cursoService.getPlanTrabajo(this.user).subscribe((data: any) => {
      if (data.status == 200) {
        this.planes_trabajo = data.data;
        this.dataSource.data = this.planes_trabajo;
        this.dataSource.sort = this.sort;
      }
    });
  }



  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  exportPdf() {
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(this.pdfTable.nativeElement);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'usuarios');
    XLSX.writeFile(wb, 'Usuarios.xlsx');
  }
  irEntrenamiento() {
    this.route.navigate(['/entrenamiento']);
  }

  irObjetivos() {
    this.route.navigate(['/objetivos']);
  }

}
