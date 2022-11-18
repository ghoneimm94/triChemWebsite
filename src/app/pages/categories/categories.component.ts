import { Component, OnInit } from '@angular/core';
import { CategoriesService } from 'src/app/services/categories.service';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
declare let $: any;
@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  categories: any[];
  categoriesWithProducts: any[];
  lang: any;
  query: string;
  public hide: boolean;

  constructor(
    private _categoriesService: CategoriesService,
    private router: Router
  ) {
    this.categories = [];
    this.categoriesWithProducts = [];
    this.lang = environment.lang;
    this.query = '';
  }

  ngOnInit() {
    $(document).ready(function() {
      $('.carousel').carousel();
    });

    this._categoriesService.getCategories('Category').subscribe(result => {
      this.categories = result.Entities.reverse();
    });

    this._categoriesService
      .getCategories('Category/GetWithProducts')
      .subscribe(result => {
        this.categoriesWithProducts = result.Entities.reverse();
        console.log(result);
      });
  }

  onKeydownEvent(event: KeyboardEvent): void {
    if (event.keyCode === 13) {
      this.router.navigateByUrl('search/' + $('#search').val());
    }
  }
}
