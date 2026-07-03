import { LayoutGrid } from "@/components/layout/layout-grid";
import { SectionLabel } from "@/components/layout/section-label";
import { EditorialLink } from "./editorial-link";

type SectionIntroAction = {
  href: string;
  label: string;
  external?: boolean;
};

type SectionIntroProps = {
  label: string;
  labelId?: string;
  labelAs?: "p" | "h2";
  action?: SectionIntroAction;
  className?: string;
};

export function SectionIntro({
  label,
  labelId,
  labelAs = "h2",
  action,
  className,
}: SectionIntroProps) {
  return (
    <LayoutGrid className={className}>
      <div className="col-span-prose">
        <SectionLabel id={labelId} as={labelAs}>
          {label}
        </SectionLabel>
      </div>
      {action ? (
        <div className="section-intro__action col-span-full md:col-span-2 lg:col-span-5 md:col-start-7 lg:col-start-8 flex md:items-end md:justify-end">
          <EditorialLink href={action.href} external={action.external}>
            {action.label}
          </EditorialLink>
        </div>
      ) : null}
    </LayoutGrid>
  );
}
