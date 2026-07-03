import { philosophyContent } from "@/lib/content/philosophy";
import { truncateWords } from "@/lib/text";
import { typography } from "@/lib/typography";
import { cn } from "@/lib/utils";
import { EditorialLink } from "@/components/editorial";
import { MobilePanelShell } from "@/components/layout/mobile-panel-shell";

const excerpt = truncateWords(philosophyContent.homepageExcerpt, 22);

export function MobilePhilosophyPanel() {
  return (
    <MobilePanelShell label="Philosophy">
      <div className="mobile-carousel-slide__body">
        <p className={cn(typography.body, "text-text-secondary line-clamp-4")}>
          {excerpt}
        </p>
        <EditorialLink href="/practice">Practice</EditorialLink>
      </div>
    </MobilePanelShell>
  );
}
