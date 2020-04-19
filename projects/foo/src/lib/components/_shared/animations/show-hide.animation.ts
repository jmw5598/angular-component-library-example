import { trigger, state, style, animate, transition } from '@angular/animations';

export const SHOW_HIDE = trigger('showHide', [
  transition(':enter', [
    style({ 
      opacity: 0, 
      transform: 'scaleX(0.98) scaleY(0)',
      position: 'relative'
    }),
    animate('250ms', style({ 
      opacity: 1,
      transform: 'scale(1)'
    }))
  ]),
  transition(':leave', [
    style({ 
      opacity: 1,
      transform: 'scale(1)'
    }),
    animate('250ms', style({ 
      opacity: 0,
      transform: 'scaleX(0.98) scaleY(0)'
    }))
  ])
])