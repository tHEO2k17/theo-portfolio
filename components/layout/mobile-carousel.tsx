"use client";

import {
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
  type KeyboardEvent,
  type ReactNode,
} from "react";
import { cn } from "@/lib/utils";
import { MinimalCarouselArrow } from "./minimal-carousel-arrow";
import { MobileCarouselIndicator } from "./mobile-carousel-indicator";
import { MobileCoverScrollHint } from "./mobile-scroll-hint";

export type MobileCarouselVariant = "home" | "route" | "compact";

type MobileCarouselProps = {
  children: ReactNode;
  className?: string;
  panelCount: number;
  label: string;
  variant?: MobileCarouselVariant;
  showIndicator?: boolean;
  showArrows?: boolean;
  onActiveIndexChange?: (index: number) => void;
};

const SCROLL_DURATION_MS = 200;

function easeOutCubic(progress: number) {
  return 1 - Math.pow(1 - progress, 3);
}

function animateScrollTo(scroller: HTMLDivElement, targetLeft: number) {
  const startLeft = scroller.scrollLeft;
  const distance = targetLeft - startLeft;
  if (distance === 0) return;

  const startTime = performance.now();

  function step(now: number) {
    const elapsed = now - startTime;
    const progress = Math.min(elapsed / SCROLL_DURATION_MS, 1);
    scroller.scrollLeft = startLeft + distance * easeOutCubic(progress);
    if (progress < 1) {
      requestAnimationFrame(step);
    }
  }

  requestAnimationFrame(step);
}

export function MobileCarousel({
  children,
  className,
  panelCount,
  label,
  variant = "route",
  showIndicator = true,
  showArrows = true,
  onActiveIndexChange,
}: MobileCarouselProps) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const liveRegionId = useId();
  const scrollerId = useId();

  const updateActiveIndex = useCallback(() => {
    const scroller = scrollerRef.current;
    if (!scroller || panelCount === 0) return;

    const panelWidth = scroller.clientWidth;
    if (panelWidth === 0) return;

    const index = Math.round(scroller.scrollLeft / panelWidth);
    setActiveIndex(Math.min(Math.max(index, 0), panelCount - 1));
  }, [panelCount]);

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    updateActiveIndex();
    scroller.addEventListener("scroll", updateActiveIndex, { passive: true });
    window.addEventListener("resize", updateActiveIndex);

    return () => {
      scroller.removeEventListener("scroll", updateActiveIndex);
      window.removeEventListener("resize", updateActiveIndex);
    };
  }, [updateActiveIndex]);

  useEffect(() => {
    onActiveIndexChange?.(activeIndex);
  }, [activeIndex, onActiveIndexChange]);

  const scrollToIndex = useCallback((index: number) => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const targetLeft = scroller.clientWidth * index;

    if (prefersReducedMotion) {
      scroller.scrollTo({ left: targetLeft, behavior: "auto" });
      return;
    }

    animateScrollTo(scroller, targetLeft);
  }, []);

  function handleKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    if (event.key === "ArrowRight") {
      event.preventDefault();
      scrollToIndex(Math.min(activeIndex + 1, panelCount - 1));
    }

    if (event.key === "ArrowLeft") {
      event.preventDefault();
      scrollToIndex(Math.max(activeIndex - 1, 0));
    }
  }

  function handleArrowClick(direction: "prev" | "next") {
    scrollToIndex(
      direction === "prev" ? activeIndex - 1 : activeIndex + 1,
    );
  }

  const shouldShowIndicator = showIndicator && panelCount > 1;
  const shouldShowArrows = showArrows && panelCount > 1;
  const isAtStart = activeIndex === 0;
  const isAtEnd = activeIndex >= panelCount - 1;

  return (
    <div
      className={cn(
        "mobile-carousel",
        variant === "home" && "mobile-carousel--home",
        variant === "route" && "mobile-carousel--route",
        variant === "compact" && "mobile-carousel--compact",
        className,
      )}
    >
      <div className="mobile-carousel__viewport">
        <div
          ref={scrollerRef}
          id={scrollerId}
          className="mobile-carousel__scroller"
          role="region"
          aria-roledescription="carousel"
          aria-label={label}
          aria-describedby={liveRegionId}
          tabIndex={0}
          onKeyDown={handleKeyDown}
        >
          <div className="mobile-carousel__track">{children}</div>
        </div>

        <MobileCoverScrollHint
          enabled={activeIndex === 0}
          className="mobile-carousel__scroll-hint"
        />
      </div>

      {shouldShowIndicator || shouldShowArrows ? (
        <div className="mobile-carousel__controls">
          {shouldShowArrows ? (
            <MinimalCarouselArrow
              direction="prev"
              controlsId={scrollerId}
              disabled={isAtStart}
              onClick={() => handleArrowClick("prev")}
            />
          ) : null}

          {shouldShowIndicator ? (
            <MobileCarouselIndicator
              count={panelCount}
              activeIndex={activeIndex}
            />
          ) : null}

          {shouldShowArrows ? (
            <MinimalCarouselArrow
              direction="next"
              controlsId={scrollerId}
              disabled={isAtEnd}
              onClick={() => handleArrowClick("next")}
            />
          ) : null}
        </div>
      ) : null}

      <p id={liveRegionId} className="sr-only" aria-live="polite" aria-atomic="true">
        Slide {activeIndex + 1} of {panelCount}
      </p>
    </div>
  );
}
