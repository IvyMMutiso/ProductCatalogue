import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Category } from '../models/category';
import { Observable, BehaviorSubject } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CatalogueService {
  LIVE_URI = 'http://localhost:3000';

  constructor(private httpClient: HttpClient) {}

  getCategories(): Observable<Category> {
    return this.httpClient.get(`${this.LIVE_URI}/categories`)
    .pipe(map((res: Category) => res));
  }

//   getCategories(): Observable<Category[]> {
//     const result = new BehaviorSubject<Category[]>([new Category()]);
//     this.httpClient.get<Category[]>(
//         `${this.LIVE_URI}/categories`)
//         .pipe()
//         .subscribe((entityResponse: Category[]) => {
//             result.next(entityResponse);
//         });

//     return result.asObservable().pipe();
// }

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
