import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { ProvinciaComponent } from './app/components/provincia/provincia.component';

bootstrapApplication(ProvinciaComponent, appConfig)
  .catch((err) => console.error(err));
