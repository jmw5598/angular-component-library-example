import { Component, AfterViewInit } from '@angular/core';
import { OverlaySidePanelService, ButtonShape, ButtonStyle, ButtonSize, ButtonColor } from 'foo';

import { DashboardSidePanelComponent } from './components/dashboard-side-panel/dashboard-side-panel.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements AfterViewInit {
  public ButtonColor = ButtonColor;
  public ButtonSize = ButtonSize;
  public ButtonStyle = ButtonStyle;
  public ButtonShape = ButtonShape;
  
  constructor(
    private _overlaySidePanelService: OverlaySidePanelService
  ) {}

  ngAfterViewInit(): void {
    this._overlaySidePanelService.setContent(DashboardSidePanelComponent);
  }

  public show(): void {
    this._overlaySidePanelService.show();
  }
}
