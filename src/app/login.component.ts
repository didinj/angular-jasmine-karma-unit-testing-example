import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  template: `
    <form [formGroup]="loginForm">
      <input formControlName="email" placeholder="Email" />
      <input formControlName="password" placeholder="Password" type="password" />
      <button [disabled]="!loginForm.valid">Login</button>
    </form>
  `,
  imports: [ReactiveFormsModule]
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }
}
