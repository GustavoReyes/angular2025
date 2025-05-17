import { Routes } from '@angular/router';
import { AltaComponent } from './components/alta/alta.component';
import { BuscarComponent } from './components/buscar/buscar.component';
import { MenuComponent } from './components/menu/menu.component';
import { EliminarComponent } from './components/eliminar/eliminar.component';

export const routes: Routes = [
  {path:"menu",
    component :MenuComponent
  },
  { path: "alta",
    component: AltaComponent
  },
  { path: "buscar",
    component: BuscarComponent
  },{
    path:"eliminar",
    component:EliminarComponent
  }
];
