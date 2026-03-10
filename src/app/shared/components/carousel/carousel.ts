import { transition, trigger, useAnimation } from '@angular/animations'; 
import { Component, Input, OnInit } from '@angular/core'; 
import { interval } from 'rxjs'; 
import { fadeIn, fadeOut } from './carousel.animations';

@Component({
  selector: 'app-carousel',
  standalone: true,   
  templateUrl: './carousel.html',
  styleUrls: ['./carousel.scss'],
  animations: [
    trigger('carouselAnimation', [
      transition('void => *', [useAnimation(fadeIn, { params: { time: '1500ms' } })]),
      transition('* => void', [useAnimation(fadeOut, { params: { time: '1500ms' } })]),
    ])
  ]
})
export class CarouselComponent implements OnInit { 
  @Input() slides: string[] = [ 
    '/assets/img/1.jpg', 
    '/assets/img/2.jpg' 
  ]; 
  currentSlide = 0; constructor() { } 
  ngOnInit(): void { 
    const timer = interval(10000); 
    timer.subscribe(() => this.nextImage()); } previousImage(): void { const previous = this.currentSlide - 1; this.currentSlide = previous < 0 ? this.slides.length - 1 : previous; } nextImage(): void { const next = this.currentSlide + 1; this.currentSlide = next === this.slides.length ? 0 : next; } }
