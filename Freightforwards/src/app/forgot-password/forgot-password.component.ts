// forgot-password.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent {
  email!: string;

  constructor() {}

  submitForm() {
    // Implement your logic here for sending the password reset email
  }
}
