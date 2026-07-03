import type { Metadata } from "next";
import { SitePageShell } from "@/components/site-page-shell";
import { StructuredData } from "@/components/structured-data";
import { ExperiencePageContent } from "@/components/pages/experience-page-content";
import { getWebPageSchema } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Places, teams, and products that shaped how I work.",
  alternates: {
    canonical: "https://theopaintsil.online/experience",
  },
};

const structuredData = getWebPageSchema({
  title: "Experience",
  description:
    "Places, teams, and products that shaped how I work.",
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
