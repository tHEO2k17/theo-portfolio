import type { Metadata } from "next";
import { SitePageShell } from "@/components/site-page-shell";
import { StructuredData } from "@/components/structured-data";
import { ContactPageContent } from "@/components/pages/contact-page-content";
import { getPageSocialMetadata } from "@/lib/seo";
import { getWebPageSchema } from "@/lib/structured-data";

const description =
  "Based in Accra. Open to remote roles, consulting, and product work. Email, LinkedIn, or WhatsApp.";

export const metadata: Metadata = {
  title: "Contact",
  description,
  alternates: {
    canonical: "https://theopaintsil.online/contact",
  },
  ...getPageSocialMetadata({
    title: "Contact",
    description,
    path: "/contact",
  }),
};

const structuredData = getWebPageSchema({
  title: "Contact",
  description,
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
