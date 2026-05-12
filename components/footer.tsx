"use client";

import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border/30 py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-8">
          {/* Main footer content */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Branding */}
            <div>
              <h3 className="text-2xl font-bold text-accent-warm mb-2">TP</h3>
              <p className="text-text-secondary text-sm">Theophilus Paintsil</p>
              <p className="text-text-tertiary text-sm">
                Senior Software Engineer & Technical Leader
              </p>
            </div>

            {/* Quick links */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">
                Quick Links
              </h4>
              <ul className="space-y-2">
                {[
                  { label: "Home", href: "#hero" },
                  { label: "About", href: "#about" },
                  { label: "Experience", href: "#experience" },
                  { label: "Articles", href: "/articles" },
                  { label: "Contact", href: "#contact" },
                ].map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-text-secondary hover:text-accent-warm transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social & Contact */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Connect</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="mailto:tpaintsil@live.com"
                    className="text-text-secondary hover:text-accent-warm transition-colors text-sm"
                  >
                    Email
                  </a>
                </li>
                <li>
                  <a
                    href="https://linkedin.com/in/theopaintsil"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-text-secondary hover:text-accent-warm transition-colors text-sm"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+233241852603"
                    className="text-text-secondary hover:text-accent-warm transition-colors text-sm"
                  >
                    Phone
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-border/30" />

          {/* Bottom footer */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
            <p className="text-text-tertiary">
              © {currentYear} Theophilus Paintsil. All rights reserved.
            </p>
            <p className="text-text-tertiary italic">
              Built with clarity, discipline, and intent.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
