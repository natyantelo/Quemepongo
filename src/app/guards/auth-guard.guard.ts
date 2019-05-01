import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, UrlSegment, Route } from '@angular/router';
export interface LoginRequest {
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})

export class Login {
  static readonly type = '[Auth] Login';
  constructor(public login: LoginRequest) { }
}

export class AuthGuardGuard implements CanActivate {

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return true;
  }
}
export interface RegistroRequest {
  nombre: string;
  apellido: string;
  email: string;
  password: string;
}
export class Register {
  static readonly type = '[Auth] Register';
  constructor(public register: RegistroRequest) { }
}

export class RegisterSuccess {
  static readonly type = '[Auth] RegisterSuccess';
}

export class RegisterFailed {
  static type = '[Auth] RegisterFailed';
  constructor(public errors: Error[]) { }
}



