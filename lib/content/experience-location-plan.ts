/**
 * Phases 2–4: data structure, map behavior, and file plan (reference).
 */

export const experienceDataStructure = {
  entry: {
    location: "Single display string for timeline",
    locationPins:
      "Array of map pins per role. Multi-location roles list each place.",
    pinFields: ["id", "label", "coordinates", "isRemote?", "relatedNote?"],
  },
  dicebridge: {
    model: "Parent org metadata on Code Raccoon pins, not a separate job row",
    accraNote: "Child company of Dicebridge Training GmbH.",
    hattingenPin: "Parent company location for Dicebridge Training GmbH",
  },
} as const;

export const experienceMapBehavior = {
  grouping: "Pins with identical coordinates merge into one marker",
  multiLocation:
    "Same role on multiple pins shows that role when any linked pin is selected",
  panelFields: [
    "Company",
    "Role",
    "Period",
    "Location (pin label)",
    "Summary",
    "Related location note",
  ],
  remoteStyle: "Dashed marker ring when pin.isRemote is true",
} as const;

export const experienceImplementationFiles = [
  "lib/content/types.ts",
  "lib/content/experience-coordinates.ts",
  "lib/content/experience.ts",
  "lib/content/experience-map.ts",
  "components/experience-map/experience-location-panel.tsx",
  "components/editorial/experience-index-entry.tsx",
  "components/pages/experience-page-content.tsx",
  "components/home/home-experience-preview-section.tsx",
  "app/experience/page.tsx",
] as const;
