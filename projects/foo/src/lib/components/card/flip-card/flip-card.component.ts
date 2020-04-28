import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'foo-flip-card',
  templateUrl: './flip-card.component.html',
  styleUrls: ['./flip-card.component.scss']
})
export class FlipCardComponent implements OnInit {
  public isFlipped: boolean;

  constructor() {
    this.isFlipped = false;
  }

  ngOnInit(): void {
  }

  public flipCard(): void {
    this.isFlipped = !this.isFlipped;
  }
}
