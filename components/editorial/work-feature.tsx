"use client";

import { ProseColumn } from "@/components/layout/prose-column";
import { useMobileSheetContext } from "@/components/layout/mobile-sheet-context";
import { typography } from "@/lib/typography";
import { cn } from "@/lib/utils";
import { EditorialDisclosure } from "./editorial-disclosure";

type WorkFeatureProps = {
  title: string;
  role?: string;
  description: string;
  detailDescription?: string;
  metadata?: string;
  technologies?: string[];
  link?: string;
  variant?: "teaser" | "full";
  className?: string;
  inlineExpanded?: boolean;
};

export function WorkFeature({
  title,
  role,
  description,
  detailDescription,
  metadata,
  technologies,
  link,
  variant = "teaser",
  className,
  inlineExpanded = false,
}: WorkFeatureProps) {
  const inSheet = useMobileSheetContext();
  const showExpandedInline = inlineExpanded || inSheet;
  const hasLink = Boolean(link && link !== "#");
  const hasExpandedContent =
    Boolean(detailDescription) || Boolean(technologies?.length);

  const titleEl = (
    <h3
      className={cn(
        typography.editorial,
        "work-feature__title text-foreground mb-layout-2",
        (variant === "teaser" || hasLink) && "motion-link group-hover:text-accent-warm",
      )}
    >
      {title}
    </h3>
  );

  const roleEl = role ? (
    <p className={cn(typography.role, "text-accent-warm mb-layout-4")}>{role}</p>
  ) : null;

  const descriptionEl =
    variant === "full" ? (
      <ProseColumn>
        <p
          className={cn(
            typography.body,
            "text-text-secondary",
            hasExpandedContent ? "mb-layout-4" : "mb-layout-6",
          )}
        >
          {description}
        </p>
      </ProseColumn>
    ) : (
      <p className={cn(typography.body, "text-text-secondary")}>{description}</p>
    );

  const coreContent = hasLink ? (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      draggable={false}
      className="work-feature__link group block"
    >
      {titleEl}
      {roleEl}
      {descriptionEl}
    </a>
  ) : (
    <>
      {titleEl}
      {roleEl}
      {descriptionEl}
    </>
  );

  return (
    <article className={cn((variant === "teaser" || hasLink) && "group", className)}>
      {metadata ? (
        <p className={cn("editorial-meta mb-layout-3")}>{metadata}</p>
      ) : null}

      {coreContent}

      {variant === "full" && !hasLink ? (
        <p className={cn(typography.bodySm, "text-text-tertiary")}>In progress</p>
      ) : null}

      {variant === "full" && hasExpandedContent ? (
        <div className="work-feature__actions">
          {showExpandedInline ? (
            <>
              {detailDescription ? (
                <ProseColumn>
                  <p className={cn(typography.bodySm, "text-text-secondary")}>
                    {detailDescription}
                  </p>
                </ProseColumn>
              ) : null}
              {technologies && technologies.length > 0 ? (
                <p
                  className={cn(
                    typography.bodySm,
                    "text-text-tertiary",
                    detailDescription ? "mt-layout-4" : undefined,
                  )}
                >
                  {technologies.join(" · ")}
                </p>
              ) : null}
            </>
          ) : (
            <EditorialDisclosure label="Read more" sheetTitle={title}>
              {detailDescription ? (
                <ProseColumn>
                  <p className={cn(typography.bodySm, "text-text-secondary")}>
                    {detailDescription}
                  </p>
                </ProseColumn>
              ) : null}
              {technologies && technologies.length > 0 ? (
                <p
                  className={cn(
                    typography.bodySm,
                    "text-text-tertiary",
                    detailDescription ? "mt-layout-4" : undefined,
                  )}
                >
                  {technologies.join(" · ")}
                </p>
              ) : null}
            </EditorialDisclosure>
          )}
        </div>
      ) : null}
    </article>
  );
}
