/**
 * Illustration system
 *
 * Thin SVG only · 1px stroke · low opacity · no stock imagery
 *
 * Visual language: Ghanaian engineering practice through minimalism.
 * Geometry draws from repetition, infrastructure, and coordinate work —
 * inspired by Adinkra rhythm and West African craft, never literal symbols.
 */

export const ILLUSTRATION = {
  strokeWidth: 1,
  opacity: {
    whisper: 0.1,
    quiet: 0.16,
    subtle: 0.22,
  },
  fillOpacity: 0.03,
} as const;

export type IllustrationOpacity = keyof typeof ILLUSTRATION.opacity;

/** Meaningful route accents only — no decorative overlays. */
export type IllustrationVariant =
  | "scaffolding"
  | "cadence"
  | "rhythm"
  | "structure"
  | "coordinates"
  | "infrastructure"
  | "modules";

export type IllustrationPosition =
  | "top-right"
  | "center-right"
  | "bottom-right"
  | "top-left"
  | "bottom-left";

export const ILLUSTRATION_MEANING: Record<
  IllustrationVariant,
  { meaning: string; routes: string[] }
> = {
  scaffolding: {
    meaning: "Engineering under construction — beams, tension, load paths.",
    routes: ["process"],
  },
  cadence: {
    meaning: "Repetition and measure — cadence in delivery and review.",
    routes: ["process"],
  },
  rhythm: {
    meaning: "Woven rhythm — parallel lines and stepped breaks, craft geometry.",
    routes: ["writing", "articles"],
  },
  structure: {
    meaning: "Systems plan — rooms, seams, and boundaries in architecture.",
    routes: ["practice"],
  },
  coordinates: {
    meaning: "Global coordinates — work from Accra across regions.",
    routes: ["experience"],
  },
  infrastructure: {
    meaning: "Layers and flow — water, pipes, and platform strata.",
    routes: ["contact", "work"],
  },
  modules: {
    meaning: "Composable modules — bounded units in larger systems.",
    routes: ["work"],
  },
};
