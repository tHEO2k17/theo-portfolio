import { cn } from "@/lib/utils";

type MinimalScrollChevronProps = {
  direction: "up" | "down";
  className?: string;
};

export function MinimalScrollChevron({
  direction,
  className,
}: MinimalScrollChevronProps) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      aria-hidden="true"
      focusable="false"
      className={cn("minimal-scroll-chevron", className)}
    >
      {direction === "down" ? (
        <path d="M5 7.5 L10 12.5 L15 7.5" />
      ) : (
        <path d="M5 12.5 L10 7.5 L15 12.5" />
      )}
    </svg>
  );
}
