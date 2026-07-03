/** Curated Mermaid sources — one diagram type per article topic. */

export const articleDiagramSources = {
  ghanaPaymentState: `stateDiagram-v2
    direction LR
    [*] --> Pending
    Pending --> Provider: charge
    Provider --> Reconcile: webhook
    Reconcile --> Final: settled
    Pending --> Failed: timeout
    Provider --> Failed: error
    Failed --> Pending: retry`,

  flutterCleanArchitecture: `flowchart TB
    ui["UI / widgets and screens"]
    state["State / presentation logic"]
    domain["Domain / use cases and rules"]
    data["Data / repositories and APIs"]
    ui --> state
    state --> domain
    domain --> data`,

  cloudNativeRequestPath: `sequenceDiagram
    participant Client
    participant Next as Next.js
    participant Nest as NestJS
    participant Queue
    participant DB
    Client->>Next: HTTP request
    Next->>Nest: API call
    Nest->>Queue: enqueue job
    Nest-->>Client: 202 accepted
    Queue->>DB: async write`,

  leadershipDecisionPath: `flowchart TD
    Problem["Frame the problem"] --> Contract["Write the contract"]
    Contract --> Owner["Name the owner"]
    Owner --> Demo["Define the demo"]`,

  apiRequestFlow: `sequenceDiagram
    participant Client
    participant Controller
    participant Service
    participant Repository
    participant DB
    Client->>Controller: HTTP request
    Controller->>Service: validated DTO
    Service->>Repository: query
    Repository->>DB: SQL
    DB-->>Repository: rows
    Repository-->>Service: entities
    Service-->>Controller: result
    Controller-->>Client: response`,

  reactDataFlow: `flowchart TB
    Hook["useProfile hook"] --> Layout["Layout shell"]
    Layout --> Panels["Feature panels"]`,

  incidentResponse: `flowchart LR
    Observe["Observe"] --> Isolate["Isolate"]
    Isolate --> Verify["Verify"]
    Verify --> Fix["Fix"]`,

  offlineSyncPath: `sequenceDiagram
    participant User
    participant App
    participant Queue
    participant Server
    User->>App: save
    App->>Queue: optimistic write
    alt network available
        Queue->>Server: sync
        Server-->>App: confirmed
    else network down
        Queue-->>App: pending state
    end`,

  monolithSeam: `flowchart LR
    Billing["Billing module"] --> Seam{{Interface seam}} --> Notifications["Notifications module"]`,

  ciPipeline: `flowchart LR
    Commit --> Lint --> Test --> Build`,

  observabilityLoop: `flowchart LR
    Feature --> Logs --> Review --> Decision
    Decision -.-> Feature`,

  workshopOutput: `flowchart TD
    Problem --> Options
    Options --> Decision
    Decision --> NextStep["Next step"]`,

  juniorDebugLoop: `flowchart LR
    Repro["Reproduce"] --> Inspect["Inspect"]
    Inspect --> Hypothesis["Hypothesis"]
    Hypothesis --> Fix["Fix one thing"]`,

  decisionNoteFlow: `flowchart TD
    Context["Context"] --> Options["Options considered"]
    Options --> Decision["Decision"]
    Decision --> Owner["Owner and review"]`,

  aiReviewLoop: `flowchart LR
    Prompt --> Generate["Generate"]
    Generate --> Review["Human review"]
    Review --> Verify["Verify and merge"]`,
} as const;

export type ArticleDiagramSourceKey = keyof typeof articleDiagramSources;
