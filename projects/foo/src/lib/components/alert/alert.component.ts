import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

import { SHOW_HIDE } from '../_shared/animations/show-hide.animation';
import { AlertType } from './alert-type.enum';

@Component({
  selector: 'foo-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [SHOW_HIDE]
})
export class AlertComponent {
  @Input()
  public type: AlertType;

  @Input()
  public message: string;

  @Input()
  public iconClass: string | string[];

  @Input()
  public dismissible: boolean;

  @Output()
  public visibleChange: EventEmitter<boolean>;

  private isVisible: boolean;

  constructor() {
    this.type = AlertType.PRIMARY;
    this.message = "",
    this.isVisible = true;
    this.dismissible = false;
    this.visibleChange = new EventEmitter<boolean>();
  }

  @Input()
  public set visible(value: boolean) {
    this.isVisible = value;
  }

  public get visible(): boolean {
    return this.isVisible;
  }

  public dismiss(): void {
    this.isVisible = !this.isVisible;
    this.visibleChange.emit(this.isVisible);
  }
}
