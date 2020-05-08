import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { CardModule, OverlayLoaderModule, OverlaySidePanelModule } from 'foo';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CardModule,
    OverlayLoaderModule,
    OverlaySidePanelModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
