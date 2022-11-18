import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/services/news.service';
import { environment } from 'src/environments/environment';
import { prefillHostVars } from '@angular/core/src/render3/instructions';

@Component({
  selector: 'app-news-andevents',
  templateUrl: './news-andevents.component.html',
  styleUrls: ['./news-andevents.component.css']
})
export class NewsAndeventsComponent implements OnInit {
  news: any[];
  pagesize: number;
  pageNumber: number;
  metaData: any;
  clickedIndex: number;
  pagesCount: any[];
  public lang: any;

  constructor(private _newsService: NewsService) {
    this.news = [];
    this.pageNumber = 0;
    this.pagesize = 9;
    this.lang = environment.lang;
    this.metaData = {};
    this.clickedIndex = 0;
    this.pagesCount = [];
  }

  ngOnInit() {
    this._newsService
      .getNews('News', ++this.pageNumber, this.pagesize)
      .subscribe(result => {
        this.news = result.Entities;
        this.metaData = result.MetaData;
        let i = 0;
        for (; i < result.MetaData.PageCount; i++) {
          this.pagesCount.push(i);
        }

        console.log(result);
      });
  }

  loadNewsAndEvents(pageNumber: number, pageSize: number) {
    this._newsService
      .getNews('News', pageNumber, pageSize)
      .subscribe(result => {
        this.news = result.Entities;
      });
  }

  next() {
    if (this.clickedIndex + 1 === this.pagesCount.length) {
      return;
    }

    this.loadNewsAndEvents(++this.pageNumber, this.pagesize);
    this.clickedIndex++;
  }

  prev() {
    if (this.clickedIndex === 0) {
      return;
    }

    this.loadNewsAndEvents(--this.pageNumber, this.pagesize);
    this.clickedIndex--;
  }
}
