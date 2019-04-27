import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { catchError } from 'rxjs/internal/operators/catchError';

Injectable({
    providedIn: 'root'
})

export interface Prenda {
    id?: any,
    foto: string,
    titulo: string,
    descripcion: string,

}

export class DashboardService {



}