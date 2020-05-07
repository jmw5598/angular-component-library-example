import { Component, OnInit, Input } from '@angular/core';
import { SpinnerSize } from './spinner-size.enum';
import { OverlayStyle } from './overlay-style.enum';
import { trigger, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'foo-overlay-loader',
  templateUrl: './overlay-loader.component.html',
  styleUrls: ['./overlay-loader.component.scss'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('200ms', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        style({ opacity: 1 }),
        animate('200ms', style({ opacity: 0 }))
      ])
    ])
  ]
})
export class OverlayLoaderComponent implements OnInit {
  @Input()
  public isLoading: boolean;

  @Input()
  public overlayStyle: OverlayStyle;

  @Input()
  public spinnerSize: SpinnerSize;

  constructor() {
    this.spinnerSize = SpinnerSize.MEDIUM;
    this.isLoading = false;
  }

  ngOnInit(): void {
  }

}
