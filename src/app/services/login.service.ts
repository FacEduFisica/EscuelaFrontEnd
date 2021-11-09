import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  url = "http://escuelanosotros.poli/api";
  //url = "http://escuela.poli";
  expiresAt;
  accessToken;
  userProfile;
  authenticated;
  constructor(private http: HttpClient, private router: Router, ) { }

  saveGmailUser(userAuthGmail) {
    return this.http.post(`${this.url}/usuario`, userAuthGmail);
  }
  getusers() {
    return this.http.get(`${this.url}/usuario`);
  }

  handleLoginCallback(authResult) {
    // this.expiresAt = authResult.expiresIn * 1000 + Date.now();
    // this.accessToken = authResult.accessToken;
    this.authenticated = true;
    this._setSession(authResult);
  }
  getToken() {
    this.userProfile = JSON.parse(localStorage.getItem("AuthUser"));
    if (this.userProfile) {
      return this.userProfile.token;
    }
  }
  getUserInfo() {
    {
      this.userProfile = JSON.parse(localStorage.getItem("AuthUser"));
      if (this.userProfile) {
        return this.userProfile;
      }
    }
  }
  private _setSession(authResult) {
    // // Save authentication data and update login status subject
    // this.expiresAt = authResult.expiresIn * 1000 + Date.now();
    localStorage.setItem("AuthUser", JSON.stringify(authResult));
    // this.accessToken = authResult.accessToken;
    // this.userProfile = profile;
    // this.authenticated = true;
  }
  
  getRol() {
    this.userProfile = JSON.parse(localStorage.getItem("AuthUser"));
    if (this.userProfile) {
      return this.userProfile.rol;
    }
  }

  logout() {
    return this.http.get(`${this.url}/logout`);
  }
  isGuardian(): boolean {
    return (this.getRol() === 'Admin');
  }
  isLoggedIn(): boolean {
    this.userProfile = JSON.parse(localStorage.getItem("AuthUser"));
    if (this.userProfile) {
      return true
    } else {
      return false;
    }
  }
  isAuthorized(idRol): boolean {
    if (idRol === '') {
      return false;
    } else if (this.getRol() == idRol) {
      return true;
    }
  }
  login(usuario): Observable<any> {
    return this.http.post(`${this.url}/usuario/login`, usuario);
  }

  register(usuario): Observable<any> {
    return this.http.post(`${this.url}/usuario/register`, usuario);
  }

  adminRegister(usuario): Observable<any> {
    return this.http.post(`${this.url}/admin/usuario/register`, usuario);
  }

  update(usuario): Observable<any> {
    return this.http.put(`${this.url}/usuario`, usuario);
  }
  delete(id): Observable<any> {
    return this.http.delete(`${this.url}/usuario/${id}`);
  }
  forgotPassword(email) {
    return this.http.post<any>(`${this.url}/password/email`,email);
  }
  resetPassword(body, token) {
    return this.http.post<any>(`${this.url}/password/reset?token=${token}`,body);
  }

  departamentos() {
    return this.http.get('../../assets/json/colombia.json');
  }
}

