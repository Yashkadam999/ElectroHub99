import { Component } from '@angular/core';

import { Navbar } from '../core/navbar/navbar';
import { Footer } from '../core/footer/footer';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout',
  standalone: true,
  templateUrl: './layout.html',
  styleUrls: ['./layout.css'],
  imports: [ Navbar, Footer, RouterOutlet]
})
export class Layout {}
