export const articleTtsPlan = {
  feature: "Listen",
  placement: "Article detail header only. Not on writing index.",
  api: "Web Speech API (SpeechSynthesis + SpeechSynthesisUtterance)",
  scope: "Read title, subtitle, and body sections in order.",
  controls: {
    play: "Listen",
    pause: "Pause",
    resume: "Resume",
    stop: "Stop",
  },
  accessibility: {
    ariaLive: "polite",
    ariaPressedOnToggle: true,
    keyboardActivatable: true,
    visibleFocusRing: true,
    announceUnsupported: true,
    reducedMotion: {
      behavior:
        "Hide Listen when prefers-reduced-motion is set. Speech is optional enhancement, not core content.",
      detectVia: "window.matchMedia('(prefers-reduced-motion: reduce)')",
      listenForChanges: true,
    },
  },
  readingState: {
    showWhenActive: true,
    labels: {
      idle: "Listen",
      playing: "Pause",
      paused: "Resume",
      stopping: "Stop",
    },
    statusText: {
      playing: "Reading aloud",
      paused: "Reading paused",
    },
    statusTextShort: {
      playing: "Playing",
      paused: "Paused",
    },
    ariaStatusRegion: true,
  },
  voice: {
    preferLang: "en",
    rate: 0.95,
    pitch: 1,
    pauseBetweenSectionsMs: 400,
  },
  fallback: {
    whenUnsupported:
      "Hide Listen control. No error toast. Graceful no-op.",
    whenNoVoices:
      "Attempt default utterance. If synthesis fails, disable control.",
    whenReducedMotion:
      "Hide Listen control. Article remains fully readable as text.",
  },
  privacy: {
    offlineCapable: true,
    noServerUpload: true,
    noAnalytics: true,
  },
  future: [
    "Optional pre-generated audio files per article",
    "Voice selection in settings",
    "Highlight current paragraph while reading",
  ],
} as const;
