import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Category } from '../models/category';
import { Observable, BehaviorSubject } from 'rxjs';
import { map, catchError, skip } from 'rxjs/operators';
import { Product } from '../models/product';

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

//   getCategories(): Observable<Category[]> {
//     const result = new BehaviorSubject<Category[]>([]);
//     this.httpClient.get<Category>(
//         `${this.LIVE_URI}/categories`, this.httpOptions)
//         .pipe()
//         .subscribe((res: any) => {
//             if (res) {
//                 result.next(res);
//             } else {
//                 result.next(null);
//             }
//         });

//     return result.asObservable().pipe(skip(1));
// }

  addCategory(category: Category) {
    console.log('service : ', category);
    return this.httpClient
      .post(`${this.LIVE_URI}/categories`, category, this.httpOptions)
      .pipe(
        map(res => {
          console.log(res);
          return res;
        })
      ).subscribe();
  }

  updateCategory(category: Category) {
    console.log('service : ', category);
    return this.httpClient
      .put(`${this.LIVE_URI}/categories`, category, this.httpOptions)
      .pipe(
        map(res => {
          console.log(res);
          return res;
        })
      ).subscribe();
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

  addProduct(product: Product) {
    return this.httpClient
      .post(`${this.LIVE_URI}/products`, product, this.httpOptions)
      .pipe(
        // catchError((err, caught) => {
        //    console.log('error:', err);
        //   }),
        map(res => {
          console.log(res);
          return res;
        })
      ).subscribe();
  }

  updateProduct(product: Product) {
    console.log('service : ', product);
    return this.httpClient
      .put(`${this.LIVE_URI}/products`, product, this.httpOptions)
      .pipe(
        // catchError((err, caught) => {
        //    console.log('error:', err);
        //   }),
        map(res => {
          console.log(res);
          return res;
        })
      ).subscribe();
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

  // getProducts() {
  //   return this.httpClient.get(`${this.LIVE_URI}/products`);
  // }

  getProductById() {
    return this.httpClient.get(`${this.LIVE_URI}/products`);
  }
}
