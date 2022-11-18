import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  constructor(private http: HttpClient) {}

  getCategories(url: string): Observable<any> {
    return this.http.get(url);
  }

  GetWithProducts(url: string): Observable<any> {
    return this.http.get(url);
  }
}
