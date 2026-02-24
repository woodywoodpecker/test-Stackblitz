import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { Home } from './app/features/home/home';
import { provideRouter, withInMemoryScrolling } from '@angular/router';
import { routes } from './app/routes';

@Component({
  selector: 'app-root',
  imports: [ Home ],
  template: `<app-home />`,
})

export class App {
  name = 'ICOMET';
}

bootstrapApplication(App,
  {providers: [
    provideRouter(routes, withInMemoryScrolling({
      anchorScrolling:'enabled',
      scrollPositionRestoration: 'enabled'
    }))
  ]
});
