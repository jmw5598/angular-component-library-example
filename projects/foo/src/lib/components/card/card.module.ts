import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardComponent } from './card.component';
import { CardBodyComponent } from './card-body.component';
import { CardFooterComponent } from './card-footer.component';
import { CardHeaderComponent } from './card-header.component';
import { FlipCardComponent } from './flip-card/flip-card.component';
import { BackCardComponent } from './shared/back-card/back-card.component';
import { FrontCardComponent } from './shared/front-card/front-card.component';

@NgModule({
  declarations: [
    CardComponent,
    CardBodyComponent,
    CardFooterComponent,
    CardHeaderComponent,
    FlipCardComponent,
    BackCardComponent,
    FrontCardComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CardComponent,
    CardBodyComponent,
    CardFooterComponent,
    CardHeaderComponent,
    FlipCardComponent,
    BackCardComponent,
    FrontCardComponent,
  ]
})
export class CardModule { }
