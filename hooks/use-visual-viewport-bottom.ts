"use client";

import { useEffect, type RefObject } from "react";

/** Keep a bottom-fixed element aligned with the visual viewport on mobile browsers. */
export function useVisualViewportBottom(
  ref: RefObject<HTMLElement | null>,
  enabled = true,
) {
  useEffect(() => {
    if (!enabled) {
      return;
    }

    const node = ref.current;
    const viewport = window.visualViewport;

    if (!node || !viewport) {
      return;
    }

    const update = () => {
      const inset = Math.max(
        0,
        window.innerHeight - viewport.height - viewport.offsetTop,
      );
      node.style.bottom = `${inset}px`;
    };

    update();
    viewport.addEventListener("resize", update);
    viewport.addEventListener("scroll", update);
    window.addEventListener("resize", update);
    window.addEventListener("orientationchange", update);

    return () => {
      viewport.removeEventListener("resize", update);
      viewport.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
      window.removeEventListener("orientationchange", update);
      node.style.removeProperty("bottom");
    };
  }, [enabled, ref]);
}
