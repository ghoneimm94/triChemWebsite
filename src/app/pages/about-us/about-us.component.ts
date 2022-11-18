import { Component, OnInit } from '@angular/core';
import { ClientFeedbackService } from 'src/app/services/client-feedback.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {
  clientsFeedback: any[];
  public lang: any;

  constructor(private _clientsFeedbackService: ClientFeedbackService) {
    this.clientsFeedback = [];
    this.lang = environment.lang;
  }

  ngOnInit() {
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
  }
}
