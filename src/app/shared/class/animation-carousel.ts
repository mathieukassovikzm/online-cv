import {
  animate,
  animation,
  group,
  query,
  style,
  transition,
  trigger,
  useAnimation,
} from '@angular/animations';

// =========================
// Fade
// =========================
const fadeIn = animation([
  style({ opacity: 0 }), // start state
  animate(
    '{{time}} cubic-bezier(0.785, 0.135, 0.15, 0.86)',
    style({ opacity: 1 })
  ),
]);
const fadeOut = animation([
  animate(
    '{{time}} cubic-bezier(0.785, 0.135, 0.15, 0.86)',
    style({ opacity: 0 })
  ),
]);

export const carouselFadeAnimation = trigger('carouselAnimation', [
  transition(':enter', [useAnimation(fadeIn, { params: { time: '0.5s' } })]),
  transition(':leave', [useAnimation(fadeOut, { params: { time: '0.5s' } })]),
]);

// =========================
// Slide - 1 element
// =========================
export const animationSimpleCarousel = trigger('slideInOut', [
  transition(
    ':decrement',
    group([
      query(
        ':enter',
        [
          style({
            transform: 'translateX(-200%)',
            opacity: 0.7,
          }),
          animate(
            '1s ease-in-out',
            style({
              transform: 'translateX(0%)',
              opacity: 1,
            })
          ),
        ],
        { optional: true }
      ),
      query(
        ':leave',
        [
          animate(
            '1s ease-in',
            style({
              transform: 'translateX(100%)',
              opacity: 0.9,
            })
          ),
        ],
        { optional: true }
      ),
    ])
  ),
  transition(
    ':increment',
    group([
      query(
        ':enter',
        [
          style({
            transform: 'translateX(200%)',
            opacity: 0.7,
          }),
          animate(
            '1s ease-in-out',
            style({
              transform: 'translateX(0%)',
              opacity: 1,
            })
          ),
        ],
        { optional: true }
      ),
      query(
        ':leave',
        [
          animate(
            '1s ease-in',
            style({
              transform: 'translateX(-100%)',
              opacity: 0.9,
            })
          ),
        ],
        { optional: true }
      ),
    ])
  ),
]);

// =========================
// Slide - Multiples element
// =========================
const animationDuration = '1s ease-in-out';

export const containerSlideAnimation = animation([
  style({ transform: 'translateX(0)' }),
  animate(
    '{{animationDuration}}',
    style({ transform: 'translateX({{slideWidthTotal}}px)' })
  ),
]);

export const animationMultipleCarousel = trigger('slideInOut', [
  transition(
    ':decrement',
    useAnimation(containerSlideAnimation, {
      params: {
        slideWidthTotal: '{{slideWidthTotal}}',
        animationDuration: animationDuration,
      },
    })
  ),
  transition(':increment', [
    useAnimation(containerSlideAnimation, {
      params: {
        slideWidthTotal: '-{{slideWidthTotal}}',
        animationDuration: animationDuration,
      },
    }),
  ]),
]);
