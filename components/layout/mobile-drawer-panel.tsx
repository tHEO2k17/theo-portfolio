"use client";

import type { ReactNode } from "react";
import {
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerTitle,
} from "@/components/ui/drawer";
import { typography } from "@/lib/typography";
import { cn } from "@/lib/utils";

type MobileDrawerPanelProps = {
  title: string;
  hideTitle?: boolean;
  className?: string;
  contentRef: React.RefObject<HTMLDivElement | null>;
  children: ReactNode;
};

export function MobileDrawerPanel({
  title,
  hideTitle = false,
  className,
  contentRef,
  children,
}: MobileDrawerPanelProps) {
  return (
    <DrawerContent
      className={cn(
        "mobile-drawer-panel border-border/30 bg-background px-layout-4 pb-layout-2 pt-layout-2",
        className,
      )}
    >
      <div
        className={cn(
          "mobile-drawer-panel__header",
          hideTitle && "mobile-drawer-panel__header--title-hidden",
        )}
      >
        <DrawerTitle
          className={cn(
            typography.h3,
            "text-foreground",
            hideTitle && "sr-only",
          )}
        >
          {title}
        </DrawerTitle>
        <DrawerDescription className="sr-only">
          {title} details
        </DrawerDescription>
        <DrawerClose asChild>
          <button
            type="button"
            className="mobile-drawer-panel__close"
            aria-label="Close"
          >
            <span aria-hidden="true">×</span>
          </button>
        </DrawerClose>
      </div>
      <div
        ref={contentRef}
        className="mobile-drawer-panel__scroll scrollbar-minimal"
        data-vaul-no-drag
      >
        {children}
      </div>
    </DrawerContent>
  );
}
