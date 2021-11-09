import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DropzoneConfigInterface } from 'ngx-dropzone-wrapper';
import { EstudianteService } from 'src/app/services/estudiante.service';
import { LoginService } from 'src/app/services/login.service';
import { CursosService } from 'src/app/services/cursos.service';

@Component({
  selector: 'app-estudiante',
  templateUrl: './estudiante.component.html',
  styleUrls: ['./estudiante.component.scss']
})

export class EstudianteComponent implements OnInit {
  existeAcudiente: boolean;
  existeAcudienteFormGroup: FormGroup;
  respuesta = false;
  acudienteFormGroup: FormGroup;
  datosNinoFormGroup: FormGroup;
  fullAcudienteFormGroup: FormGroup;
  infoAcademicaFormGroup: FormGroup;
  infoAdicionalFormGroup: FormGroup;
  documentosFormGroup: FormGroup;
  programaFormGroup: FormGroup;
  listCourses: any[];
  loggedUser: any;
  listDepartamentos: any;
  listCiudadesDepartamento: any;
  pageTitle = 'Add new contact';
  pageSubTitle = 'Nullam id dolor id nibh ultricies vehicula ut id elit';
  model;
  acudientes: any;
  acudiente: any;
  empresas: any;
  empresa: any;


  contactDefaultImg = './assets/demo/img/contacts/user_empty.png';
  files = [];
  formSubmitted = false;
  datosAcudiente;
  informacionNino;
  informacionAdicional;
  numeroDocumento = '';
  infoAcademica;
  informacionPrograma;
  fileData;
  fileDataTarjeta;
  fileDataEps;
  fileDataCertificadoMedico;
  mensaje;
  foto: any = './assets/demo/img/contacts/user_empty.png';
  copia_tarjeta_identidad: any = './assets/demo/img/documento.png';
  certificado_eps: any = './assets/demo/img/documento.png';
  certificado_medico: any = './assets/demo/img/documento.png';

  edad = 0;
  programasEdadValida: any[] = [];
  constructor(private formBuilder: FormBuilder, private estudianteService: EstudianteService, 
    private loginService: LoginService, private cursosService: CursosService) { }

  ngOnInit() {
    this.departamentos();
    this.getAcudientes();
    this.getEmpresas();
    this.getCursosDisponibles();
    this.loggedUser = this.loginService.getUserInfo();

    this.existeAcudienteFormGroup = this.formBuilder.group({
      existe: ['', Validators.required]
    });

    this.fullAcudienteFormGroup = this.formBuilder.group({
      acudiente: ['', Validators.required],
      parentesco: ['', Validators.required],
      numero_contacto_emergencia: ['', Validators.required],
      id_empresa: ['', Validators.required],
    });

    this.acudienteFormGroup = this.formBuilder.group({
      nombreAcudiente: ['', Validators.required],
      apellidoAcudiente: ['', Validators.required],
      emailAcudiente: ['', [Validators.required]],
      parentesco: ['', Validators.required],
      numero_contacto_emergencia: ['', Validators.required],
      id_empresa: ['', Validators.required],
    });

    this.datosNinoFormGroup = this.formBuilder.group({
      // datos del niño
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
      telefono: ['', Validators.required]
    });

    this.infoAcademicaFormGroup = this.formBuilder.group({
      estudia: ['', Validators.required],
      grado_escolar: ['', Validators.required],
      nombre_establecimiento: ['', Validators.required],
      tipo_establecimiento: ['', Validators.required]
    });

    this.infoAdicionalFormGroup = this.formBuilder.group({
      eps: ['', Validators.required],
      nombre_padre: ['', Validators.required],
      celular_padre: ['', Validators.required],
      nombre_madre: ['', Validators.required],
      celular_madre: ['', Validators.required],
      // empresa: ['', Validators.required],
      // tipo_vinculacion: ['', Validators.required],
    });


    this.documentosFormGroup = this.formBuilder.group({
      copia_tarjeta_identidad: ['', Validators.required],
      certificado_eps: ['', Validators.required],
      certificado_medico: ['', Validators.required],
      foto: ['', Validators.required],
    });

    this.programaFormGroup = this.formBuilder.group({
      programa: ['', Validators.required]
    });

    if (this.loginService.getRol() === 'Acudiente') {
      this.acudienteFormGroup.get('nombreAcudiente').disable({ onlySelf: true });
      this.acudienteFormGroup.get('apellidoAcudiente').disable({ onlySelf: true });
      this.acudienteFormGroup.get('emailAcudiente').disable({ onlySelf: true });
      this.acudienteFormGroup.patchValue({
        nombreAcudiente: this.loggedUser.name,
        apellidoAcudiente: this.loggedUser.lastName,
        emailAcudiente: this.loggedUser.email });
    }
  }

  get f() {
    return this.infoAdicionalFormGroup.controls;
  }

  /*onChangeDate() {
    const fecha = this.datosNinoFormGroup.controls.fechaNacimiento.value;
    let fecha1, fecha2;

    if (fecha) {
      if (fecha.year && fecha.month && fecha.day) {
        fecha1 = new Date();
        fecha2 = new Date(fecha.year, fecha.month, fecha.day)
        this.edad = ((fecha1 - fecha2) / 86400000) / 365;

        this.programasEdadValida = this.listPrograms.filter((data) => {
          console.log(data.edad_min, data.edad_max, this.edad);
          console.log(this.edad >= data.edad_min && this.edad <= data.edad_max);
          return (this.edad >= data.edad_min && this.edad <= data.edad_max)
        });
      }
    }
  }*/

  validarAcudiente() {
    if (this.existeAcudienteFormGroup.valid) {
      if (this.existeAcudienteFormGroup.value === 'si') {
        this.existeAcudiente = true;
      } else {
        this.existeAcudiente = false;
      }
      this.respuesta = true;
      this.mensaje = '';
    } else {
      this.mensaje = 'Por favor seleccione el campo';
    }
  }

