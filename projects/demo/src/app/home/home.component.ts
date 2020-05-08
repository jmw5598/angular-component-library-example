import { Component, OnInit } from '@angular/core';

import { SpinnerSize, OverlayLoaderStyle } from 'foo';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public SpinnerSize = SpinnerSize;
  public OverlayLoaderStyle = OverlayLoaderStyle;

  public isLoading: boolean = true;

  constructor() {
    setTimeout(() => this.isLoading = false, 2000);
  }

  ngOnInit(): void {
  }

}
