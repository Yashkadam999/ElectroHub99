import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AdminAuthService } from '../../services/admin-auth';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.css']
})
export class Navbar {
  menuOpen = false;

  constructor(private router: Router, private adminAuth: AdminAuthService) {}

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu() {
    this.menuOpen = false;
  }

  openAdmin() {
    const password = prompt('Enter Admin Password:');
    if (password === 'admin123') {
      this.adminAuth.setAuthenticated(true);  // ✅ now service holds the flag
      this.router.navigate(['/add-product']);
    } else {
      alert('Incorrect password!');
    }
  }
}
