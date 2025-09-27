import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ProductService } from './product.service';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './product.html',
  styleUrls: ['./product.css'],
})
export class Product implements OnInit {
  products: any[] = [];  // will be filled from backend
  searchTerm = '';
  selectedCategory = '';
  categories: string[] = [];

  selectedProduct: any = null;
  selectedImageIndex = 0;

  // Wishlist & BuyNow
  wishlist: any[] = [];
  buyNowProduct: any = null;
  checkoutData = {
    fullName: '',
    address: '',
    paymentMethod: ''
  };

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.loadProducts();
  }

  loadProducts() {
    this.productService.getProducts().subscribe((data: any[]) => {
      this.products = data;
      this.categories = [...new Set(data.map(p => p.category))];
    }, err => {
      console.error('Error fetching products:', err);
    });
  }

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
    if (this.selectedImageIndex > 0) this.selectedImageIndex--;
  }

  nextImage() {
    if (this.selectedImageIndex < this.selectedProduct.images.length - 1) this.selectedImageIndex++;
  }

  addToWishlist(product: any) {
    this.wishlist.push(product);
    alert(`${product.name} added to Wishlist ❤️`);
  }

  buyNow(product: any) {
    this.buyNowProduct = product;
    this.checkoutData = { fullName: '', address: '', paymentMethod: '' };
  }

  closeBuyNow() {
    this.buyNowProduct = null;
  }

  placeOrder() {
    alert(`Order placed successfully for ${this.buyNowProduct.name}!`);
    console.log('Order Details:', this.checkoutData);
    this.closeBuyNow();
  }
}
