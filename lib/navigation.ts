export type NavIconId =
  | "work"
  | "practice"
  | "experience"
  | "writing"
  | "contact";

export type TopNavItem = {
  href: string;
  label: string;
};

export type BottomNavItem = {
  href: string;
  label: string;
  shortLabel: string;
  icon: NavIconId;
  ariaLabel: string;
  isActive: (pathname: string) => boolean;
};

export const topNavItems: TopNavItem[] = [
  { href: "/work", label: "Work" },
  { href: "/practice", label: "Practice" },
  { href: "/process", label: "Process" },
  { href: "/experience", label: "Experience" },
  { href: "/articles", label: "Writing" },
  { href: "/contact", label: "Contact" },
];

export const bottomNavItems: BottomNavItem[] = [
  {
    href: "/work",
    label: "Work",
    shortLabel: "Work",
    icon: "work",
    ariaLabel: "Work",
    isActive: (pathname) => pathname === "/work",
  },
  {
    href: "/practice",
    label: "Practice",
    shortLabel: "Practice",
    icon: "practice",
    ariaLabel: "Practice",
    isActive: (pathname) => pathname === "/practice",
  },
  {
    href: "/experience",
    label: "Experience",
    shortLabel: "Places",
    icon: "experience",
    ariaLabel: "Experience",
    isActive: (pathname) => pathname === "/experience",
  },
  {
    href: "/articles",
    label: "Writing",
    shortLabel: "Notes",
    icon: "writing",
    ariaLabel: "Writing",
    isActive: (pathname) =>
      pathname === "/articles" || pathname.startsWith("/articles/"),
  },
  {
    href: "/contact",
    label: "Contact",
    shortLabel: "Contact",
    icon: "contact",
    ariaLabel: "Contact",
    isActive: (pathname) => pathname === "/contact",
  },
];

export function isTopNavItemActive(pathname: string, href: string) {
  if (href === "/articles") {
    return pathname === "/articles" || pathname.startsWith("/articles/");
  }

  return pathname === href;
}

export function isArticleReadingPath(pathname: string) {
  return (
    pathname.startsWith("/articles/") &&
    pathname !== "/articles" &&
    pathname.split("/").filter(Boolean).length >= 2
  );
}
