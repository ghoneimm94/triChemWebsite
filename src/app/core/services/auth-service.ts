import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
export const LANG = 'lang';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) {}

  setUserLanguage(langPar: string) {
    localStorage.setItem(LANG, langPar);
    environment.lang.userLang = langPar;
    console.log(environment.lang);
  }
  getUserLanguage() {
    return localStorage.getItem(LANG);
  }
}
