import type { Metadata } from "next";
import { SitePageShell } from "@/components/site-page-shell";
import { StructuredData } from "@/components/structured-data";
import { WorkPageContent } from "@/components/pages/work-page-content";
import { getWebPageSchema } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected projects in fintech, mobile, and web.",
  alternates: {
    canonical: "https://theopaintsil.online/work",
  },
};

const structuredData = getWebPageSchema({
  title: "Work",
  description:
    "Selected projects in fintech, mobile, and web.",
  path: "/work",
  breadcrumbs: [
    { name: "Home", path: "/" },
    { name: "Work", path: "/work" },
  ],
});

export default function WorkPage() {
  return (
    <>
      <StructuredData data={structuredData} />
      <SitePageShell>
        <WorkPageContent />
      </SitePageShell>
    </>
  );
}
