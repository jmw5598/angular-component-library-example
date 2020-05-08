import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

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
  ]
})
export class OverlaySidePanelModule { }
