import { contactIntro } from "./contact";
import { experiencePreviewCopy } from "./experience";
import { philosophyContent } from "./philosophy";
import { writingHero } from "../writing";

export type RoutePageHeader = {
  eyebrow: string;
  title: string;
  description: string;
};

export const workRouteHero = {
  label: "Selected projects",
  title: "SELECTED PROJECTS",
  descriptor: "Products built for real constraints",
  description:
    "Fintech, mobility, security, and AI. Built with local constraints and global scale.",
} as const;

export const workPageHeader: RoutePageHeader = {
  eyebrow: "Selected projects",
  title: "Work",
  description: workRouteHero.description,
};

export const practiceRouteHero = {
  label: "Practice",
  title: "HOW I WORK",
  descriptor: "How I think, build, and keep learning",
  description: philosophyContent.homepageAside,
} as const;

export const practicePageHeader: RoutePageHeader = {
  eyebrow: "Studio notes",
  title: "Practice",
  description: practiceRouteHero.description,
};

export const writingRouteHero = {
  label: writingHero.eyebrow,
  title: "TECHNICAL NOTES",
  descriptor: writingHero.mobileTagline,
  description: writingHero.description,
} as const;

export const experienceRouteHero = {
  label: "Places",
  title: "EXPERIENCE",
  descriptor: "Places, teams, and products",
  description: experiencePreviewCopy,
} as const;

export const experiencePageHeader: RoutePageHeader = {
  eyebrow: "Places",
  title: "Experience",
  description: experienceRouteHero.description,
};

export const contactRouteHero = {
  label: contactIntro.eyebrow,
  title: "CONTACT",
  descriptor: "Accra · GMT",
  description: contactIntro.description,
} as const;

export const processRouteHero = {
  label: "Workflow",
  title: "HOW I DELIVER",
  descriptor: "From idea to release",
  description: "From discovery through architecture, build, and release.",
} as const;

export const processPageHeader: RoutePageHeader = {
  eyebrow: "Workflow",
  title: "Process",
  description: processRouteHero.description,
};
