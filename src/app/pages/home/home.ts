import { Component, Inject, PLATFORM_ID, ElementRef, AfterViewInit, QueryList, ViewChildren, ViewChild } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Carousel } from '../../core/carousel/carousel';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, Carousel],
  templateUrl: './home.html',
  styleUrls: ['./home.css'],
  host: { ngSkipHydration: 'true' },
  animations: [
    trigger('fadeInUp', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('0.5s ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ]
})
export class Home implements AfterViewInit {
  products = [
    { 
      name: 'Smartphone', 
      description: 'Latest model with powerful processor, high-res camera, and long battery life.',
      price: 699, 
      images: [
        'https://www.lifewire.com/thmb/XzxH-f88I5FObXkg60X6rmBCEYI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Image031-8c1279df682e44b8ad1494fe7f64298a.jpg',
        'https://images.unsplash.com/photo-1678685888221-cda773a3dcdb?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXBwbGUlMjBpcGhvbmV8ZW58MHx8MHx8fDA%3D',
        'https://images.unsplash.com/photo-1695578130333-bb2b208f34ab?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGlwaG9uZSUyMDE0fGVufDB8fDB8fHww'
      ]
    },
    { 
      name: 'Headphones', 
      description: 'Noise-cancelling, comfortable over-ear headphones for immersive sound.',
      price: 199, 
      images: [
        'https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Rockerz_650_pp_renders_main_banner.124.png?v=1740735495',
        'https://cdn.shopify.com/s/files/1/0057/8938/4802/files/R650-QH-mob.jpg?v=1741067771'
      ]
    },
    { 
      name: 'Smartwatch', 
      description: 'Track fitness, notifications, and more with a sleek smartwatch.',
      price: 299, 
      images: [
        'https://www.apple.com/in/apple-watch-ultra-2/images/overview/hero/hero_endframe__b7prz1z3rs2u_large.jpg',
        'https://www.apple.com/in/apple-watch-se/images/overview/hero/hero__gk2727ue87qm_large.jpg'
      ]
    },
    { 
      name: 'Laptop', 
      description: 'Lightweight and powerful laptop suitable for work, study, and gaming.',
      price: 1099, 
      images: [
        'https://i.pinimg.com/originals/0b/5f/c8/0b5fc864c174f4bea7e93892e5eeb00a.jpg',
        'https://wallpapers.com/images/featured/laptop-murjp1nk4lp1idlt.jpg'
      ]
    },
    { 
      name: 'Tablet', 
      description: 'Portable tablet with high-resolution display, perfect for reading and media.',
      price: 399, 
      images: [
        'https://www.hindustantimes.com/ht-img/img/2025/04/16/1600x900/best_android_tablets_1744798872092_1744798883425.jpeg',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOaV0iLaXHUTIshBe_3czfS-pQ6LpZ8yh4I6P9zJFFc5puE-2uWXY76hLS0U83wsScOcc&usqp=CAU'
      ]
    },
    { 
      name: 'Camera', 
      description: 'Professional camera with excellent lens quality and advanced features.',
      price: 499, 
      images: [
        'https://images2.alphacoders.com/744/744658.jpg',
        'https://t3.ftcdn.net/jpg/07/54/79/56/360_F_754795619_lTDIrHNVSUf17dCBPfdjFa8SZHdiMQUW.jpg'
      ]
    }
  ];
  categories = [
    { name: 'Electronics', image: 'https://cdn-icons-png.flaticon.com/512/1055/1055646.png' },
    { name: 'Fashion', image: 'https://cdn-icons-png.flaticon.com/512/892/892458.png' },
    { name: 'Home & Kitchen', image: 'https://cdn-icons-png.flaticon.com/512/2302/2302125.png' }
  ];

  featuredProducts = this.products.slice(0, 4); // Top 4 products
  reviews = [
    { text: 'Amazing products, fast delivery!', author: 'Alice' },
    { text: 'High quality and affordable.', author: 'Bob' },
    { text: 'I love shopping here!', author: 'Charlie' }
  ];

showVideo = false;

  @ViewChildren('productCard', { read: ElementRef }) productCards!: QueryList<ElementRef>;
  @ViewChild('productsGrid', { static: true }) productsGrid!: ElementRef; // new

  selectedProduct: any = null;
  selectedImageIndex = 0;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.showVideo = true;
      
    }
  }

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      // --- Intersection Observer & Image Swapping (existing) ---
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              const index = Array.from(this.productCards)
                .findIndex(card => card.nativeElement === entry.target);
              (entry.target as HTMLElement).style.transitionDelay = `${index * 0.2}s`;
              entry.target.classList.add('visible');
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.2 }
      );

      this.productCards.forEach(card => observer.observe(card.nativeElement));

      this.productCards.forEach(card => {
        const images = card.nativeElement.querySelectorAll('.product-images img');
        let current = 0;
        if (images.length > 1) {
          setInterval(() => {
            images[current].classList.remove('active');
            current = (current + 1) % images.length;
            images[current].classList.add('active');
          }, 2500);
        }
      });

      // --- Drag-to-scroll functionality ---
      const slider = this.productsGrid.nativeElement;
      let isDown = false;
      let startX = 0;
      let scrollLeft = 0;

      slider.addEventListener('mousedown', (e: MouseEvent) => {
        isDown = true;
        slider.classList.add('dragging');
        startX = e.pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
      });

      slider.addEventListener('mouseleave', () => {
        isDown = false;
        slider.classList.remove('dragging');
      });

      slider.addEventListener('mouseup', () => {
        isDown = false;
        slider.classList.remove('dragging');
      });

      slider.addEventListener('mousemove', (e: MouseEvent) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - slider.offsetLeft;
        const walk = (x - startX) * 2; // scroll speed
        slider.scrollLeft = scrollLeft - walk;
      });

      // Touch events for mobile
      slider.addEventListener('touchstart', (e: TouchEvent) => {
        isDown = true;
        startX = e.touches[0].pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
      });

      slider.addEventListener('touchend', () => {
        isDown = false;
      });

      slider.addEventListener('touchmove', (e: TouchEvent) => {
        if (!isDown) return;
        const x = e.touches[0].pageX - slider.offsetLeft;
        const walk = (x - startX) * 2;
        slider.scrollLeft = scrollLeft - walk;
      });
    }
  }

  openProduct(product: any) {
    this.selectedProduct = product;
    this.selectedImageIndex = 0;
  }

  closeModal() {
    this.selectedProduct = null;
  }

  nextImage() {
    if (this.selectedProduct) {
      this.selectedImageIndex =
        (this.selectedProduct.images && this.selectedProduct.images.length > 0)
          ? (this.selectedImageIndex + 1) % this.selectedProduct.images.length
          : 0;
    }
  }

  prevImage() {
    if (this.selectedProduct) {
      this.selectedImageIndex =
        (this.selectedProduct.images && this.selectedProduct.images.length > 0)
          ? (this.selectedImageIndex - 1 + this.selectedProduct.images.length) % this.selectedProduct.images.length
          : 0;
    }
  }
}