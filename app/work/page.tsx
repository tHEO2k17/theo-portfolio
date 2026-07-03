import type { Metadata } from "next";
import { SitePageShell } from "@/components/site-page-shell";
import { StructuredData } from "@/components/structured-data";
import { WorkPageContent } from "@/components/pages/work-page-content";
import { getPageSocialMetadata } from "@/lib/seo";
import { getWebPageSchema } from "@/lib/structured-data";

const description = "Selected projects in fintech, mobile, and web.";

export const metadata: Metadata = {
  title: "Work",
  description,
  alternates: {
    canonical: "https://theopaintsil.online/work",
  },
  ...getPageSocialMetadata({
    title: "Work",
    description,
    path: "/work",
  }),
};

const structuredData = getWebPageSchema({
  title: "Work",
  description,
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
