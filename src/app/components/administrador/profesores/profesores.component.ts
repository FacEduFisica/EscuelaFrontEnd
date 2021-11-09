import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { ProfesorService } from 'src/app/services/profesor.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { MatSort } from '@angular/material/sort';
import * as XLSX from 'xlsx';
import { EstudianteService } from '../../../services/estudiante.service';

@Component({
  selector: 'app-profesores',
  templateUrl: './profesores.component.html',
  styleUrls: ['./profesores.component.scss']
})
export class ProfesoresComponent implements OnInit {
  informacionPersonalForm: FormGroup;
  informacionPersonal: any;
  informacionDeSeguridadForm: FormGroup;
  informacionDeSeguridad: any;
  listDepartamentos: any;
  listCiudadesDepartamento: any;
  nuevoP = false;
  update = false;
  profesores: any;
  openModal: any;
  profesor: any;
  mensaje;
  empresas: any;

  displayedColumns: string[] = ['select', 'cedula', 'nombre', 'apellido', 'email'];
  dataSource = new MatTableDataSource();
  selection = new SelectionModel(true, []);

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild('pdfTable') pdfTable: ElementRef;
  constructor(private formBuilder: FormBuilder, private profesoresService: ProfesorService, private loginService: LoginService, private estudianteService: EstudianteService) { }

  ngOnInit() {
    this.departamentos()
    this.getEmpresas()
    this.informacionPersonalForm = this.formBuilder.group({
      tipo_documento: ['', Validators.required],
      numero_documento: ['', Validators.required],
      departamento_expedicion: ['', Validators.required],
      municipio_expedicion: ['', Validators.required],
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      fecha_nacimiento: ['', Validators.required],
      lugar_nacimiento: ['', Validators.required],
      genero: ['', Validators.required],
      direccion: ['', Validators.required],
      telefono: ['', Validators.required],
      email: ['', Validators.required]
    });

    this.informacionDeSeguridadForm = this.formBuilder.group({
      eps: ['', Validators.required],
      nombre_contacto_emergencia: ['', Validators.required],
      numero_contacto_emergencia: ['', Validators.required],
      id_empresa: ['', Validators.required],
      tipo_vinculacion: ['', Validators.required]
    });

    this.profesoresService.getProfesores().subscribe((data) => {
      if (data) {
        this.profesores = data;
        this.dataSource.data = this.profesores;
        this.dataSource.sort = this.sort;
      }
    });

  }
  nuevoProfesor() {
    this.nuevoP = true;
  }
  cancelar() {
    this.nuevoP = false;
    this.informacionPersonalForm.reset();
    this.informacionDeSeguridadForm.reset();
  }
  registerInfoP(form) {
    this.informacionPersonal = form.value;
  }
  registerInfoS(form) {
    this.informacionDeSeguridad = form.value;
    if (this.update) {
      this.sendUpdateProfesor();
    } else {
      this.saveProfesor();
    }
  }
  saveProfesor() {
    const infoProfesor = { ...this.informacionPersonal, ...this.informacionDeSeguridad };
    const { email, nombre, apellido } = this.informacionPersonal;
    const profesor = {
      email, nombre, apellido, rol: 'Profesor'
    }

    if (this.informacionPersonalForm.valid && this.informacionDeSeguridadForm.valid) {
      this.profesoresService.setProfesores(infoProfesor).subscribe((data) => {
        if (data.status == "200") {
          this.loginService.adminRegister(profesor).subscribe()
          this.informacionPersonalForm.reset();
          this.informacionDeSeguridadForm.reset();
          this.mensaje = data.data;
          this.informacionPersonal = '';
          this.informacionDeSeguridad = '';
          this.profesoresService.getProfesores().subscribe((res) => {
            if (res) {
              this.profesores = res;
              this.dataSource.data = this.profesores;
              this.dataSource.sort = this.sort;
            }
          }
          )
        } else {
          this.mensaje = 'Datos no válidos: '
          if (typeof (data) == typeof {}) {
            for (let error in data.data) {
              this.mensaje += error + ' | ';
            }
          } else {
            this.mensaje = data.data;
          }
        }
      }
      );
    } else {
      this.mensaje = "Debes completar todos los campos";
    }
  }

