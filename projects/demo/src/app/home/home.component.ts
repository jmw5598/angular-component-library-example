import { Component, AfterViewInit } from '@angular/core';
import { OverlaySidePanelService } from 'foo';

import { HomeSidePanelComponent } from './components/home-side-panel/home-side-panel.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit {

  constructor(
    private _overlaySidePanelService: OverlaySidePanelService
  ) {}

  ngAfterViewInit(): void {
    this._overlaySidePanelService.setContent(HomeSidePanelComponent);
  }

  public show(): void {
    this._overlaySidePanelService.show();
  }
}
