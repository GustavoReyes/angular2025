import { MovimientosComponent } from './app/components/movimientos/movimientos.component';
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';

bootstrapApplication(MovimientosComponent, appConfig)
  .catch((err) => console.error(err));
