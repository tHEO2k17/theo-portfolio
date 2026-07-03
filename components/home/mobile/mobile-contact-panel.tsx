import { contactIntro, getContactPrimaryChannels } from "@/lib/content/contact";
import { typography } from "@/lib/typography";
import { cn } from "@/lib/utils";
import { ContactChannel, EditorialLink } from "@/components/editorial";
import { MobilePanelShell } from "@/components/layout/mobile-panel-shell";

export function MobileContactPanel() {
  const [email] = getContactPrimaryChannels();

  return (
    <MobilePanelShell>
      <div className="mobile-carousel-slide__body">
        <p className={cn(typography.body, "text-text-secondary")}>
          {contactIntro.description}
        </p>
        {email ? (
          <ContactChannel
            href={email.href}
            value={email.value}
            external={false}
          />
        ) : null}
        <EditorialLink href="/contact">Full contact page</EditorialLink>
      </div>
    </MobilePanelShell>
  );
}
