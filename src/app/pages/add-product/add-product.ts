import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from '../product/product.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './add-product.html',
  styleUrls: ['./add-product.css'],
})
export class AddProduct {
  product = {
    name: '',
    category: '',
    description: '',
    price: null,
    images: ['']
  };

  constructor(private productService: ProductService, private router: Router) {}

  addImageField() {
    this.product.images.push('');
  }

  removeImageField(i: number) {
    this.product.images.splice(i, 1);
  }

  submitProduct() {
    this.productService.addProduct(this.product).subscribe({
      next: () => {
        alert('Product added successfully!');
        this.router.navigate(['/product']);
      },
      error: (err) => console.error('Error adding product:', err),
    });
  }
}
