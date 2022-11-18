import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { HomeComponent } from './pages/home/home.component';
import { HistoryComponent } from './pages/history/history.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { ProductsComponent } from './pages/products/products.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { NewsAndeventsComponent } from './pages/news-andevents/news-andevents.component';
import { NewsAndeventsDetailsComponent } from './pages/news-andevents-details/news-andevents-details.component';
import { CertificatesCategoriesComponent } from './pages/certificates-categories/certificates-categories.component';
import { CertificatesComponent } from './pages/certificates/certificates.component';
import { CustomerCertificatesComponent } from './pages/customer-certificates/customer-certificates.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { HeaderComponent } from './core/layout/header/header.component';
import { FooterComponent } from './core/layout/footer/footer.component';
import { LayoutComponent } from './core/layout/layout/layout.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { CarouselModule } from 'ngx-carousels';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import {
  HttpClient,
  HttpClientModule,
  HTTP_INTERCEPTORS
} from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { NgxGalleryModule } from 'ngx-gallery';
import { HistorySingleProjectComponent } from './pages/history-single-project/history-single-project.component';
import { ApiPrefixInterceptor } from './core/interceptors/api-prefix.interceptor';
import { ErrorHandlerInterceptor } from './core/interceptors/error-handler.interceptor';
import { HttpTokenInterceptor } from './core/interceptors/http.token.interceptor';
import { NgxLoadingModule } from 'ngx-loading';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { SearchResultsComponent } from './pages/search-results/search-results.component';
// required for AOT compilation
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    AboutUsComponent,
    HomeComponent,
    HistoryComponent,
    CategoriesComponent,
    ProductsComponent,
    ProductDetailsComponent,
    NewsAndeventsComponent,
    NewsAndeventsDetailsComponent,
    CertificatesCategoriesComponent,
    CertificatesComponent,
    CustomerCertificatesComponent,
    NotFoundComponent,
    HeaderComponent,
    FooterComponent,
    LayoutComponent,
    ContactUsComponent,
    HistorySingleProjectComponent,
    SearchResultsComponent
  ],
  imports: [
    MDBBootstrapModule.forRoot(),
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    NgxGalleryModule,
    CarouselModule,
    NgxLoadingModule.forRoot({})
  ],
  providers: [
    HttpClientModule,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiPrefixInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorHandlerInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpTokenInterceptor,
      multi: true
    },
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
