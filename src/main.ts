import { bootstrapApplication } from '@angular/platform-browser';
// Importa el componente y estilos de Carbon Button Web Component
import '@carbon/web-components/es/components/button/index.js';
import { appConfig } from './app/app.config';
import { App } from './app/app';

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
