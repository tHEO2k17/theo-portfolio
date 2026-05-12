import type { Article } from "@/types/article";

const baseArticles: Article[] = [
  {
    slug: "top-10-things-i-would-do-if-i-were-starting-again-as-a-junior-developer",
    title:
      "Top 10 Things I Would Do If I Were Starting Again as a Junior Developer",
    subtitle:
      "The habits, fundamentals, and systems thinking that would shorten the learning curve without trading away depth.",
    excerpt:
      "If I were starting over, I would spend less time collecting tutorials and more time building the reflexes that make engineers useful in real teams: fundamentals, debugging, communication, and disciplined shipping.",
    publishedAt: "2026-02-04",
    updatedAt: "2026-02-04",
    author: "Theophilus Paintsil",
    authorRole: "Senior Software Engineer / Technical Lead",
    category: "Career Growth",
    tags: [
      "Junior Developers",
      "Fundamentals",
      "Git",
      "Debugging",
      "Communication",
    ],
    featured: true,
    coverImage: "/articles/junior-developer-roadmap.jpg",
    coverAlt: "Roadmap for junior developers",
    sections: [
      {
        id: "build-the-base",
        heading: "1. Build the base before chasing breadth",
        paragraphs: [
          "The early mistake many developers make is mistaking exposure for competence. A new framework can make you feel productive, but the real leverage comes from understanding language fundamentals, data structures, HTTP, state, asynchronous work, and the lifecycle of an application.",
          "If I were starting again, I would learn one stack deeply enough to explain how data moves through it. That knowledge compounds across every future tool you touch.",
        ],
        bullets: [
          "Learn how your language handles memory, errors, and async work.",
          "Trace one request from the browser to the database and back.",
          "Read code as often as you write it.",
        ],
      },
      {
        id: "ship-small-systems",
        heading: "2. Ship small systems on purpose",
        paragraphs: [
          "You do not need a large portfolio to become useful. Small systems force you to close loops: authentication, forms, validation, persistence, error handling, deployment, and monitoring. Those loops are what build confidence.",
          "When the scope is small, you can notice the trade-offs. When the scope is massive, you often just copy patterns without understanding why they exist.",
        ],
      },
      {
        id: "treat-debugging-as-core",
        heading: "3. Treat debugging as a core engineering skill",
        paragraphs: [
          "Debugging is not a side skill. It is the discipline of turning uncertainty into evidence. Reproduce the issue, isolate variables, inspect logs, and reduce the problem until it becomes obvious.",
          "The best junior engineers I have seen are not the ones who never break things. They are the ones who can explain exactly what broke, why it broke, and what they learned from it.",
        ],
        bullets: [
          "Start with the smallest reproducible case.",
          "Use logs, breakpoints, and browser tooling deliberately.",
          "Write down the hypothesis before you change anything.",
        ],
      },
      {
        id: "communicate-like-an-engineer",
        heading: "4. Communicate, document, and ask better questions",
        paragraphs: [
          "Good communication is not soft. It reduces rework, prevents ambiguity, and helps your team move faster. A thoughtful question can save hours of guessing, and a concise document can preserve a decision long after the meeting ends.",
          "If I were starting again, I would spend more time writing. Readme files, issue notes, and short postmortems are part of engineering maturity. They also make you easier to trust.",
        ],
      },
      {
        id: "avoid-tutorial-addiction",
        heading: "5. Avoid tutorial addiction and learn to finish",
        paragraphs: [
          "Tutorials are useful until they become a hiding place. If you only consume guided material, you never practice the uncomfortable part of engineering: making choices when the path is not spelled out for you.",
          "Finishing matters because completion exposes the real system concerns: deployment, environment differences, edge cases, and user feedback. That is where real growth happens.",
        ],
      },
    ],
  },
  {
    slug: "developing-scalable-solutions-for-ghanaian-users-as-a-secure-software-lifecycle-professional",
    title:
      "Developing Scalable Solutions for Ghanaian Users as a Secure Software Lifecycle Professional",
    subtitle:
      "Designing for unstable networks, payment realities, and trust-first experiences in African markets.",
    excerpt:
      "A serious product strategy for Ghanaian users starts with the environment they actually live in: uneven connectivity, low-bandwidth devices, payment friction, and a healthy skepticism toward unreliable software.",
    publishedAt: "2026-01-21",
    updatedAt: "2026-01-21",
    author: "Theophilus Paintsil",
    authorRole: "Senior Software Engineer / Technical Lead",
    category: "Architecture",
    tags: ["Africa", "Ghana", "Offline First", "Security", "Product Design"],
    coverImage: "/articles/ghanaian-scalable-solutions.jpg",
    coverAlt: "Scalable solutions for Ghanaian users",
    sections: [
      {
        id: "start-with-constraints",
        heading: "Start with the constraints, not the happy path",
        paragraphs: [
          "For many teams, scalability means more traffic. For users in Ghana and across similar markets, scalability also means surviving network drops, slow devices, intermittent power, and uneven access to stable data connections.",
          "If your product only works when every dependency is healthy, it is not resilient enough for the real world. A practical system assumes failure and degrades gracefully.",
        ],
        bullets: [
          "Keep payloads small and predictable.",
          "Make critical screens render fast on modest hardware.",
          "Use retries, queueing, and graceful fallback instead of hard failure.",
        ],
      },
      {
        id: "offline-first-and-mobile-first",
        heading: "Design for mobile-first and offline-first behavior",
        paragraphs: [
          "Mobile is not a secondary channel in many African markets. It is the primary interface. That means the first version of your architecture should respect constrained bandwidth, battery life, and storage pressure.",
          "Offline-first thinking does not mean every feature must work without connectivity. It means the user should never lose work because the network blinked.",
        ],
      },
      {
        id: "payments-and-trust",
        heading: "Payments, trust, and idempotency are product features",
        paragraphs: [
          "Many local products live or die on the quality of their payment flows. The user wants certainty: did the payment go through, will it be duplicated, and what happens when the provider times out?",
          "That is why idempotency, clear status transitions, and audit trails are not backend trivia. They are user experience.",
        ],
        bullets: [
          "Expose clear transaction states instead of vague loading screens.",
          "Persist enough context to reconcile failures safely.",
          "Make support and recovery flows visible to the business team.",
        ],
      },
      {
        id: "security-and-observability",
        heading: "Security and observability should be part of the lifecycle",
        paragraphs: [
          "Secure delivery is not a separate phase at the end of the project. It is a habit built into the lifecycle: threat modeling, least privilege, input validation, secret management, logging, and alerting.",
          "In production environments, observability is how you protect user trust. If you cannot explain what the system did, you cannot defend it.",
        ],
      },
    ],
  },
  {
    slug: "structuring-large-flutter-applications-using-clean-architecture",
    title: "Structuring Large Flutter Applications Using Clean Architecture",
    subtitle:
      "A practical way to keep Flutter apps maintainable as features, teams, and integrations grow.",
    excerpt:
      "Clean architecture is not about ceremony. In Flutter, it is about keeping UI logic thin, separating concerns cleanly, and making large apps easier to extend without fear.",
    publishedAt: "2025-12-17",
    updatedAt: "2025-12-17",
    author: "Theophilus Paintsil",
    authorRole: "Senior Software Engineer / Technical Lead",
    category: "Mobile Engineering",
    tags: [
      "Flutter",
      "Clean Architecture",
      "Riverpod",
      "Repository Pattern",
      "Mobile",
    ],
    coverImage: "/articles/flutter-clean-architecture.jpg",
    coverAlt: "Flutter clean architecture layers",
    sections: [
      {
        id: "layers-that-matter",
        heading: "Start with layers that actually protect you",
        paragraphs: [
          "A large Flutter codebase becomes difficult to reason about when UI widgets own too much behavior. Clean architecture helps by separating domain rules, data access, and presentation concerns into layers that can evolve independently.",
          "That boundary is not academic. It is what prevents a UI refactor from becoming a business logic rewrite.",
        ],
        bullets: [
          "Domain layer: pure business rules and use cases.",
          "Data layer: repositories, DTOs, and remote/local sources.",
          "Presentation layer: widgets, controllers, and UI state.",
        ],
      },
      {
        id: "riverpod-with-discipline",
        heading: "Use Riverpod as a state tool, not a dumping ground",
        paragraphs: [
          "Riverpod is powerful because it gives you composable, testable state management. The trap is letting providers become a second place for business logic to hide.",
          "Keep providers focused on orchestration. Put domain rules in use cases and keep widgets dumb enough to be replaceable.",
        ],
      },
      {
        id: "dto-vs-entity",
        heading: "Be strict about DTOs, entities, and repositories",
        paragraphs: [
          "Data Transfer Objects exist because external systems are unstable and inconvenient. Entities exist because your domain should not be tied to the shape of an API response.",
          "Repositories are the seam between those worlds. If that seam is clear, tests become simpler and integrations become safer.",
        ],
      },
      {
        id: "production-lessons",
        heading: "What production teaches that tutorials often skip",
        paragraphs: [
          "Once a Flutter app is real, you start caring about feature isolation, error recovery, analytics, app startup, deep links, and the cost of changing shared state. Those concerns are the reason architecture matters.",
          "The goal is not perfect purity. The goal is a codebase that can absorb change without collapsing under its own weight.",
        ],
      },
    ],
  },
  {
    slug: "lessons-from-building-cloud-native-systems-with-nextjs-and-nestjs",
    title: "Lessons From Building Cloud-Native Systems With Next.js and NestJS",
    subtitle:
      "How frontend rendering choices, backend boundaries, and infrastructure discipline shape scalable systems.",
    excerpt:
      "Next.js and NestJS make a strong pair when you care about discoverability, developer experience, and production structure. The value comes from clear boundaries, not just the frameworks themselves.",
    publishedAt: "2025-11-26",
    updatedAt: "2025-11-26",
    author: "Theophilus Paintsil",
    authorRole: "Senior Software Engineer / Technical Lead",
    category: "Cloud Architecture",
    tags: ["Next.js", "NestJS", "SSR", "Redis", "Docker"],
    coverImage: "/articles/nextjs-nestjs-cloud-native.jpg",
    coverAlt: "Cloud-native systems with Next.js and NestJS",
    sections: [
      {
        id: "ssr-and-discoverability",
        heading: "SSR is not just a rendering choice",
        paragraphs: [
          "Server-side rendering matters when your content must be discoverable, fast to first paint, and resilient to weak devices. Next.js gives you those primitives, but it still requires discipline around data loading and cache strategy.",
          "If the page is heavy because of unnecessary client state, the rendering model will not save you. Architecture always matters more than a framework slogan.",
        ],
      },
      {
        id: "backend-boundaries",
        heading: "NestJS works best when the API boundary is explicit",
        paragraphs: [
          "A NestJS backend becomes easier to maintain when controllers stay thin and services own the business rules. That makes the system easier to test and easier to evolve when routes or integrations change.",
          "Treat the API as a product contract. Clear modules, predictable DTOs, and validated inputs reduce the blast radius of change.",
        ],
      },
      {
        id: "queues-and-redis",
        heading:
          "Queues, Redis, and asynchronous work are about user experience",
        paragraphs: [
          "Anything slow, retry-prone, or side-effect heavy should usually be pushed out of the request-response path. That includes notifications, imports, webhook reconciliation, and background processing.",
          "Redis-backed queues do not solve everything, but they do let the user get a fast answer while the system finishes the expensive work safely in the background.",
        ],
      },
      {
        id: "observability-and-deployments",
        heading:
          "Production quality is visible in observability and deployments",
        paragraphs: [
          "Cloud-native systems are only practical when deployment is repeatable and operational signals are visible. Docker helps with parity, but logs, traces, and metrics are what keep the system understandable after release.",
          "The mature approach is not to chase complexity. It is to reduce unknowns and make every boundary observable.",
        ],
      },
    ],
  },
  {
    slug: "why-technical-leadership-is-more-than-just-writing-code",
    title: "Why Technical Leadership Is More Than Just Writing Code",
    subtitle:
      "The real job of a technical lead is to create clarity, stability, and momentum around delivery.",
    excerpt:
      "The best technical leaders are not evaluated only by how much they personally build. They are evaluated by how clearly they guide systems, people, and trade-offs toward a better outcome.",
    publishedAt: "2025-10-30",
    updatedAt: "2025-10-30",
    author: "Theophilus Paintsil",
    authorRole: "Senior Software Engineer / Technical Lead",
    category: "Leadership",
    tags: [
      "Technical Leadership",
      "Mentoring",
      "Architecture",
      "Delivery",
      "Communication",
    ],
    coverImage: "/articles/technical-leadership.jpg",
    coverAlt: "Technical leadership and mentoring",
    sections: [
      {
        id: "ownership-and-clarity",
        heading: "Leadership starts with ownership and clarity",
        paragraphs: [
          "A technical lead owns ambiguity early so the team does not inherit it later. That means clarifying the problem, defining constraints, and making sure everyone understands what success looks like before the sprint begins.",
          "Leadership is often invisible when it works well. The team moves with less friction because decisions are explicit and priorities are stable.",
        ],
      },
      {
        id: "architecture-as-communication",
        heading:
          "Architecture is a communication problem as much as a technical one",
        paragraphs: [
          "A strong architecture is not just a diagram. It is a shared understanding of dependencies, risks, and the order in which decisions should be made.",
          "When a lead cannot explain the system simply, the system is usually too hard to maintain. Good architecture reduces the number of surprises the team has to carry.",
        ],
        bullets: [
          "Prefer small, understandable boundaries.",
          "Document decisions when the trade-off is non-obvious.",
          "Protect the team from churn that does not add value.",
        ],
      },
      {
        id: "mentorship-and-standards",
        heading: "Mentorship and standards are part of the job",
        paragraphs: [
          "A lead multiplies the team by teaching good habits: code review discipline, thoughtful testing, clear tickets, and healthy technical debate.",
          "This is not about perfection. It is about creating a stable baseline that keeps quality from depending on one person being in the room.",
        ],
      },
      {
        id: "balance-engineering-and-business",
        heading:
          "Balancing engineering and business pressure is a daily decision",
        paragraphs: [
          "Technical leadership requires empathy for the business outcome and honesty about the engineering cost. Shipping quickly matters, but so does knowing when a shortcut will become future drag.",
          "The best leads build trust by being consistent: they surface risk early, communicate trade-offs clearly, and keep the team focused on durable progress.",
        ],
      },
    ],
  },
  {
    slug: "how-to-design-api-endpoints-that-stay-small-predictable-and-easy-to-test",
    title:
      "How to Design API Endpoints That Stay Small, Predictable, and Easy to Test",
    subtitle:
      "A practical approach to keeping handlers thin, contracts clear, and backend changes low-risk.",
    excerpt:
      "A good API is boring in the best way: every endpoint does one job, failures are explicit, and the test surface stays small enough for a real team to maintain.",
    publishedAt: "2025-10-14",
    updatedAt: "2025-10-14",
    author: "Theophilus Paintsil",
    authorRole: "Senior Software Engineer / Technical Lead",
    category: "Backend Engineering",
    tags: ["API Design", "Testing", "REST", "Validation", "Contracts"],
    coverImage: "/articles/api-endpoints-whiteboard.jpg",
    coverAlt: "Team planning API endpoints on a whiteboard",
    sections: [
      {
        id: "define-one-responsibility",
        heading: "1. Give each endpoint one responsibility",
        paragraphs: [
          "The fastest way to create fragile APIs is to let a single route decide too many things. Keep each endpoint focused on one resource or one workflow so the shape of the contract stays understandable.",
          "When a route becomes hard to describe in one sentence, it is usually doing too much. Split the concern before the implementation turns into a patchwork of conditionals.",
        ],
        bullets: [
          "Prefer resource-oriented routes over catch-all handlers.",
          "Keep side effects obvious and predictable.",
          "Avoid mixing read and write concerns in one endpoint.",
        ],
      },
      {
        id: "validate-early",
        heading: "2. Validate inputs at the edge",
        paragraphs: [
          "An API should reject bad requests as early as possible. That protects the rest of the system and makes debugging easier because invalid input never reaches the business logic.",
          "Good validation is more than type checking. It also covers ranges, required relationships, and the difference between missing data and intentionally empty data.",
        ],
      },
      {
        id: "design-for-tests",
        heading: "3. Keep the implementation easy to test",
        paragraphs: [
          "If an endpoint is hard to test, it is often too tightly coupled. Separate parsing, business logic, and persistence so each part can be checked in isolation.",
          "This makes unit tests smaller and integration tests more meaningful because each layer has a clear role.",
        ],
        bullets: [
          "Keep request parsing separate from business rules.",
          "Mock only the boundary you do not control.",
          "Test the failure paths as deliberately as the success path.",
        ],
      },
      {
        id: "version-with-discipline",
        heading: "4. Version contracts only when you must",
        paragraphs: [
          "Versioning is useful, but it should not be the first answer to every change. Most API drift can be handled with additive fields, compatible defaults, and careful deprecation windows.",
          "When you do need a breaking change, make the transition explicit and communicate the cutoff clearly so clients are not surprised.",
        ],
      },
    ],
  },
  {
    slug: "how-to-structure-a-react-frontend-so-ui-data-and-state-do-not-collide",
    title:
      "How to Structure a React Frontend So UI, Data, and State Do Not Collide",
    subtitle:
      "A practical way to keep component logic small, data access predictable, and state transitions understandable.",
    excerpt:
      "Strong React codebases are built by separating rendering from state orchestration, not by stuffing every decision into the nearest component.",
    publishedAt: "2025-09-25",
    updatedAt: "2025-09-25",
    author: "Theophilus Paintsil",
    authorRole: "Senior Software Engineer / Technical Lead",
    category: "Frontend Engineering",
    tags: [
      "React",
      "State Management",
      "Components",
      "UI Architecture",
      "Forms",
    ],
    coverImage: "/articles/react-frontend-workspace.jpg",
    coverAlt: "Frontend developers working around laptops in a workspace",
    sections: [
      {
        id: "thin-components",
        heading: "1. Keep components thin enough to read quickly",
        paragraphs: [
          "A component should make the UI obvious at a glance. If it also owns data fetching, form state, business rules, and feature flags, it becomes hard to reason about and harder to reuse.",
          "Split large components into presentation pieces and container logic so the rendering layer stays calm and predictable.",
        ],
      },
      {
        id: "move-data-up",
        heading: "2. Move shared data to the right boundary",
        paragraphs: [
          "Duplicate fetching logic usually means the ownership boundary is wrong. Lift data to the smallest common parent or to a dedicated hook when multiple pieces of UI need the same source of truth.",
          "This reduces prop drilling noise without forcing every detail into a global store.",
        ],
        bullets: [
          "Keep local UI state local.",
          "Share only what truly needs to be shared.",
          "Use custom hooks to hide orchestration, not logic explosions.",
        ],
      },
      {
        id: "state-transitions",
        heading: "3. Make state transitions explicit",
        paragraphs: [
          "Most frontend bugs are not render bugs. They are state-transition bugs. Define the states your feature can actually enter, then make loading, success, empty, and error paths visible.",
          "When the UI reads like a state machine, it becomes easier to test and easier to extend.",
        ],
      },
      {
        id: "forms-and-validation",
        heading: "4. Treat forms as workflows, not inputs",
        paragraphs: [
          "Forms are where architecture becomes visible to users. Handle validation, submission, retry, and server errors as part of one workflow instead of bolting them on after the fact.",
          "That approach prevents the common pattern where the UI looks polished but fails in the exact place the user needs confidence.",
        ],
      },
    ],
  },
  {
    slug: "how-to-debug-a-production-incident-without-guessing",
    title: "How to Debug a Production Incident Without Guessing",
    subtitle:
      "A calm incident workflow for finding the cause, reducing blast radius, and learning the right lesson.",
    excerpt:
      "Production debugging works best when you replace panic with a narrow sequence: observe, isolate, verify, and only then change the system.",
    publishedAt: "2025-09-10",
    updatedAt: "2025-09-10",
    author: "Theophilus Paintsil",
    authorRole: "Senior Software Engineer / Technical Lead",
    category: "Reliability",
    tags: ["Debugging", "Incidents", "Observability", "Logs", "Postmortems"],
    coverImage: "/articles/production-incident-debugging.jpg",
    coverAlt: "Engineers investigating a live production incident",
    sections: [
      {
        id: "reproduce-the-symptom",
        heading: "1. Reproduce the symptom before changing anything",
        paragraphs: [
          "A vague incident becomes manageable once you can describe exactly what is failing. Capture the user-visible symptom, the affected path, and the smallest reproduction you can find.",
          "This reduces the urge to guess and keeps the team from chasing unrelated logs or noisy alerts.",
        ],
      },
      {
        id: "narrow-the-scope",
        heading: "2. Narrow the blast radius quickly",
        paragraphs: [
          "The next step is to separate one broken dependency from the rest of the stack. Check whether the problem is isolated to a route, a region, a release, or a specific class of users.",
          "That scope tells you whether you are looking at code, configuration, data, or infrastructure.",
        ],
        bullets: [
          "Compare healthy and failing requests side by side.",
          "Check recent deploys and config changes first.",
          "Prefer evidence over assumptions during the first pass.",
        ],
      },
      {
        id: "use-logs-and-traces",
        heading: "3. Use logs and traces to confirm the path",
        paragraphs: [
          "Logs explain what the system said, and traces explain where the request spent time. Together, they help you prove or reject a hypothesis instead of depending on intuition.",
          "If those signals are missing, that itself is a production problem worth fixing after the incident is under control.",
        ],
      },
      {
        id: "close-with-a-postmortem",
        heading: "4. Close the loop with a real postmortem",
        paragraphs: [
          "The end of an incident is not the fix. It is the learning. Write down the trigger, the detection gap, the mitigation, and the follow-up work that prevents the same category of issue from recurring.",
          "That is how an outage turns into a stronger system instead of a forgotten story.",
        ],
      },
    ],
  },
  {
    slug: "how-to-build-offline-first-mobile-features-for-unstable-networks",
    title: "How to Build Offline-First Mobile Features for Unstable Networks",
    subtitle:
      "A practical pattern for making mobile experiences useful even when connectivity is slow, flaky, or absent.",
    excerpt:
      "Offline-first design is not about making everything magical without the network. It is about protecting user intent when the network becomes unreliable.",
    publishedAt: "2025-08-27",
    updatedAt: "2025-08-27",
    author: "Theophilus Paintsil",
    authorRole: "Senior Software Engineer / Technical Lead",
    category: "Mobile Engineering",
    tags: ["Offline First", "Mobile", "Sync", "Caching", "Reliability"],
    coverImage: "/articles/offline-first-mobile.jpg",
    coverAlt: "A smartphone illustrating low-bandwidth mobile usage",
    sections: [
      {
        id: "protect-user-intent",
        heading: "1. Protect the user’s intent first",
        paragraphs: [
          "The core requirement is not full offline parity. It is preserving the action the user tried to take so it can safely complete later.",
          "That usually means storing drafts, queueing writes, and making the pending state visible instead of pretending everything succeeded instantly.",
        ],
      },
      {
        id: "design-sync-model",
        heading: "2. Design the sync model before the UI polish",
        paragraphs: [
          "Sync conflicts become much easier to manage when you decide up front which fields are authoritative, which can be merged, and which require human review.",
          "Without that decision, your UI ends up covering up a data model that cannot explain itself.",
        ],
        bullets: [
          "Store enough metadata to reconcile retries safely.",
          "Make conflicts visible instead of silently overwriting data.",
          "Use retry queues for side-effect-heavy operations.",
        ],
      },
      {
        id: "optimize-for-bandwidth",
        heading: "3. Optimize for bandwidth and battery",
        paragraphs: [
          "Slow network conditions punish unnecessary payloads. Trim API responses, compress media carefully, and defer non-essential requests until the app has room to breathe.",
          "On mobile, efficiency is not a luxury. It is part of the product experience.",
        ],
      },
      {
        id: "test-real-world-failures",
        heading: "4. Test the failures you actually expect",
        paragraphs: [
          "Test airplane mode, partial sync, repeated retries, and app restarts because those are the scenarios that reveal whether your offline strategy is real.",
          "If the feature only works on a stable desktop connection, it is not offline-first yet.",
        ],
      },
    ],
  },
  {
    slug: "how-to-refactor-a-monolith-into-clearer-modules-without-breaking-everything",
    title:
      "How to Refactor a Monolith Into Clearer Modules Without Breaking Everything",
    subtitle:
      "A gradual approach to carving out boundaries while keeping the existing product stable.",
    excerpt:
      "Big codebases do not need a rewrite first. They need disciplined seams, enough tests, and a refactor plan that lowers risk instead of increasing it.",
    publishedAt: "2025-08-12",
    updatedAt: "2025-08-12",
    author: "Theophilus Paintsil",
    authorRole: "Senior Software Engineer / Technical Lead",
    category: "Architecture",
    tags: [
      "Monolith",
      "Refactoring",
      "Boundaries",
      "Modular Design",
      "Testing",
    ],
    coverImage: "/articles/refactor-monolith-modules.jpg",
    coverAlt: "Software architecture planning on a whiteboard",
    sections: [
      {
        id: "find-the-seams",
        heading: "1. Find the seams before you move code",
        paragraphs: [
          "A useful refactor starts by identifying where the code already wants to separate: ownership boundaries, duplicated logic, and modules with clear names but blurry responsibilities.",
          "Those are the places where change is already expensive, so they are usually the best candidates for modularization.",
        ],
      },
      {
        id: "extract-behavior-gradually",
        heading: "2. Extract behavior gradually",
        paragraphs: [
          "Move one slice at a time and keep the old path working until the new one is proven. That lets you compare behavior instead of hoping the rewrite is correct.",
          "The safest refactor is the one that can be stopped halfway without breaking the product.",
        ],
        bullets: [
          "Wrap existing code behind new interfaces.",
          "Introduce tests before moving critical logic.",
          "Use feature flags when behavior needs to shift slowly.",
        ],
      },
      {
        id: "reduce-coupling",
        heading: "3. Reduce coupling at the edges first",
        paragraphs: [
          "The easiest wins usually come from the edges: controllers, routes, handlers, and presentation layers. Once those boundaries are clear, the deeper domain code becomes easier to isolate.",
          "A smaller surface area gives the team room to refactor with confidence.",
        ],
      },
      {
        id: "keep-the-ship-moving",
        heading: "4. Keep shipping while you refactor",
        paragraphs: [
          "Refactoring should not freeze delivery. The goal is to improve the codebase while the product keeps moving, not to turn the codebase into a construction site.",
          "That discipline is what turns a monolith into something maintainable instead of something merely renamed.",
        ],
      },
    ],
  },
  {
    slug: "how-to-set-up-a-practical-ci-pipeline-that-catches-regressions-early",
    title:
      "How to Set Up a Practical CI Pipeline That Catches Regressions Early",
    subtitle:
      "A lean CI approach that prioritizes fast feedback, meaningful checks, and stable releases.",
    excerpt:
      "The best CI pipeline is the one that gives developers enough confidence to merge without turning every push into a slow, noisy ritual.",
    publishedAt: "2025-07-30",
    updatedAt: "2025-07-30",
    author: "Theophilus Paintsil",
    authorRole: "Senior Software Engineer / Technical Lead",
    category: "DevOps",
    tags: ["CI/CD", "Testing", "Automation", "Builds", "Quality Gates"],
    coverImage: "/articles/ci-pipeline-regression.jpg",
    coverAlt: "Infrastructure and servers supporting continuous integration",
    sections: [
      {
        id: "start-with-fast-checks",
        heading: "1. Start with the fastest checks first",
        paragraphs: [
          "CI works best when the first checks fail quickly. Linting, type checking, and a narrow test slice can catch obvious mistakes before the pipeline spends time on heavier work.",
          "Fast feedback keeps developers engaged and lowers the temptation to ignore the results.",
        ],
      },
      {
        id: "split-the-pipeline",
        heading: "2. Split the pipeline by purpose",
        paragraphs: [
          "Not every check belongs in the same stage. Unit tests, integration tests, build validation, and deploy verification each answer different questions and should run with different urgency.",
          "That separation makes failures easier to understand and keeps the main feedback loop short.",
        ],
        bullets: [
          "Keep the early stage cheap and deterministic.",
          "Reserve slower checks for deeper confidence.",
          "Make deployment gates explicit instead of accidental.",
        ],
      },
      {
        id: "use-reliable-environments",
        heading: "3. Make environments boring and repeatable",
        paragraphs: [
          "A brittle pipeline is often an environment problem in disguise. Lock dependencies, define build inputs clearly, and avoid undocumented steps that only exist in one engineer’s memory.",
          "Predictable CI is a form of product quality because it reduces false alarms and merge anxiety.",
        ],
      },
      {
        id: "treat-failures-as-signals",
        heading: "4. Treat failures as design feedback",
        paragraphs: [
          "If CI fails often, the issue is rarely the pipeline alone. It usually means the codebase, the tests, or the release process still has too much ambiguity.",
          "Use failures to simplify the workflow, not just to add more gates.",
        ],
      },
    ],
  },
  {
    slug: "how-to-build-a-feature-team-feedback-loop-with-logging-metrics-and-alerts",
    title:
      "How to Build a Feature Team Feedback Loop With Logging, Metrics, and Alerts",
    subtitle:
      "A practical way to turn production signals into product and engineering decisions.",
    excerpt:
      "Observability is not only for incident response. It also helps teams learn how features behave after release and where they are quietly failing.",
    publishedAt: "2025-07-16",
    updatedAt: "2025-07-16",
    author: "Theophilus Paintsil",
    authorRole: "Senior Software Engineer / Technical Lead",
    category: "Observability",
    tags: ["Logging", "Metrics", "Alerts", "Monitoring", "Production"],
    coverImage: "/articles/observability-feedback-loop.jpg",
    coverAlt: "Server room infrastructure supporting observability systems",
    sections: [
      {
        id: "instrument-the-workflow",
        heading: "1. Instrument the workflow that matters most",
        paragraphs: [
          "You do not need every metric on day one. Start with the user journey that matters most and capture the points where the feature can fail, stall, or confuse the user.",
          "Useful instrumentation follows the product flow instead of flooding the team with noise.",
        ],
      },
      {
        id: "choose-signal-over-noise",
        heading: "2. Choose signal over noise",
        paragraphs: [
          "Logs are only helpful if they answer a question. Give them enough structure to tell you what happened, where it happened, and which request or user journey they belong to.",
          "The same rule applies to metrics and alerts: prefer a few meaningful signals over a dashboard full of decoration.",
        ],
        bullets: [
          "Use correlation IDs for request tracing.",
          "Alert on user impact, not just system activity.",
          "Keep the signal vocabulary consistent across services.",
        ],
      },
      {
        id: "close-the-loop",
        heading: "3. Close the loop with the product team",
        paragraphs: [
          "Observability becomes powerful when the data changes decisions. Share trends with product and support so they can see where users struggle and where the experience degrades in real conditions.",
          "That feedback loop turns production data into a feature roadmap input instead of a retrospective artifact.",
        ],
      },
      {
        id: "review-and-improve",
        heading: "4. Review the signals regularly",
        paragraphs: [
          "Dashboards and alerts age quickly. Review them after each release cycle to remove dead noise, add missing paths, and refine thresholds that are no longer meaningful.",
          "A living observability layer is much more useful than a static one.",
        ],
      },
    ],
  },
  {
    slug: "how-to-document-engineering-decisions-so-the-team-can-move-faster",
    title: "How to Document Engineering Decisions So the Team Can Move Faster",
    subtitle:
      "A lightweight documentation habit that makes trade-offs easier to revisit and faster to trust.",
    excerpt:
      "Documentation is not bureaucracy when it removes repeated questions, preserves context, and keeps decisions from getting lost in chat history.",
    publishedAt: "2025-07-02",
    updatedAt: "2025-07-02",
    author: "Theophilus Paintsil",
    authorRole: "Senior Software Engineer / Technical Lead",
    category: "Team Culture",
    tags: [
      "Documentation",
      "Decision Records",
      "Communication",
      "Architecture",
      "Teams",
    ],
    coverImage: "/articles/engineering-decisions-documentation.jpg",
    coverAlt: "Engineers discussing technical decisions in a planning session",
    sections: [
      {
        id: "write-the-context",
        heading: "1. Write the context, not just the conclusion",
        paragraphs: [
          "A decision without context is hard to reuse. Capture the problem, the constraints, and the alternatives so future readers understand why the team chose a particular path.",
          "That record saves time when the same trade-off comes back later.",
        ],
      },
      {
        id: "keep-it-short",
        heading: "2. Keep the format short enough to read",
        paragraphs: [
          "Useful documentation should be easy to scan. A short decision record, design note, or issue summary is often better than a long polished document that nobody opens.",
          "Clarity beats ceremony.",
        ],
        bullets: [
          "State the problem clearly.",
          "List the options you rejected.",
          "Record the reason the chosen path wins.",
        ],
      },
      {
        id: "attach-to-work",
        heading: "3. Attach documentation to the work itself",
        paragraphs: [
          "Documentation works best when it lives near the decision it supports. Put it in the repository, the issue, or the design note that people will actually find.",
          "If the context is too far away from the code, it will be forgotten.",
        ],
      },
      {
        id: "review-and-update",
        heading: "4. Review it when reality changes",
        paragraphs: [
          "Good documentation is not permanent. Revisit the note after shipping, after incidents, and after major architectural shifts so it reflects what the team now knows.",
          "That keeps the record trustworthy instead of historical only.",
        ],
      },
    ],
  },
  {
    slug: "how-to-use-ai-tools-in-a-software-workflow-without-losing-engineering-judgment",
    title:
      "How to Use AI Tools in a Software Workflow Without Losing Engineering Judgment",
    subtitle:
      "A practical way to let AI assist with speed while keeping technical decisions grounded in evidence.",
    excerpt:
      "AI tools are most useful when they reduce repetitive work and most dangerous when they replace verification, context, or architecture thinking.",
    publishedAt: "2025-06-18",
    updatedAt: "2025-06-18",
    author: "Theophilus Paintsil",
    authorRole: "Senior Software Engineer / Technical Lead",
    category: "AI Engineering",
    tags: [
      "AI Tools",
      "Developer Workflow",
      "Review",
      "Prompting",
      "Productivity",
    ],
    coverImage: "/articles/ai-engineering-workflow.jpg",
    coverAlt: "Developer workspace using AI tools on a laptop",
    sections: [
      {
        id: "use-ai-for-scaffolding",
        heading: "1. Use AI for scaffolding, not final authority",
        paragraphs: [
          "AI can draft boilerplate, summarize unfamiliar code, and propose a first pass faster than most people can type. That makes it a strong accelerator for routine work.",
          "The final responsibility still belongs to the engineer who understands the context and verifies the result.",
        ],
      },
      {
        id: "verify-everything",
        heading:
          "2. Verify the output like you would any other untrusted input",
        paragraphs: [
          "Treat AI-generated code the way you would treat code from an unfamiliar package: useful, but not trusted until it is checked. Read the edge cases, run the tests, and confirm the assumptions.",
          "This discipline protects you from shipping plausible nonsense.",
        ],
        bullets: [
          "Check correctness before style.",
          "Ask the model to explain trade-offs, not just produce answers.",
          "Never skip testing because the output looks confident.",
        ],
      },
      {
        id: "keep-context-close",
        heading: "3. Keep the real context close to the task",
        paragraphs: [
          "The better the context, the better the result. Feed the model the relevant code, constraints, and desired outcome instead of hoping a vague prompt will produce magic.",
          "Good engineering judgment starts before the prompt is written.",
        ],
      },
      {
        id: "choose-where-it-helps",
        heading: "4. Choose the right places to use it",
        paragraphs: [
          "AI tends to help most with summarization, drafting, search, and repetitive transformations. It helps less when the work depends on deep product context or architectural trade-offs.",
          "Use it where speed matters, but keep your own reasoning in charge where correctness matters most.",
        ],
      },
    ],
  },
  {
    slug: "how-to-plan-and-run-a-technical-architecture-workshop-that-actually-helps",
    title:
      "How to Plan and Run a Technical Architecture Workshop That Actually Helps",
    subtitle:
      "A practical meeting format for turning vague architecture debates into decisions the team can use.",
    excerpt:
      "A useful architecture workshop should reduce confusion, expose trade-offs, and produce a clear next step instead of another pile of opinions.",
    publishedAt: "2025-06-04",
    updatedAt: "2025-06-04",
    author: "Theophilus Paintsil",
    authorRole: "Senior Software Engineer / Technical Lead",
    category: "Architecture",
    tags: [
      "Workshops",
      "Architecture",
      "Planning",
      "Decision Making",
      "Collaboration",
    ],
    coverImage: "/articles/architecture-workshop.jpg",
    coverAlt: "Team collaboration around an architecture whiteboard",
    sections: [
      {
        id: "define-the-outcome",
        heading: "1. Define the outcome before the meeting starts",
        paragraphs: [
          "A workshop without a clear outcome turns into a discussion. Decide whether you are mapping options, choosing a direction, or removing uncertainty before anyone enters the room.",
          "That clarity makes the session more focused and helps the team know what success looks like.",
        ],
      },
      {
        id: "bring-the-right-constraints",
        heading: "2. Bring the right constraints into the room",
        paragraphs: [
          "Architecture choices should be made against real constraints, not abstract ideals. Cost, timeline, security, maintainability, and operational risk all shape the answer.",
          "If those constraints are missing, the workshop will optimize for the wrong thing.",
        ],
        bullets: [
          "Share the problem statement in advance.",
          "Bring examples of current pain points.",
          "Keep the discussion tied to actual trade-offs.",
        ],
      },
      {
        id: "capture-decisions-live",
        heading: "3. Capture decisions live",
        paragraphs: [
          "Do not wait until after the workshop to write the outcome. Capture decisions, open questions, and next actions while the context is still fresh.",
          "That prevents the meeting from evaporating into memory-only agreement.",
        ],
      },
      {
        id: "end-with-next-steps",
        heading: "4. End with next steps, not applause",
        paragraphs: [
          "A workshop is useful only if it changes behavior. Finish by assigning owners, clarifying follow-up work, and naming the next point at which the decision should be revisited.",
          "That is what turns discussion into momentum.",
        ],
      },
    ],
  },
];

