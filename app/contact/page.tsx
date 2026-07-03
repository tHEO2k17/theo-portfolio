import type { Metadata } from "next";
import { SitePageShell } from "@/components/site-page-shell";
import { StructuredData } from "@/components/structured-data";
import { ContactPageContent } from "@/components/pages/contact-page-content";
import { getWebPageSchema } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Based in Accra. Open to remote roles, consulting, and product work. Email, LinkedIn, or WhatsApp.",
  alternates: {
    canonical: "https://theopaintsil.online/contact",
  },
};

const structuredData = getWebPageSchema({
  title: "Contact",
  description:
    "Based in Accra. Open to remote roles, consulting, and product work. Email, LinkedIn, or WhatsApp.",
  path: "/contact",
  breadcrumbs: [
    { name: "Home", path: "/" },
    { name: "Contact", path: "/contact" },
  ],
});

export default function ContactPage() {
  return (
    <>
      <StructuredData data={structuredData} />
      <SitePageShell>
        <ContactPageContent />
      </SitePageShell>
    </>
  );
}
