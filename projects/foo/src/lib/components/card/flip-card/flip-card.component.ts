import { Component, OnInit, Input } from '@angular/core';

import { FlipAxis } from './flip-axis.enum';

@Component({
  selector: 'foo-flip-card',
  templateUrl: './flip-card.component.html',
  styleUrls: ['./flip-card.component.scss']
})
export class FlipCardComponent implements OnInit {
  @Input()
  public flipAxis: FlipAxis;
  
  public isFlipped: boolean;

  constructor() {
    this.isFlipped = false;
    this.flipAxis = FlipAxis.Y;
  }

  ngOnInit(): void {
  }

  public flipCard(): void {
    this.isFlipped = !this.isFlipped;
  }
}
