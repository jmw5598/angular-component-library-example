import { Component, OnInit } from '@angular/core';
import { OverlaySidePanelService } from 'foo';

import { MessagesSidePanelComponent } from './components/messages-side-panel/messages-side-panel.component';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {

  constructor(
    private _overlaySidePanelService: OverlaySidePanelService
  ) {}

  ngOnInit(): void {
    this._overlaySidePanelService.setContent(MessagesSidePanelComponent);
  }

}
