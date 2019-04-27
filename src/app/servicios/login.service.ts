import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';
import { catchError } from 'rxjs/internal/operators/catchError';

Injectable({
  providedIn: 'root'
})
export interface Usuario {
  id?: any,
  nombre: string,
  apellido: string,
  email: string,
  password: string,

}
export class LoginService {
  private user = new BehaviorSubject<Usuario>(null);
  private token: string;
  urlBase: string = "http://localhost:5000/";
  constructor(private httpCliente: HttpClient, private router: Router) {
    this.token = localStorage.getItem("token");

  }


  public login(email: string, clave: string): Observable<any> {
    return this.httpCliente.post(`${this.urlBase}user/login`, this.user).pipe(map((resp: any) => {
      if (resp.user === null) {
        return false;
      } else {
        this.setToken(resp.token);
        this.setUser(resp.user);
        return true;
      }
    }), catchError(err => {
      return throwError(err);
    }
    ))
  }
  private setUser(user: Usuario) {
    this.user.next(user);
  }

  private setToken(registertoken: string) {
    this.token = registertoken;
    localStorage.seregistertItem('token', this.token);
  }
  public logout() {
    this.token = '';
    localStorage.removeItem('token');
    this.router.navigateByUrl('home');
  }
  public decode(): Observable<boolean> | boolean {
    if (!this.token) {
      this.router.navigateByUrl('conjuntos');
      return false;
    }
    return this.httpCliente.post(`${this.urlBase}user/decode`, { token: this.token }).pipe(map((resp: any) => {
      this.setUser(resp.user);
      return true;
    }), catchError((err: HttpErrorResponse) => {
      this.logout();
      return throwError(err);
    })
    )
  }




}
