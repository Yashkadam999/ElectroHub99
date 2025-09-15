
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './product.html',
  styleUrls: ['./product.css'],
})
export class Product {
  products = [
    { 
      name: 'Iphone 15 Pro', 
      category: 'Electronics',
      description: 'Latest model with powerful processor, high-res camera, and long battery life.',
      price: 699, 
      images: [
        'https://www.lifewire.com/thmb/XzxH-f88I5FObXkg60X6rmBCEYI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Image031-8c1279df682e44b8ad1494fe7f64298a.jpg',
        'https://images.unsplash.com/photo-1678685888221-cda773a3dcdb?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXBwbGUlMjBpcGhvbmV8ZW58MHx8MHx8fDA%3D',
        'https://images.unsplash.com/photo-1695578130333-bb2b208f34ab?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGlwaG9uZSUyMDE0fGVufDB8fDB8fHww'
      ]
    },
    { 
      name: 'Samsung Galaxy Z Fold 7', 
      category: 'Electronics',
      description: 'Latest model with powerful processor, high-res camera, and long battery life.',
      price: 699, 
      images: [
        'https://cdn.mos.cms.futurecdn.net/kJ4jCRnZGUCYNvFYpLRjz3.jpg',
        'https://www.trustedreviews.com/wp-content/uploads/sites/7/2024/07/Samsung-Galaxy-Z-Fold-6-review-open-in-hand-crease-and-apps-820x461.jpeg',
        'https://dam.mediacorp.sg/image/upload/s--4sO8sBJI--/c_fill,g_auto,h_622,w_830/f_auto,q_auto/v1/mediacorp/cna/image/2025/08/08/samsung_galaxy_z_fold_7_main_resized.jpg?itok=zFtqYqCi'
      ]
    },
    { 
      name: 'Boats Headphones', 
      category: 'Accessories',
      description: 'Noise-cancelling, comfortable over-ear headphones for immersive sound.',
      price: 199, 
      images: [
        'https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Rockerz_650_pp_renders_main_banner.124.png?v=1740735495',
        'https://cdn.shopify.com/s/files/1/0057/8938/4802/files/R650-QH-mob.jpg?v=1741067771'
      ]
    },
     { 
      name: 'Sony Headphones', 
      category: 'Accessories',
      description: 'Noise-cancelling, comfortable over-ear headphones for immersive sound.',
      price: 199, 
      images: [
        'https://sony.scene7.com/is/image/sonyglobalsolutions/Headphones-primary%20tout-mobile-1534x1083?$toutMobile$&fmt=png-alpha',
        'https://m.media-amazon.com/images/I/510cs9VwjUL._UF1000,1000_QL80_.jpg'
      ]
    },
    { 
      name: 'Apple Series 9 Watch', 
      category: 'Wearables', 
      description: 'Track fitness, notifications, and more with a sleek smartwatch.',
      price: 299, 
      images: [
        'https://www.apple.com/in/apple-watch-ultra-2/images/overview/hero/hero_endframe__b7prz1z3rs2u_large.jpg',
        'https://www.apple.com/in/apple-watch-se/images/overview/hero/hero__gk2727ue87qm_large.jpg'
      ]
    },
    { 
      name: 'Titan Smartwatch', 
      category: 'Wearables', 
      description: 'Track fitness, notifications, and more with a sleek smartwatch.',
      price: 299, 
      images: [
        'https://m.media-amazon.com/images/I/81L0Sd1LhUL._UF1000,1000_QL80_.jpg',
        'https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw56f4eec8/images/Titan/Catalog/90172AM02_1.jpg?sw=800&sh=800'
      ]
    },
    { 
      name: 'Apple MacBook Pro', 
      category: 'Electronics',
      description: 'Lightweight and powerful laptop suitable for work, study, and gaming.',
      price: 1099, 
      images: [
        'https://www.apple.com/v/macbook-pro/ar/images/meta/macbook-pro__catc3my4a336_og.png',
        'https://wallpapers.com/images/featured/laptop-murjp1nk4lp1idlt.jpg'
      ]
    },
    { 
      name: 'Acer Nitro 5', 
      category: 'Electronics',
      description: 'Lightweight and powerful laptop suitable for work, study, and gaming.',
      price: 1099, 
      images: [
        'https://cdn.uc.assets.prezly.com/143d4e6d-c193-4009-bba8-90f2301491ac/Acer-Nitro-5-AN515-43-wp-02.jpg',
        'https://m.media-amazon.com/images/I/71NCYdZM9VL.jpg'
      ]
    },
    { 
      name: 'Samsung Tablet', 
      category: 'Electronics',
      description: 'Portable tablet with high-resolution display, perfect for reading and media.',
      price: 399, 
      images: [
        'https://www.hindustantimes.com/ht-img/img/2025/04/16/1600x900/best_android_tablets_1744798872092_1744798883425.jpeg',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOaV0iLaXHUTIshBe_3czfS-pQ6LpZ8yh4I6P9zJFFc5puE-2uWXY76hLS0U83wsScOcc&usqp=CAU'
      ]
    },
    { 
      name: 'Apple iPad', 
      category: 'Electronics',
      description: 'Portable tablet with high-resolution display, perfect for reading and media.',
      price: 399, 
      images: [
        'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/ipad-pro-finish-unselect-gallery-2-202405_FMT_WHH?wid=1280&hei=720&fmt=p-jpg&qlt=80&.v=YXpaUEtKWGhlNnNrVGZkTEo4T0xsN2dzSmpObkZCM3MrNmJ5SkhESlNDaktqSkExTHB4VHJRR1hzOGdBenBuczN0bWR6ME9RYmIrVG9PSXZFalM2aHdBb0pjWml6bllCL0Y5a1RKc2gxZjlIaERUT3FJbHFiWTlmb2lodm1tWE55UjVHcmIzQTc0UDFXY0hsUWdxUDFR&traceId=1',
        'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/ipad-pro-model-select-gallery-2-202405_FMT_WHH?wid=1280&hei=720&fmt=p-jpg&qlt=80&.v=cXN0QTVTNDBtbGIzcy91THBPRThnMkpvMjZnN3E5aGRZVXJIWmhFMitJS0tLcTRWYmdFZ3dxWXZ4eXB0YVRMYlZxUGJ2alFkcjhHVnJPcitiOHFPTm15aFM4QSthSG1nSUl6WXJQME1SZ21LbVpxeGUzTEtTRVFwU3l3VURrdVJsWG55WFNZREIrcHRwdlRvMGw2S3BR&traceId=1'
      ]
    },
    { 
      name: 'Sony Camera', 
      category: 'Electronics',
      description: 'Professional camera with excellent lens quality and advanced features.',
      price: 499, 
      images: [
        'https://images2.alphacoders.com/744/744658.jpg',
        'https://t3.ftcdn.net/jpg/07/54/79/56/360_F_754795619_lTDIrHNVSUf17dCBPfdjFa8SZHdiMQUW.jpg'
      ]
    },
    { 
      name: 'Canon Camera', 
      category: 'Electronics',
      description: 'Professional camera with excellent lens quality and advanced features.',
      price: 499, 
      images: [
        'https://cloud.starkinsider.com/wp-content/uploads/2020/08/Sigma-18-35-Canon-R5-best-video-lens.webp',
        'https://www.campkinscameras.com/wp-content/uploads/2024/07/Best-Canon-Camera-for-Street-Photography.webp'
      ]
    }
  ];
  searchTerm = '';
  selectedCategory = '';
  categories = [...new Set(this.products.map(p => p.category))];

  selectedProduct: any = null;
  selectedImageIndex = 0;

  
  filteredProducts() {
    return this.products.filter(p =>
      p.name.toLowerCase().includes(this.searchTerm.toLowerCase()) &&
      (this.selectedCategory === '' || p.category === this.selectedCategory)
    );
  }

  openProduct(product: any) {
    this.selectedProduct = product;
    this.selectedImageIndex = 0;
  }

  closeModal() {
    this.selectedProduct = null;
  }

  prevImage() {
    if (!this.selectedProduct) return;
    this.selectedImageIndex =
      (this.selectedImageIndex - 1 + this.selectedProduct.images.length) %
      this.selectedProduct.images.length;
  }

  nextImage() {
    if (!this.selectedProduct) return;
    this.selectedImageIndex =
      (this.selectedImageIndex + 1) % this.selectedProduct.images.length;
  }
}