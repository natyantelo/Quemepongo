import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/servicios/login.service';
import { Store } from '@ngxs/store';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';


@Component({
  selector: 'qmp-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  formulario = this.fb.group(
    {
      email: [],
      password: []
    },
    { updateOn: 'blur' }
  );

  constructor(private store: Store, private fb: FormBuilder) { }
  respuesta;

  ngOnInit() {
  }


  login() {
    console.log(this.formulario.value)
    /* if (this.formulario.valid) {
      this.store.dispatch(new LoginService(this.formulario.value))
    } */


  }
}
