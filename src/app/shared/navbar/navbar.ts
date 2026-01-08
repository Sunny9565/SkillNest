import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Login } from '../../login/login/login';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-navbar',
  imports: [RouterModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  menuOpen = false;

  constructor(private dialog: MatDialog) {}

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  openLoginDialog() {
    this.dialog.open(Login, {
      width: '1132px',
      maxWidth: '90vw',
      height: '70vh',
      maxHeight: '70vh',
      disableClose: true,
    });
  }
}
