import { Component, AfterViewInit } from '@angular/core';
import { OverlaySidePanelService } from 'foo';

import { MessagesSidePanelComponent } from './components/messages-side-panel/messages-side-panel.component';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements AfterViewInit {

  constructor(
    private _overlaySidePanelService: OverlaySidePanelService
  ) {}

  ngAfterViewInit(): void {
    this._overlaySidePanelService.setContent(MessagesSidePanelComponent);
  }

  public show(): void {
    this._overlaySidePanelService.show();
  }
}
