import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LayoutComponent } from './core/layout/layout/layout.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { ProductsComponent } from './pages/products/products.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { CertificatesCategoriesComponent } from './pages/certificates-categories/certificates-categories.component';
import { CertificatesComponent } from './pages/certificates/certificates.component';
import { CustomerCertificatesComponent } from './pages/customer-certificates/customer-certificates.component';
import { NewsAndeventsComponent } from './pages/news-andevents/news-andevents.component';
import { NewsAndeventsDetailsComponent } from './pages/news-andevents-details/news-andevents-details.component';
import { HistoryComponent } from './pages/history/history.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { HistorySingleProjectComponent } from './pages/history-single-project/history-single-project.component';
import { SearchResultsComponent } from './pages/search-results/search-results.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: HomeComponent },
      { path: 'home', component: HomeComponent },
      { path: 'aboutUs', component: AboutUsComponent },
      { path: 'categories', component: CategoriesComponent },
      { path: 'products/:categoryId', component: ProductsComponent },
      { path: 'productDetails/:productId', component: ProductDetailsComponent },
      {
        path: 'certificatesCategories',
        component: CertificatesCategoriesComponent
      },
      { path: 'certificates', component: CertificatesComponent },
      {
        path: 'customercertificates',
        component: CustomerCertificatesComponent
      },
      { path: 'newsAndEvents', component: NewsAndeventsComponent },
      {
        path: 'newsAndeventsdetails/:id',
        component: NewsAndeventsDetailsComponent
      },
      { path: 'history', component: HistoryComponent },
      {
        path: 'historySingleProject',
        component: HistorySingleProjectComponent
      },
      { path: 'contactUs', component: ContactUsComponent },
      { path: 'search/:query', component: SearchResultsComponent },
      { path: '**', component: NotFoundComponent }
    ],
    component: LayoutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
