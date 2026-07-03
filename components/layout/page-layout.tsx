import { EditorialLink, EditorialRule } from "@/components/editorial";
import { SectionIllustration } from "@/components/illustrations";
import type {
  IllustrationOpacity,
  IllustrationPosition,
  IllustrationVariant,
} from "@/lib/illustrations";
import { typography } from "@/lib/typography";
import { cn } from "@/lib/utils";
import { LayoutGrid } from "./layout-grid";
import { PageContainer } from "./page-container";
import { PageStagger } from "@/components/motion";
import { ProseColumn } from "./prose-column";
import { SectionLabel } from "./section-label";

export type EditorialPageHeaderProps = {
  title: string;
  description?: string;
  eyebrow?: string;
  className?: string;
  illustration?: IllustrationVariant;
  illustrationOpacity?: IllustrationOpacity;
  illustrationPosition?: IllustrationPosition;
};

function shouldShowEyebrow(eyebrow: string | undefined, title: string) {
  if (!eyebrow) {
    return false;
  }

  return eyebrow.toLowerCase() !== title.toLowerCase();
}

export function EditorialPageHeader({
  title,
  description,
  eyebrow,
  className,
  illustration,
  illustrationOpacity = "quiet",
  illustrationPosition = "top-right",
}: EditorialPageHeaderProps) {
  const showEyebrow = shouldShowEyebrow(eyebrow, title);

  return (
    <header
      className={cn(
        "editorial-page-header relative",
        illustration && "editorial-page-header--illustrated section-with-illustration",
        className,
      )}
    >
      {illustration ? (
        <SectionIllustration
          variant={illustration}
          opacity={illustrationOpacity}
          position={illustrationPosition}
        />
      ) : null}
      {showEyebrow ? (
        <SectionLabel className="editorial-page-header__eyebrow">
          {eyebrow}
        </SectionLabel>
      ) : null}
      <h1
        className={cn(
          typography.h1,
          "text-foreground editorial-page-header__title",
        )}
      >
        {title}
      </h1>
      {description ? (
        <ProseColumn className="editorial-page-header__description">
          <p className={cn(typography.bodyLg, "text-text-secondary")}>
            {description}
          </p>
        </ProseColumn>
      ) : null}
    </header>
  );
}

/** @deprecated Use EditorialPageHeader */
export const PageHeader = EditorialPageHeader;

type PageSectionProps = {
  id?: string;
  label: string;
  children: React.ReactNode;
  className?: string;
};

export function PageSection({ id, label, children, className }: PageSectionProps) {
  return (
    <section id={id} className={cn("page-section scroll-mt-nav", className)}>
      <SectionLabel as="h2" className="mb-layout-8">
        {label}
      </SectionLabel>
      {children}
    </section>
  );
}

type PageLayoutProps = {
  children: React.ReactNode;
  className?: string;
  wide?: boolean;
};

export function PageLayout({ children, className, wide }: PageLayoutProps) {
  return (
    <div className={cn("section-block", className)}>
      <PageContainer className={wide ? "layout-container--wide" : undefined}>
        <LayoutGrid className="page-layout-grid">
          <PageStagger>{children}</PageStagger>
        </LayoutGrid>
      </PageContainer>
    </div>
  );
}

type PageBackLinkProps = {
  href?: string;
  label?: string;
};

export function PageBackLink({
  href = "/",
  label = "Back to home",
}: PageBackLinkProps) {
  return (
    <div className="page-back-link col-span-full pt-layout-8 pb-layout-8 hidden md:block">
      <EditorialRule className="mb-layout-8" />
      <EditorialLink href={href}>{label}</EditorialLink>
    </div>
  );
}
