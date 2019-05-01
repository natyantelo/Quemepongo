import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { MatchPasswordValidator } from '../../validators/match-pasword.validator';
import { MailValidator } from '../../validators/mail.validator';
import { Store } from '@ngxs/store';
import { Register } from '../../store/auth.actions';

@Component({
  selector: 'sn-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  registerForm = this.fb.group(
    {
      user: ['', [Validators.required]],
      email: ['', [Validators.required, MailValidator]],
      password: ['', [Validators.required]]

    },
    {
      updateOn: 'blur',
      /* validators: [MatchPasswordValidator]*/
    }
  );

  constructor(
    private fb: FormBuilder,
    private store: Store,
  ) { }


  register() {
    if (!this.registerForm.valid) {
      alert("Formulario incompleto")
      return;
    } else {
      this.store.dispatch(new Register(this.registerForm.value));

    }

  }
}
