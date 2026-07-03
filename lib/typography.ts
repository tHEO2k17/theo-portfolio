/**
 * Typography system — Phase 3
 *
 * Scale: display 120 / 96 / 72px · headings light · body 150% line-height
 * Weights: 300 (light) and 400 (regular) only — no bold on editorial surfaces
 */

export const typography = {
  displayHero: "type-display-hero",
  displayLg: "type-display-lg",
  displayMd: "type-display-md",
  h1: "type-h1",
  h2: "type-h2",
  h3: "type-h3",
  h4: "type-h4",
  bodyLg: "type-body-lg",
  body: "type-body",
  bodySm: "type-body-sm",
  label: "type-label",
  caption: "type-caption",
  link: "type-link",
  practiceLine: "type-practice-line",
  editorial: "type-editorial",
  role: "type-role",
  prose: "type-prose",
  stat: "type-stat",
} as const;

export const TYPOGRAPHY_SCALE = {
  displayXl: 120,
  displayLg: 96,
  displayMd: 72,
  h1: 48,
  h2: 36,
  h3: 30,
  h4: 24,
  bodyLg: 18,
  body: 16,
  bodySm: 14,
  label: 12,
} as const;
