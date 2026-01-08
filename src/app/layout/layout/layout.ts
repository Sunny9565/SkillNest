import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from '../.././shared/navbar/navbar';
import { MatDialog } from '@angular/material/dialog';
import { Login } from '../../login/login/login';
@Component({
  selector: 'app-layout',
  imports: [RouterOutlet, Navbar],
  templateUrl: './layout.html',
  styleUrl: './layout.css',
})
export class Layout {
  constructor(private dialog: MatDialog) {}

 openLogin() {
  this.dialog.open(Login, {
    width: '1132px',        
    maxWidth: '90vw',    
    height: '70vh',
    maxHeight: '70vh',
    disableClose: true,
    panelClass: 'center-login-dialog'
  });

  
}

}
