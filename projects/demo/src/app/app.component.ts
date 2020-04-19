import { Component, OnInit } from '@angular/core';

import { AlertType } from 'foo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public AT = AlertType;
  public alertType: AlertType;
  public alertIsVisible: boolean;
  public alertMessage: string;
  public alertIconClass: string;
  public alertIsDismissible: boolean

  constructor() {
    this.alertType = AlertType.INFO;
    this.alertIsDismissible = false;
    this.alertMessage = 'This is an example alert with our new reusable component';
    this.alertIconClass = 'fas fa-info-circle';
    this.alertIsDismissible = true;
  }
  ngOnInit() {
    setTimeout(() => this.alertIsVisible = true, 2000);
    setTimeout(() => this.alertIsVisible = false, 4000);
  }
}
