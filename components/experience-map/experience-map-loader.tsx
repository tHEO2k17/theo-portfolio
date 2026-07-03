"use client";

import dynamic from "next/dynamic";
import type { ExperienceWorkLocation } from "@/lib/content/experience-map";
import { ExperienceMapFallback } from "./experience-map-fallback";

const ExperienceMapClient = dynamic(
  () =>
    import("./experience-map-client").then(
      (module) => module.ExperienceMapClient,
    ),
  {
    ssr: false,
    loading: () => <ExperienceMapFallback variant="loading" />,
  },
);

type ExperienceMapLoaderProps = {
  locations: ExperienceWorkLocation[];
};

export function ExperienceMapLoader({ locations }: ExperienceMapLoaderProps) {
  const hasToken = Boolean(process.env.NEXT_PUBLIC_MAPBOX_TOKEN);

  if (!hasToken) {
    return <ExperienceMapFallback variant="missing-token" />;
  }

  return <ExperienceMapClient locations={locations} />;
}
