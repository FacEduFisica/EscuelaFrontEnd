import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { EstudianteService } from 'src/app/services/estudiante.service';
import { Router } from '@angular/router';
import { TransferenciaServiceService } from 'src/app/services/transferencia-service.service';
import { LoginService } from 'src/app/services/login.service';
import { CursosService } from 'src/app/services/cursos.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { SelectionModel } from '@angular/cdk/collections';
import * as jsPDF from 'jspdf';
import * as XLSX from 'xlsx';


@Component({
  selector: 'app-listasclases',
  templateUrl: './listasclases.component.html',
  styleUrls: ['./listasclases.component.scss']
})
export class ListasclasesComponent implements OnInit {

  displayedColumns: string[] = ['select', 'numero_doc', 'nombre_completo', 'calificar'];
  dataSource = new MatTableDataSource();
  selection = new SelectionModel(true, []);
  idCuso;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild('pdfTable') pdfTable: ElementRef;

  nuevaLista = false;
  listEstudiante: any[];
  estudianteCalificar: any[];
  user;
  cursos;
  mensaje;
  constructor(private estudianteService: EstudianteService, private router: Router, private servicioTransferencia: TransferenciaServiceService, private loginService: LoginService, private cursoService: CursosService) {
  }

  ngOnInit() {

    this.user = this.loginService.getUserInfo();
    this.cursoService.getCursosByProfessor(this.user).subscribe((data: any) => {
      if (data.status == 200) {
        this.cursos = data.data;
      }
    });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  calificar(id) {
    this.idCuso = id;
    this.estudianteService.getEstudentByCurso(this.idCuso).subscribe((data) => {
      this.listEstudiante = data;
      this.dataSource.data = this.listEstudiante;
      this.dataSource.sort = this.sort;
    })
    this.nuevaLista = true;
  }

  atras() {
    this.nuevaLista = false;
  }

  irCalificar(estudiante) {
    console.log(estudiante);
    this.servicioTransferencia.setDoc(estudiante.numero_doc);
    this.servicioTransferencia.setCourse(this.idCuso);
    this.router.navigate(['/seguimiento']);
  }

  listaClase()
  {
    this.servicioTransferencia.setCourse(this.idCuso);
    this.router.navigate(['/lista']);
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }
  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: any): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }

  exportPdf() {
    // const doc = new jsPDF();

    // const specialElementHandlers = {
    //   '#editor': function (element, renderer) {
    //     return true;
    //   }
    // };

    // const pdfTable = this.pdfTable.nativeElement;

    // doc.fromHTML(pdfTable.innerHTML, 15, 15, {
    //   width: 190,
    //   'elementHandlers': specialElementHandlers
    // },() => 
    // {
    //   doc.save('tableToPdf.pdf');
    // });

    // ExportTOExcel()
    {
      const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(this.pdfTable.nativeElement);
      const wb: XLSX.WorkBook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wb, ws, 'Clase');

      XLSX.writeFile(wb, 'listaDeClase.xlsx');

    }
  }
  sendAsistencia() {
    let documentos = this.selection.selected.map(data => data.numero_doc ) 
    const asistenciaEstudiantes = this.listEstudiante.map((data) => 
    {
      if(documentos.indexOf(data.numero_doc) != -1)
      {
          return {numero_doc:data.numero_doc,asistio:1}
      }else
      {
        return {numero_doc:data.numero_doc,asistio:0}
      }
    });

    const asistencia = { "idCurso": this.idCuso, estudiantes: asistenciaEstudiantes }
    console.log(asistencia);
    this.estudianteService.setAsistenciaByEstudent(asistencia).subscribe((data) => {
      if (data.status == 200) {
        this.mensaje = data.response;
        this.selection.clear();
      }
    })

  }
}
