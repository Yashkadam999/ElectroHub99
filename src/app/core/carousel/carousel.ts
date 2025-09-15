import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
import {
  trigger,
  transition,
  style,
  animate
} from '@angular/animations';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './carousel.html',
  styleUrls: ['./carousel.css'],
  animations: [
    trigger('slideAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(100%)' }),
        animate('600ms ease-out', style({ opacity: 1, transform: 'translateX(0)' }))
      ]),
      transition(':leave', [
        animate('600ms ease-in', style({ opacity: 0, transform: 'translateX(-100%)' }))
      ])
    ])
  ]
})
export class Carousel {
  slides = [
  { 
    bgImage: 'https://imageio.forbes.com/specials-images/imageserve/64c9067d722c95206049763b/0x0.jpg?format=jpg&crop=948,533,x0,y6,safe&height=900&width=1600&fit=bounds',
    image: 'https://imageio.forbes.com/specials-images/imageserve/64c9067d722c95206049763b/0x0.jpg?format=jpg&crop=948,533,x0,y6,safe&height=900&width=1600&fit=bounds',
    caption: 'Big Sale - Up to 50% Off!' 
  },
  { 
    bgImage: 'https://www.apple.com/in/apple-watch-ultra-2/images/overview/hero/hero_endframe__b7prz1z3rs2u_large.jpg',
    image: 'https://www.apple.com/in/apple-watch-ultra-2/images/overview/hero/hero_endframe__b7prz1z3rs2u_large.jpg',
    caption: 'New Arrivals Just Dropped' 
  },
  { 
    bgImage: 'https://images2.alphacoders.com/744/744658.jpg',
    image: 'https://images2.alphacoders.com/744/744658.jpg',
    caption: 'Shop the Best Deals Today' 
  }
];


  currentIndex = 0;
  intervalId: any;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.startAutoSlide(); 
    }
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  startAutoSlide() {
    this.intervalId = setInterval(() => this.nextSlide(), 4000);
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.slides.length;
  }

  prevSlide() {
    this.currentIndex =
      (this.currentIndex - 1 + this.slides.length) % this.slides.length;
  }
  goToSlide(index: number) {
  this.currentIndex = index;
}
getTransformStyle() {
  return `translateX(-${this.currentIndex * 100}%)`;
}


}
