import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { Home } from './app/features/home/home';

@Component({
  selector: 'app-root',
  imports: [ Home ],
  template: `<app-home />`,
})

export class App {
  name = 'ICOMET';
}

bootstrapApplication(App);
