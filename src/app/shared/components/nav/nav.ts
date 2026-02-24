import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nav',
  imports: [
    CommonModule
  ],
  templateUrl: './nav.html',
  styleUrl: './nav.scss'
})
export class Nav {
  isMenuActive = false;

  toggle(): void {
    this.isMenuActive = !this.isMenuActive;
}
}