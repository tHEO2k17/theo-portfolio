import { getMobileContactChannels } from "@/lib/content/contact";
import { typography } from "@/lib/typography";
import { cn } from "@/lib/utils";

const mobileContactIcons = getMobileContactChannels();

const strokeProps = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

function ContactIcon({ type }: { type: string }) {
  if (type === "email") {
    return (
      <svg viewBox="0 0 20 20" width={22} height={22} aria-hidden="true">
        <rect x="3.5" y="5.5" width="13" height="9" {...strokeProps} />
        <path d="M3.5 6 10 11.5 16.5 6" {...strokeProps} />
      </svg>
    );
  }

  if (type === "whatsapp") {
    return (
      <svg viewBox="0 0 20 20" width={22} height={22} aria-hidden="true">
        <path
          d="M10 3.5a6.5 6.5 0 0 0-5.6 9.8L3.5 16.5l3.3-0.9A6.5 6.5 0 1 0 10 3.5Z"
          {...strokeProps}
        />
        <path d="M8 8.5h4M8 11.5h2.5" {...strokeProps} />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 20 20" width={22} height={22} aria-hidden="true">
      <rect x="4" y="4" width="12" height="12" rx="1" {...strokeProps} />
      <path d="M7 8h6M7 11h4" {...strokeProps} />
    </svg>
  );
}

type ContactIconRowProps = {
  className?: string;
};

export function ContactIconRow({ className }: ContactIconRowProps) {
  return (
    <ul className={cn("contact-icon-row", className)}>
      {mobileContactIcons.map((channel) => (
        <li key={channel.type}>
          <a
            href={channel.href}
            className="contact-icon-row__link"
            aria-label={channel.label}
            target={channel.type !== "email" ? "_blank" : undefined}
            rel={channel.type !== "email" ? "noopener noreferrer" : undefined}
          >
            <ContactIcon type={channel.type} />
            <span className={cn(typography.caption, "sr-only")}>
              {channel.label}
            </span>
          </a>
        </li>
      ))}
    </ul>
  );
}
