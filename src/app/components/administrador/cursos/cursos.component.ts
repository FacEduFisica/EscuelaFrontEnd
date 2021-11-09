import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ProfesorService } from 'src/app/services/profesor.service';
import { EstudianteService } from 'src/app/services/estudiante.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CursosService } from 'src/app/services/cursos.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import * as XLSX from 'xlsx';
import { SelectionModel } from '@angular/cdk/collections';
@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent implements OnInit {
  nuevoC = false;
  profesores;
  listPrograms;
  cursos;
  newCourseForm: FormGroup;
  mensaje: any;
  update = false;
  selectedState: string;
  selectedProgram: string;
  selectedTeacher: string;

  displayedColumns: string[] = ["select", "nombre", "descripcion", "estado curso", "programa", "profesor", "edad minima", "edad maxima", "cupos disponibles", "hora inicial", "hora final"];
  dataSource = new MatTableDataSource();
  selection = new SelectionModel(true, []);

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild('pdfTable') pdfTable: ElementRef;
  constructor(private formBuilder: FormBuilder, private profesorService: ProfesorService, private cursosService: CursosService) { }

  ngOnInit() {
    this.newCourseForm = this.formBuilder.group({
      id_programa: ['', Validators.required],
      id_profesor: ['', Validators.required],
      nombre: ['', Validators.required],
      descripcion: ['', Validators.required],
      edad_min: ['', Validators.required],
      edad_max: ['', Validators.required],
      cupos: ['', Validators.required],
      hora_inicial: ['', Validators.required],
      hora_final: ['', Validators.required],
      estado: ['', Validators.required],
    });

    this.cursosService.getCursos().subscribe((data) => {
      if (data.status == 200) {
        this.cursos = data.data;
        this.dataSource.data = this.cursos;
        this.dataSource.sort = this.sort;
      }
    })

    this.newCourseForm.get('estado').disable({ onlySelf: true })

    this.cursosService.getProfesores().subscribe((response) => {
      this.profesores = response.data;
    }
    );
    this.cursosService.getProgramas().subscribe((data) => {
      this.listPrograms = data.data;
    });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  checkboxLabel(row?: any): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  selectOnlyOne(row) {
    this.selection.clear();
    this.selection.toggle(row);
  }

  nuevoCurso() {
    this.nuevoC = true;
    this.selectedState = 'Abierto';
  }
  cancelar() {
    this.nuevoC = false;
    this.update = false;
    this.newCourseForm.reset();
  }

  guardarCurso() {
    if (this.newCourseForm.valid) {
      this.cursosService.setCursos(this.newCourseForm.value).subscribe(
        res => {
          this.mensaje = res.data
          this.newCourseForm.reset();
          if (res.status == "200") {
            this.cursosService.getCursos().subscribe((data) => {
              if (data.status == 200) {
                this.cursos = data.data;
                this.dataSource.data = this.cursos;
                this.dataSource.sort = this.sort;
              }
            })
          } else {
            this.mensaje = 'Datos no válidos: '
            if (typeof (res) == typeof {}) {
              for (let error in res.data) {
                this.mensaje += error + ' | ';
              }
            } else {
              this.mensaje = res;
            }
          }
        }
      )
    } else {
      this.mensaje = "Debes completar todos los campos";
    }
  }

  exportPdf() {
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(this.pdfTable.nativeElement);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'cursos');
    XLSX.writeFile(wb, 'Cursos.xlsx');
  }

  sendUpdateCurso() {
    const selected = this.selection.selected[0];
    if (this.newCourseForm.valid) {
      this.cursosService.updateCurso(selected.id, this.newCourseForm.value).subscribe(
        res => {
          this.mensaje = res.data
          this.newCourseForm.reset();
          this.cursosService.getCursos().subscribe((data) => {
            if (data.status == 200) {
              this.cursos = data.data;
              this.dataSource.data = this.cursos;
              this.dataSource.sort = this.sort;
            }
          })
        }
      )
    } else {
      this.mensaje = "Debes completar todos los campos";
    }
  }

  updateCurso() {
    const selected = this.selection.selected[0];
    this.selectedState = selected.estado_curso
    this.selectedProgram = selected.id_programa
    this.selectedTeacher = selected.id_profesor

    this.newCourseForm.patchValue({
      id_programa: selected.programa,
      id_profesor: selected.nombre_profesor,
      nombre: selected.nombre_curso,
      descripcion: selected.descripcion_curso,
      edad_min: selected.edad_min,
      edad_max: selected.edad_max,
      cupos: selected.cupos,
      hora_inicial: selected.hora_inicial,
      hora_final: selected.hora_final,
      estado: selected.estado_curso
    })

    this.nuevoC = true
    this.update = true
    this.newCourseForm.get('estado').enable({ onlySelf: true })
  }

  cerrarCurso() {
    const selected = this.selection.selected[0];
    this.cursosService.cerrarCurso(selected.id, { estado: 'Cerrado' }).subscribe(
      res => {
        this.cursosService.getCursos().subscribe((data) => {
          if (data.status == 200) {
            this.cursos = data.data;
            this.dataSource.data = this.cursos;
            this.dataSource.sort = this.sort;
          }
        })
      }
    )
  }

  delete() {
    const selected = this.selection.selected[0];
    this.cursosService.deleteCurso(selected.id).subscribe(
      data => {
        if (data.status == 200) {
          this.mensaje = data.data;
          this.cursosService.getCursos().subscribe((data) => {
            if (data.status == 200) {
              this.cursos = data.data;
              this.dataSource.data = this.cursos;
              this.dataSource.sort = this.sort;
            }
          })
        } else {
          this.mensaje = "Error"
        }
      })
  }
}
