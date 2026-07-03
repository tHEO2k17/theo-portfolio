"use client";

import type { ReactNode } from "react";
import { MobileCarousel, type MobileCarouselVariant } from "./mobile-carousel";

type HorizontalSnapProps = {
  children: ReactNode;
  className?: string;
  panelCount: number;
  showProgress?: boolean;
  showHint?: boolean;
  hintId?: string;
  label?: string;
  variant?: MobileCarouselVariant;
};

/** @deprecated Use MobileCarousel directly */
export function HorizontalSnap({
  children,
  className,
  panelCount,
  showProgress = true,
  label = "Sections",
  variant = "route",
}: HorizontalSnapProps) {
  return (
    <MobileCarousel
      className={className}
      panelCount={panelCount}
      label={label}
      variant={variant}
      showIndicator={showProgress}
    >
      {children}
    </MobileCarousel>
  );
}
