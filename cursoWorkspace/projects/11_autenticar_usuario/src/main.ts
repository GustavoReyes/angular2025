import { ClienteComponent } from './app/cliente/cliente.component';
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';

bootstrapApplication(ClienteComponent, appConfig)
  .catch((err) => console.error(err));
