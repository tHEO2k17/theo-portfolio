import { cn } from "@/lib/utils";

type MinimalCarouselArrowProps = {
  direction: "prev" | "next";
  disabled?: boolean;
  controlsId: string;
  onClick: () => void;
  className?: string;
};

export function MinimalCarouselArrow({
  direction,
  disabled = false,
  controlsId,
  onClick,
  className,
}: MinimalCarouselArrowProps) {
  const label =
    direction === "prev" ? "Previous section" : "Next section";

  return (
    <button
      type="button"
      className={cn(
        "minimal-carousel-arrow",
        direction === "prev"
          ? "minimal-carousel-arrow--prev"
          : "minimal-carousel-arrow--next",
        className,
      )}
      aria-label={label}
      aria-controls={controlsId}
      disabled={disabled}
      onClick={onClick}
    >
      <span className="minimal-carousel-arrow__glyph" aria-hidden="true">
        {direction === "prev" ? "‹" : "›"}
      </span>
    </button>
  );
}
