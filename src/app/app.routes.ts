import { Routes } from '@angular/router';
import { Layout } from './layout/layout';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Services } from './pages/services/services';
import { Contact } from './pages/contact/contact';
import { Product } from './pages/product/product';
import { AddProduct } from './pages/add-product/add-product';
import { Admin } from './pages/admin/admin';
import { AdminGuard } from '../../src/app/guards/admin-guard';


export const routes: Routes = [
  {
    path: '',
    component: Layout,
    children: [
      { path: 'home', component: Home },
     
      {path: 'product', component: Product },
       { path: 'add-product', component: AddProduct },
      { path: 'about', component: About },
      { path: 'services', component: Services },
      { path: 'contact', component: Contact },
       
        {
    path: 'admin',
    component: Admin,
    children: [
       { path: 'add-product', component: AddProduct, canActivate: [AdminGuard] },
       { path: '', redirectTo: 'product', pathMatch: 'full' },
    ]
  },
      { path: '', redirectTo: 'home', pathMatch: 'full' },

      // 👇 Add admin route



      
    ]
  }
];
