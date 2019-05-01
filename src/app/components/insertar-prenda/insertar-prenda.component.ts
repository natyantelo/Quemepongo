import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store, Actions } from '@ngxs/store';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'qmp-insertar-prenda',
  templateUrl: './insertar-prenda.component.html',
  styleUrls: ['./insertar-prenda.component.scss']
})
export class InsertarPrendaComponent implements OnInit {

  AnadirPrendaForm = this.fb.group(
    {
      nombre: [],
      descripcion: [],
      imagen: []
    },
    {
      updateOn: 'blur',

    }
  );

  constructor(
    private fb: FormBuilder, public http: HttpClient) { }

  ngOnInit() {

  }
  data1: any;
  AnadirPrenda() {/*
    if (!this.AnadirPrendaForm.valid) {
      this.markFormGroupAsTouched(this.AnadirPrendaForm);
      return;
    }*/
    this.http.post(`${environment.apiBaseUrl}/`, this.AnadirPrendaForm.value)
      .subscribe(
        data => this.data1 = data,
        err => console.log(err)
      )
    console.log(this.AnadirPrendaForm.value);
  }

  markFormGroupAsTouched(formGroup: FormGroup) {
    Object.values(formGroup.controls).forEach(control =>
      control.markAsTouched()
    );
  }

}
