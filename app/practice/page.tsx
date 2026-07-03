import type { Metadata } from "next";
import { SitePageShell } from "@/components/site-page-shell";
import { StructuredData } from "@/components/structured-data";
import { PracticePageContent } from "@/components/pages/practice-page-content";
import { getPageSocialMetadata } from "@/lib/seo";
import { getWebPageSchema } from "@/lib/structured-data";

const description =
  "How I think, build, and keep learning. Software engineering, technical leadership, and cross-platform delivery.";

export const metadata: Metadata = {
  title: "Practice",
  description,
  alternates: {
    canonical: "https://theopaintsil.online/practice",
  },
  ...getPageSocialMetadata({
    title: "Practice",
    description,
    path: "/practice",
  }),
};

const structuredData = getWebPageSchema({
  title: "Practice",
  description,
  path: "/practice",
  breadcrumbs: [
    { name: "Home", path: "/" },
    { name: "Practice", path: "/practice" },
  ],
});

export default function PracticePage() {
  return (
    <>
      <StructuredData data={structuredData} />
      <SitePageShell>
        <PracticePageContent />
      </SitePageShell>
    </>
  );
}
