import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  constructor(private http: HttpClient) {}

  getNews(
    url: string,
    pageNumber?: number,
    pagesize?: number
  ): Observable<any> {
    return this.http.get(
      url + '?PageNumber=' + pageNumber + '&PageSize=' + pagesize
    );
  }
}
