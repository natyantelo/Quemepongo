import { Component, OnInit } from '@angular/core';
import { Login } from 'src/app/guards/auth.actions';
import { Store } from '@ngxs/store';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'qmp-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm = this.fb.group(
    {
      email: ['', [Validators.required]],
      clave: ['', [Validators.required]]
    },
    { updateOn: 'blur' }
  );

  constructor(private fb: FormBuilder, private store: Store) { }


  /*
    public login() {
      alert("LOGIN REC OK"),
        this.http.post(`${environment.apiBaseUrl}/login`, this.loginForm.value)
          .subscribe(
            successCallback => alert('Login OK '),
            errorCallback => alert('Login Fail')
          )
      console.log(this.loginForm.value)
    }
  
  */

  public login() {
    if (this.loginForm.valid) {
      this.store.dispatch(new Login(this.loginForm.value));
    }
  }
}