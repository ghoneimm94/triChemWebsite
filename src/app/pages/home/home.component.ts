import { Component, OnInit } from '@angular/core';
import { ContactInfoService } from 'src/app/services/contact-info.service';
import { CategoriesService } from 'src/app/services/categories.service';
import { ClientFeedbackService } from 'src/app/services/client-feedback.service';
import { NewsService } from 'src/app/services/news.service';
import { ClientsService } from 'src/app/services/clients.service';
import { environment } from 'src/environments/environment';
declare let $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  categories: any[];
  news: any[];
  clients: any[];
  clientsFeedback: any[];
  contactInfo: any;
  public lang: any;
  public hide: boolean;
  constructor(
    private _categoriesService: CategoriesService,
    private _clientsFeedbackService: ClientFeedbackService,
    private _newsService: NewsService,
    private _clientsService: ClientsService
  ) {
    this.categories = [];
    this.news = [];
    this.clients = [];
    this.clientsFeedback = [];
    this.lang = environment.lang;
    this.hide = true;
  }

  ngOnInit() {
    $('.carousel').carousel();

    $('#carouselId').on('slid.bs.carousel', function(s) {
      if (s.to === 11 || s.to === 10) {
        $('#jkfd').hide();
      } else {
        $('#jkfd').show();
      }
    });

    setTimeout(() => {
      this.hide = false;
    }, 4000);

    this._categoriesService.getCategories('Category').subscribe(result => {
      this.categories = result.Entities.reverse();
      console.log(result);
    });

    this._clientsFeedbackService
      .getClientsFeedback('ClientFeedback')
      .subscribe(result => {
        for (let i = 0; i < result.Entities.length; i += 2) {
          const tempObj = {
            '0': result.Entities[i],
            '1': result.Entities[i + 1]
          };
          this.clientsFeedback.push(tempObj);
        }
        console.log(this.clientsFeedback);
      });

    this._newsService.getNews('News', 1, 3).subscribe(result => {
      if (result.Entities && result.Entities.length > 3) {
        this.news.push(result.Entities[0]);
        this.news.push(result.Entities[1]);
        this.news.push(result.Entities[2]);
      } else {
        this.news = result.Entities;
      }

      console.log(this.news);
    });

    this._clientsService.getClients('Client').subscribe(result => {
      this.clients = result.Entities;
      console.log(this.clients);
    });
  }
}
