import { trigger, style, animate, transition } from '@angular/animations';

export const FADE_IN_OUT = trigger('fadeInOut', [
  transition(':enter', [
    style({ opacity: 0 }),
    animate('0.1s', style({ opacity: 1 }))
  ]),
  transition(':leave', [
    style({ opacity: 1 }),
    animate('0.1s', style({ opacity: 0 }))
  ])
])