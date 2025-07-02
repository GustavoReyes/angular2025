import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { MenusComponent } from './app/components/menus/menus.component';

bootstrapApplication(MenusComponent, appConfig)
  .catch((err) => console.error(err));
