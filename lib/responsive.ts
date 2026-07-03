/**
 * Responsive system — Phase 9
 *
 * Mobile-first editorial layouts. Preserve whitespace on small screens.
 */

import { LAYOUT } from "./layout";

export const RESPONSIVE = {
  breakpoints: LAYOUT.breakpoints,
  navHeight: "4rem",
  heroMinHeight: {
    mobile: "55vh",
    tablet: "65vh",
    desktop: "70vh",
  },
  mapMinHeight: {
    mobile: "16rem",
    tablet: "20rem",
    desktop: "28rem",
  },
  touchTarget: "2.75rem",
} as const;

export type ResponsiveBreakpoint = keyof typeof RESPONSIVE.breakpoints;
