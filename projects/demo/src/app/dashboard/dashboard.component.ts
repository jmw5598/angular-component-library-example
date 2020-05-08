import { Component, AfterViewInit } from '@angular/core';
import { OverlaySidePanelService } from 'foo';

import { DashboardSidePanelComponent } from './components/dashboard-side-panel/dashboard-side-panel.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements AfterViewInit {
  
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
