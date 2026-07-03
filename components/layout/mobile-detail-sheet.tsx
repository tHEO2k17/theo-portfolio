"use client";

import { useState, type ReactNode } from "react";
import { Drawer } from "@/components/ui/drawer";
import { MobileDrawerPanel } from "@/components/layout/mobile-drawer-panel";
import { MobileSheetProvider } from "@/components/layout/mobile-sheet-context";
import { useDrawerA11y } from "@/hooks/use-drawer-a11y";
import { typography } from "@/lib/typography";
import { cn } from "@/lib/utils";

type MobileDetailSheetProps = {
  label: string;
  title: string;
  children: ReactNode;
  className?: string;
  triggerClassName?: string;
};

export function MobileDetailSheet({
  label,
  title,
  children,
  className,
  triggerClassName,
}: MobileDetailSheetProps) {
  const [open, setOpen] = useState(false);
  const { contentRef, captureTrigger } = useDrawerA11y(open);

  return (
    <>
      <button
        type="button"
        className={cn("editorial-disclosure__trigger", triggerClassName)}
        onClick={(event) => {
          captureTrigger(event.currentTarget);
          setOpen(true);
        }}
      >
        <span className={cn(typography.link, "motion-link")}>{label}</span>
      </button>

      <Drawer open={open} onOpenChange={setOpen} handleOnly autoFocus={false}>
        <MobileDrawerPanel
          title={title}
          className={className}
          contentRef={contentRef}
        >
          <MobileSheetProvider>
            <div className="editorial-disclosure__body editorial-disclosure__body--sheet">
              {children}
            </div>
          </MobileSheetProvider>
        </MobileDrawerPanel>
      </Drawer>
    </>
  );
}
