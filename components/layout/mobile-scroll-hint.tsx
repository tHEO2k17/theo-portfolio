"use client";

import { cn } from "@/lib/utils";
import { MinimalScrollChevron } from "./minimal-scroll-chevron";
import {
  scrollElementDown,
  scrollElementToTop,
  useCoverScrollHint,
  useMobileScrollChromeEnabled,
  useScrollToTop,
  useScrollToTopEnabled,
} from "@/hooks/use-scroll-hint";

type MobileCoverScrollHintProps = {
  enabled?: boolean;
  className?: string;
};

/** Scroll-down hint for cover heroes only (route intro or carousel first slide). */
export function MobileCoverScrollHint({
  enabled = true,
  className,
}: MobileCoverScrollHintProps) {
  const chromeEnabled = useMobileScrollChromeEnabled();
  const visible = useCoverScrollHint(enabled && chromeEnabled);

  if (!visible) return null;

  return (
    <button
      type="button"
      className={cn(
        "mobile-scroll-control mobile-scroll-control--down mobile-scroll-control--cover",
        className,
      )}
      aria-label="Scroll down"
      onClick={() => scrollElementDown(document.documentElement)}
    >
      <MinimalScrollChevron direction="down" />
    </button>
  );
}

/** Scroll-to-top control after the user scrolls down. */
export function MobileScrollToTop() {
  const enabled = useScrollToTopEnabled();
  const visible = useScrollToTop(enabled);

  if (!visible) return null;

  return (
    <button
      type="button"
      className="mobile-scroll-control mobile-scroll-control--up"
      aria-label="Scroll to top"
      onClick={() => scrollElementToTop(document.documentElement)}
    >
      <MinimalScrollChevron direction="up" />
    </button>
  );
}
