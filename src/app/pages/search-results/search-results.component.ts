import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CategoriesService } from 'src/app/services/categories.service';
import { ActivatedRoute, Router } from '@angular/router';
import { LoadedRouterConfig } from '@angular/router/src/config';
import { ProductsService } from 'src/app/services/products.service';
declare let $: any;
@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {
  lang: any;
  categoriesWithProducts: any[];
  products: any[];
  query: string;

  constructor(
    private _categoriesService: CategoriesService,
    private _productsService: ProductsService,
    private router: ActivatedRoute,
    private _router: Router
  ) {
    this.lang = environment.lang;
    this.categoriesWithProducts = [];
    this.products = [];
  }

  ngOnInit() {
    this.query = this.router.snapshot.paramMap.get('query');

    $('#search').val(this.query);

    this._categoriesService
      .getCategories('Category/GetWithProducts')
      .subscribe(result => {
        this.categoriesWithProducts = result.Entities.reverse();
        console.log(result);
      });

    this._productsService
      .productsSearch('Product/GetAny', this.query)
      .subscribe(result => {
        this.products = result.Entities;
        console.log(result);
      });
  }

  onKeydownEvent(event: KeyboardEvent): void {
    if (event.keyCode === 13) {
      this.query = $('#search').val();
      this._productsService
        .productsSearch('Product/GetAny', this.query)
        .subscribe(result => {
          this.products = result.Entities;
          console.log(result);
        });
    }
  }
}
