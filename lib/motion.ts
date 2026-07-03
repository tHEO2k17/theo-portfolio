/**
 * Motion system — Phase 5
 *
 * Calm · deliberate · GPU-friendly (opacity + transform only)
 */

export const MOTION = {
  ease: "cubic-bezier(0.4, 0, 0.2, 1)",
  easePage: "cubic-bezier(0.33, 0, 0.2, 1)",
  duration: {
    fade: 400,
    base: 500,
    reveal: 600,
    page: 700,
    pageItem: 520,
    nav: 500,
  },
  reveal: {
    distance: 12,
    stagger: 80,
  },
  pageEnter: {
    distance: 8,
    stagger: 55,
    shellFade: 380,
  },
  hover: {
    scale: 1.02,
  },
} as const;

export type MotionDuration = keyof typeof MOTION.duration;
