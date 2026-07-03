/**
 * Layout system — Phase 2
 *
 * Grid: 4 columns (mobile) · 8 columns (tablet) · 12 columns (desktop)
 * Spacing scale: 8 · 16 · 24 · 32 · 48 · 64 · 96 · 128 px
 * Prose width: ~65 characters (42rem)
 */

export const LAYOUT = {
  columns: { mobile: 4, tablet: 8, desktop: 12 },
  spacing: {
    1: 8,
    2: 16,
    3: 24,
    4: 32,
    6: 48,
    8: 64,
    12: 96,
    16: 128,
  },
  maxWidth: "90rem",
  proseWidth: "42rem",
  breakpoints: {
    tablet: 768,
    desktop: 1024,
  },
  /** Desktop editorial split — min-width 1024px only */
  desktop: {
    split: "desktop-split",
    splitContent: "desktop-split__content",
    meaningPanel: "desktop-meaning-panel",
    containerWide: "layout-container--wide",
  },
  tokens: {
    maxContent: "90rem",
    maxWide: "90rem",
    gutter: "clamp(1.5rem, 6vw, 6rem)",
    proseWide: "52rem",
  },
} as const;
