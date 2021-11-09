import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { TransferenciaServiceService } from 'src/app/services/transferencia-service.service';
import { EstudianteService } from 'src/app/services/estudiante.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { tap } from "rxjs/operators";
import * as jsPDF from 'jspdf';


@Component({
  selector: 'app-acudiente',
  templateUrl: './acudiente.component.html',
  styleUrls: ['./acudiente.component.scss']
})
export class AcudienteComponent implements OnInit {

  doc;
  idCurso: any;
  estudiante: any = "";
  loading: boolean = false;
  newContactForm: FormGroup;
  evaluaciones: any[];
  foto: any = './assets/demo/img/contacts/user_empty.png';
  @ViewChild('pdfTable') pdfTable: ElementRef;
  constructor(private formBuilder: FormBuilder, private transferenciaService: TransferenciaServiceService, private estudianteService: EstudianteService) { }
  ngOnInit() {

    this.newContactForm = this.formBuilder.group({
      tipoDocumento: ['', Validators.required],
      numeroDocumento: ['', Validators.required],
      lugarExpedicionDocumento: ['', Validators.required],
      nombreCompleto: ['', Validators.required],
      apellidos: ['', Validators.required],
      fechaNacimiento: ['', Validators.required],
      lugarNacimiento: ['', Validators.required],
      edad: ['', Validators.required],
      genero: ['', Validators.required],
      direccionResidencia: ['', Validators.required],
      telefono: ['', Validators.required],
      correo: ['', Validators.required],
      estudia: ['', Validators.required],
      gradoEscolar: ['', Validators.required],
      eps: ['', Validators.required],
      nombreAcudiente: ['', Validators.required],
      parentesco: ['', Validators.required],
      emailAddress: ['', Validators.required],
      celular: ['', Validators.required]
    });
    this.newContactForm.disable();
    this.doc = this.transferenciaService.getDoc();
    this.idCurso = this.transferenciaService.getCourse();
    this.estudianteService.getEstudianteByDoc({ doc: this.doc }).subscribe((data) => {
      if (data) {
        this.estudiante = data;
        this.foto = this.estudiante.foto;
        this.updateFields();

      }
    });
    this.estudianteService.getcalificacionbystudent({ doc: this.doc, idCurso: this.idCurso }).subscribe((data: any) => {
      if (data.status === '200') {
        this.evaluaciones = data.data;
      }
    });

    // const w= window.open();
    // w.document.write(document.getElementsByTagName("head")[0].innerHTML);
    // w.document.write(document.getElementsByClassName("tableExporter")[0].innerHTML);
    // w.print();
    // w.close();

  }

  updateFields() {
    this.newContactForm.patchValue({
      tipoDocumento: this.estudiante.tipo_doc,
      numeroDocumento: this.estudiante.numero_doc,
      lugarExpedicionDocumento: this.estudiante.lugarExpedicion_doc,
      nombreCompleto: this.estudiante.nombre_completo,
      apellidos: this.estudiante.apellidos,
      fechaNacimiento: this.estudiante.fecha_nacimiento,
      lugarNacimiento: this.estudiante.lugar_nacimiento,
      edad: '19',
      genero: this.estudiante.genero,
      direccionResidencia: this.estudiante.direccion_residencia,
      telefono: this.estudiante.telefono,
      correo: this.estudiante.correo,
      estudia: this.estudiante.estudia,
      gradoEscolar: this.estudiante.grado_escolar,
      eps: this.estudiante.eps,
      nombreAcudiente: this.estudiante.nombre_acudiente,
      parentesco: this.estudiante.parentesco,
      emailAddress: '12',
      celular: '123123',
    });
  }

  exportarPDF()
  {
    window.print();
  }
}
