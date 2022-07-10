import { Injectable } from "@angular/core";

import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class ProfesorService {
  //url = "http://escuela.poli";
  //url = "http://escuelanosotros.poli/api";
  url = "http://localhost:8000/api";
  constructor(private http: HttpClient) {}
  getProfesores(): Observable<any> {
    return this.http.get(`${this.url}/profesores`);
  }

  setProfesores(profesor): Observable<any> {
    return this.http.post(`${this.url}/profesor`, profesor);
  }

  deleteProfesor(id): Observable<any> {
    return this.http.delete(`${this.url}/profesor/${id}`);
  }

  updateProfesor(profesor, id): Observable<any> {
    return this.http.put(`${this.url}/profesor/${id}`, profesor);
  }
  // setProgramas(programa: any): Observable<any> {
  //   return this.http.post(`${this.url}/programas`, programa);
  // }
}
