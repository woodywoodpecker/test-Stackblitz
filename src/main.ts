import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  template: `
    <h1>{{ name }}!</h1>
  `,
})
export class App {
  name = 'test';
}

bootstrapApplication(App);
