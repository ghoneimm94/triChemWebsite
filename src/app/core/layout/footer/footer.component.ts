import { Component, OnInit } from '@angular/core';
import { ContactInfoService } from 'src/app/services/contact-info.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  contactInfo: any;

  constructor(private _contactInfoService: ContactInfoService) {
    this.contactInfo = {
      aboutUs: '',
      facebook: '',
      twitter: '',
      linkedIn: '',
      mobileNum: '',
      salesMail: '',
      location: ''
    };
  }

  ngOnInit() {
    this._contactInfoService.getContactInfo('ContactInfo').subscribe(result => {
      result.Entities.forEach(element => {
        switch (element.Code) {
          case 'c001': {
            this.contactInfo.salesMail = element.Description;
            break;
          }
          case 'c002': {
            this.contactInfo.mobileNum = element.Description;
            break;
          }
          case 'c003': {
            this.contactInfo.facebook = element.Description;
            break;
          }
          case 'c004': {
            this.contactInfo.twitter = element.Description;
            break;
          }
          case 'c005': {
            this.contactInfo.linkedIn = element.Description;
            break;
          }
          case 'c006': {
            this.contactInfo.aboutUs = element.Description;
            break;
          }
          case 'c007': {
            this.contactInfo.location = element.Description;
            break;
          }
        }
      });

      console.log(result.Entities);
    });
  }
}
