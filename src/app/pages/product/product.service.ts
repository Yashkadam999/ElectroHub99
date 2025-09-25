import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'   // service available globally
})
export class ProductService {
  private apiUrl = 'https://electrohub-backend1.onrender.com/api/products'; // your backend API

  constructor(private http: HttpClient) {}

  // GET all products
  getProducts(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  // Add new product
addProduct(product: any): Observable<any> {
  return this.http.post<any>(this.apiUrl, product);
}


  // GET single product by ID
  getProductById(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }
}
