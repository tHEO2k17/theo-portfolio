"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type WritingMobileTopicsBarProps = {
  children: ReactNode;
  className?: string;
  "aria-labelledby"?: string;
};

function getSiteNavHeight() {
  if (typeof window === "undefined") {
    return 64;
  }

  const value = getComputedStyle(document.documentElement).getPropertyValue(
    "--site-nav-height",
  );
  const parsed = Number.parseFloat(value);
  return Number.isFinite(parsed) ? parsed : 64;
}

export function WritingMobileTopicsBar({
  children,
  className,
  "aria-labelledby": ariaLabelledBy,
}: WritingMobileTopicsBarProps) {
  const sentinelRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLElement>(null);
  const [pinned, setPinned] = useState(false);
  const [barHeight, setBarHeight] = useState(0);

  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel) return;

    const navHeight = getSiteNavHeight();
    const observer = new IntersectionObserver(
      ([entry]) => {
        setPinned(!entry.isIntersecting);
      },
      {
        root: null,
        threshold: 0,
        rootMargin: `-${navHeight}px 0px 0px 0px`,
      },
    );

    observer.observe(sentinel);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const bar = barRef.current;
    if (!bar) return;

    const measure = () => setBarHeight(bar.offsetHeight);
    measure();

    const resizeObserver = new ResizeObserver(measure);
    resizeObserver.observe(bar);

    return () => resizeObserver.disconnect();
  }, []);

  return (
    <div className="writing-mobile-index__topics-wrap">
      <div
        ref={sentinelRef}
        className="writing-mobile-index__topics-sentinel"
        aria-hidden="true"
      />
      {pinned ? (
        <div
          className="writing-mobile-index__topics-spacer"
          style={{ height: barHeight }}
          aria-hidden="true"
        />
      ) : null}
      <section
        ref={barRef}
        aria-labelledby={ariaLabelledBy}
        className={cn(
          "writing-mobile-index__topics writing-mobile-index__topics-bar",
          pinned && "writing-mobile-index__topics-bar--pinned",
          className,
        )}
      >
        {children}
      </section>
    </div>
  );
}
