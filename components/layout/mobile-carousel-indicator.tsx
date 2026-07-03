"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

type MobileCarouselIndicatorProps = {
  count: number;
  activeIndex: number;
};

function formatIndex(value: number) {
  return String(value).padStart(2, "0");
}

export function MobileCarouselIndicator({
  count,
  activeIndex,
}: MobileCarouselIndicatorProps) {
  const [fading, setFading] = useState(false);

  useEffect(() => {
    setFading(true);
    const timer = window.setTimeout(() => setFading(false), 100);
    return () => window.clearTimeout(timer);
  }, [activeIndex]);

  if (count <= 1) return null;

  const progress = ((activeIndex + 1) / count) * 100;

  return (
    <div className="mobile-carousel-indicator" aria-hidden={false}>
      <p
        className={cn(
          "mobile-carousel-indicator__index",
          fading && "mobile-carousel-indicator__index--fading",
        )}
        aria-hidden="true"
      >
        {formatIndex(activeIndex + 1)}
      </p>
      <div
        className="mobile-carousel-indicator__track"
        role="progressbar"
        aria-valuenow={activeIndex + 1}
        aria-valuemin={1}
        aria-valuemax={count}
        aria-label={`Slide ${activeIndex + 1} of ${count}`}
      >
        <div
          className="mobile-carousel-indicator__fill"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}
