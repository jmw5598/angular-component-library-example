import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { ToastMessage } from './toast-message.model';
import { ToasterPosition } from './toaster-position.enum';
import { ToasterService } from './toaster.service';
import { SHOW_HIDE } from '../_shared/animations/show-hide.animation';

@Component({
  selector: 'foo-toaster',
  templateUrl: './toaster.component.html',
  styleUrls: ['./toaster.component.scss'],
  animations: [SHOW_HIDE]
})
export class ToasterComponent implements OnInit, OnDestroy {
  @Input()
  public position: ToasterPosition;

  private _toasterSubject$: Subject<void>;
  public messages: ToastMessage[];

  constructor(private _toasterService: ToasterService) {
    this.position = ToasterPosition.BOTTOM_RIGHT;
    this._toasterSubject$ = new Subject<void>();
    this.messages = [];
  }

  ngOnInit(): void {
    this._toasterService.onToastMessage()
      .pipe(takeUntil(this._toasterSubject$))
      .subscribe(message => this._handleToastMessage(message))
  }

  private _handleToastMessage(message: ToastMessage) {
    if (this._isToasterPositionTop()) {
      this.messages.unshift(message);
    } else {
      this.messages.push(message);
    }
    setTimeout(() => this._removeMessage(message), message.duration);
  }

  private _isToasterPositionTop() {
    return this.position === ToasterPosition.TOP_LEFT ||
      this.position === ToasterPosition.TOP_CENTER ||
      this.position === ToasterPosition.TOP_RIGHT;
  }

  private _removeMessage(message: ToastMessage) {
    const index: number = this.messages.findIndex(e => e.id === message.id);
    if (index > -1) {
      this.messages.splice(index, 1);
    }
  }

  ngOnDestroy(): void {
    this._toasterSubject$.next();
    this._toasterSubject$.complete();
  }
}
