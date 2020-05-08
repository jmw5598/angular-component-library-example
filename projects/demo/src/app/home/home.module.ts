import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

import { OverlayLoaderModule } from 'foo';
import { HomeSidePanelComponent } from './components/home-side-panel/home-side-panel.component';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    OverlayLoaderModule
  ],
  entryComponents: [
    HomeSidePanelComponent
  ]
})
export class HomeModule { }
