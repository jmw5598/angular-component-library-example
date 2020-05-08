import { Component, OnInit } from '@angular/core';
import { OverlaySidePanelService } from 'foo';

import { DashboardSidePanelComponent } from './components/dashboard-side-panel/dashboard-side-panel.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  
  constructor(
    private _overlaySidePanelService: OverlaySidePanelService
  ) {}

  ngOnInit(): void {
    this._overlaySidePanelService.setContent(DashboardSidePanelComponent);
  }
}
