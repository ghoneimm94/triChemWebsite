import { Component, OnInit } from '@angular/core';
import { Lang } from '../../models/lang';
import { TranslateService } from '@ngx-translate/core';
import { AuthService } from '../../services/auth-service';
import { ContactInfoService } from 'src/app/services/contact-info.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  contactInfo: any;
  userLanguage: any;
  constructor(
    public translate: TranslateService,
    private _authService: AuthService,
    private _contactInfoService: ContactInfoService
  ) {
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
    const userLanguage = (this.userLanguage =
      this._authService.getUserLanguage() || 'en');
    if (userLanguage === 'en') {
      Lang.changeDirection('ltr');
    } else if (userLanguage === 'ar') {
      Lang.changeDirection('rtl');
    }
    this.translate.use(userLanguage);

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
  changeLanguage() {
    if (this.translate.currentLang === 'en') {
      this.translate.use('ar');
      Lang.changeDirection('rtl');
      this._authService.setUserLanguage('ar');
    } else {
      this.translate.use('en');
      Lang.changeDirection('ltr');
      this._authService.setUserLanguage('en');
    }
  }
}
