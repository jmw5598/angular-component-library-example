import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';

import { OverlaySidePanelModule, ButtonModule } from 'foo';
import { DashboardSidePanelComponent } from './components/dashboard-side-panel/dashboard-side-panel.component';

@NgModule({
  declarations: [
    DashboardComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    OverlaySidePanelModule,
    ButtonModule
  ],
  entryComponents: [
    DashboardSidePanelComponent
  ]
})
export class DashboardModule { }
