import { Component, OnInit } from '@angular/core';
import {
  NgxGalleryOptions,
  NgxGalleryImage,
  NgxGalleryAnimation
} from 'ngx-gallery';
import { ProductsService } from 'src/app/services/products.service';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
declare let $: any;
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];
  id: any;
  categoryName: string;
  ctegoryId: any;
  details: any;
  lang: any;
  relatedProducts: any[];

  constructor(
    private _productsService: ProductsService,
    private router: ActivatedRoute,
    private _router: Router
  ) {
    this.details = {};
    this.lang = environment.lang;
    this.relatedProducts = [];
  }

  ngOnInit() {
    this.id = this.router.snapshot.paramMap.get('productId');
    this.categoryName = this.router.snapshot.paramMap.get('categoryName');
    this.ctegoryId = this.router.snapshot.paramMap.get('ctegoryId');

    this.galleryOptions = [
      { previewZoom: true, previewRotate: true },
      {
        breakpoint: 500,
        width: '300px',
        height: '300px',
        thumbnailsColumns: 2
      },
      { breakpoint: 300, width: '100%', height: '200px', thumbnailsColumns: 2 }
    ];

    this._productsService
      .getProductDetails('Product', this.id)
      .subscribe(result => {
        this.details = result.Entity;
        const images = [];
        this.details.ImageURLs.forEach(image => {
          const j = {
            small: image,
            medium: image,
            big: image
          };
          images.push(j);
        });
        console.log(result);
        this.galleryImages = images;
        console.log('gallery');
        
        console.log(this.details);
        
      });

    this._productsService
      .getRelatedProducts('Product/GetRelated', this.id)
      .subscribe(result => {
        this.relatedProducts = result.Entities;
        console.log(this.relatedProducts);
      });
  }

  onKeydownEvent(event: KeyboardEvent): void {
    if (event.keyCode === 13) {
      this._router.navigateByUrl('search/' + $('#search').val());
    }
  }
}
