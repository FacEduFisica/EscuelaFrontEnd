import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class EstudianteService {
  //url = "http://escuela.poli";
  //url = "http://escuelanosotros.poli/api";
  url = "http://localhost:8000/api";
  constructor(private http: HttpClient) {}

  getProgramas(): Observable<any> {
    return this.http.get(`${this.url}/programas`);
  }

  setProgramas(programa: any): Observable<any> {
    return this.http.post(`${this.url}/programa`, programa);
  }

  updateProgram(program, id): Observable<any> {
    return this.http.put(`${this.url}/programa/${id}`, program);
  }

  deleteProgram(id): Observable<any> {
    return this.http.delete(`${this.url}/programa/${id}`);
  }

  getDetalleByPrograma(id) {
    return this.http.get(`${this.url}/programas/getdetalle/${id}`);
  }

  getProgramById(id) {
    return this.http.get(`${this.url}/programas/getprograma/${id}`);
  }

  getAcudientes(): Observable<any> {
    return this.http.get(`${this.url}/acudientes`);
  }

  getEmpresas(): Observable<any> {
    return this.http.get(`${this.url}/empresas`);
  }

  getEstudiantes(): Observable<any> {
    return this.http.get(`${this.url}/estudiantes`);
  }

  setEstudiante(estudiante): Observable<any> {
    console.log(estudiante);
    return this.http.post(`${this.url}/estudiante/kid`, estudiante);
  }

  getEstudianteByDoc(doc): Observable<any> {
    return this.http.post(`${this.url}/estudiantes/estudentbyid`, doc);
  }
  storeGuardianAsStudent(estdiante): Observable<any> {
    return this.http.post(`${this.url}/estudiantes/storeguardian`, estdiante);
  }
  getEstudentByCurso(curso): Observable<any> {
    return this.http.get(`${this.url}/estudiantes/estudentbycurso/${curso}`);
  }
  setAsistenciaByEstudent(asistencia): Observable<any> {
    return this.http.post(
      `${this.url}/estudiantes/asistenciabystudent`,
      asistencia
    );
  }

  getAsistenciaByEstudent(student): Observable<any> {
    return this.http.post(
      `${this.url}/estudiantes/getasistenciabystudent`,
      student
    );
  }

  getObjetivosByPrograma(id) {
    return this.http.get(`${this.url}/programas/getdetalleprograma/${id}`);
  }

  setCalificacionByStudent(calificacion) {
    return this.http.post(
      `${this.url}/estudiantes/setcalificacionbystudent`,
      calificacion
    );
  }
  getcalificacionbystudent(estudiante) {
    return this.http.post(
      `${this.url}/estudiantes/getcalificacionbystudent`,
      estudiante
    );
  }
}
