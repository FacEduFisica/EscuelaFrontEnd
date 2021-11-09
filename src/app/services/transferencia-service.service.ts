import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransferenciaServiceService {
  estudiante: any;
  documento: any = '';
  curso: any = '';

  private enviarObjectSubject = new Subject<any[]>();
  enviarObjectObservable = this.enviarObjectSubject.asObservable();

  private doc = new Subject<any>();
  docObservable = this.doc.asObservable();

  constructor() { }

  enviarObjecto(objeto: any) {
    this.estudiante = objeto;
  }

  setDoc(document: any) {
    this.documento = document;
  }
  getDoc() {
    return this.documento;
  }
  setCourse(curso:any)
  {
    this.curso = curso;
  }
  getCourse()
  {
    return this.curso;
  }

  setEstudiante(estudiante:any)
  {
    this.estudiante = estudiante;
  }
  getEstudiante()
  {
    return this.estudiante;
  }
}
