import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Category } from '../models/category';
import { Observable, BehaviorSubject } from 'rxjs';
import { map, skip, catchError} from 'rxjs/operators';
import { Product } from '../models/product';
import { AddUpdateResponse } from '../models/addupdateresponse';

@Injectable({
  providedIn: 'root'
})
export class CatalogueService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  LIVE_URI = 'http://localhost:3000';

  constructor(private httpClient: HttpClient) {}

  getCategories(): Observable<Category[]> {
    return this.httpClient
      .get(`${this.LIVE_URI}/categories`, this.httpOptions)
      .pipe(map((res: Category[]) => res));
  }

  addCategory(category: Category): Observable<AddUpdateResponse> {
    console.log('service : ', category);
    return this.httpClient
      .put(`${this.LIVE_URI}/categories`, category, this.httpOptions)
      .pipe(map((res: AddUpdateResponse) =>  res));
  }

  updateCategory(category: Category): Observable<AddUpdateResponse> {
    console.log('service : ', category);
    return this.httpClient
      .patch(`${this.LIVE_URI}/categories`, category, this.httpOptions)
      .pipe(map((res: AddUpdateResponse) =>  res ));
  }

  getCategoryById(): Observable<Category> {
    return this.httpClient
      .get(`${this.LIVE_URI}/categories`)
      .pipe(map((res: Category) => res));
  }

  getProducts(): Observable<Product[]> {
    return this.httpClient
      .get(`${this.LIVE_URI}/products`, this.httpOptions)
      .pipe(map((res: Product[]) => res));
  }

  addProduct(product: Product): Observable<AddUpdateResponse> {
    return this.httpClient
      .put(`${this.LIVE_URI}/products`, product, this.httpOptions)
      .pipe(map((res: AddUpdateResponse) => res));
  }

  updateProduct(product: Product): Observable<AddUpdateResponse> {
    return this.httpClient
      .patch(`${this.LIVE_URI}/products`, product, this.httpOptions)
      .pipe(map((res: AddUpdateResponse) => res));
  }

  getCategoriesById() {
    return this.httpClient.get(`${this.LIVE_URI}/categories`);
  }

  getProductById() {
    return this.httpClient.get(`${this.LIVE_URI}/products`);
  }
}
