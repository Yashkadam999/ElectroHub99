import { Routes } from '@angular/router';
import { Layout } from './layout/layout';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Services } from './pages/services/services';
import { Contact } from './pages/contact/contact';
import { Product } from './pages/product/product';

export const routes: Routes = [
  {
    path: '',
    component: Layout,
    children: [
      { path: 'home', component: Home },
      {path: 'product', component: Product },
      { path: 'about', component: About },
      { path: 'services', component: Services },
      { path: 'contact', component: Contact },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      
    ]
  }
];
