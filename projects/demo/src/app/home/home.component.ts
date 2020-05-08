import { Component, OnInit } from '@angular/core';
import { OverlaySidePanelService } from 'foo';

import { HomeSidePanelComponent } from './components/home-side-panel/home-side-panel.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private _overlaySidePanelService: OverlaySidePanelService
  ) {}

  ngOnInit(): void {
    this._overlaySidePanelService.setContent(HomeSidePanelComponent);
  }
}
