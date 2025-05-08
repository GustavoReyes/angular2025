import { Routes } from '@angular/router';
import { NuevoContactoComponent } from './components/nuevo-contacto/nuevo-contacto.component';
import { BuscarComponent } from './components/buscar/buscar.component';
import { MostrarComponent } from './components/mostrar/mostrar.component';

export const routes: Routes = [
  {path:"nuevo-contacto",
    component: NuevoContactoComponent
  },
  {path:"buscar",
    component: BuscarComponent
  },
  {path:"mostrar",
    component: MostrarComponent
  }
];
