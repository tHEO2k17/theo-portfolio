import { flattenExperiencePins } from "./experience";
import type { ExperienceMapEngagement } from "./types";

export type ExperienceWorkLocation = {
  id: string;
  label: string;
  coordinates: [number, number];
  isRemote: boolean;
  engagements: ExperienceMapEngagement[];
};

function coordinateKey([lat, lng]: [number, number]) {
  return `${lat.toFixed(4)},${lng.toFixed(4)}`;
}

function toLocationId(label: string) {
  return label
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

type PinGroup = {
  label: string;
  coordinates: [number, number];
  isRemote: boolean;
  engagements: ExperienceMapEngagement[];
};

export function getExperienceWorkLocations(): ExperienceWorkLocation[] {
  const groups = new Map<string, PinGroup>();

  for (const { entry, pin } of flattenExperiencePins()) {
    const key = coordinateKey(pin.coordinates);
    const existing = groups.get(key);

    const engagement: ExperienceMapEngagement = {
      entry,
      locationLabel: pin.label,
      relatedNote: pin.relatedNote,
    };

    if (existing) {
      existing.engagements.push(engagement);
      existing.isRemote = existing.isRemote && Boolean(pin.isRemote);
      continue;
    }

    groups.set(key, {
      label: pin.label,
      coordinates: pin.coordinates,
      isRemote: Boolean(pin.isRemote),
      engagements: [engagement],
    });
  }

  return Array.from(groups.values()).map((group) => ({
    id: toLocationId(group.label),
    label: group.label,
    coordinates: group.coordinates,
    isRemote: group.isRemote,
    engagements: group.engagements,
  }));
}