  onUploadError(event) {
    console.log(event);
  }
  onUploadSuccess(event) {
    console.log(event);
  }
  addedFile(event) {
    console.log(event);
  }
  removedFile(event) {
    console.log(event);
  }

  setAcudiente(form) {
    console.log(this.existeAcudienteFormGroup.value)
    console.log(this.existeAcudiente)
    console.log(this.acudienteFormGroup.value)
    console.log(this.fullAcudienteFormGroup.value)
    console.log(form.value);
  }

  setAcudientes(form) {
    console.log(form.value);
    this.datosAcudiente = this.acudienteFormGroup.getRawValue();
  }
  setNino(form) {
    console.log(form.value);
    this.informacionNino = form.value;
    this.informacionNino.fechaNacimiento = this.informacionNino.fechaNacimiento;
    this.numeroDocumento = this.informacionNino.numeroDocumento;
  }
  setInfoAcademica(form) {
    console.log(form.value);
    this.infoAcademica = form.value;
  }
  setInfoAdicional(form) {
    console.log(form.value);
    this.informacionAdicional = form.value;
  }
  onFileChange(event) {
    this.fileData = event.target.files[0];
    this.previewAndUpdateField();
  }
  
  previewAndUpdateField() {
    const reader = new FileReader();
    reader.readAsDataURL(this.fileData);
    reader.onload = (event) => {
      this.foto = reader.result;
    }
  }
  onFileChangeTarjeta(event) {
    this.fileDataTarjeta = event.target.files[0];
    this.previewAndUpdateFieldTarjeta();
  }
  previewAndUpdateFieldTarjeta() {
    const reader = new FileReader();
    reader.readAsDataURL(this.fileDataTarjeta);
    reader.onload = (event) => {
      this.copia_tarjeta_identidad = reader.result;
    }
  }
  onFileChangeEps(event) {
    this.fileDataEps = event.target.files[0];
    this.previewAndUpdateFieldEps();
  }
  previewAndUpdateFieldEps() {
    const reader = new FileReader();
    reader.readAsDataURL(this.fileData);
    reader.onload = (event) => {
      this.certificado_eps = reader.result;
    }
  }
  onFileChangeMedico(event) {
    this.fileData = event.target.files[0];
    this.previewAndUpdateFieldMedico();
  }
  previewAndUpdateFieldMedico() {
    const reader = new FileReader();
    reader.readAsDataURL(this.fileDataCertificadoMedico);
    reader.onload = (event) => {
      this.certificado_medico = reader.result;
    }
  }

  register(form) {
    this.informacionPrograma = form.value;
    
    if(this.datosAcudiente) {
      const usuario ={
        email : this.datosAcudiente.emailAcudiente,
        nombre: this.datosAcudiente.nombreAcudiente,
        apellido: this.datosAcudiente.apellidoAcudiente,
        rol: 'Acudiente'
      }
      this.loginService.adminRegister(usuario).subscribe(
        res =>  {
          if(res.status == 500) {
            this.mensaje = 'El acudiente ya existe en nustro sistema, por favor indique que ya existe al principio de este formulario'
          }else if (res.status == 200){
            this.acudiente = usuario
          }
        },
        err => this.mensaje = err.data
      ) 
    }else {
      this.acudiente = this.acudientes.find(
        element => element.id ==this.fullAcudienteFormGroup.value.acudiente
      )
    }

    let inforEstudiante = { ...this.acudienteFormGroup.getRawValue(), ...this.datosNinoFormGroup.getRawValue(), ...this.infoAcademicaFormGroup.getRawValue(), ...this.infoAdicionalFormGroup.getRawValue(), ...this.documentosFormGroup.getRawValue(), ...this.programaFormGroup.getRawValue(), foto: this.foto }
    console.log(inforEstudiante);
    this.estudianteService.setEstudiante(inforEstudiante).subscribe((data) => {
      this.datosNinoFormGroup.reset();
      this.infoAcademicaFormGroup.reset();
      this.infoAdicionalFormGroup.reset();
      this.documentosFormGroup.reset();
      this.programaFormGroup.reset();
      if (data.status == 200) {
        this.mensaje = "Inscipcion realizada con exito";

        this.acudienteFormGroup.reset();
        this.datosNinoFormGroup.reset();
        this.infoAcademicaFormGroup.reset();
        this.infoAdicionalFormGroup.reset();
        this.documentosFormGroup.reset();
        this.programaFormGroup.reset();

        this.acudienteFormGroup.get('nombreAcudiente').disable({ onlySelf: true });
        this.acudienteFormGroup.get('emailAddress').disable({ onlySelf: true });
        this.acudienteFormGroup.patchValue({ nombreAcudiente: this.loggedUser.name, emailAddress: this.loggedUser.email });
      }
      else {
        this.mensaje = data.message;
      }
    });
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
      if(element.departamento === departamento) {
        this.listCiudadesDepartamento = element.ciudades;
      }
    });
  }

  getAcudientes() {
    this.estudianteService.getAcudientes().subscribe((response) => {
      this.acudientes = response;
    });
  }

  getEmpresas() {
    this.estudianteService.getEmpresas().subscribe((response) => {
      this.empresas = response;
    });
  }

  isAdmin() {
    if (this.loginService.isGuardian()){
      return true;
    } else {
      this.respuesta = true;
      return false;
    }
  }

  getCursosDisponibles(){
    this.cursosService.getCursosDisponibles().subscribe((data) => {
      if (data.status == 200) {
        this.listCourses = data.data;
        this.programasEdadValida = data.data;
      }
    });
  }
}
