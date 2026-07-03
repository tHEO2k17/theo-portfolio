import { contactChannels } from "@/lib/content/contact";
import { typography } from "@/lib/typography";
import { cn } from "@/lib/utils";
import { EditorialLink } from "@/components/editorial";

const footerColumns = [
  {
    title: "Practice",
    links: [
      { label: "Home", href: "/" },
      { label: "Practice", href: "/practice" },
      { label: "Process", href: "/process" },
    ],
  },
  {
    title: "Work",
    links: [
      { label: "Work", href: "/work" },
      { label: "Experience", href: "/experience" },
    ],
  },
  {
    title: "Writing",
    links: [{ label: "All writing", href: "/articles" }],
  },
  {
    title: "Connect",
    links: [
      { label: "Contact", href: "/contact" },
      {
        label: "Email",
        href: contactChannels.find((c) => c.type === "email")?.href ?? "#",
      },
      {
        label: "LinkedIn",
        href: contactChannels.find((c) => c.type === "linkedin")?.href ?? "#",
        external: true,
      },
      {
        label: "GitHub",
        href: contactChannels.find((c) => c.type === "github")?.href ?? "#",
        external: true,
      },
    ],
  },
] as const;

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="hidden md:block bg-background border-t border-border/30 py-layout-12">
      <div className="layout-container">
        <div className="footer-grid mb-layout-12">
          {footerColumns.map((column) => (
            <div key={column.title}>
              <h4
                className={cn(typography.label, "text-text-tertiary mb-layout-4")}
              >
                {column.title}
              </h4>
              <ul className="space-y-layout-2">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <EditorialLink
                      href={link.href}
                      external={"external" in link && link.external}
                    >
                      {link.label}
                    </EditorialLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className={cn(typography.bodySm, "text-text-tertiary")}>
          © {currentYear} Theophilus Paintsil
        </p>
      </div>
    </footer>
  );
}
