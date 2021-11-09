import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import * as XLSX from 'xlsx';
import { SelectionModel } from '@angular/cdk/collections';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent implements OnInit {

  displayedColumns: string[] = ['select', "nombre_completo", "apellidos", "correo", "estado", "rol"];
  dataSource = new MatTableDataSource();
  selection = new SelectionModel(true, []);

  newContactForm: FormGroup;

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild('pdfTable') pdfTable: ElementRef;
  nuevoU = false;
  update = false;
  usuarios: any;
  mensajeRegister: any;

  constructor(private formBuilder: FormBuilder, private loginService: LoginService) { }

  ngOnInit() {
    this.mensajeRegister = ""
    
    this.newContactForm = this.formBuilder.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      email: ['', Validators.required],
      //password: ['', Validators.required],
      //password_confirmation: ['', Validators.required],
      rol: ['', Validators.required]
    });

    this.loginService.getusers().subscribe((data) => {
      if (data) {
        this.usuarios = data;
        this.dataSource.data = this.usuarios;
        this.dataSource.sort = this.sort;
      }
    })
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  nuevoUsuario() {
    this.nuevoU = true;
  }
  cancelar() {
    this.newContactForm.reset();
    this.nuevoU = false;
    this.update = false;
  }

  exportPdf() {
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(this.pdfTable.nativeElement);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'usuarios');
    XLSX.writeFile(wb, 'Usuarios.xlsx');
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

  selectOnlyOne(row) {
    this.selection.clear();
    this.selection.toggle(row);
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: any): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }

  saveUser() {
    if (this.newContactForm.valid) {
      this.loginService.adminRegister(this.newContactForm.getRawValue()).subscribe((data) => {
        if (data.status == 200) {
          this.newContactForm.reset();
          this.mensajeRegister = data.data
        } else if (data.status == 500) {
          this.mensajeRegister = data.data;
        } else {
          this.mensajeRegister = "Error";
        }
      })
    } else {
      this.mensajeRegister = "Debe llenar todos los campos"
    }
  }

  updateuser() {
    const selected = this.selection.selected[0];
    this.newContactForm.patchValue({
      nombre: selected.nombre,
      apellido: selected.apellido,
      email: selected.email,
      rol: selected.user_type,
    });

    this.nuevoU = true;
    this.update = true;

    this.newContactForm.get('email').disable({ onlySelf: true });
  }
  sendUpdateUser() {
    if (this.newContactForm.valid) {
      this.loginService.update(this.newContactForm.getRawValue()).subscribe((data) => {
        if (data.status == 200) {
          this.mensajeRegister = "Se actualizó correctamente";
          this.newContactForm.reset();
          this.loginService.getusers().subscribe((data) => {
            if (data) {
              this.usuarios = data;
              this.dataSource.data = this.usuarios;
              this.dataSource.sort = this.sort;
            }
          })
        } else {
          this.mensajeRegister = "Error";
        }
      })
    } else {
      this.mensajeRegister = "Debe llenar todos los campos"
    }
  }
  delete() {
    const selected = this.selection.selected[0];
    this.loginService.delete(selected.id).subscribe((data) => {
      if (data.status == 200) {
        this.mensajeRegister = "Se ha eliminado correctamente";
        this.loginService.getusers().subscribe((data) => {
          if (data) {
            this.usuarios = data;
            this.dataSource.data = this.usuarios;
            this.dataSource.sort = this.sort;
          }
        })
      } else {
        this.mensajeRegister = "Error";
      }
    })
  }

}
