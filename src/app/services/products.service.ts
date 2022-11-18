import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  constructor(private http: HttpClient) {}

  getProductsByCategoryId(url: string, categoryId: any): Observable<any> {
    return this.http.get(url + '?CategoryId=' + categoryId + '&PageSize=100');
  }

  getProductDetails(url: string, productId: any): Observable<any> {
    return this.http.get(url + '/' + productId);
  }

  getRelatedProducts(url: string, productId: any): Observable<any> {
    return this.http.get(url + '?id=' + productId);
  }

  productsSearch(url: string, query: any): Observable<any> {
    return this.http.get(url + '?query=' + query);
  }
}
