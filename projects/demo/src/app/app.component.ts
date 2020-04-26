import { Component, OnInit } from '@angular/core';

import { CardType } from 'foo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public CardType = CardType;

  constructor() {}

  ngOnInit() {
  }
}
