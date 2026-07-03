"use client";

import { useCallback, useEffect, useRef } from "react";

const DRAWER_CONTENT_SELECTOR = '[data-slot="drawer-content"]';
const DEFAULT_FOCUS_SELECTOR = ".mobile-drawer-panel__close";

type UseDrawerA11yOptions = {
  focusSelector?: string;
};

export function useDrawerA11y(
  open: boolean,
  options: UseDrawerA11yOptions = {},
) {
  const returnFocusRef = useRef<HTMLElement | null>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const captureTrigger = useCallback((element?: HTMLElement | null) => {
    returnFocusRef.current =
      element ??
      (document.activeElement instanceof HTMLElement
        ? document.activeElement
        : null);

    element?.blur();
  }, []);

  useEffect(() => {
    if (!open) {
      const trigger = returnFocusRef.current;
      if (trigger?.isConnected) {
        trigger.focus();
      }
      return;
    }

    let frame2 = 0;
    const frame1 = requestAnimationFrame(() => {
      frame2 = requestAnimationFrame(() => {
        const root = contentRef.current?.closest<HTMLElement>(
          DRAWER_CONTENT_SELECTOR,
        );
        if (!root) return;

        const selector = options.focusSelector ?? DEFAULT_FOCUS_SELECTOR;
        root
          .querySelector<HTMLElement>(selector)
          ?.focus({ preventScroll: true });
      });
    });

    return () => {
      cancelAnimationFrame(frame1);
      cancelAnimationFrame(frame2);
    };
  }, [open, options.focusSelector]);

  return { contentRef, captureTrigger };
}
