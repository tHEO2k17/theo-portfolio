import type { ComponentType } from "react";
import type {
  IllustrationOpacity,
  IllustrationPosition,
  IllustrationVariant,
} from "@/lib/illustrations";
import { cn } from "@/lib/utils";
import { IllustrationSurface } from "./illustration-surface";
import {
  CadenceIllustration,
  CoordinatesIllustration,
  InfrastructureIllustration,
  ModulesIllustration,
  RhythmIllustration,
  ScaffoldingIllustration,
  StructureIllustration,
} from "./compositions";

const compositions: Record<IllustrationVariant, ComponentType> = {
  scaffolding: ScaffoldingIllustration,
  cadence: CadenceIllustration,
  rhythm: RhythmIllustration,
  structure: StructureIllustration,
  coordinates: CoordinatesIllustration,
  infrastructure: InfrastructureIllustration,
  modules: ModulesIllustration,
};

type SectionIllustrationProps = {
  variant: IllustrationVariant;
  opacity?: IllustrationOpacity;
  position?: IllustrationPosition;
  className?: string;
};

export function SectionIllustration({
  variant,
  opacity = "quiet",
  position = "center-right",
  className,
}: SectionIllustrationProps) {
  const Composition = compositions[variant];

  return (
    <IllustrationSurface
      opacity={opacity}
      position={position}
      className={cn("hidden md:block", className)}
    >
      <Composition />
    </IllustrationSurface>
  );
}
