import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CategoriesService } from 'src/app/services/categories.service';
import { ActivatedRoute, Router } from '@angular/router';
import { LoadedRouterConfig } from '@angular/router/src/config';
import { ProductsService } from 'src/app/services/products.service';

declare let $: any;
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  lang: any;
  categoriesWithProducts: any[];
  products: any[];
  id: string;

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
    this.id = this.router.snapshot.paramMap.get('categoryId');

    this._categoriesService
      .getCategories('Category/GetWithProducts')
      .subscribe(result => {
        this.categoriesWithProducts = result.Entities.reverse();
        console.log(result);
      });

    this._productsService
      .getProductsByCategoryId('Product', this.id)
      .subscribe(result => {
        this.products = result.Entities.reverse();
        console.log(result);
      });
  }

  onKeydownEvent(event: KeyboardEvent): void {
    if (event.keyCode === 13) {
      this._router.navigateByUrl('search/' + $('#search').val());
    }
  }
}
