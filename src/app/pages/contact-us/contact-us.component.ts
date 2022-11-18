import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ContactInfoService } from 'src/app/services/contact-info.service';
declare let google: any;
@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  lang: any;
  contactInfo: any;
  map: any;

  constructor(private _contactInfoService: ContactInfoService) {
    this.lang = environment.lang;
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

      console.log(this.contactInfo);
    });
  }
}
