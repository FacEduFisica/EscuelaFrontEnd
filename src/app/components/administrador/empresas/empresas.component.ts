import { Component, OnInit } from '@angular/core';
import { AdmiService } from '../../../services/admi.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-empresas',
  templateUrl: './empresas.component.html',
  styleUrls: ['./empresas.component.scss']
})
export class EmpresasComponent implements OnInit {
  nueva = false;
  update = false;
  mensaje = '';
  empresas: any;
  empresa: any;
  empresaForm: FormGroup;

  constructor(private adminService: AdmiService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.empresaForm = this.formBuilder.group({
      nombre: ['', Validators.required]
    });
    this.getEmpresas();
    this.mensaje = '';
  }

  nuevaEmpresa() {
    this.nueva = true;
  }

  eliminar(id) {
    this.adminService.deleteEmpresas(id).subscribe(
      data => {
        if (data) {
          this.getEmpresas();
        }
      }
    );
  }

  editar(id) {
    this.empresa = this.empresas.find(
      element => element.id === id
    );

    this.empresaForm.patchValue({
      nombre: this.empresa.nombre,
    });
    this.nueva = true;
    this.update = true;
  }

  getEmpresas() {
    this.adminService.getEmpresas().subscribe((data) => {
      if (data) {
        this.empresas = data;
      }
    });
  }

  cancelar() {
    this.nueva = false;
    this.update = false;
    this.empresaForm.reset();
    this.mensaje = '';
  }

  setEmpresas() {
    this.adminService.setEmpresas(this.empresaForm.value).subscribe(
      (data) => {
        if (data.status == 200) {
          this.empresaForm.reset();
          this.getEmpresas();
          this.mensaje = data.data;
        }
      }
    );
  }

  sendUpdateEmpresa(id) {
    this.adminService.setupdateEmpresas(id,this.empresaForm.value).subscribe(
      data =>{
        if (data.status == 200) {
          this.mensaje = data.data;
          this.empresaForm.reset();
          this.getEmpresas();
        } else {
          this.mensaje = 'Error';
        }
      }
    )
  }
}
