import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdmiService {

  // url = "http://escuela.poli";
  url = 'http://escuelanosotros.poli/api';
  constructor(private http: HttpClient) {
  }

  getNoticias(): Observable<any> {
    return this.http.get(`${this.url}/noticias`);
  }

  setNoticias(noticia): Observable<any> {
    return this.http.post(`${this.url}/noticias`,noticia);
  }

  deleteNoticias(id): Observable<any> {
    return this.http.delete(`${this.url}/noticias/${id}`);
  }

  setupdateNoticias(id,noticia): Observable<any> {
    return this.http.put(`${this.url}/noticias/${id}`, noticia);
  }

  getEmpresas(): Observable<any> {
    return this.http.get(`${this.url}/empresas`);
  }

  setEmpresas(empresa): Observable<any> {
    return this.http.post(`${this.url}/empresas`, empresa);
  }

  setupdateEmpresas(id,empresa): Observable<any> {
    return this.http.put(`${this.url}/empresas/${id}`, empresa);
  }

  deleteEmpresas(id): Observable<any> {
    return this.http.delete(`${this.url}/empresas/${id}`);
  }
}