const practicalExampleSections: Record<string, Article["sections"][number]> = {
  "top-10-things-i-would-do-if-i-were-starting-again-as-a-junior-developer": {
    id: "practical-example",
    heading: "Practical example: first 30-day execution plan",
    paragraphs: [
      "A simple plan beats a giant learning roadmap. The key is to run short loops where you build, test, and reflect.",
    ],
    blocks: [
      {
        type: "code",
        label: "Example: Junior developer weekly loop",
        language: "text",
        code: `week-1/
  build: notes-api
  focus: routing, validation, error handling
  done-criteria: deployed endpoint + README

week-2/
  build: bug tracker mini app
  focus: debugging + logs
  done-criteria: 3 documented bugs with root cause

week-3/
  build: auth flow
  focus: sessions, hashing, authorization
  done-criteria: tests for login + permission checks

week-4/
  build: polish + write-up
  focus: refactor and communicate decisions
  done-criteria: architecture note + postmortem`,
      },
      {
        type: "list",
        style: "bullet",
        items: [
          "Tradeoff: slower breadth, but much stronger execution habits.",
          "Tradeoff: fewer projects, but each project teaches real delivery skills.",
        ],
      },
    ],
  },
  "developing-scalable-solutions-for-ghanaian-users-as-a-secure-software-lifecycle-professional":
    {
      id: "practical-example",
      heading: "Practical example: low-bandwidth cache and retry flow",
      paragraphs: [
        "For unstable networks, design the request path so the user still sees useful data and failed actions retry safely.",
      ],
      blocks: [
        {
          type: "code",
          label: "Example: Cache-first request with safe retry",
          language: "ts",
          code: `type Cached<T> = { value: T; fetchedAt: number };

async function loadProfile(userId: string) {
  const cached = await localStore.get<Cached<UserProfile>>(\`profile:\${userId}\`);
  if (cached && Date.now() - cached.fetchedAt < 5 * 60_000) {
    return { source: "cache", data: cached.value };
  }

  try {
    const data = await api.get<UserProfile>(\`/profiles/\${userId}\`);
    await localStore.set(\`profile:\${userId}\`, { value: data, fetchedAt: Date.now() });
    return { source: "network", data };
  } catch {
    if (cached) return { source: "stale-cache", data: cached.value };
    throw new Error("Profile unavailable. Try again when connection improves.");
  }
}`,
        },
        {
          type: "callout",
          text: "Final note: show users when data is stale so trust stays high.",
        },
      ],
    },
  "structuring-large-flutter-applications-using-clean-architecture": {
    id: "practical-example",
    heading: "Practical example: Flutter MVVM boundary",
    paragraphs: [
      "The boundary is easiest to maintain when each feature has a ViewModel, repository interface, and isolated data implementation.",
    ],
    blocks: [
      {
        type: "code",
        label: "Example: Flutter feature structure",
        language: "text",
        code: `lib/features/orders/
  presentation/
    pages/orders_page.dart
    viewmodels/orders_view_model.dart
  domain/
    entities/order.dart
    repositories/orders_repository.dart
  data/
    models/order_dto.dart
    sources/orders_remote_source.dart
    repositories/orders_repository_impl.dart`,
      },
      {
        type: "code",
        label: "Example: ViewModel + repository boundary",
        language: "dart",
        code: `class OrdersViewModel extends ChangeNotifier {
  OrdersViewModel(this._repo);
  final OrdersRepository _repo;

  bool isLoading = false;
  List<Order> orders = [];

  Future<void> load() async {
    isLoading = true;
    notifyListeners();
    orders = await _repo.fetchOrders();
    isLoading = false;
    notifyListeners();
  }
}`,
      },
    ],
  },
  "lessons-from-building-cloud-native-systems-with-nextjs-and-nestjs": {
    id: "practical-example",
    heading: "Practical example: Next.js MVVM + NestJS CQRS + Docker",
    paragraphs: [
      "Keep the frontend feature module clean, route side effects through a service, and isolate backend writes/reads with CQRS handlers.",
    ],
    blocks: [
      {
        type: "code",
        label: "Example: Next.js feature module structure",
        language: "text",
        code: `app/features/invoices/
  view/
    invoice-list.tsx
  view-model/
    use-invoice-list.ts
  service/
    invoice-service.ts
  types/
    invoice.ts`,
      },
      {
        type: "code",
        label: "Example: NestJS command/query handlers",
        language: "ts",
        code: `@CommandHandler(CreateInvoiceCommand)
export class CreateInvoiceHandler {
  async execute(command: CreateInvoiceCommand) {
    return this.repo.create(command.payload);
  }
}

@QueryHandler(GetInvoiceQuery)
export class GetInvoiceHandler {
  async execute(query: GetInvoiceQuery) {
    return this.repo.findById(query.id);
  }
}`,
      },
      {
        type: "code",
        label: "Example: Docker Compose setup",
        language: "yaml",
        code: `services:
  web:
    build: ./web
    ports: ["3000:3000"]
    depends_on: [api]
  api:
    build: ./api
    ports: ["4000:4000"]
    depends_on: [redis]
  redis:
    image: redis:7-alpine`,
      },
    ],
  },
  "why-technical-leadership-is-more-than-just-writing-code": {
    id: "practical-example",
    heading: "Practical example: decision record for a risky shortcut",
    paragraphs: [
      "A short decision record helps teams move fast without losing context. It keeps tradeoffs visible when pressure rises.",
    ],
    blocks: [
      {
        type: "code",
        label: "Example: Technical leadership decision record",
        language: "md",
        code: `# ADR-014: Background jobs for invoice emails

## Problem
Email sending in request path causes slow responses.

## Decision
Move email sending to a queue worker.

## Why this path
Improves response time and isolates retries.

## Tradeoffs
- Adds worker deployment and monitoring overhead.
- Requires idempotency for retries.

## Follow-up
Add dashboard for failed jobs and retry counts.`,
      },
    ],
  },
  "how-to-design-api-endpoints-that-stay-small-predictable-and-easy-to-test": {
    id: "practical-example",
    heading: "Practical example: consistent success and error shape",
    paragraphs: [
      "Stable API consumers rely on consistent response envelopes and explicit error details.",
    ],
    blocks: [
      {
        type: "code",
        label: "Example: API response and error format",
        language: "json",
        code: `{
  "ok": true,
  "data": {
    "id": "inv_124",
    "status": "paid"
  },
  "meta": {
    "requestId": "req_9f5e"
  }
}

{
  "ok": false,
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "customerEmail is required",
    "details": [{ "field": "customerEmail", "issue": "missing" }]
  },
  "meta": {
    "requestId": "req_9f5e"
  }
}`,
      },
      {
        type: "list",
        items: [
          "Tradeoff: strict contracts require discipline when changing payloads.",
          "Benefit: clients can build one predictable error handler.",
        ],
      },
    ],
  },
  "how-to-structure-a-react-frontend-so-ui-data-and-state-do-not-collide": {
    id: "practical-example",
    heading: "Practical example: feature-first frontend boundary",
    paragraphs: [
      "A feature folder with explicit view, hooks, and services keeps state ownership easier to reason about.",
    ],
    blocks: [
      {
        type: "code",
        label: "Example: Frontend feature folder",
        language: "text",
        code: `src/features/billing/
  components/
    billing-summary.tsx
    payment-method-form.tsx
  hooks/
    use-billing-summary.ts
  services/
    billing-api.ts
  state/
    billing-store.ts
  types/
    billing.ts`,
      },
      {
        type: "code",
        label: "Example: Service boundary",
        language: "ts",
        code: `export async function fetchBillingSummary(accountId: string) {
  return client.get<BillingSummary>(\`/accounts/\${accountId}/billing-summary\`);
}`,
      },
    ],
  },
  "how-to-debug-a-production-incident-without-guessing": {
    id: "practical-example",
    heading: "Practical example: incident timeline template",
    paragraphs: [
      "A small timeline prevents confusion during high-pressure debugging and makes postmortems more useful.",
    ],
    blocks: [
      {
        type: "code",
        label: "Example: Incident timeline",
        language: "text",
        code: `10:03 UTC - Alert fired: checkout 5xx > 6%
10:05 UTC - Scoped impact to /checkout only
10:08 UTC - Last deploy identified: api@2026.05.12.2
10:12 UTC - Reproduced with missing payment_provider_key
10:18 UTC - Rolled back config and cleared stale pods
10:24 UTC - Error rate back to baseline
10:50 UTC - Postmortem draft created`,
      },
    ],
  },
  "how-to-build-offline-first-mobile-features-for-unstable-networks": {
    id: "practical-example",
    heading: "Practical example: optimistic write queue with retries",
    paragraphs: [
      "Queue user writes locally first, then sync with idempotency keys to avoid duplicates when connectivity returns.",
    ],
    blocks: [
      {
        type: "code",
        label: "Example: Cache and retry write flow",
        language: "ts",
        code: `async function saveDraft(input: DraftInput) {
  const op = {
    id: crypto.randomUUID(),
    idempotencyKey: crypto.randomUUID(),
    payload: input,
    retryCount: 0,
  };

  await queueStore.add(op);
  await localStore.set(\`draft:\${op.id}\`, input);
}

async function flushQueue() {
  for (const op of await queueStore.pending()) {
    try {
      await api.post("/drafts", op.payload, {
        headers: { "Idempotency-Key": op.idempotencyKey },
      });
      await queueStore.markDone(op.id);
    } catch {
      await queueStore.bumpRetry(op.id);
    }
  }
}`,
      },
    ],
  },
  "how-to-refactor-a-monolith-into-clearer-modules-without-breaking-everything":
    {
      id: "practical-example",
      heading: "Practical example: before and after module seam",
      paragraphs: [
        "Refactors stay safe when you define boundaries first, then move one behavior slice at a time.",
      ],
      blocks: [
        {
          type: "code",
          label: "Example: Architecture flow (before vs after)",
          language: "text",
          code: `Before:
HTTP Handler -> GiantService -> DB + Email + Payment + Audit

After:
HTTP Handler -> OrdersModule
OrdersModule -> PaymentPort
OrdersModule -> AuditPort
OrdersModule -> OrdersRepository
Background Worker -> EmailPort`,
        },
        {
          type: "list",
          items: [
            "Tradeoff: extra interfaces increase initial boilerplate.",
            "Benefit: safer tests and smaller blast radius during change.",
          ],
        },
      ],
    },
  "how-to-set-up-a-practical-ci-pipeline-that-catches-regressions-early": {
    id: "practical-example",
    heading: "Practical example: focused GitHub Actions workflow",
    paragraphs: [
      "Separate fast checks from deeper checks to preserve quick feedback while still protecting release quality.",
    ],
    blocks: [
      {
        type: "code",
        label: "Example: GitHub Actions CI workflow",
        language: "yaml",
        code: `name: ci
on: [pull_request]

jobs:
  fast-checks:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
      - run: npm ci
      - run: npm run lint && npx tsc --noEmit

  build-and-tests:
    runs-on: ubuntu-latest
    needs: fast-checks
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
      - run: npm ci
      - run: npm run test && npm run build`,
      },
    ],
  },
  "how-to-build-a-feature-team-feedback-loop-with-logging-metrics-and-alerts": {
    id: "practical-example",
    heading: "Practical example: log, metric, and alert contract",
    paragraphs: [
      "A shared signal contract prevents each service from inventing incompatible telemetry.",
    ],
    blocks: [
      {
        type: "code",
        label: "Example: Structured log event",
        language: "json",
        code: `{
  "level": "error",
  "event": "checkout.payment_failed",
  "requestId": "req_1c2d",
  "userId": "usr_102",
  "provider": "mobile_money",
  "durationMs": 480,
  "errorCode": "PROVIDER_TIMEOUT"
}`,
      },
      {
        type: "code",
        label: "Example: Alert policy",
        language: "text",
        code: `metric: checkout_payment_failed_rate
condition: > 3% for 10m
severity: high
routing: payments-oncall
runbook: /runbooks/checkout-payment-failed-rate`,
      },
    ],
  },
  "how-to-document-engineering-decisions-so-the-team-can-move-faster": {
    id: "practical-example",
    heading: "Practical example: lightweight decision note template",
    paragraphs: [
      "A small template keeps documentation practical and keeps decisions easy to revisit.",
    ],
    blocks: [
      {
        type: "code",
        label: "Example: Decision note",
        language: "md",
        code: `# Decision: API idempotency keys for payment retries

## Problem
Duplicate charges can occur when clients retry on timeouts.

## Recommended approach
Require Idempotency-Key on payment create endpoints.

## Tradeoffs
- Adds key storage and cleanup logic.
- Prevents duplicate side effects under retries.

## Final note
Re-evaluate in 90 days based on retry patterns.`,
      },
    ],
  },
  "how-to-use-ai-tools-in-a-software-workflow-without-losing-engineering-judgment":
    {
      id: "practical-example",
      heading: "Practical example: AI prompt and review workflow",
      paragraphs: [
        "Treat AI output as a first draft. Use a checklist that forces context and verification.",
      ],
      blocks: [
        {
          type: "code",
          label: "Example: Prompt checklist",
          language: "text",
          code: `Task:
- What exact behavior should change?

Constraints:
- Which files are in scope?
- What cannot be changed?

Verification:
- Which tests/build commands must pass?
- What edge cases must be checked?`,
        },
        {
          type: "code",
          label: "Example: Review workflow",
          language: "text",
          code: `1. Read generated diff for scope drift.
2. Run build and typecheck.
3. Test one happy path and one failure path.
4. Confirm logs/errors are still actionable.
5. Document what was accepted and why.`,
        },
      ],
    },
  "how-to-plan-and-run-a-technical-architecture-workshop-that-actually-helps": {
    id: "practical-example",
    heading: "Practical example: architecture workshop flow",
    paragraphs: [
      "A practical workshop is short, explicit, and ends with accountable actions.",
    ],
    blocks: [
      {
        type: "code",
        label: "Example: Workshop flow diagram",
        language: "text",
        code: `Problem statement (10 min)
  -> Constraints review (10 min)
    -> Option A / B / C (20 min)
      -> Tradeoff scoring (15 min)
        -> Decision + owner (10 min)
          -> Follow-up tasks + due dates (5 min)`,
      },
      {
        type: "list",
        items: [
          "Common mistake: discussing solutions before agreeing on constraints.",
          "Final note: publish decisions in the repository within 24 hours.",
        ],
      },
    ],
  },
};

