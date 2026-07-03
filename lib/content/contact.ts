import type { ContactChannel } from "./types";

export const contactChannels: ContactChannel[] = [
  {
    type: "email",
    label: "Email",
    value: "tpaintsil@live.com",
    href: "mailto:tpaintsil@live.com",
  },
  {
    type: "phone",
    label: "Phone",
    value: "+233 241 852 603",
    href: "tel:+233241852603",
  },
  {
    type: "whatsapp",
    label: "WhatsApp",
    value: "+233 27 267 6431",
    href: "https://wa.me/233272676431",
  },
  {
    type: "linkedin",
    label: "LinkedIn",
    value: "linkedin.com/in/theopaintsil",
    href: "https://linkedin.com/in/theopaintsil",
  },
  {
    type: "github",
    label: "GitHub",
    value: "github.com/tHEO2k17",
    href: "https://github.com/tHEO2k17",
  },
];

export const contactPrimaryChannelTypes = ["email", "linkedin", "phone"] as const;

export const mobileContactChannelTypes = [
  "email",
  "whatsapp",
  "linkedin",
] as const;

export function getContactPrimaryChannels() {
  return contactChannels.filter((channel) =>
    contactPrimaryChannelTypes.includes(
      channel.type as (typeof contactPrimaryChannelTypes)[number],
    ),
  );
}

export function getMobileContactChannels() {
  return contactChannels.filter((channel) =>
    mobileContactChannelTypes.includes(
      channel.type as (typeof mobileContactChannelTypes)[number],
    ),
  );
}

export const contactIntro = {
  eyebrow: "Connect",
  title: "Contact",
  description:
    "Based in Accra. Open to remote roles, consulting, and product work.",
} as const;

export const contactContextLines = [
  "Based in Accra.",
  "Working with teams across Ghana, Europe, and remote environments.",
] as const;

export const contactAvailability = [
  "Technical leadership",
  "Product engineering",
  "Architecture discussions",
  "Consulting",
  "Remote opportunities",
] as const;

export const contactSchedule = {
  title: "Schedule",
  subtitle: "30 minute introduction",
  publicNote: "No account needed.",
} as const;

export const contactLocation = {
  region: "Accra, Ghana",
  detail: "Open to remote work and serious projects.",
} as const;

export const desktopContactChannelTypes = ["email", "whatsapp", "linkedin"] as const;

export function getDesktopContactChannels() {
  return contactChannels.filter((channel) =>
    desktopContactChannelTypes.includes(
      channel.type as (typeof desktopContactChannelTypes)[number],
    ),
  );
}
