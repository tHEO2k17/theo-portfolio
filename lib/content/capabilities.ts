import type { ProofMetric, SkillCategory, SkillGroup } from "./types";

export const skillCategories: SkillCategory[] = [
  {
    name: "Languages",
    skills: ["JavaScript", "TypeScript", "C#", "Dart", "Kotlin", "Bash"],
  },
  {
    name: "Frontend & Mobile",
    skills: [
      "React.js",
      "Next.js",
      "Angular",
      "Flutter",
      "Web Components",
      "PWAs",
    ],
  },
  {
    name: "Backend & APIs",
    skills: [
      "Node.js",
      "Nest.js",
      "ASP.NET Core",
      "GraphQL",
      "RESTful APIs",
      "Firebase",
    ],
  },
  {
    name: "Cloud & DevOps",
    skills: [
      "Azure",
      "Azure DevOps",
      "Docker",
      "Kubernetes",
      "GitHub Actions",
      "Helm",
      "Netlify",
    ],
  },
  {
    name: "Architecture",
    skills: [
      "Microservices",
      "Cloud-Native",
      "System Design",
      "CI/CD Pipeline Design",
    ],
  },
  {
    name: "Security & Network",
    skills: ["Cybersecurity Tooling", "VPNs", "Network Config", "PBX Systems"],
  },
];

export const additionalSkillGroups: SkillGroup[] = [
  {
    label: "Leadership",
    items: [
      "Team Mentoring",
      "Technical Strategy",
      "Project Management",
      "Agile/Scrum",
    ],
  },
  {
    label: "Soft Skills",
    items: [
      "Technical Writing",
      "Public Speaking",
      "System Design",
      "Problem Solving",
    ],
  },
  {
    label: "Specializations",
    items: ["Fintech", "Cybersecurity", "IoT", "Cloud Architecture"],
  },
];

export const proofMetrics: ProofMetric[] = [
  { value: "8+", label: "Years of Experience" },
  { value: "5+", label: "Industries & Domains" },
  { value: "15+", label: "Products shipped" },
  { value: "4", label: "Countries of Practice" },
];

export const capabilityOverview = [
  "Web, mobile, and cross-platform systems.",
  "Product development, system design, and security.",
  "Team leadership on distributed product teams.",
] as const;
