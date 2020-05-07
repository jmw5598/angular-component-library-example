import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlayLoaderComponent } from './overlay-loader.component';

@NgModule({
  declarations: [
    OverlayLoaderComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    OverlayLoaderComponent
  ]
})
export class OverlayLoaderModule { }
