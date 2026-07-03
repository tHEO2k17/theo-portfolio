import type { Metadata } from "next";
import { SitePageShell } from "@/components/site-page-shell";
import { StructuredData } from "@/components/structured-data";
import { ProcessPageContent } from "@/components/pages/process-page-content";
import { getPageSocialMetadata } from "@/lib/seo";
import { getWebPageSchema } from "@/lib/structured-data";

const description = "How I understand, build, ship, and refine work.";

export const metadata: Metadata = {
  title: "Process",
  description,
  alternates: {
    canonical: "https://theopaintsil.online/process",
  },
  ...getPageSocialMetadata({
    title: "Process",
    description,
    path: "/process",
  }),
};

const structuredData = getWebPageSchema({
  title: "Process",
  description,
  path: "/process",
  breadcrumbs: [
    { name: "Home", path: "/" },
    { name: "Process", path: "/process" },
  ],
});

export default function ProcessPage() {
  return (
    <>
      <StructuredData data={structuredData} />
      <SitePageShell>
        <ProcessPageContent />
      </SitePageShell>
    </>
  );
}
