import type { Project } from "./types";

export const projects: Project[] = [
  {
    slug: "tekora",
    title: "Tekora",
    role: "Personal Project (In Progress)",
    category: ["AI", "Tooling", "Productivity"],
    teaserDescription:
      "AI tools for developers. Workflow automation.",
    description:
      "Personal AI platform. Developer tools and workflow automation.",
    detailDescription:
      "A platform I am building independently to transition into AI tooling. Focused on enhancing developer productivity and intelligent workflow automation.",
    technologies: ["AI", "LLMs", "Workflow Automation"],
    tags: ["AI", "Productivity"],
    link: "#",
    featured: true,
  },
  {
    slug: "borga-money",
    title: "Borga Money",
    role: "Lead Mobile Developer",
    category: ["Mobile", "Fintech"],
    teaserDescription:
      "Cross-border remittance for Ghanaians abroad. FX, KYC, wallets.",
    description:
      "Remittance for the Ghanaian diaspora. FX, KYC, wallets.",
    detailDescription:
      "Cross-border remittance platform helping Ghanaians in the diaspora send money home. Built with Flutter, integrating real-time FX rates, KYC flows, and multi-currency wallets.",
    technologies: ["Flutter", "Real-time FX", "KYC", "Multi-currency"],
    tags: ["Mobile", "Fintech"],
    link: "https://borga.money/home",
    featured: true,
  },
  {
    slug: "stride",
    title: "Stride",
    role: "Full-stack Developer & DevOps",
    category: ["Web", "Mobile", "Social", "Fitness", "DevOps"],
    teaserDescription:
      "Social fitness app for shared workouts. Full stack, cloud delivery.",
    description:
      "Fitness app for shared workouts. API, web, mobile, CI/CD.",
    detailDescription:
      "Social fitness app connecting people for shared workouts. Built the full stack including Node.js API, React frontend, and PostgreSQL data layer with automated CI/CD and cloud deployment.",
    technologies: [
      "React",
      "Node.js",
      "Laravel",
      "Flutter",
      "PostgreSQL",
      "MongoDB",
      "Socket.io",
      "Docker",
      "AWS",
    ],
    tags: ["Web", "Mobile", "Social", "Fitness", "DevOps"],
    link: "https://connectwithstride.com/",
    featured: true,
  },
  {
    slug: "pamo",
    title: "Pamo",
    role: "Mobile Developer",
    category: ["Mobile", "E-commerce", "Marketplace"],
    teaserDescription:
      "Reverse marketplace where buyers post requests, sellers respond.",
    description:
      "Buyers post requests. Sellers respond. Flutter and Firebase.",
    detailDescription:
      "Reverse marketplace shopping app where buyers post requests and sellers make offers. Flips the traditional e-commerce model to give buyers control. Built with Flutter and Firebase.",
    technologies: ["Flutter", "Firebase", "Marketplace Logic"],
    tags: ["Mobile", "E-commerce", "Marketplace", "Social"],
    link: "https://pamo.app/home",
    featured: false,
  },
  {
    slug: "movegh",
    title: "MoveGH",
    role: "Mobile Developer",
    category: ["Mobile", "Fintech"],
    teaserDescription:
      "Fintech for transfers, bill payments, and escrow in Ghana.",
    description:
      "Transfers, bills, and escrow in Ghana. USSD and local rails.",
    detailDescription:
      "Comprehensive fintech app for cross-border money transfers, bill payments, and escrow services. Integrated with local payment rails and USSD gateways.",
    technologies: ["Flutter", "USSD Gateways", "Firebase", "Payments"],
    tags: ["Mobile", "Fintech"],
    link: "https://movegh.com/",
    featured: false,
  },
  {
    slug: "banbo",
    title: "Banbo",
    role: "Mobile & Web Developer",
    category: ["Web", "Mobile", "Fintech"],
    teaserDescription:
      "Insurtech for comparing and purchasing vehicle insurance.",
    description:
      "Compare and buy vehicle insurance. Mobile and web.",
    detailDescription:
      "Insurtech platform for comparing and purchasing vehicle and personal insurance. Delivered both the mobile app and web platform from zero to launch.",
    technologies: ["React", "Flutter", "Node.js", "PostgreSQL"],
    tags: ["Web", "Mobile", "Fintech"],
    link: "https://banbo.insure/home",
    featured: false,
  },
];

export const projectFilterOptions = [
  "All",
  "Web",
  "Mobile",
  "Fintech",
  "DevOps",
] as const;

export function getFeaturedProjects() {
  return projects.filter((project) => project.featured);
}

export function getAllProjects() {
  return projects;
}
