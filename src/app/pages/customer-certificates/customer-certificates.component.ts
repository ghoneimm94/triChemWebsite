import { Component, OnInit } from '@angular/core';
import { CertificatesService } from 'src/app/services/certificates.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-customer-certificates',
  templateUrl: './customer-certificates.component.html',
  styleUrls: ['./customer-certificates.component.css']
})
export class CustomerCertificatesComponent implements OnInit {
  lang: any;
  certificates: any[];

  constructor(private certificatesService: CertificatesService) {
    this.lang = environment.lang;
    this.certificates = [];
  }

  ngOnInit() {
    this.certificatesService
      .getCustomerCertificates('CustomerCertificate')
      .subscribe(result => {
        this.certificates = result.Entities.reverse();
        console.log(this.certificates);
      });
  }
}
