import { Component, OnInit } from '@angular/core';

import { SpinnerSize, OverlayStyle } from 'foo';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public SpinnerSize = SpinnerSize;
  public OverlayStyle = OverlayStyle;

  public isLoading: boolean = true;

  constructor() {
    setTimeout(() => this.isLoading = false, 2000);
  }

  ngOnInit(): void {
  }

}
