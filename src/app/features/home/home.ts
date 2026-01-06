import { Component } from '@angular/core';
import { Nav } from '../../shared/components/nav/nav';
import { Carousel } from '../../shared/components/carousel/carousel';
import { Footer } from '../../layout/footer/footer';

@Component({
  selector: 'app-home',
  imports: [
    Nav,
    Carousel,
    Footer
  ],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}
