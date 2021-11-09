import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Http  } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class HomeServiceService {
  urlOfertaCursos= 'assets/json/programasPrecio.json';
  constructor(private http: Http) { 

  }
  getOfertaCursos(): Observable<any> {
    return this.http.get(this.urlOfertaCursos).pipe((resp: any) => {
      return resp.json;
    });
  }
}
