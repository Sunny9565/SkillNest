import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  constructor(private dialogRef: MatDialogRef<Login>) {}

  close() {
    this.dialogRef.close(); // ✅ closes dialog
  }
  requestOtp() {
    console.log('Otp Requested');
  }
}
