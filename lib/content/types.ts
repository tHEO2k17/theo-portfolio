export interface Project {
  slug: string;
  title: string;
  role: string;
  category: string[];
  description: string;
  teaserDescription: string;
  detailDescription?: string;
  technologies: string[];
  tags: string[];
  link: string;
  featured: boolean;
}

export type ExperienceLocationPin = {
  id: string;
  label: string;
  coordinates: [number, number];
  isRemote?: boolean;
  relatedNote?: string;
};

export type ExperienceStory = {
  context: string;
  problem: string;
  responsibility: string[];
  actions: string[];
  results: string;
  lessons: string;
};

export type ExperienceSystemsCategory = {
  category: string;
  /** Max 4 tools per category. */
  tools: string[];
};

export interface ExperienceEntry {
  id: string;
  title: string;
  company: string;
  dates: string;
  /** Short labels for timeline and cards. */
  locationLabels: string[];
  locationPins: ExperienceLocationPin[];
  /** Max ~20 words. Visible on cards and map default. */
  summary: string;
  systemsAndTools: ExperienceSystemsCategory[];
  story: ExperienceStory;
  /** e.g. Code Raccoon → Dicebridge relationship */
  organizationNote?: string;
}

export type ExperienceMapEngagement = {
  entry: ExperienceEntry;
  locationLabel: string;
  relatedNote?: string;
};

export interface SkillCategory {
  name: string;
  skills: string[];
}

export interface SkillGroup {
  label: string;
  items: string[];
}

export interface ProofMetric {
  value: string;
  label: string;
}

export interface LeadershipStrength {
  title: string;
  description: string;
}

export interface EducationEntry {
  degree: string;
  institution: string;
  year: string;
}

export interface RecognitionEntry {
  title: string;
  detail: string;
}

export interface ProcessStep {
  label: string;
  description: string;
}

export interface ContactChannel {
  type: "email" | "phone" | "whatsapp" | "linkedin" | "github";
  label: string;
  value: string;
  href: string;
}
