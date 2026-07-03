"use client";

import { usePathname } from "next/navigation";
import { useEffect, useLayoutEffect } from "react";

function scrollToTop() {
  window.scrollTo({ top: 0, left: 0, behavior: "instant" });
}

export function ScrollToTop() {
  const pathname = usePathname();

  useLayoutEffect(() => {
    scrollToTop();
  }, [pathname]);

  useEffect(() => {
    scrollToTop();

    const raf = requestAnimationFrame(scrollToTop);
    const timeout = window.setTimeout(scrollToTop, 0);

    return () => {
      cancelAnimationFrame(raf);
      window.clearTimeout(timeout);
    };
  }, [pathname]);

  return null;
}
