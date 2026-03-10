import { Component } from '@angular/core';
import { Nav } from '../../shared/components/nav/nav';
import { CarouselComponent } from '../../shared/components/carousel/carousel';
import { Footer } from '../../layout/footer/footer';
import { Products } from '../products/products';

@Component({
  selector: 'app-home',
  imports: [
    Nav,
    CarouselComponent,
    Products,
    Footer
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {
  slides: string[] = [
    'assets/img/1.jpg',
    'assets/img/2.jpg'
  ];
}
