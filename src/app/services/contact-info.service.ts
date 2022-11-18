import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactInfoService {
  constructor(private http: HttpClient) {}

  getContactInfo(url: string, params?: any): Observable<any> {
    return this.http.get(url, { params: params });
  }
}
