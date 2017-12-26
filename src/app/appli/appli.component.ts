import { Component, OnInit } from '@angular/core';
import { LicensesService } from './license.service';
import { License } from './license.model';

@Component({
  selector: 'app-appli',
  templateUrl: './appli.component.html',
  styleUrls: ['./appli.component.css'],
  providers: [LicensesService]
})

export class AppliComponent {
  licenses: License[] = [];
  constructor (private lS: LicensesService) {};

  ngOnInit() {
    this.licenses = this.lS.Licenses;

    this.lS.addLicense('HR','ORACLE');
    this.lS.addLicense('Manufacturing','SAP');
    this.lS.addLicense('Recruitement', 'Taleo')
    this.lS.addLicense('Recruitement', 'Taleo')
    this.lS.addLicense('Recruitement', 'Taleo')
    this.lS.addLicense('Recruitement', 'Taleo')
    this.lS.addLicense('Recruitement', 'Taleo')
    this.lS.addLicense('Recruitement', 'Taleo')
    this.lS.addLicense('Recruitement', 'Taleo')
    this.lS.addLicense('Recruitement', 'Taleo')
    this.lS.addLicense('Recruitement', 'Taleo')
    this.lS.addLicense('Recruitement', 'Taleo')
  }
}
