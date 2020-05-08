import { Component, OnInit, Input } from '@angular/core';
import { SpinnerSize } from './spinner-size.enum';
import { OverlayLoaderStyle } from './overlay-loader-style.enum';
import { FADE_IN_OUT } from '../_shared/animations/fade-in-out.animation';

@Component({
  selector: 'foo-overlay-loader',
  templateUrl: './overlay-loader.component.html',
  styleUrls: ['./overlay-loader.component.scss'],
  animations: [FADE_IN_OUT]
})
export class OverlayLoaderComponent implements OnInit {
  @Input()
  public isLoading: boolean;

  @Input()
  public overlayStyle: OverlayLoaderStyle;

  @Input()
  public spinnerSize: SpinnerSize;

  constructor() {
    this.spinnerSize = SpinnerSize.MEDIUM;
    this.overlayStyle = OverlayLoaderStyle.DIM_DARK;
    this.isLoading = false;
  }

  ngOnInit(): void {
  }

}
