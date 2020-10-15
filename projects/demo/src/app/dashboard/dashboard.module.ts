import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';

import { CheckboxModule } from 'foo';
import { DashboardSidePanelComponent } from './components/dashboard-side-panel/dashboard-side-panel.component';

@NgModule({
  declarations: [
    DashboardComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    CheckboxModule,
    FormsModule,
    ReactiveFormsModule
  ],
  entryComponents: [
    DashboardSidePanelComponent
  ]
})
export class DashboardModule { }
