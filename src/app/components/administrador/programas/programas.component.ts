import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { EstudianteService } from 'src/app/services/estudiante.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { MatSort } from '@angular/material/sort';
import * as XLSX from 'xlsx';
import { Router } from '@angular/router';

@Component({
  selector: 'app-programas',
  templateUrl: './programas.component.html',
  styleUrls: ['./programas.component.scss']
})
export class ProgramasComponent implements OnInit {

  displayedColumns: string[] = ['select', 'nombre', 'descripcion', 'valor', 'estado'];
  dataSource = new MatTableDataSource();
  selection = new SelectionModel(true, []);

  programContactForm: FormGroup;

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild('pdfTable') pdfTable: ElementRef;

  nuevo = false;
  update = false;
  programas: any;
  mensajeRegister: any;
  selectedState: string;

  constructor(private formBuilder: FormBuilder, private estudianteService: EstudianteService, private router: Router) { }

  ngOnInit() {
    this.programContactForm = this.formBuilder.group({
      nombre: ['', Validators.required],
      descripcion: ['', Validators.required],
      valor: ['', Validators.required],
      estado: ['', Validators.required],
    })

    this.estudianteService.getProgramas().subscribe(
      data => {
        if (data) {
          this.programas = data;
          this.dataSource.data = this.programas;
          this.dataSource.sort = this.sort;
        }
      }
    )
    this.programContactForm.get('estado').disable({ onlySelf: true })
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  newPrograma() {
    this.nuevo = true;
    this.selectedState = 'Activo';
  }

  cancel() {
    this.programContactForm.reset();
    this.programContactForm.get('estado').disable({ onlySelf: true })
    this.mensajeRegister = ""
    this.nuevo = false
    this.update = false
  }

  exportExcel() {
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(this.pdfTable.nativeElement);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'programas');
    XLSX.writeFile(wb, 'Programas.xlsx');
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }

  selectOnlyOne(row) {
    this.selection.clear();
    this.selection.toggle(row);
  }

  checkboxLabel(row?: any): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }

  saveProgram() {
    if (this.programContactForm.valid) {
      this.estudianteService.setProgramas(this.programContactForm.getRawValue()).subscribe(
        res => {
          if (res.status == 200 || res.status == 500) {
            this.mensajeRegister = res.data
            this.programContactForm.reset();
            this.estudianteService.getProgramas().subscribe(
              res => {
                if (res) {
                  this.programas = res
                  this.dataSource.data = this.programas
                  this.dataSource.sort = this.sort
                }
              }
            )

          } else {
            this.mensajeRegister = "Error"
          }
        }
      )

    } else {
      this.mensajeRegister = "Debe llenar todos los campos"
    }
  }

  updateProgram() {
    const selected = this.selection.selected[0];
    this.selectedState = selected.estado
    this.programContactForm.patchValue({
      nombre: selected.nombre,
      descripcion: selected.descripcion,
      valor: selected.valor,
      estado: selected.estado
    });

    this.nuevo = true
    this.update = true

    this.programContactForm.get('estado').enable({ onlySelf: true })

  }

  sendUpdateProgram() {
    const selected = this.selection.selected[0];
    if (this.programContactForm.valid) {
      this.estudianteService.updateProgram(this.programContactForm.getRawValue(), selected.id).subscribe(
        data => {
          if (data.status == 200) {
            this.mensajeRegister = "Se actualizó correctamente"
            this.programContactForm.reset();
            this.estudianteService.getProgramas().subscribe(
              res => {
                if (res) {
                  this.programas = res
                  this.dataSource.data = this.programas
                  this.dataSource.sort = this.sort
                }
              }
            )
          } else {
            this.mensajeRegister = "Error";
          }
        }
      );
    } else {
      this.mensajeRegister = "Debe llenar todos los campos"
    }
  }

  delete() {
    const selected = this.selection.selected[0];
    this.estudianteService.deleteProgram(selected.id).subscribe(
      data => {
        if (data.status == 200) {
          this.mensajeRegister = "Se ha eliminado correctamente";
          this.estudianteService.getProgramas().subscribe(
            res => {
              if (res) {
                      this.programas = res
                      this.dataSource.data = this.programas
                      this.dataSource.sort = this.sort
                    }
                  }
          )
        } else {
          this.mensajeRegister = "Error"
        }
      }
    )
  }

  verDetalle() {
    const selected = this.selection.selected[0]
    if (selected !== undefined) {
      this.router.navigate([`detalleprograma/${selected.id}`]);
    }
  }
}