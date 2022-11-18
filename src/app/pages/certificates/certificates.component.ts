import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CertificatesService } from 'src/app/services/certificates.service';

@Component({
  selector: 'app-certificates',
  templateUrl: './certificates.component.html',
  styleUrls: ['./certificates.component.css']
})
export class CertificatesComponent implements OnInit {
  lang: any;
  certificates: any[];

  constructor(private certificatesService: CertificatesService) {
    this.lang = environment.lang;
    this.certificates = [];
  }

  ngOnInit() {
    this.certificatesService
      .getCertificates('Certificate')
      .subscribe(result => {
        this.certificates = result.Entities.reverse();
        console.log(this.certificates);
      });
  }
}
