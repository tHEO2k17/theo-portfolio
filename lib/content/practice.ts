import type {
  EducationEntry,
  LeadershipStrength,
  RecognitionEntry,
} from "./types";

export const industries = [
  "Fintech",
  "Water",
  "Mobility",
  "Manufacturing",
  "SaaS",
  "Consulting",
] as const;

export const leadershipStrengths: LeadershipStrength[] = [
  {
    title: "Roadmaps",
    description: "Technical roadmaps aligned with business goals.",
  },
  {
    title: "Team Development",
    description: "Mentor engineers. Push for ownership.",
  },
  {
    title: "Delivery Excellence",
    description: "Quality and speed in balance.",
  },
  {
    title: "Systems Thinking",
    description: "Security, performance, and maintainability by design.",
  },
];

export const leadershipPhilosophy = [
  "Good teams need clarity and ownership.",
] as const;

export const leadershipPhilosophyExtended = [
  "Systems should scale. Teams should grow.",
  "I remove blockers and set direction.",
] as const;

export const leadershipAchievements = [
  "Promoted to technical leadership within 6 months",
  "Led architectural redesign reducing deployment time by 70%",
  "Mentored 5+ engineers from junior to mid-level roles",
  "Implemented CI/CD practices improving team velocity",
] as const;

export const education: EducationEntry[] = [
  {
    degree: "BSc Information Technology",
    institution: "Ghana Technology University College",
    year: "2016",
  },
  {
    degree: "Professional Diploma in Systems Engineering",
    institution: "Intercom Programming & Marketing Co.",
    year: "2014",
  },
];

export const recognition: RecognitionEntry[] = [
  {
    title: "Ghana Head of State Award",
    detail: "Silver (2010), Bronze (2006)",
  },
  {
    title: "GTS Certificate of Excellence",
    detail: "Outstanding Performance",
  },
  {
    title: "Cloud & AI Certifications",
    detail: "Pursuing Azure, AWS & AI/ML",
  },
];
