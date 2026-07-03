"use client";

import { useCallback, useEffect, useState } from "react";

const SCROLL_THRESHOLD = 8;
const SCROLL_TOP_THRESHOLD = 160;

export function canScrollDown(
  element: HTMLElement,
  threshold = SCROLL_THRESHOLD,
): boolean {
  return (
    element.scrollHeight > element.clientHeight + threshold &&
    element.scrollTop + element.clientHeight < element.scrollHeight - threshold
  );
}

export function canScrollUp(
  element: HTMLElement,
  threshold = SCROLL_TOP_THRESHOLD,
): boolean {
  return element.scrollTop > threshold;
}

export function scrollElementDown(element: HTMLElement) {
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;
  const remaining =
    element.scrollHeight - element.scrollTop - element.clientHeight;
  const distance = Math.min(element.clientHeight * 0.85, remaining);

  element.scrollBy({
    top: distance,
    behavior: prefersReducedMotion ? "auto" : "smooth",
  });
}

export function scrollElementToTop(element: HTMLElement) {
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;

  element.scrollTo({
    top: 0,
    behavior: prefersReducedMotion ? "auto" : "smooth",
  });
}

export function useScrollHintTarget(
  target: HTMLElement | null,
  enabled = true,
) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!enabled || !target) {
      setVisible(false);
      return;
    }

    const check = () => setVisible(canScrollDown(target));

    check();
    target.addEventListener("scroll", check, { passive: true });
    window.addEventListener("resize", check);

    const observer = new ResizeObserver(check);
    observer.observe(target);

    return () => {
      target.removeEventListener("scroll", check);
      window.removeEventListener("resize", check);
      observer.disconnect();
    };
  }, [enabled, target]);

  return visible;
}

export function useCoverScrollHint(enabled = true) {
  const [visible, setVisible] = useState(false);

  const check = useCallback(() => {
    if (!enabled) {
      setVisible(false);
      return;
    }

    const root = document.documentElement;
    const atCover = window.scrollY < 48;
    setVisible(atCover && canScrollDown(root));
  }, [enabled]);

  useEffect(() => {
    if (!enabled) {
      setVisible(false);
      return;
    }

    check();
    window.addEventListener("scroll", check, { passive: true });
    window.addEventListener("resize", check);

    const observer = new ResizeObserver(check);
    observer.observe(document.body);

    return () => {
      window.removeEventListener("scroll", check);
      window.removeEventListener("resize", check);
      observer.disconnect();
    };
  }, [check, enabled]);

  return visible;
}

export function useScrollToTop(enabled = true) {
  const [visible, setVisible] = useState(false);

  const check = useCallback(() => {
    if (!enabled) {
      setVisible(false);
      return;
    }

    setVisible(canScrollUp(document.documentElement));
  }, [enabled]);

  useEffect(() => {
    if (!enabled) {
      setVisible(false);
      return;
    }

    check();
    window.addEventListener("scroll", check, { passive: true });
    window.addEventListener("resize", check);

    return () => {
      window.removeEventListener("scroll", check);
      window.removeEventListener("resize", check);
    };
  }, [check, enabled]);

  return visible;
}

export function useIsMobileViewport() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(max-width: 767px)");
    const update = () => setIsMobile(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  return isMobile;
}

function useMobileBrowseOnlyMode() {
  const [isBrowseOnly, setIsBrowseOnly] = useState(false);

  useEffect(() => {
    const update = () => {
      const main = document.querySelector(".site-main");
      const homeCarouselOnly =
        main?.classList.contains("site-main--home") &&
        !document.querySelector(".home-vertical-fallback:target");
      const workBrowseOnly = Boolean(
        document.querySelector(".route-mobile-strip--work"),
      );

      setIsBrowseOnly(homeCarouselOnly || workBrowseOnly);
    };

    update();
    window.addEventListener("hashchange", update);
    window.addEventListener("resize", update);

    return () => {
      window.removeEventListener("hashchange", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return isBrowseOnly;
}

export function useMobileScrollChromeEnabled() {
  const isMobile = useIsMobileViewport();
  const isBrowseOnly = useMobileBrowseOnlyMode();

  return isMobile && !isBrowseOnly;
}
