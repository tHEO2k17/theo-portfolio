"use client";

import Link from "next/link";
import { useRef, type ComponentProps } from "react";

const SWIPE_THRESHOLD_PX = 10;

type SnapLinkProps = ComponentProps<typeof Link>;

export function SnapLink({ onClick, onPointerDown, ...props }: SnapLinkProps) {
  const pointerStart = useRef<{ x: number; y: number } | null>(null);

  return (
    <Link
      {...props}
      draggable={false}
      onPointerDown={(event) => {
        pointerStart.current = { x: event.clientX, y: event.clientY };
        onPointerDown?.(event);
      }}
      onClick={(event) => {
        const start = pointerStart.current;
        pointerStart.current = null;

        if (start) {
          const dx = Math.abs(event.clientX - start.x);
          const dy = Math.abs(event.clientY - start.y);
          if (dx > SWIPE_THRESHOLD_PX || dy > SWIPE_THRESHOLD_PX) {
            event.preventDefault();
            return;
          }
        }

        onClick?.(event);
      }}
    />
  );
}
