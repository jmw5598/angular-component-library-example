import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MessagesRoutingModule } from './messages-routing.module';
import { MessagesComponent } from './messages.component';

import { OverlayLoaderModule } from 'foo';
import { MessagesSidePanelComponent } from './components/messages-side-panel/messages-side-panel.component';

@NgModule({
  declarations: [MessagesComponent, MessagesSidePanelComponent],
  imports: [
    CommonModule,
    MessagesRoutingModule,
    OverlayLoaderModule
  ]
})
export class MessagesModule { }
