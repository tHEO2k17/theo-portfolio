import { processSteps } from "@/lib/content/process";
import { typography } from "@/lib/typography";
import { cn } from "@/lib/utils";

export function ProcessDiagram() {
  return (
    <div className="desktop-meaning-panel">
      <div className="process-diagram" aria-hidden="true">
        {processSteps.map((step, index) => (
          <div key={step.label}>
            <div className="process-diagram__step">
              <span className="process-diagram__index">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <p className={cn(typography.caption, "text-text-secondary mb-1")}>
                  {step.label}
                </p>
                <svg viewBox="0 0 200 24" className="w-full h-6" aria-hidden="true">
                  <line
                    x1="0"
                    y1="12"
                    x2="160"
                    y2="12"
                    stroke="currentColor"
                    strokeWidth="1"
                    vectorEffect="non-scaling-stroke"
                  />
                  <circle cx="160" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="1" />
                </svg>
              </div>
            </div>
            {index < processSteps.length - 1 ? (
              <div className="process-diagram__connector" />
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}
