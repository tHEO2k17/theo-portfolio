import type { Metadata } from "next";
import { SitePageShell } from "@/components/site-page-shell";
import { StructuredData } from "@/components/structured-data";
import { ExperiencePageContent } from "@/components/pages/experience-page-content";
import { getPageSocialMetadata } from "@/lib/seo";
import { getWebPageSchema } from "@/lib/structured-data";

const description = "Places, teams, and products that shaped how I work.";

export const metadata: Metadata = {
  title: "Experience",
  description,
  alternates: {
    canonical: "https://theopaintsil.online/experience",
  },
  ...getPageSocialMetadata({
    title: "Experience",
    description,
    path: "/experience",
  }),
};

const structuredData = getWebPageSchema({
  title: "Experience",
  description,
  path: "/experience",
  breadcrumbs: [
    { name: "Home", path: "/" },
    { name: "Experience", path: "/experience" },
  ],
});

export default function ExperiencePage() {
  return (
    <>
      <StructuredData data={structuredData} />
      <SitePageShell>
        <ExperiencePageContent />
      </SitePageShell>
    </>
  );
}
