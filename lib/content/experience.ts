import { EXPERIENCE_COORDINATES as C } from "./experience-coordinates";
import type { ExperienceEntry, ExperienceLocationPin } from "./types";

export const experiences: ExperienceEntry[] = [
  {
    id: "code-raccoon",
    title: "Head of Technical Delivery",
    company: "Code Raccoon",
    dates: "July 2025 – Present",
    locationLabels: ["Accra, Ghana", "Hattingen, Germany"],
    organizationNote: "Part of Dicebridge Training GmbH.",
    locationPins: [
      {
        id: "code-raccoon-accra",
        label: "Accra, Ghana",
        coordinates: C.accra,
        relatedNote: "Part of Dicebridge Training GmbH.",
      },
      {
        id: "code-raccoon-dicebridge",
        label: "Hattingen, Germany",
        coordinates: C.hattingen,
        relatedNote: "Parent organization in Germany.",
      },
    ],
    systemsAndTools: [
      {
        category: "Architecture",
        tools: ["System architecture", "CI/CD pipelines"],
      },
      {
        category: "Delivery",
        tools: ["GitHub Actions", "Docker", "Deployment automation"],
      },
      {
        category: "Product",
        tools: ["AI integration", "Client platforms"],
      },
    ],
    summary:
      "Lead technical delivery across client and product engineering portfolios.",
    story: {
      context:
        "Code Raccoon delivers software products and client engineering from Accra. Part of Dicebridge Training GmbH, the team ships across internal products and external client work.",
      problem:
        "The company needed stronger delivery standards, clearer architecture ownership, and a team culture that could scale across multiple products without losing quality.",
      responsibility: [
        "Technical delivery leadership",
        "Architecture and deployment ownership",
        "Engineering standards and hiring",
        "Product and design collaboration",
      ],
      actions: [
        "Led delivery across client and internal product portfolios.",
        "Established CI/CD workflows and deployment practices.",
        "Hired, onboarded, and mentored engineers.",
        "Set architecture direction for production systems.",
        "Integrated AI capabilities into the product roadmap.",
      ],
      results:
        "Raised the team's execution bar with clearer standards, faster deployment cycles, and stronger ownership across active products and client engagements.",
      lessons: "Strong delivery depends on clear ownership.",
    },
  },
  {
    id: "grundfos",
    title: "Senior Cross-Platform Engineer (Consultant)",
    company: "Grundfos",
    dates: "February 2024 – December 2024",
    locationLabels: ["Ghana", "Bjerringbro, Denmark"],
    locationPins: [
      {
        id: "grundfos-ghana",
        label: "Ghana",
        coordinates: C.ghana,
        isRemote: true,
      },
      {
        id: "grundfos-bjerringbro",
        label: "Bjerringbro, Denmark",
        coordinates: C.bjerringbro,
        isRemote: true,
      },
    ],
    systemsAndTools: [
      {
        category: "Frontend",
        tools: ["Flutter", "AngularJS"],
      },
      {
        category: "Backend",
        tools: ["Go"],
      },
      {
        category: "IoT",
        tools: ["ESP32", "Arduino"],
      },
      {
        category: "Messaging",
        tools: ["MQTT", "Mosquitto"],
      },
      {
        category: "Observability",
        tools: ["Sentry", "SNMP", "MIB"],
      },
      {
        category: "Delivery",
        tools: ["GitHub Actions", "Azure DevOps", "ArgoCD", "Helm"],
      },
      {
        category: "Infrastructure",
        tools: ["Kubernetes", "Docker", "Azure"],
      },
    ],
    summary: "Built software and IoT systems for ultrasonic water management.",
    story: {
      context:
        "Grundfos develops water solutions globally. Project Flow aimed to digitize ultrasonic water meter operations for technicians and operations teams in the field.",
      problem:
        "The platform needed mobile, web, cloud, and field device support while connecting hardware, messaging, and monitoring for teams across Ghana and Denmark.",
      responsibility: [
        "Technical leadership",
        "Cross-platform and mobile development",
        "IoT and field device integration",
        "Deployment and observability pipelines",
      ],
      actions: [
        "Led cross-functional delivery for Project Flow.",
        "Built Flutter mobile apps and web interfaces for field operations.",
        "Integrated ESP32 and Arduino devices with MQTT via Mosquitto.",
        "Configured SNMP and MIB readings for operations dashboards.",
        "Designed delivery pipelines with Azure DevOps, ArgoCD, Helm, and GitHub Actions.",
      ],
      results:
        "Unified mobile, web, and field systems into one operational platform, improved deployment workflow, and gave operations teams live device and dashboard visibility.",
      lessons: "Operational software must work beyond the office.",
    },
  },
  {
    id: "juduh",
    title: "Technical Lead (Contract)",
    company: "Juduh",
    dates: "December 2023 – December 2024",
    locationLabels: ["Accra, Ghana", "Minnesota, USA"],
    locationPins: [
      {
        id: "juduh-accra",
        label: "Accra, Ghana",
        coordinates: C.accra,
        isRemote: true,
      },
      {
        id: "juduh-minnesota",
        label: "Minnesota, USA",
        coordinates: C.minneapolis,
        isRemote: true,
      },
    ],
    systemsAndTools: [
      {
        category: "Backend",
        tools: ["Python"],
      },
      {
        category: "Delivery",
        tools: ["GitHub Actions", "CI/CD", "Automated testing"],
      },
      {
        category: "Security",
        tools: ["OWASP", "Threat detection"],
      },
    ],
    summary: "Led cybersecurity product delivery.",
    story: {
      context:
        "Juduh builds cybersecurity products for active threat detection. Mirrored Defense was designed to help teams identify and respond to live security risks.",
      problem:
        "The product needed reliable delivery at scale, automated deployments, and a small engineering team working across Accra and Minnesota without losing velocity.",
      responsibility: [
        "Technical leadership for Mirrored Defense",
        "Team management and engineering process",
        "Backend architecture and deployment strategy",
        "Security-focused product delivery",
      ],
      actions: [
        "Led development of the Mirrored Defense platform.",
        "Managed a team of five engineers.",
        "Implemented automated GitHub Actions CI/CD workflows.",
        "Introduced code review and automated QA practices.",
        "Designed backend architecture for concurrent threat analysis.",
      ],
      results:
        "Delivered a production cybersecurity platform, reduced manual deployment effort, and increased team velocity without compromising stability.",
      lessons: "Teams need clarity more than process.",
    },
  },
  {
    id: "tech11",
    title: "Senior Frontend Developer",
    company: "tech11 GmbH",
    dates: "August 2023 – February 2024",
    locationLabels: ["Würzburg, Germany"],
    locationPins: [
      {
        id: "tech11-wurzburg",
        label: "Würzburg, Germany",
        coordinates: C.wurzburgOffice,
        isRemote: true,
      },
    ],
    systemsAndTools: [
      {
        category: "Frontend",
        tools: ["Web Components", "React", "TypeScript"],
      },
      {
        category: "Integration",
        tools: ["REST APIs", "Cloud APIs"],
      },
    ],
    summary: "Built enterprise frontend systems with web components.",
    story: {
      context:
        "tech11 GmbH builds insurance and enterprise web portals for clients across Germany and international markets. Interfaces must work across multiple client frameworks.",
      problem:
        "Portals needed modular frontends that could integrate with varied client systems while remaining maintainable across a distributed European team.",
      responsibility: [
        "Frontend architecture",
        "Web component development",
        "API and cloud integration",
        "Agile delivery practices",
      ],
      actions: [
        "Built modular web portals with JavaScript Web Components.",
        "Integrated third-party APIs and cloud services.",
        "Collaborated with teams across Germany, the US, and Eastern Europe.",
        "Championed sprint planning and structured peer reviews.",
      ],
      results:
        "Delivered framework-agnostic interfaces, improved team throughput, and established frontend patterns that supported long-term maintenance.",
      lessons: "Component systems improve long-term maintenance.",
    },
  },
  {
    id: "nsano",
    title: "Software Developer",
    company: "Nsano Ghana Ltd",
    dates: "March 2020 – August 2023",
    locationLabels: ["Accra, Ghana"],
    locationPins: [
      {
        id: "nsano-accra",
        label: "Accra, Ghana",
        coordinates: C.accra,
      },
    ],
    systemsAndTools: [
      {
        category: "Frontend",
        tools: ["Flutter", "React", "PWAs"],
      },
      {
        category: "Backend",
        tools: ["Node.js"],
      },
      {
        category: "Security",
        tools: ["OWASP", "JWT", "Payment protocols"],
      },
    ],
    summary: "Developed fintech applications for West African markets.",
    story: {
      context:
        "Nsano Ghana Ltd builds fintech products for mobile payments and financial services across West Africa. Products serve users on variable network connections.",
      problem:
        "Applications needed to perform reliably on low-bandwidth connections while handling sensitive financial data and growing user demand across the region.",
      responsibility: [
        "Frontend and mobile development leadership",
        "Payment flow and security protocols",
        "Performance optimization for mobile users",
        "Junior developer mentorship",
      ],
      actions: [
        "Led frontend and mobile development on fintech products.",
        "Built PWAs optimized for low-bandwidth connections.",
        "Tightened mobile payment flows and data security protocols.",
        "Mentored junior developers and introduced coding standards.",
      ],
      results:
        "Improved application performance in challenging network conditions, strengthened payment security, and built engineering practices that outlasted my tenure.",
      lessons: "Security and reliability matter in financial systems.",
    },
  },
  {
    id: "8d-digital",
    title: "Software Developer",
    company: "8D Digital",
    dates: "October 2018 – February 2020",
    locationLabels: ["Accra, Ghana"],
    locationPins: [
      {
        id: "8d-digital-accra",
        label: "Accra, Ghana",
        coordinates: C.accra,
      },
    ],
    systemsAndTools: [
      {
        category: "Frontend",
        tools: ["React"],
      },
      {
        category: "Backend",
        tools: ["Node.js", "MongoDB"],
      },
      {
        category: "Infrastructure",
        tools: ["Firebase"],
      },
      {
        category: "Integration",
        tools: ["Banking APIs", "USSD gateways"],
      },
    ],
    summary: "Built mobile payments and merchant onboarding platforms.",
    story: {
      context:
        "8D Digital builds payment and merchant technology for Ghanaian SMEs. Products connect banking APIs, USSD gateways, and digital onboarding workflows.",
      problem:
        "SMEs needed faster merchant onboarding and reliable real-time payment processing through local banking infrastructure with limited digital tooling.",
      responsibility: [
        "Full-stack product development",
        "Payment system integration",
        "Merchant platform design",
        "API and gateway connectivity",
      ],
      actions: [
        "Built a mobile payments app with banking API integration.",
        "Developed a merchant acquisition platform for SMEs.",
        "Digitized manual onboarding workflows.",
        "Integrated USSD gateways for transaction processing.",
      ],
      results:
        "Delivered working payment and onboarding products that reduced manual SME processes and enabled real-time financial transactions.",
      lessons: "Good systems reduce operational complexity.",
    },
  },
  {
    id: "persol",
    title: "Frontend Developer",
    company: "Persol Systems Ltd",
    dates: "July 2017 – August 2018",
    locationLabels: ["Accra, Ghana"],
    locationPins: [
      {
        id: "persol-accra",
        label: "Accra, Ghana",
        coordinates: C.accra,
      },
    ],
    systemsAndTools: [
      {
        category: "Frontend",
        tools: ["Angular", "JavaScript"],
      },
      {
        category: "Infrastructure",
        tools: ["Cloud hosting", "HCM platform"],
      },
    ],
    summary: "Built oil distribution tracking for operations teams.",
    story: {
      context:
        "Persol Systems Ltd builds enterprise software for Ghanaian industries. Operations teams needed visibility into oil distribution that paper processes could not provide.",
      problem:
        "Distribution tracking relied on manual reporting, leaving operations teams without real-time visibility and slowing response to field issues.",
      responsibility: [
        "Frontend development",
        "Operations portal delivery",
        "Cloud infrastructure optimization",
        "HCM product performance improvements",
      ],
      actions: [
        "Built a web portal for real-time oil distribution tracking.",
        "Delivered visibility tools for operations teams.",
        "Optimized cloud infrastructure for the HCM product.",
        "Improved application responsiveness and running costs.",
      ],
      results:
        "Gave operations teams real-time distribution visibility and improved cloud performance for an existing enterprise product.",
      lessons: "Visibility changes how operations teams make decisions.",
    },
  },
  {
    id: "eicons",
    title: "Systems Administrator (Apprentice)",
    company: "Eicons Microsystems",
    dates: "January 2016 – June 2017",
    locationLabels: ["Accra, Ghana"],
    locationPins: [
      {
        id: "eicons-accra",
        label: "Accra, Ghana",
        coordinates: C.accra,
      },
    ],
    systemsAndTools: [
      {
        category: "Infrastructure",
        tools: ["Linux", "Windows Server"],
      },
      {
        category: "Networking",
        tools: ["VPN", "PBX systems", "CCTV networks"],
      },
    ],
    summary: "Installed infrastructure systems and built early web solutions.",
    story: {
      context:
        "Eicons Microsystems provides IT infrastructure and software services for commercial clients in Accra. Work spans telephony, surveillance, and custom web delivery.",
      problem:
        "Clients needed reliable on-site infrastructure and simple digital tools, often without existing technical systems or in-house engineering capacity.",
      responsibility: [
        "Infrastructure installation and configuration",
        "PBX and CCTV network setup",
        "Client web solution development",
        "End-to-end delivery support",
      ],
      actions: [
        "Installed and configured PBX telephony systems.",
        "Set up CCTV networks for commercial clients.",
        "Built custom web solutions for client needs.",
        "Supported infrastructure delivery from install to handover.",
      ],
      results:
        "Delivered working infrastructure and early web products for clients, building foundational experience in technical delivery and client-facing work.",
      lessons: "Every product starts with understanding the environment it runs in.",
    },
  },
];

export const experiencePreviewIds = ["nsano", "grundfos", "tech11"] as const;

export const experiencePreviewCopy =
  "Work across Ghana, Germany, Denmark, the US, and remote teams.";

export function getExperienceById(id: string) {
  return experiences.find((entry) => entry.id === id);
}

export function getExperiencePreviewEntries() {
  return experiencePreviewIds
    .map((id) => getExperienceById(id))
    .filter((entry): entry is ExperienceEntry => entry !== undefined);
}

export {
  getExperienceLocationLabels,
  getExperienceSummary,
  getExperienceToolsPreview,
  getMapPanelExpanded,
  experienceCareerSummary,
} from "./experience-helpers";

export function getExperiencePrimaryPin(entry: ExperienceEntry) {
  return entry.locationPins[0];
}

export function getAllExperiencePins(entry: ExperienceEntry) {
  return entry.locationPins;
}

export function flattenExperiencePins(
  entries: ExperienceEntry[] = experiences,
): Array<{ entry: ExperienceEntry; pin: ExperienceLocationPin }> {
  return entries.flatMap((entry) =>
    entry.locationPins.map((pin) => ({ entry, pin })),
  );
}
