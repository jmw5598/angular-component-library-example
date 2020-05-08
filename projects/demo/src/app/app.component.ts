import { Component, OnInit } from '@angular/core';
import { OverlaySidePanelService } from 'foo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(
    private _overlaySidePanelService: OverlaySidePanelService
  ) {}

  ngOnInit() {
  }

  public show(): void {
    this._overlaySidePanelService.show();
  }
}
