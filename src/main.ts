import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { Home } from './app/features/home/home';

@Component({
  selector: 'app-root',
  template: `<h1>{{ name }}</h1>`,
  imports: [ Home ],
})

export class App {
  name = 'ICOMET';
}

bootstrapApplication(App);
