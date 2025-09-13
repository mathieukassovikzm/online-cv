import {
  animate,
  style,
  transition,
  trigger
} from '@angular/animations';

// =========================
// Fade
// =========================
export const textFadeAnimation = trigger('fadeAnimation', [
  transition(':enter', [
    style({ opacity: 0 }),
    animate('400ms ease-in', style({ opacity: 1 })),
  ]),
  transition(':leave', [
    animate('400ms ease-out', style({ opacity: 0 })),
  ]),
  // pour les changements de valeur sur le même élément
  transition('* <=> *', [
    style({ opacity: 0 }),
    animate('400ms ease-out', style({ opacity: 1 })),
  ]),
]);
