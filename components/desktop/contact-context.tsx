import { typography } from "@/lib/typography";
import { cn } from "@/lib/utils";

const contextItems = [
  {
    region: "Based in Accra",
    detail: "Primary base. Available for leadership, consulting, and product work.",
  },
  {
    region: "Remote",
    detail: "Collaboration across time zones with teams in Europe and North America.",
  },
  {
    region: "Focus",
    detail: "Fintech, platform engineering, and technical leadership.",
  },
] as const;

export function ContactContext() {
  return (
    <aside className="contact-context">
      <p className={cn(typography.label, "text-text-tertiary mb-layout-6")}>
        Context
      </p>
      <ul className="contact-context__list">
        {contextItems.map((item) => (
          <li key={item.region} className="contact-context__item">
            <p className={cn(typography.body, "text-foreground mb-1")}>
              {item.region}
            </p>
            <p className={cn(typography.bodySm, "text-text-secondary")}>
              {item.detail}
            </p>
          </li>
        ))}
      </ul>
    </aside>
  );
}
