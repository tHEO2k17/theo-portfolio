import Image from "next/image";
import type { ArticleCoverVariant } from "@/lib/media";
import { coverPalettes } from "@/lib/media";
import { cn } from "@/lib/utils";

type ArticleCoverProps = {
  variant?: ArticleCoverVariant;
  src?: string;
  alt?: string;
  compact?: boolean;
  mark?: boolean;
  className?: string;
};

function CoverArt({ variant }: { variant: ArticleCoverVariant }) {
  const palette = coverPalettes[variant];

  const shared = {
    fill: "none",
    stroke: palette.line,
    strokeWidth: 1,
    vectorEffect: "non-scaling-stroke" as const,
  };

  switch (variant) {
    case "field":
      return (
        <>
          <line x1="24" y1="72" x2="136" y2="72" {...shared} opacity={0.45} />
          <line x1="24" y1="52" x2="136" y2="52" {...shared} opacity={0.3} />
          <path d="M48 72 L80 36 L112 72" {...shared} opacity={0.7} />
          <circle cx="80" cy="36" r="3" fill={palette.accent} stroke="none" opacity={0.6} />
          <path d="M32 88 L128 88" {...shared} opacity={0.4} />
        </>
      );
    case "product-ghana":
      return (
        <>
          <line x1="24" y1="72" x2="136" y2="72" {...shared} />
          <line x1="24" y1="52" x2="136" y2="52" {...shared} opacity={0.5} />
          <line x1="24" y1="36" x2="136" y2="36" {...shared} opacity={0.35} />
          <line x1="80" y1="28" x2="80" y2="80" {...shared} opacity={0.6} />
          <line x1="108" y1="44" x2="108" y2="64" {...shared} opacity={0.45} />
          <rect x="105" y="50" width="6" height="6" {...shared} opacity={0.7} />
          <path d="M48 72 L48 56 M120 72 L120 56" {...shared} opacity={0.35} />
        </>
      );
    case "flutter-layers":
      return (
        <>
          <rect x="40" y="32" width="80" height="16" rx="2" {...shared} />
          <rect x="48" y="52" width="64" height="16" rx="2" {...shared} opacity={0.75} />
          <rect x="56" y="72" width="48" height="16" rx="2" {...shared} opacity={0.55} />
          <path d="M80 48 L80 52 M80 68 L80 72" {...shared} opacity={0.4} />
        </>
      );
    case "cloud-stack":
      return (
        <>
          <rect x="32" y="68" width="28" height="20" rx="2" {...shared} />
          <rect x="66" y="50" width="28" height="20" rx="2" {...shared} opacity={0.8} />
          <rect x="100" y="32" width="28" height="20" rx="2" {...shared} opacity={0.6} />
          <path d="M60 68 L80 50 L108 32" {...shared} opacity={0.45} />
          <line x1="46" y1="88" x2="46" y2="92" {...shared} opacity={0.35} />
          <line x1="80" y1="70" x2="80" y2="92" {...shared} opacity={0.35} />
          <line x1="114" y1="52" x2="114" y2="92" {...shared} opacity={0.35} />
        </>
      );
    case "leadership":
      return (
        <>
          <rect x="44" y="44" width="28" height="28" {...shared} />
          <rect x="88" y="44" width="28" height="28" {...shared} opacity={0.7} />
          <path d="M72 58 L88 58" {...shared} />
          <path d="M58 72 L58 84 M102 72 L102 84" {...shared} opacity={0.4} />
          <line x1="44" y1="84" x2="116" y2="84" {...shared} opacity={0.35} />
        </>
      );
    case "api-flow":
      return (
        <>
          <rect x="20" y="48" width="24" height="20" rx="2" {...shared} />
          <rect x="52" y="48" width="24" height="20" rx="2" {...shared} opacity={0.85} />
          <rect x="84" y="48" width="24" height="20" rx="2" {...shared} opacity={0.7} />
          <rect x="116" y="48" width="24" height="20" rx="2" {...shared} opacity={0.55} />
          <path d="M44 58 L52 58 M76 58 L84 58 M108 58 L116 58" {...shared} />
          <path d="M32 68 L32 76 M64 68 L64 76 M96 68 L96 76 M128 68 L128 76" {...shared} opacity={0.35} />
        </>
      );
    case "react-state":
      return (
        <>
          <rect x="36" y="36" width="52" height="44" rx="2" {...shared} />
          <rect x="96" y="40" width="36" height="36" rx="2" {...shared} opacity={0.6} />
          <path d="M88 58 L96 58" {...shared} />
          <path d="M48 48 L76 48 M48 68 L76 68" {...shared} opacity={0.5} />
          <circle cx="114" cy="58" r="4" fill={palette.accent} stroke="none" opacity={0.5} />
        </>
      );
    case "incident":
      return (
        <>
          <path d="M32 76 L48 44 L64 60 L80 36 L96 68 L112 52 L128 64" {...shared} />
          <circle cx="80" cy="36" r="3" fill={palette.accent} stroke="none" />
          <line x1="24" y1="84" x2="136" y2="84" {...shared} opacity={0.3} />
        </>
      );
    case "offline":
      return (
        <>
          <rect x="40" y="40" width="44" height="56" rx="6" {...shared} />
          <path d="M48 84 L76 84" {...shared} opacity={0.5} />
          <path d="M96 48 L120 72 M120 48 L96 72" {...shared} opacity={0.65} />
          <path d="M52 52 L72 52 M52 64 L68 64" {...shared} opacity={0.4} />
        </>
      );
    case "monolith":
      return (
        <>
          <rect x="32" y="36" width="96" height="52" rx="4" {...shared} />
          <path d="M80 36 L80 88" {...shared} opacity={0.5} strokeDasharray="4 4" />
          <path d="M32 58 L128 58 M32 70 L128 70" {...shared} opacity={0.35} />
        </>
      );
    case "ci-pipeline":
      return (
        <>
          <rect x="28" y="48" width="20" height="20" {...shared} />
          <rect x="68" y="48" width="20" height="20" {...shared} opacity={0.8} />
          <rect x="108" y="48" width="20" height="20" {...shared} opacity={0.6} />
          <path d="M48 58 L68 58 M88 58 L108 58" {...shared} />
          <path d="M38 68 L38 76 M78 68 L78 76 M118 68 L118 76" {...shared} opacity={0.35} />
        </>
      );
    case "observability":
      return (
        <>
          <path d="M28 72 L44 56 L60 64 L76 40 L92 52 L108 44 L124 36" {...shared} />
          <circle cx="76" cy="40" r="3" fill={palette.accent} stroke="none" opacity={0.8} />
          <line x1="24" y1="84" x2="136" y2="84" {...shared} opacity={0.3} />
          <line x1="28" y1="72" x2="28" y2="84" {...shared} opacity={0.25} />
        </>
      );
    case "documentation":
      return (
        <>
          <rect x="48" y="32" width="64" height="72" rx="2" {...shared} />
          <path d="M56 48 L104 48 M56 60 L96 60 M56 72 L100 72 M56 84 L88 84" {...shared} opacity={0.5} />
          <line x1="72" y1="32" x2="72" y2="104" {...shared} opacity={0.25} />
        </>
      );
    case "ai-workflow":
      return (
        <>
          <rect x="32" y="44" width="40" height="28" rx="2" {...shared} />
          <path d="M72 58 L88 58" {...shared} />
          <rect x="88" y="44" width="40" height="28" rx="2" {...shared} opacity={0.7} />
          <path d="M52 72 L52 80 M108 72 L108 80" {...shared} opacity={0.35} />
          <circle cx="52" cy="80" r="3" fill={palette.accent} stroke="none" opacity={0.5} />
        </>
      );
    case "workshop":
      return (
        <>
          <rect x="24" y="48" width="28" height="20" rx="2" {...shared} />
          <rect x="66" y="48" width="28" height="20" rx="2" {...shared} opacity={0.8} />
          <rect x="108" y="48" width="28" height="20" rx="2" {...shared} opacity={0.6} />
          <path d="M52 58 L66 58 M94 58 L108 58" {...shared} />
          <path d="M38 68 L38 80 M80 68 L80 80 M122 68 L122 80" {...shared} opacity={0.4} />
          <line x1="24" y1="84" x2="136" y2="84" {...shared} opacity={0.3} />
        </>
      );
    default:
      return null;
  }
}

export function ArticleCover({
  variant,
  src,
  alt = "",
  compact = false,
  mark = false,
  className,
}: ArticleCoverProps) {
  if (src) {
    return (
      <figure
        className={cn(
          "article-cover article-cover--photo relative",
          compact && "article-cover--compact",
          mark && "article-cover--mark",
          className,
        )}
      >
        <Image
          src={src}
          alt={alt}
          fill
          className="article-cover__img object-cover"
          sizes={compact ? "160px" : "(max-width: 767px) 100vw, 720px"}
        />
      </figure>
    );
  }

  if (!variant) {
    return null;
  }

  const palette = coverPalettes[variant];

  return (
    <figure
      className={cn(
        "article-cover",
        compact && "article-cover--compact",
        mark && "article-cover--mark",
        className,
      )}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 160 96"
        preserveAspectRatio="xMidYMid slice"
        className="article-cover__svg"
        aria-hidden="true"
        focusable="false"
      >
        <rect width="160" height="96" fill={palette.paper} />
        <CoverArt variant={variant} />
        <rect
          width="160"
          height="96"
          fill={palette.ink}
          opacity={0.03}
        />
      </svg>
    </figure>
  );
}
