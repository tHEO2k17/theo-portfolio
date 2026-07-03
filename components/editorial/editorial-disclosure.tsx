"use client";

import { useState } from "react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { MobileDetailSheet } from "@/components/layout/mobile-detail-sheet";
import { useMobileSheetContext } from "@/components/layout/mobile-sheet-context";
import { typography } from "@/lib/typography";
import { cn } from "@/lib/utils";

type EditorialDisclosureProps = {
  label: string;
  children: React.ReactNode;
  className?: string;
  defaultOpen?: boolean;
  sheetTitle?: string;
};

export function EditorialDisclosure({
  label,
  children,
  className,
  defaultOpen = false,
  sheetTitle,
}: EditorialDisclosureProps) {
  const [desktopOpen, setDesktopOpen] = useState(defaultOpen);
  const inSheet = useMobileSheetContext();
  const title = sheetTitle ?? label;

  if (inSheet) {
    return (
      <div
        className={cn(
          "editorial-disclosure__body editorial-disclosure__body--nested",
          className,
        )}
      >
        {children}
      </div>
    );
  }

  return (
    <div className={cn("editorial-disclosure", className)}>
      <div className="editorial-disclosure__mobile md:hidden">
        <MobileDetailSheet label={label} title={title}>
          {children}
        </MobileDetailSheet>
      </div>

      <Collapsible
        open={desktopOpen}
        onOpenChange={setDesktopOpen}
        className="editorial-disclosure__desktop hidden md:block"
      >
        <CollapsibleTrigger className="editorial-disclosure__trigger">
          <span className={cn(typography.link, "motion-link")}>{label}</span>
        </CollapsibleTrigger>
        <CollapsibleContent className="editorial-disclosure__content">
          <div className="editorial-disclosure__body">{children}</div>
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
}
