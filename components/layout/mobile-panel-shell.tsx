import { typography } from "@/lib/typography";
import { cn } from "@/lib/utils";

type MobilePanelShellProps = {
  label?: string;
  children: React.ReactNode;
  className?: string;
  as?: "div" | "header";
};

export function MobilePanelShell({
  label,
  children,
  className,
  as: Component = "div",
}: MobilePanelShellProps) {
  return (
    <Component className={cn("mobile-panel", className)}>
      {label ? (
        <p className={cn(typography.label, "mobile-panel__label text-text-tertiary")}>
          {label}
        </p>
      ) : null}
      <div className="mobile-panel__content">{children}</div>
    </Component>
  );
}
