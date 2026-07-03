import {
  contactAvailability,
  contactContextLines,
  contactIntro,
  contactSchedule,
  getDesktopContactChannels,
  getMobileContactChannels,
} from "@/lib/content/contact";
import { typography } from "@/lib/typography";
import { cn } from "@/lib/utils";
import { CalendlyInline } from "@/components/contact/calendly-inline";
import { ContactChannel } from "@/components/editorial";
import {
  PageBackLink,
  PageHeader,
  PageLayout,
  RouteMobileHero,
} from "@/components/layout";
import { contactRouteHero } from "@/lib/content/route-heroes";

const contactChannels = getDesktopContactChannels();

function ContactDetails({
  channels,
  className,
}: {
  channels: ReturnType<typeof getMobileContactChannels>;
  className?: string;
}) {
  return (
    <div className={className}>
      <div className="mb-layout-8 md:mb-layout-10">
        {contactContextLines.map((line) => (
          <p
            key={line}
            className={cn(
              typography.body,
              line === contactContextLines[0]
                ? "text-foreground mb-1"
                : "text-text-secondary max-w-prose",
            )}
          >
            {line}
          </p>
        ))}
      </div>

      <p className={cn(typography.label, "text-text-tertiary mb-layout-4")}>
        Available for
      </p>
      <ul className="contact-focus-list mb-layout-8 md:mb-layout-10">
        {contactAvailability.map((item) => (
          <li key={item}>
            <p className={cn(typography.body, "text-text-secondary")}>{item}</p>
          </li>
        ))}
      </ul>

      <p className={cn(typography.label, "text-text-tertiary mb-layout-6")}>
        Channels
      </p>
      <ul className="space-y-layout-6 max-w-prose">
        {channels.map((channel) => (
          <li key={channel.type}>
            <ContactChannel
              href={channel.href}
              value={channel.value}
              label={channel.label}
              external={channel.type !== "email"}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

function ContactSchedule({ className }: { className?: string }) {
  return (
    <section
      className={cn("contact-page-grid__schedule", className)}
      aria-labelledby="contact-schedule-heading"
    >
      <header className="contact-schedule__header">
        <h2
          id="contact-schedule-heading"
          className={cn(typography.label, "text-text-tertiary")}
        >
          {contactSchedule.title}
        </h2>
        <p className={cn(typography.bodySm, "text-text-secondary")}>
          {contactSchedule.subtitle}
        </p>
        <p className={cn(typography.caption, "text-text-tertiary")}>
          {contactSchedule.publicNote}
        </p>
      </header>
      <CalendlyInline />
    </section>
  );
}

export function ContactPageContent() {
  const mobileChannels = getMobileContactChannels();

  return (
    <PageLayout className="contact-page-shell">
      <RouteMobileHero
        className="col-span-content"
        label={contactRouteHero.label}
        title={contactRouteHero.title}
        descriptor={contactRouteHero.descriptor}
        description={contactRouteHero.description}
      />

      <div className="col-span-content hidden md:block">
        <PageHeader
          eyebrow={contactIntro.eyebrow}
          title={contactIntro.title}
          description={contactIntro.description}
        />
      </div>

      <div className="col-span-full contact-page-grid mobile-read-surface">
        <ContactDetails
          channels={mobileChannels}
          className="contact-page-grid__main md:hidden"
        />

        <ContactDetails
          channels={contactChannels}
          className="contact-page-grid__main hidden md:block"
        />

        <ContactSchedule />
      </div>

      <PageBackLink />
    </PageLayout>
  );
}