  departamentos() {
    this.loginService.departamentos().subscribe(
      res => {
        this.listDepartamentos = res
      },
      err => console.log(err)
    )
  }

  selectDepartamento(event) {
    const departamento = event;
    this.listDepartamentos.forEach(element => {
      if (element.departamento == departamento) {
        this.listCiudadesDepartamento = element.ciudades
      }
    });
  }

  exportExcel() {
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(this.pdfTable.nativeElement);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'profesores');
    XLSX.writeFile(wb, 'Profesores.xlsx');
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

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  updateProfesor() {
    const selected = this.selection.selected[0];
    this.informacionPersonalForm.patchValue({
      tipo_documento: selected.tipo_documento,
      numero_documento: selected.numero_documento,
      departamento_expedicion: selected.departamento_expedicion,
      municipio_expedicion: selected.municipio_expedicion,
      nombre: selected.nombre,
      apellido: selected.apellido,
      fecha_nacimiento: selected.fecha_nacimiento,
      lugar_nacimiento: selected.lugar_nacimiento,
      genero: selected.genero,
      direccion: selected.direccion,
      telefono: selected.telefono,
      email: selected.email,
    });

    this.informacionDeSeguridadForm.patchValue({
      eps: selected.eps,
      nombre_contacto_emergencia: selected.nombre_contacto_emergencia,
      numero_contacto_emergencia: selected.numero_contacto_emergencia,
      id_empresa: selected.id_empresa,
      tipo_vinculacion: selected.tipo_vinculacion
    });

    this.nuevoP = true
    this.update = true

    this.informacionPersonalForm.get('numero_documento').disable({ onlySelf: true })
    this.informacionPersonalForm.get('fecha_nacimiento').disable({ onlySelf: true })
    this.informacionPersonalForm.get('email').disable({ onlySelf: true })
    this.informacionPersonalForm.get('departamento_expedicion').disable({ onlySelf: true })
    this.informacionPersonalForm.get('municipio_expedicion').disable({ onlySelf: true })
  }

  sendUpdateProfesor() {
    const selected = this.selection.selected[0];
    if (this.informacionPersonalForm.valid && this.informacionDeSeguridadForm.valid) {
      const infoProfesor = { ...this.informacionPersonal, ...this.informacionDeSeguridad };
      this.profesoresService.updateProfesor(infoProfesor, selected.id).subscribe(
        data => {
          if (data.status == 200) {
            this.informacionPersonalForm.reset();
            this.informacionDeSeguridadForm.reset();
            this.mensaje = "Se actualizó correctamente"
            this.profesoresService.getProfesores().subscribe(
              res => {
                if (res) {
                  this.profesores = res
                  this.dataSource.data = this.profesores
                  this.dataSource.sort = this.sort
                }
              }
            )
          } else {
            this.mensaje = "Error";
          }
        }
      );
    } else {
      this.mensaje = "Debe llenar todos los campos"
    }
  }

  delete() {
    const selected = this.selection.selected[0];
    this.profesoresService.deleteProfesor(selected.id).subscribe(
      (res) => {
        if (res.status == 200) {
          this.mensaje = res.data
          this.profesoresService.getProfesores().subscribe((data) => {
            if (data) {
              this.profesores = data;
              this.dataSource.data = this.profesores;
              this.dataSource.sort = this.sort;
            }
          }
          )
        } else {
          this.mensaje = "Error";
        }
      }
    )
  }

  verDetalle() {
    const selected = this.selection.selected[0]
    if (selected !== undefined) {
      this.profesor = selected
      this.openModal = true
    }
  }

  volver() {
    this.openModal = false
  }

  getEmpresas() {
    this.estudianteService.getEmpresas().subscribe((response) => {
      this.empresas = response;
    });
  }
}
