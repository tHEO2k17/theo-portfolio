import type { Metadata } from "next";
import { SitePageShell } from "@/components/site-page-shell";
import { StructuredData } from "@/components/structured-data";
import { ProcessPageContent } from "@/components/pages/process-page-content";
import { getWebPageSchema } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Process",
  description:
    "How I understand, build, ship, and refine work.",
  alternates: {
    canonical: "https://theopaintsil.online/process",
  },
};

const structuredData = getWebPageSchema({
  title: "Process",
  description:
    "How I understand, build, ship, and refine work.",
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
