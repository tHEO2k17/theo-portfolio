"use client";

import { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import type { ExperienceWorkLocation } from "@/lib/content/experience-map";
import { MobileDrawerPanel } from "@/components/layout/mobile-drawer-panel";
import { Drawer } from "@/components/ui/drawer";
import { useDrawerA11y } from "@/hooks/use-drawer-a11y";
import { ExperienceLocationPanel } from "./experience-location-panel";

type ExperienceMapClientProps = {
  locations: ExperienceWorkLocation[];
};

const MAP_STYLE = "mapbox://styles/mapbox/light-v11";

function createMarkerElement(isRemote: boolean) {
  const button = document.createElement("button");
  button.type = "button";
  button.className = [
    "experience-map-marker",
    isRemote ? "experience-map-marker--remote" : "",
  ]
    .filter(Boolean)
    .join(" ");
  button.setAttribute("aria-label", "View work location");
  button.innerHTML =
    '<span class="experience-map-marker__ring" aria-hidden="true"></span><span class="experience-map-marker__dot" aria-hidden="true"></span>';
  return button;
}

export function ExperienceMapClient({ locations }: ExperienceMapClientProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<mapboxgl.Map | null>(null);
  const markerElementsRef = useRef<Map<string, HTMLButtonElement>>(new Map());
  const markersRef = useRef<mapboxgl.Marker[]>([]);
  const selectRef = useRef<(id: string) => void>(() => {});

  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [sheetOpen, setSheetOpen] = useState(false);
  const { contentRef, captureTrigger } = useDrawerA11y(sheetOpen);

  const selected =
    locations.find((location) => location.id === selectedId) ?? null;

  selectRef.current = (id: string) => {
    setSelectedId(id);

    markerElementsRef.current.forEach((element, locationId) => {
      element.classList.toggle(
        "experience-map-marker--selected",
        locationId === id,
      );
    });

    const location = locations.find((entry) => entry.id === id);
    if (location && mapRef.current) {
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      mapRef.current.flyTo({
        center: [location.coordinates[1], location.coordinates[0]],
        zoom: Math.max(mapRef.current.getZoom(), 6),
        duration: prefersReducedMotion ? 0 : 500,
        essential: true,
      });
    }

    if (window.matchMedia("(max-width: 767px)").matches) {
      const marker = markerElementsRef.current.get(id);
      if (marker) {
        captureTrigger(marker);
      }
      setSheetOpen(true);
    }
  };

  useEffect(() => {
    const token = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;
    if (!token || !containerRef.current) return;

    mapboxgl.accessToken = token;

    const bounds = new mapboxgl.LngLatBounds();
    for (const location of locations) {
      bounds.extend([location.coordinates[1], location.coordinates[0]]);
    }

    const map = new mapboxgl.Map({
      container: containerRef.current,
      style: MAP_STYLE,
      bounds,
      fitBoundsOptions: { padding: 72, maxZoom: 5.5 },
      minZoom: 1.5,
      maxZoom: 12,
      attributionControl: false,
      cooperativeGestures: false,
      dragRotate: false,
      pitchWithRotate: false,
    });

    map.addControl(
      new mapboxgl.AttributionControl({ compact: true }),
      "bottom-right",
    );
    map.addControl(new mapboxgl.NavigationControl({ showCompass: false }), "top-right");
    map.touchZoomRotate.disableRotation();

    mapRef.current = map;
    markerElementsRef.current.clear();

    markersRef.current = locations.map((location) => {
      const element = createMarkerElement(location.isRemote);
      element.addEventListener("click", () => selectRef.current(location.id));
      markerElementsRef.current.set(location.id, element);

      return new mapboxgl.Marker({ element, anchor: "center" })
        .setLngLat([location.coordinates[1], location.coordinates[0]])
        .addTo(map);
    });

    return () => {
      for (const marker of markersRef.current) {
        marker.remove();
      }
      markersRef.current = [];
      markerElementsRef.current.clear();
      map.remove();
      mapRef.current = null;
    };
  }, [locations]);

  return (
    <div className="experience-map">
      <div className="experience-map__layout">
        <div className="experience-map__map-wrap">
          <div
            ref={containerRef}
            className="experience-map__canvas"
            role="application"
            aria-label="Interactive map of work locations"
          />
        </div>

        <aside
          className="experience-map__panel hidden md:block"
          aria-live="polite"
        >
          <ExperienceLocationPanel location={selected} />
        </aside>
      </div>

      <p className="experience-map__mobile-hint md:hidden px-layout-6 py-layout-4 text-text-tertiary type-body-sm">
        Pinch to zoom. Tap a marker to view role details.
      </p>

      <Drawer open={sheetOpen} onOpenChange={setSheetOpen} handleOnly autoFocus={false}>
        <MobileDrawerPanel
          title={selected ? selected.label : "Work location"}
          hideTitle
          className="experience-map-sheet"
          contentRef={contentRef}
        >
          <ExperienceLocationPanel location={selected} />
        </MobileDrawerPanel>
      </Drawer>
    </div>
  );
}
