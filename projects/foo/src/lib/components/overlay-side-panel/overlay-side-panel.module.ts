import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OverlaySidePanelService } from './overlay-side-panel.service';
import { OverlaySidePanelComponent } from './overlay-side-panel.component';

@NgModule({
  declarations: [
    OverlaySidePanelComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    OverlaySidePanelComponent
  ],
  providers: [
    OverlaySidePanelService
  ]
})
export class OverlaySidePanelModule { }
