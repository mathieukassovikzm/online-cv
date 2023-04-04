import {
  animate,
  query,
  stagger,
  style,
  transition,
  trigger,
} from '@angular/animations';

export const listFadeFadeAnimation = trigger('filterAnimation', [
  transition(':enter, * => 0, * => -1', []),
  transition(':increment', [
    query(
      ':enter',
      [
        style({ opacity: 0, width: 0 }),
        stagger(50, [
          animate('300ms ease-out', style({ opacity: 1, width: '*' })),
        ]),
      ],
      { optional: true }
    ),
  ]),
  transition(':decrement', [
    query(
      ':leave',
      [
        stagger(50, [
          animate('300ms ease-out', style({ opacity: 0, width: 0 })),
        ]),
      ],
      { optional: true }
    ),
  ]),
]);
