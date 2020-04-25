import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';
import { ToasterPosition, ToastType, ToasterService } from 'foo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public ToasterPosition = ToasterPosition;
  public ToastType = ToastType;

  constructor(private _toasterService: ToasterService) {}

  ngOnInit() {
  }

  public sendToast(type: ToastType) {
    this._toasterService.toast("This is a test", type);
  }
}
