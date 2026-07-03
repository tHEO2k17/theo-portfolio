"use client";

import { useEffect, useId, useState } from "react";
import type { ArticleDiagramVariant } from "@/lib/media";
import { buildArticleDiagramMermaid } from "@/lib/writing/article-diagram-mermaid";
import { cn } from "@/lib/utils";

type ArticleDiagramProps = {
  variant: ArticleDiagramVariant;
  nodes: string[];
  label?: string;
  mermaid?: string;
  className?: string;
};

let mermaidInitialized = false;

async function renderMermaid(source: string, elementId: string) {
  const mermaid = (await import("mermaid")).default;

  if (!mermaidInitialized) {
    mermaid.initialize({
      startOnLoad: false,
      securityLevel: "strict",
      theme: "base",
      themeVariables: {
        darkMode: true,
        background: "transparent",
        mainBkg: "transparent",
        nodeBorder: "#555555",
        nodeTextColor: "#bfbfbf",
        clusterBkg: "transparent",
        titleColor: "#bfbfbf",
        edgeLabelBackground: "transparent",
        fontFamily: "var(--font-montserrat, Montserrat, ui-sans-serif, sans-serif)",
        fontSize: "13px",
        lineColor: "#555555",
        primaryColor: "transparent",
        primaryTextColor: "#bfbfbf",
        primaryBorderColor: "#555555",
        secondaryColor: "transparent",
        tertiaryColor: "transparent",
        textColor: "#bfbfbf",
      },
      flowchart: {
        htmlLabels: false,
        curve: "linear",
        padding: 14,
        nodeSpacing: 32,
        rankSpacing: 36,
        useMaxWidth: false,
      },
      state: {
        nodeSpacing: 36,
        rankSpacing: 40,
      },
    });
    mermaidInitialized = true;
  }

  return mermaid.render(elementId, source);
}

function normalizeMermaidSvg(svg: string, layout: "wide" | "compact") {
  const cleaned = svg.replace(/\sstyle="[^"]*max-width:[^"]*"/gi, "");

  if (layout === "wide") {
    return cleaned.replace(
      /<svg\b/,
      '<svg width="100%" preserveAspectRatio="xMidYMid meet"',
    );
  }

  return cleaned.replace(/<svg\b/, '<svg preserveAspectRatio="xMidYMid meet"');
}

function getDiagramLayout(
  variant: ArticleDiagramVariant,
  mermaidOverride?: string,
): "wide" | "compact" {
  if (mermaidOverride?.trim()) {
    const source = mermaidOverride.trim();
    if (/flowchart\s+T[BD]/i.test(source)) {
      return "compact";
    }
    if (/C4Container|C4Context|C4Component/i.test(source)) {
      return "wide";
    }
    return "wide";
  }

  return variant === "layers" ? "compact" : "wide";
}

export function ArticleDiagram({
  variant,
  nodes,
  label,
  mermaid: mermaidOverride,
  className,
}: ArticleDiagramProps) {
  const reactId = useId().replace(/:/g, "");
  const [svgMarkup, setSvgMarkup] = useState<string | null>(null);
  const [renderError, setRenderError] = useState(false);

  const source =
    mermaidOverride?.trim() || buildArticleDiagramMermaid(variant, nodes);
  const layout = getDiagramLayout(variant, mermaidOverride);

  useEffect(() => {
    if (!source) {
      setSvgMarkup(null);
      setRenderError(false);
      return;
    }

    let cancelled = false;
    const elementId = `article-mermaid-${reactId}`;

    renderMermaid(source, elementId)
      .then(({ svg }) => {
        if (!cancelled) {
          setSvgMarkup(normalizeMermaidSvg(svg, layout));
          setRenderError(false);
        }
      })
      .catch(() => {
        if (!cancelled) {
          setSvgMarkup(null);
          setRenderError(true);
        }
      });

    return () => {
      cancelled = true;
    };
  }, [reactId, source, layout]);

  if (nodes.length < 2 && !mermaidOverride) {
    return null;
  }

  return (
    <figure className={cn("article-diagram", className)}>
      {label ? (
        <figcaption className="article-figure__label">{label}</figcaption>
      ) : null}
      <div
        className={cn(
          "article-diagram__mermaid",
          layout === "wide"
            ? "article-diagram__mermaid--wide"
            : "article-diagram__mermaid--compact",
        )}
        role="img"
        aria-label={label ?? "Diagram"}
      >
        {svgMarkup ? (
          <div dangerouslySetInnerHTML={{ __html: svgMarkup }} />
        ) : renderError ? (
          <pre className="article-diagram__source">{source}</pre>
        ) : (
          <div className="article-diagram__placeholder" aria-hidden="true" />
        )}
      </div>
    </figure>
  );
}
