import type { ExperienceEntry } from "@/lib/content/types";
import { typography } from "@/lib/typography";
import { cn } from "@/lib/utils";

const MAX_TOOLS_PER_CATEGORY = 4;

type ExperienceSystemsAndToolsProps = {
  entry: ExperienceEntry;
  className?: string;
};

export function ExperienceSystemsAndTools({
  entry,
  className,
}: ExperienceSystemsAndToolsProps) {
  return (
    <div className={cn("experience-systems", className)}>
      <div className="experience-systems__grid">
        {entry.systemsAndTools.map((group) => (
          <div key={group.category} className="experience-systems__group">
            <p
              className={cn(
                typography.caption,
                "experience-systems__category text-text-tertiary",
              )}
            >
              {group.category}
            </p>
            <ul className="experience-systems__tools list-none">
              {group.tools.slice(0, MAX_TOOLS_PER_CATEGORY).map((tool) => (
                <li
                  key={tool}
                  className={cn(typography.caption, "text-text-tertiary")}
                >
                  {tool}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
