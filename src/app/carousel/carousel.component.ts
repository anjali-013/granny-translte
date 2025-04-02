import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel',
  standalone: false,
  
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css'
})
export class CarouselComponent {
  carouselClass = 'custom-carousel-theme'; 
}
