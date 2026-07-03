export {};

declare global {
  interface CalendlyInlineWidgetOptions {
    url: string;
    parentElement: HTMLElement;
    resize?: boolean;
    prefill?: Record<string, string>;
    utm?: Record<string, string>;
  }

  interface CalendlyNamespace {
    initInlineWidget(options: CalendlyInlineWidgetOptions): void;
  }

  interface Window {
    Calendly?: CalendlyNamespace;
  }
}
