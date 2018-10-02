import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class CatalogueService {
  LIVE_URI = 'http://localhost:3000';

  constructor(private httpClient: HttpClient) {}

  getCategories() {
    return this.httpClient.get(`${this.LIVE_URI}/categories`);
  }

  getCategoriesById() {
    return this.httpClient.get(`${this.LIVE_URI}/categories`);
  }

  getProducts() {
    return this.httpClient.get(`${this.LIVE_URI}/products`);
  }

  getProductById() {
    return this.httpClient.get(`${this.LIVE_URI}/products`);
  }
}
