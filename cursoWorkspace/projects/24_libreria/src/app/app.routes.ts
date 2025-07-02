import { ComprasComponent } from './components/compras/compras.component';
import { Routes } from '@angular/router';
import { LogInComponent } from './components/log-in/log-in.component';

export const routes: Routes = [
  {
    path:"compras",
    component:ComprasComponent
  },
  {
    path:"catalogo",
    component:ComprasComponent
  },
  {
    path:"login",
    component:LogInComponent
  }
];
