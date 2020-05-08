import { Component, OnInit } from '@angular/core';

import { SpinnerSize, OverlayLoaderStyle } from 'foo';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {
  public SpinnerSize = SpinnerSize;
  public OverlayLoaderStyle = OverlayLoaderStyle;

  public isLoading: boolean = true;

  constructor() {
    setTimeout(() => this.isLoading = false, 2000);
  }

  ngOnInit(): void {
  }

}
