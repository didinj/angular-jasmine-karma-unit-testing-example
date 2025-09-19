import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup',
  standalone: true,
  template: `
    <form #signupForm="ngForm">
      <input name="username" ngModel required />
      <input name="email" ngModel required email />
      <button [disabled]="!signupForm.valid">Sign Up</button>
    </form>
  `,
  imports: [FormsModule]
})
export class SignupComponent { }
