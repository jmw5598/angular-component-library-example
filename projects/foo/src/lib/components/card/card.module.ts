import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardComponent } from './card.component';
import { CardBodyComponent } from './card-body.component';
import { CardFooterComponent } from './card-footer.component';
import { CardHeaderComponent } from './card-header.component';

@NgModule({
  declarations: [
    CardComponent,
    CardBodyComponent,
    CardFooterComponent,
    CardHeaderComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CardComponent,
    CardBodyComponent,
    CardFooterComponent,
    CardHeaderComponent
  ]
})
export class CardModule { }