const detailedFollowUpSections: Record<string, Article["sections"][number]> = {
  "top-10-things-i-would-do-if-i-were-starting-again-as-a-junior-developer": {
    id: "practical-detail",
    heading: "Practical detail: how to turn practice into a repeatable habit",
    paragraphs: [
      "The goal is not to collect more theory. It is to build a loop where each project teaches one thing you can reuse on the next one.",
      "Write down what failed, what took too long, and what you would do differently next time. That turns every project into a smaller, more focused lesson.",
    ],
    blocks: [
      {
        type: "list",
        items: [
          "Write one note after each build about what felt unclear.",
          "Keep a small debugging log with the cause, fix, and lesson.",
          "Rebuild one old feature after a week to check whether the concept stuck.",
        ],
      },
    ],
  },
  "developing-scalable-solutions-for-ghanaian-users-as-a-secure-software-lifecycle-professional": {
    id: "practical-detail",
    heading: "Practical detail: graceful degradation before failure",
    paragraphs: [
      "A resilient product gives the user a fallback instead of a blank screen or a generic timeout. That usually means cached data, clear retry states, and a visible last-updated time.",
      "When the network is weak, users care more about certainty than freshness alone.",
    ],
    blocks: [
      {
        type: "code",
        label: "Example: response states to show in the UI",
        language: "json",
        code: `{
  "state": "fresh",
  "updatedAt": "2026-05-12T09:10:00Z"
}

{
  "state": "stale",
  "updatedAt": "2026-05-12T08:10:00Z",
  "retryInSeconds": 30
}`,
      },
    ],
  },
  "structuring-large-flutter-applications-using-clean-architecture": {
    id: "practical-detail",
    heading: "Practical detail: where MVVM helps and where it can get noisy",
    paragraphs: [
      "MVVM helps when the ViewModel owns screen state and the repository owns data access. It gets noisy when UI widgets start calling repositories directly or when the ViewModel becomes a second domain layer.",
      "A clean boundary means the screen can change without forcing the rest of the app to follow it.",
    ],
    blocks: [
      {
        type: "list",
        items: [
          "Keep one ViewModel per feature screen or screen group.",
          "Keep repository interfaces in the domain layer, not in the widget tree.",
          "Move data mapping into the data layer so the UI never sees DTO noise.",
        ],
      },
    ],
  },
  "lessons-from-building-cloud-native-systems-with-nextjs-and-nestjs": {
    id: "practical-detail",
    heading: "Practical detail: keep the request path and background work separate",
    paragraphs: [
      "The request path should answer quickly. Anything slow, retry-heavy, or side-effect heavy belongs in a queue or another async boundary.",
      "That separation keeps the user-facing code simple and makes failures easier to observe.",
    ],
    blocks: [
      {
        type: "code",
        label: "Example: request lifecycle",
        language: "text",
        code: `Client -> Next.js route -> NestJS controller -> command handler -> queue
Client <- immediate response
Worker -> queue job -> email/payment/audit side effects`,
      },
    ],
  },
  "why-technical-leadership-is-more-than-just-writing-code": {
    id: "practical-detail",
    heading: "Practical detail: make the decision visible to the team",
    paragraphs: [
      "Good leadership is not just deciding. It is making the decision easy to find, easy to challenge, and easy to execute.",
      "If the team cannot see why a decision was made, they will keep reopening it.",
    ],
    blocks: [
      {
        type: "list",
        items: [
          "Document the constraint that mattered most.",
          "Call out the option you rejected and why.",
          "Name the follow-up that would invalidate the decision later.",
        ],
      },
    ],
  },
  "how-to-design-api-endpoints-that-stay-small-predictable-and-easy-to-test": {
    id: "practical-detail",
    heading: "Practical detail: keep failure states predictable",
    paragraphs: [
      "A stable API makes it obvious what happened. The user should not need to guess whether the problem was validation, authorization, or a backend outage.",
      "That clarity lowers support cost and makes client code much simpler.",
    ],
    blocks: [
      {
        type: "list",
        style: "bullet",
        items: [
          "400 for invalid input and missing required fields.",
          "401 or 403 for auth problems, never a generic 500.",
          "503 when the dependency is unavailable and a retry is reasonable.",
        ],
      },
    ],
  },
  "how-to-structure-a-react-frontend-so-ui-data-and-state-do-not-collide": {
    id: "practical-detail",
    heading: "Practical detail: separate state ownership from rendering",
    paragraphs: [
      "The cleanest React codebases make it obvious who owns data, who owns derived state, and who only renders props.",
      "That separation keeps components small and reviewable.",
    ],
    blocks: [
      {
        type: "code",
        label: "Example: one state owner per feature",
        language: "text",
        code: `page component -> calls hook
hook -> owns fetch/state orchestration
service -> owns API calls
presentational component -> renders props only`,
      },
    ],
  },
  "how-to-debug-a-production-incident-without-guessing": {
    id: "practical-detail",
    heading: "Practical detail: stop at the smallest believable cause",
    paragraphs: [
      "Once you have a plausible root cause, verify it with one more signal before you change production. That keeps you from fixing the wrong layer.",
      "The shortest path to resolution is usually a small, confident change, not a broad rewrite.",
    ],
    blocks: [
      {
        type: "list",
        items: [
          "Confirm the error rate moved after the suspect change.",
          "Check whether a rollback or config change restores the baseline.",
          "Record the exact evidence that makes the cause believable.",
        ],
      },
    ],
  },
  "how-to-build-offline-first-mobile-features-for-unstable-networks": {
    id: "practical-detail",
    heading: "Practical detail: define sync conflicts before they happen",
    paragraphs: [
      "If two devices can edit the same thing, write down which fields win, which merge, and which must be resolved manually.",
      "The worst time to invent conflict rules is during an outage or a user complaint.",
    ],
    blocks: [
      {
        type: "list",
        items: [
          "Use server timestamps for final ordering when edits are independent.",
          "Use manual review when the same field changes in conflicting ways.",
          "Always keep the user’s last local draft until sync succeeds.",
        ],
      },
    ],
  },
  "how-to-refactor-a-monolith-into-clearer-modules-without-breaking-everything": {
    id: "practical-detail",
    heading: "Practical detail: refactor the seams, not the whole system",
    paragraphs: [
      "The safest refactor order is the one that reduces coupling before changing behavior. Move the seam first, then the code behind it.",
      "That way every step gives you a smaller, more testable surface.",
    ],
    blocks: [
      {
        type: "list",
        items: [
          "Start where the most change is happening already.",
          "Pull out dependency seams around I/O and integrations first.",
          "Leave the business rule code alone until the boundary is stable.",
        ],
      },
    ],
  },
  "how-to-set-up-a-practical-ci-pipeline-that-catches-regressions-early": {
    id: "practical-detail",
    heading: "Practical detail: use CI to protect merge confidence",
    paragraphs: [
      "A good pipeline gives the team a clear answer: can this safely merge or not? If the answer is noisy, developers start treating it as theatre.",
      "Fast checks are not about speed alone. They are about trust.",
    ],
    blocks: [
      {
        type: "list",
        items: [
          "Run the cheapest checks first.",
          "Keep the same commands locally and in CI where possible.",
          "Fail clearly enough that a developer knows what to fix next.",
        ],
      },
    ],
  },
  "how-to-build-a-feature-team-feedback-loop-with-logging-metrics-and-alerts": {
    id: "practical-detail",
    heading: "Practical detail: choose metrics that answer a decision",
    paragraphs: [
      "If a metric does not help someone choose an action, it is probably just decoration. Keep the signal set small enough that the team can actually use it.",
      "Tie alerts to user impact, not vanity activity.",
    ],
    blocks: [
      {
        type: "code",
        label: "Example: metric naming pattern",
        language: "text",
        code: `feature_outcome_rate
feature_latency_ms
feature_error_rate
feature_retry_count`,
      },
    ],
  },
  "how-to-document-engineering-decisions-so-the-team-can-move-faster": {
    id: "practical-detail",
    heading: "Practical detail: keep docs alive by tying them to work",
    paragraphs: [
      "Documentation survives when it is part of the workflow, not a separate task. Add it to the same pull request or issue that made the decision necessary.",
      "Then update it when the decision changes.",
    ],
    blocks: [
      {
        type: "list",
        items: [
          "Link the note from the PR description.",
          "Add a short owner and review date.",
          "Delete stale docs when they no longer reflect the system.",
        ],
      },
    ],
  },
  "how-to-use-ai-tools-in-a-software-workflow-without-losing-engineering-judgment": {
    id: "practical-detail",
    heading: "Practical detail: know when to reject AI output",
    paragraphs: [
      "Reject the suggestion when the model cannot explain the tradeoff, when the scope drifted, or when the output makes verification harder instead of easier.",
      "Speed is only useful if the result stays reviewable.",
    ],
    blocks: [
      {
        type: "list",
        items: [
          "Reject it if the generated code is longer than the original problem needs.",
          "Reject it if you cannot test the behavior in a few minutes.",
          "Reject it if the output creates hidden dependencies or fragile abstractions.",
        ],
      },
    ],
  },
  "how-to-plan-and-run-a-technical-architecture-workshop-that-actually-helps": {
    id: "practical-detail",
    heading: "Practical detail: finish with an artifact, not just a conversation",
    paragraphs: [
      "The workshop is only useful if someone can read the output later and know what changed, what was rejected, and what comes next.",
      "That artifact can be a short note, a decision record, or a follow-up issue list.",
    ],
    blocks: [
      {
        type: "list",
        items: [
          "One decision owner.",
          "One page summary of options and tradeoffs.",
          "One follow-up list with due dates.",
        ],
      },
    ],
  },
};

export const articles: Article[] = baseArticles.map((article) => {
  const practicalSection = practicalExampleSections[article.slug];
  const detailedSection = detailedFollowUpSections[article.slug];

  if (!practicalSection && !detailedSection) {
    return article;
  }

  return {
    ...article,
    sections: [
      ...article.sections,
      ...(practicalSection ? [practicalSection] : []),
      ...(detailedSection ? [detailedSection] : []),
    ],
  };
});
