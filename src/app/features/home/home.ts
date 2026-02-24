import { Component } from '@angular/core';
import { Nav } from '../../shared/components/nav/nav';
import { Carousel } from '../../shared/components/carousel/carousel';
import { Footer } from '../../layout/footer/footer';
import { Products } from '../products/products';

@Component({
  selector: 'app-home',
  imports: [
    Nav,
    Carousel,
    Products,
    Footer
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {

}
