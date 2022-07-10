import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class CursosService {
  //url = "http://escuela.poli";
  //url = "http://escuelanosotros.poli/api";
  url = "http://localhost:8000/api";
  constructor(private http: HttpClient) {}

  getProgramas(): Observable<any> {
    return this.http.get(`${this.url}/cursos/programas`);
  }

  getProfesores(): Observable<any> {
    return this.http.get(`${this.url}/cursos/profesores`);
  }

  getCursos(): Observable<any> {
    return this.http.get(`${this.url}/cursos`);
  }

  setCursos(curso): Observable<any> {
    return this.http.post(`${this.url}/curso`, curso);
  }

  cerrarCurso(id, estado): Observable<any> {
    return this.http.put(`${this.url}/curso/${id}`, estado);
  }

  updateCurso(id, curso): Observable<any> {
    return this.http.put(`${this.url}/cursos/${id}`, curso);
  }

  deleteCurso(id): Observable<any> {
    return this.http.delete(`${this.url}/curso/${id}`);
  }

  getCursosDisponibles(): Observable<any> {
    return this.http.get(`${this.url}/cursos/disponibles`);
  }

  getCursosByUser(user) {
    return this.http.post(`${this.url}/cursouser`, user);
  }
  getCursosByProfessor(user) {
    return this.http.post(`${this.url}/cursoprofesor`, user);
  }

  saveObjetivos(objetivos): Observable<any> {
    return this.http.post(`${this.url}/cursos/saveobjetivos`, objetivos);
  }
  getObjetivosByCurso(idCurso): Observable<any> {
    return this.http.get(`${this.url}/cursos/getobjetivos/${idCurso}`);
  }

  savePlanTrabajo(planTrabajo): Observable<any> {
    return this.http.post(`${this.url}/cursos/setplantrabajo`, planTrabajo);
  }

  getPlanTrabajo(user): Observable<any> {
    return this.http.post(`${this.url}/cursos/getplantrabajo`, user);
  }
}
