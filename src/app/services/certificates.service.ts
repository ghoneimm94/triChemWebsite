import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CertificatesService {
  constructor(private http: HttpClient) {}

  getCertificates(url: string): Observable<any> {
    return this.http.get(url + '?PageSize=100');
  }

  getCustomerCertificates(url: string): Observable<any> {
    return this.http.get(url + '?PageSize=100');
  }
}
