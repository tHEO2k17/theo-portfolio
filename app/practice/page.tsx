import type { Metadata } from "next";
import { SitePageShell } from "@/components/site-page-shell";
import { StructuredData } from "@/components/structured-data";
import { PracticePageContent } from "@/components/pages/practice-page-content";
import { getWebPageSchema } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Practice",
  description:
    "How I think, build, and keep learning. Software engineering, technical leadership, and cross-platform delivery.",
  alternates: {
    canonical: "https://theopaintsil.online/practice",
  },
};

const structuredData = getWebPageSchema({
  title: "Practice",
  description:
    "How I think, build, and keep learning. Software engineering, technical leadership, and cross-platform delivery.",
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
