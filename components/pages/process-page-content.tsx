import { processSteps } from "@/lib/content/process";
import { Reveal } from "@/components/motion";
import { ProcessStepItem } from "@/components/editorial";
import { ProcessDiagram } from "@/components/desktop";
import {
  PageBackLink,
  PageHeader,
  PageLayout,
  RouteMobileHero,
} from "@/components/layout";
import { processRouteHero, processPageHeader } from "@/lib/content/route-heroes";

export function ProcessPageContent() {
  return (
    <PageLayout>
      <RouteMobileHero
        className="col-span-content"
        label={processRouteHero.label}
        title={processRouteHero.title}
        descriptor={processRouteHero.descriptor}
        description={processRouteHero.description}
      />

      <div className="col-span-content hidden md:block">
        <PageHeader
          eyebrow={processPageHeader.eyebrow}
          title={processPageHeader.title}
          description={processPageHeader.description}
        />
      </div>

      <div className="col-span-full mobile-read-surface hidden md:block">
        <div className="desktop-split">
          <div className="desktop-split__content">
            <ol className="list-none">
              {processSteps.map((step, index) => (
                <Reveal
                  key={step.label}
                  as="li"
                  className="page-entry"
                >
                  <ProcessStepItem
                    as="div"
                    index={index}
                    label={step.label}
                    description={step.description}
                  />
                </Reveal>
              ))}
            </ol>
          </div>
          <ProcessDiagram />
        </div>
      </div>

      <div className="col-span-content mobile-read-surface md:hidden">
        <ol className="list-none">
          {processSteps.map((step, index) => (
            <Reveal
              key={step.label}
              as="li"
              className="page-entry"
            >
              <ProcessStepItem
                as="div"
                index={index}
                label={step.label}
                description={step.description}
              />
            </Reveal>
          ))}
        </ol>
      </div>

      <PageBackLink />
    </PageLayout>
  );
}
