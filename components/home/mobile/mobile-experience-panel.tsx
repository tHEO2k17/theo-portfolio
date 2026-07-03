import { experiencePreviewCopy } from "@/lib/content/experience";
import { typography } from "@/lib/typography";
import { cn } from "@/lib/utils";
import { EditorialLink } from "@/components/editorial";
import { MobilePanelShell } from "@/components/layout/mobile-panel-shell";

export function MobileExperiencePanel() {
  return (
    <MobilePanelShell>
      <div className="mobile-carousel-slide__body">
        <p className={cn(typography.body, "text-text-secondary")}>
          {experiencePreviewCopy}
        </p>
        <EditorialLink href="/experience">View roles</EditorialLink>
      </div>
    </MobilePanelShell>
  );
}
