import type { ArticleSection } from '@/types/article';
import { articleDiagramSources as d } from './diagram-sources';

export type ArticleBody = {
  subtitle: string;
  excerpt: string;
  sections: ArticleSection[];
};

export const articleBodies: Record<string, ArticleBody> = {
  'top-10-things-i-would-do-if-i-were-starting-again-as-a-junior-developer': {
    subtitle: 'What I would focus on if I started again today.',
    excerpt: 'I shipped code I could not trace. Fundamentals and git beat more tutorials.',
    sections: [
      {
        id: 'shipped-without-tracing',
        heading: 'I shipped a feature I could not trace',
        paragraphs: [
          'Early in my career I merged a pull request I barely understood. The UI worked. I could not explain how the data moved from the form to the database.',
          'When QA found a bug, I stared at the stack trace and guessed. That day taught me that finishing is not the same as learning.',
        ],
      },
      {
        id: 'context',
        heading: 'Context',
        paragraphs: [
          'I was stuck in a tutorial loop. Each week brought a new course. None of them ended with a small system I owned from start to deploy.',
          'Exposure felt like progress. I knew framework names. I could not debug a failed HTTP request on my own.',
        ],
      },
      {
        id: 'problem',
        heading: 'The problem',
        paragraphs: [
          'I mistook breadth for competence. New tools made me feel productive. The basics were still thin.',
          'Without HTTP, git, and debugging habits, every bug became a mystery. I depended on seniors to close loops I should have closed myself.',
        ],
      },
      {
        id: 'learned',
        heading: 'What I learned',
        paragraphs: [
          'Pick one stack. Trace one request end to end. Learn git well enough to bisect a regression.',
          'Treat debugging as the main skill. Reproduce, isolate, write the hypothesis, then change one thing.',
          'Finish small systems on purpose. Auth, validation, deploy, and one error path. That loop builds real confidence.',
        ],
      },
      {
        id: 'example',
        heading: 'A small debug session',
        paragraphs: [
          'On a later project I ran git bisect after a regression. The network tab showed a 422. The bug was validation that only ran on the client.',
        ],
        blocks: [
          {
            type: 'diagram',
            variant: 'pipeline',
            label: 'Debug loop',
            nodes: ['Reproduce', 'Inspect', 'Hypothesis', 'Fix'],
            mermaid: d.juniorDebugLoop,
          },
          {
            type: 'code',
            label: 'What I write down first',
            language: 'text',
            code: `Symptom: form submit shows success, row missing in DB
Repro: one user, one browser, staging
Check: network tab → 422, field "amount" rejected
Fix: validation ran client-side only`,
          },
        ],
      },
      {
        id: 'takeaway',
        heading: 'Takeaway',
        paragraphs: [
          'If I were starting again, I would finish small loops before chasing the next framework. Depth on the basics pays off on every project after.',
        ],
      },
    ],
  },

  'developing-scalable-solutions-for-ghanaian-users-as-a-secure-software-lifecycle-professional': {
    subtitle: 'What shipping in Ghana taught me about payments and networks.',
    excerpt: 'A payment looked successful. The wallet never updated. Design for the network you have.',
    sections: [
      {
        id: 'payment-timeout',
        heading: 'A payment looked successful. The wallet never updated.',
        paragraphs: [
          'On a mobile money flow the UI showed a spinner, then a success state. The provider timed out on their side. The user believed money had moved.',
          'Support tickets followed. The bug was not bad code alone. We had designed for the happy path on a network that rarely offers one.',
        ],
      },
      {
        id: 'context',
        heading: 'Context',
        paragraphs: [
          'I have shipped fintech and mobility products in Ghana. Users rely on mobile data, shared devices, and payment rails that can stall without a clear failure signal.',
          'Small payloads and fast first paint matter. So do honest transaction states.',
        ],
      },
      {
        id: 'problem',
        heading: 'The problem',
        paragraphs: [
          'We treated idempotency as a backend detail. The user saw binary loading screens. Timeout and failure looked the same as success for too long.',
          'Retries without keys risked duplicate charges. Support could not reconcile what the app had shown.',
        ],
      },
      {
        id: 'learned',
        heading: 'What I learned',
        paragraphs: [
          'Idempotency keys and clear status transitions are product features. The user needs to know pending, failed, and succeeded without guessing.',
          'Persist enough context to reconcile. Keep payloads small. Degrade when the network drops instead of pretending all is well.',
        ],
      },
      {
        id: 'example',
        heading: 'Retry key and status payload',
        paragraphs: [
          'We moved to explicit states and a client-generated idempotency key on every charge attempt.',
        ],
        blocks: [
          {
            type: 'diagram',
            variant: 'network',
            label: 'Payment state flow',
            nodes: ['Pending', 'Provider', 'Reconcile', 'Final'],
            mermaid: d.ghanaPaymentState,
          },
          {
            type: 'code',
            label: 'Minimal charge payload',
            language: 'json',
            code: `{
  "idempotencyKey": "chg_8f2a9c",
  "amount": 1200,
  "currency": "GHS",
  "status": "pending"
}`,
          },
        ],
      },
      {
        id: 'takeaway',
        heading: 'Takeaway',
        paragraphs: [
          'Build for the network and payment conditions you have, not the diagram in a slide deck. Resilience shows up in UX first.',
        ],
      },
    ],
  },

  'structuring-large-flutter-applications-using-clean-architecture': {
    subtitle: 'Boundary creep on a Flutter app that grew past twelve screens.',
    excerpt: 'The app was fine at three screens. It broke at twelve. Thin screens and clear repos helped.',
    sections: [
      {
        id: 'twelve-screens',
        heading: 'The app was fine at three screens. It broke at twelve.',
        paragraphs: [
          'Widgets started calling APIs directly. Two screens fetched the same profile shape with different parsing. A UI tweak broke checkout.',
          'The problem was not Flutter. Boundaries had not kept pace with the product.',
        ],
      },
      {
        id: 'context',
        heading: 'Context',
        paragraphs: [
          'The app had grown into payments, maps, and account settings. Multiple vendors and internal services sat behind one growing tree of widgets.',
          'We needed change without every feature rewrite dragging the rest.',
        ],
      },
      {
        id: 'problem',
        heading: 'The problem',
        paragraphs: [
          'Presentation owned orchestration, mapping, and error handling. Tests required pumping entire screens to check one rule.',
          'Riverpod providers had become a second place to hide business logic.',
        ],
      },
      {
        id: 'learned',
        heading: 'What I learned',
        paragraphs: [
          'Keep screens thin. Repositories own data access. Use cases own rules that survive API churn.',
          'DTOs stay at the edge. The domain does not mirror every field a vendor returns.',
        ],
      },
      {
        id: 'example',
        heading: 'Repository boundary',
        paragraphs: [],
        blocks: [
          {
            type: 'diagram',
            variant: 'layers',
            label: 'Layer split',
            nodes: ['UI', 'State', 'Domain', 'Data'],
            mermaid: d.flutterCleanArchitecture,
          },
          {
            type: 'code',
            label: 'Dart seam',
            language: 'dart',
            code: `class WalletRepository {
  Future<WalletBalance> fetchBalance() async {
    final dto = await _api.getWallet();
    return WalletBalance.fromDto(dto);
  }
}

// Screen only renders state from the provider`,
          },
        ],
        closingParagraphs: [
          'Once the seam was clear, we could test mapping without pumping widgets.',
        ],
      },
      {
        id: 'takeaway',
        heading: 'Takeaway',
        paragraphs: [
          'Add seams before the tree collapses. The goal is not purity. It is change without fear.',
        ],
      },
    ],
  },

  'lessons-from-building-cloud-native-systems-with-nextjs-and-nestjs': {
    subtitle: 'When the request path carried work that belonged in the background.',
    excerpt: 'The API timed out because email ran inside the HTTP handler. Split fast answers from async work.',
    sections: [
      {
        id: 'timeout',
        heading: 'The API timed out because the email job ran in the request',
        paragraphs: [
          'Users hit submit on onboarding. The Nest handler sent email, wrote audit rows, and called a webhook before responding.',
          'Under load the p95 climbed. Next.js looked fine. The API was doing too much synchronously.',
        ],
      },
      {
        id: 'context',
        heading: 'Context',
        paragraphs: [
          'We ran a full-stack product with Next.js for web and NestJS for APIs. SSR handled discovery and first paint. The API owned contracts and side effects.',
          'The split was right. The boundaries inside the API were not.',
        ],
      },
      {
        id: 'problem',
        heading: 'The problem',
        paragraphs: [
          'Slow and retry-prone work lived in controllers. Users waited on jobs that could fail independently of their action.',
          'One timeout produced duplicate retries upstream.',
        ],
      },
      {
        id: 'learned',
        heading: 'What I learned',
        paragraphs: [
          'Answer fast on the request path. Push notifications, imports, and webhook fan-out to a queue.',
          'Make the handoff explicit in logs so ops can trace request ID to job ID.',
        ],
      },
      {
        id: 'example',
        heading: 'Controller to queue handoff',
        blocks: [
          {
            type: 'diagram',
            variant: 'flow-horizontal',
            label: 'Request path',
            nodes: ['Client', 'Next', 'Nest', 'Queue', 'DB'],
            mermaid: d.cloudNativeRequestPath,
          },
          {
            type: 'code',
            label: 'Thin controller',
            language: 'typescript',
            code: `@Post('signup')
async signup(@Body() dto: SignupDto) {
  const user = await this.users.create(dto);
  await this.queue.enqueue('send-welcome', { userId: user.id });
  return { id: user.id, status: 'pending_email' };
}`,
          },
        ],
        paragraphs: [],
      },
      {
        id: 'takeaway',
        heading: 'Takeaway',
        paragraphs: [
          'Visible boundaries matter more than labels. Answer fast for users. Be honest about async work.',
        ],
      },
    ],
  },

  'why-technical-leadership-is-more-than-just-writing-code': {
    subtitle: 'A sprint that failed with green CI and merged PRs.',
    excerpt: 'Coding was fine. Clarity was missing. Ownership starts before the sprint.',
    sections: [
      {
        id: 'green-ci',
        heading: 'The sprint failed with green CI and merged PRs',
        paragraphs: [
          'Mobile and backend each shipped on time. Integration broke on a field rename nobody had agreed on.',
          'Reviews were polite. The contract between teams was not written down.',
        ],
      },
      {
        id: 'context',
        heading: 'Context',
        paragraphs: [
          'I was leading a delivery push across two squads. Everyone was coding. Standups sounded healthy.',
          'The gap was shared definition of done for the API surface.',
        ],
      },
      {
        id: 'problem',
        heading: 'The problem',
        paragraphs: [
          'We treated integration as a late surprise. Tickets assumed the other team had already chosen names, error shapes, and ownership.',
          'I was reviewing code well. I was not making success visible early enough.',
        ],
      },
      {
        id: 'learned',
        heading: 'What I learned',
        paragraphs: [
          'Leadership is clarity under pressure. Define the contract, the owner, and the demo path before the sprint starts.',
          'Mentorship and review matter. They do not replace a one-page note everyone can point to.',
        ],
      },
      {
        id: 'example',
        heading: 'Contract on the epic',
        paragraphs: [],
        blocks: [
          {
            type: 'diagram',
            variant: 'workshop',
            label: 'Decision path',
            nodes: ['Problem', 'Contract', 'Owner', 'Demo'],
            mermaid: d.leadershipDecisionPath,
          },
          {
            type: 'code',
            label: 'What we added to the epic',
            language: 'text',
            code: `API owner: backend squad
Contract: OpenAPI PR #214 merged before mobile starts
Demo: staging user can complete flow end to end
Done: both clients use the same error codes`,
          },
        ],
        closingParagraphs: [
          'That note took ten minutes. It prevented another week of drift.',
        ],
      },
      {
        id: 'takeaway',
        heading: 'Takeaway',
        paragraphs: [
          'A lead is judged on team output. Make the path visible early so coding time actually lands.',
        ],
      },
    ],
  },

  'how-to-design-api-endpoints-that-stay-small-predictable-and-easy-to-test': {
    subtitle: 'One route that did validation, mapping, and side effects.',
    excerpt: 'One route did too much. Tests were useless until we split the handler.',
    sections: [
      {
        id: 'one-route',
        heading: 'One route handled validation, mapping, and side effects',
        paragraphs: [
          'PATCH /orders/:id grew every sprint. It validated input, recalculated tax, wrote audit logs, and fired webhooks.',
          'Tests needed six mocks to assert one branch. Nobody wanted to touch it.',
        ],
      },
      {
        id: 'context',
        heading: 'Context',
        paragraphs: [
          'Feature pressure was high. The handler was the fastest place to ship. The cost showed up in regressions.',
        ],
      },
      {
        id: 'problem',
        heading: 'The problem',
        paragraphs: [
          'When a route cannot be described in one sentence, it is doing too many jobs.',
          'Failures were hard to classify because layers were fused together.',
        ],
      },
      {
        id: 'learned',
        heading: 'What I learned',
        paragraphs: [
          'Validate at the edge. Keep handlers thin. Let services own rules and repositories own persistence.',
          'One job per endpoint makes tests small and failures obvious.',
        ],
      },
      {
        id: 'example',
        heading: 'Thin handler shape',
        blocks: [
          {
            type: 'diagram',
            variant: 'flow-horizontal',
            label: 'Request flow',
            nodes: ['Client', 'Controller', 'Service', 'Repository', 'DB'],
            mermaid: d.apiRequestFlow,
          },
          {
            type: 'code',
            label: 'After split',
            language: 'typescript',
            code: `async updateStatus(id: string, dto: StatusDto) {
  const order = await this.orders.find(id);
  const next = this.statusRules.apply(order, dto.status);
  await this.orders.save(next);
  await this.events.publish('order.status_changed', { id });
}`,
          },
        ],
        paragraphs: [],
      },
      {
        id: 'takeaway',
        heading: 'Takeaway',
        paragraphs: [
          'If you cannot describe the endpoint in one sentence, split it before the conditionals win.',
        ],
      },
    ],
  },

  'how-to-structure-a-react-frontend-so-ui-data-and-state-do-not-collide': {
    subtitle: 'A dashboard that fetched the same profile three times on mount.',
    excerpt: 'The screen fetched the same data three times. Naming the state owner fixed it.',
    sections: [
      {
        id: 'triple-fetch',
        heading: 'The screen fetched the same data three times on mount',
        paragraphs: [
          'Header, sidebar, and main panel each called /profile in useEffect. Waterfalls stacked. The UI flickered between loading states.',
        ],
      },
      {
        id: 'context',
        heading: 'Context',
        paragraphs: [
          'The feature grew by adding components, not by deciding who owned shared data.',
          'Local state was fine for toggles. Shared account data was not local.',
        ],
      },
      {
        id: 'problem',
        heading: 'The problem',
        paragraphs: [
          'Render and orchestration lived in the same components. Every child could fetch. Nobody could say which copy was authoritative.',
        ],
      },
      {
        id: 'learned',
        heading: 'What I learned',
        paragraphs: [
          'Name the owner of each piece of state. Lift shared data to one hook or parent.',
          'Keep components thin enough to read in one pass.',
        ],
      },
      {
        id: 'example',
        heading: 'Feature folder boundary',
        blocks: [
          {
            type: 'diagram',
            variant: 'layers',
            label: 'Data flow',
            nodes: ['useProfile', 'Layout', 'Panels'],
            mermaid: d.reactDataFlow,
          },
          {
            type: 'code',
            label: 'Single owner hook',
            language: 'typescript',
            code: `function useProfile() {
  return useQuery({ queryKey: ['profile'], queryFn: fetchProfile });
}

// Children receive data; they do not fetch`,
          },
        ],
        paragraphs: [],
      },
      {
        id: 'takeaway',
        heading: 'Takeaway',
        paragraphs: [
          'Most frontend bugs are state ownership bugs. Fix the boundary before polishing the UI.',
        ],
      },
    ],
  },

  'how-to-debug-a-production-incident-without-guessing': {
    subtitle: 'Alerts fired. The dashboard looked fine.',
    excerpt: 'We patched the wrong layer first. Logs proved the assumption wrong.',
    sections: [
      {
        id: 'alerts-fine',
        heading: 'Alerts fired. The dashboard looked fine.',
        paragraphs: [
          'Error rate ticked up on checkout. CPU and memory were flat. The team jumped to rollback the last deploy.',
          'Rollback did nothing. The problem was not the release we feared.',
        ],
      },
      {
        id: 'context',
        heading: 'Context',
        paragraphs: [
          'Payments were failing for one region. Pressure was high. Chat filled with theories.',
        ],
      },
      {
        id: 'problem',
        heading: 'The problem',
        paragraphs: [
          'We wanted speed without proof. The first assumption felt plausible because the timing matched a deploy.',
          'Evidence was thin. We had not compared failing and healthy requests.',
        ],
      },
      {
        id: 'learned',
        heading: 'What I learned',
        paragraphs: [
          'Observe, isolate, verify, then change. Reproduce the symptom. Narrow scope. Use logs and traces to confirm.',
          'A postmortem note matters only if it names the detection gap.',
        ],
      },
      {
        id: 'example',
        heading: 'Incident timeline',
        blocks: [
          {
            type: 'diagram',
            variant: 'pipeline',
            label: 'Response flow',
            nodes: ['Observe', 'Isolate', 'Verify', 'Fix'],
            mermaid: d.incidentResponse,
          },
          {
            type: 'code',
            label: 'Short timeline',
            language: 'text',
            code: `14:02  spike on POST /pay in eu-west
14:08  compared traces: upstream 403, not app CPU
14:15  rotated API key for payment provider
14:22  error rate normal; kept enhanced logging`,
          },
        ],
        paragraphs: [],
      },
      {
        id: 'takeaway',
        heading: 'Takeaway',
        paragraphs: [
          'Evidence beats speed without proof. The fix was boring once we looked at the right signal.',
        ],
      },
    ],
  },

  'how-to-build-offline-first-mobile-features-for-unstable-networks': {
    subtitle: 'The user tapped save. The network dropped before the response.',
    excerpt: 'The network dropped mid-save. Protect user intent before polish.',
    sections: [
      {
        id: 'save-dropped',
        heading: 'The user tapped save. The network dropped before the response.',
        paragraphs: [
          'The form cleared on submit. The API never answered. The user assumed the record was gone.',
          'The feature was simple on paper. Offline support exposed every weak assumption.',
        ],
      },
      {
        id: 'context',
        heading: 'Context',
        paragraphs: [
          'We shipped a field workflow in a market where connectivity drops mid-action. Mobile was the only channel.',
        ],
      },
      {
        id: 'problem',
        heading: 'The problem',
        paragraphs: [
          'The UI pretended the network was reliable. Pending work was invisible. Retries could duplicate writes without a queue.',
        ],
      },
      {
        id: 'learned',
        heading: 'What I learned',
        paragraphs: [
          'Protect user intent first. Queue writes locally. Show pending, failed, and synced states honestly.',
          'Design the sync model before the animation budget.',
        ],
      },
      {
        id: 'example',
        heading: 'Optimistic write queue',
        blocks: [
          {
            type: 'diagram',
            variant: 'network',
            label: 'Sync path',
            nodes: ['Action', 'Queue', 'Sync', 'Server'],
            mermaid: d.offlineSyncPath,
          },
          {
            type: 'code',
            label: 'Queued write',
            language: 'typescript',
            code: `await localQueue.enqueue({
  id: crypto.randomUUID(),
  payload: formValues,
  status: 'pending',
});`,
          },
        ],
        paragraphs: [],
      },
      {
        id: 'takeaway',
        heading: 'Takeaway',
        paragraphs: [
          'Offline-first is about honest state, not full parity on day one. Users forgive slow. They do not forgive silent loss.',
        ],
      },
    ],
  },

  'how-to-refactor-a-monolith-into-clearer-modules-without-breaking-everything': {
    subtitle: 'We needed a seam, not a rewrite.',
    excerpt: 'Big-bang extraction was risky. One module boundary and tests let us keep shipping.',
    sections: [
      {
        id: 'seam-not-rewrite',
        heading: 'We needed a seam, not a rewrite',
        paragraphs: [
          'Leadership asked for a split before a major release. The monolith mixed billing and notifications in one folder.',
          'A rewrite would have frozen the product. We needed a smaller move.',
        ],
      },
      {
        id: 'context',
        heading: 'Context',
        paragraphs: [
          'Releases were weekly. Tests were thin on the billing edge. Every change touched unrelated imports.',
        ],
      },
      {
        id: 'problem',
        heading: 'The problem',
        paragraphs: [
          'The team wanted to extract everything at once. Without a seam, behavior comparisons were impossible.',
        ],
      },
      {
        id: 'learned',
        heading: 'What I learned',
        paragraphs: [
          'Find the seam with tests. Wrap old code behind a narrow interface. Ship while you split.',
          'Edges first: routes and handlers before deep domain moves.',
        ],
      },
      {
        id: 'example',
        heading: 'Import boundary',
        blocks: [
          {
            type: 'diagram',
            variant: 'layers',
            label: 'Monolith seam',
            nodes: ['Billing', 'Seam', 'Notifications'],
            mermaid: d.monolithSeam,
          },
          {
            type: 'code',
            label: 'Before and after',
            language: 'typescript',
            code: `// before
import { sendReceipt } from '../notifications/email';

// after
import { BillingNotifier } from './billing-notifier';`,
          },
        ],
        paragraphs: [],
      },
      {
        id: 'takeaway',
        heading: 'Takeaway',
        paragraphs: [
          'Refactor in slices that can stop halfway without breaking prod. Momentum beats a perfect diagram.',
        ],
      },
    ],
  },

  'how-to-set-up-a-practical-ci-pipeline-that-catches-regressions-early': {
    subtitle: 'A green merge still broke production on Tuesday.',
    excerpt: 'CI was slow and noisy. One fast check restored trust.',
    sections: [
      {
        id: 'green-merge',
        heading: 'A green merge still broke production on Tuesday',
        paragraphs: [
          'Type errors slipped through because the team ignored a flaky integration stage. The fix was small. The pipeline had trained us to skip red builds.',
        ],
      },
      {
        id: 'context',
        heading: 'Context',
        paragraphs: [
          'We shipped several times a week. The pipeline ran everything in one long job.',
        ],
      },
      {
        id: 'problem',
        heading: 'The problem',
        paragraphs: [
          'Slow feedback meant developers merged and hoped. The fastest useful signal was buried at minute twelve.',
        ],
      },
      {
        id: 'learned',
        heading: 'What I learned',
        paragraphs: [
          'Put the fastest check first: lint and typecheck before integration.',
          'Split stages by purpose. Treat flaky jobs as product bugs.',
        ],
      },
      {
        id: 'example',
        heading: 'Minimal workflow',
        blocks: [
          {
            type: 'diagram',
            variant: 'pipeline',
            label: 'CI stages',
            nodes: ['Commit', 'Lint', 'Test', 'Build'],
            mermaid: d.ciPipeline,
          },
          {
            type: 'code',
            label: 'GitHub Actions excerpt',
            language: 'yaml',
            code: `jobs:
  fast-check:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - run: npm ci
      - run: npm run lint && npm run typecheck`,
          },
        ],
        paragraphs: [],
      },
      {
        id: 'takeaway',
        heading: 'Takeaway',
        paragraphs: [
          'CI should build trust, not fatigue. One honest fast stage beats a long pipeline everyone ignores.',
        ],
      },
    ],
  },

  'how-to-build-a-feature-team-feedback-loop-with-logging-metrics-and-alerts': {
    subtitle: 'The feature chart was green. Support tickets were not.',
    excerpt: 'Success metrics missed silent failures. We instrumented the user workflow instead.',
    sections: [
      {
        id: 'green-chart',
        heading: 'The feature chart was green. Support tickets were not.',
        paragraphs: [
          'Activation looked strong. Users were abandoning on the last step of onboarding. The metric counted starts, not completions.',
        ],
      },
      {
        id: 'context',
        heading: 'Context',
        paragraphs: [
          'We had basic request metrics and a dashboard. Product trusted the headline number.',
        ],
      },
      {
        id: 'problem',
        heading: 'The problem',
        paragraphs: [
          'We instrumented servers, not the workflow users cared about. Failures were silent until support escalated.',
        ],
      },
      {
        id: 'learned',
        heading: 'What I learned',
        paragraphs: [
          'Log and metric the steps in the journey. Alert on user impact, not only CPU.',
          'Review signals with product after each release.',
        ],
      },
      {
        id: 'example',
        heading: 'One log and metric contract',
        blocks: [
          {
            type: 'diagram',
            variant: 'flow-horizontal',
            label: 'Feedback loop',
            nodes: ['Feature', 'Logs', 'Review', 'Decision'],
            mermaid: d.observabilityLoop,
          },
          {
            type: 'code',
            label: 'Structured event',
            language: 'json',
            code: `{
  "event": "onboarding.step_failed",
  "step": "verify_phone",
  "userId": "…",
  "errorCode": "sms_timeout"
}`,
          },
        ],
        paragraphs: [],
      },
      {
        id: 'takeaway',
        heading: 'Takeaway',
        paragraphs: [
          'Close the loop with product, not only engineering. A green chart that misses pain is worse than no chart.',
        ],
      },
    ],
  },

  'how-to-document-engineering-decisions-so-the-team-can-move-faster': {
    subtitle: 'We debated the same decision in three meetings.',
    excerpt: 'One short note ended the loop. Context beat conclusion alone.',
    sections: [
      {
        id: 'three-meetings',
        heading: 'We debated the same decision in three meetings',
        paragraphs: [
          'Cache layer or read replica? Each meeting reopened the same trade-offs. Nobody had the prior context in front of them.',
        ],
      },
      {
        id: 'context',
        heading: 'Context',
        paragraphs: [
          'The team was growing. Constraints shifted. Chat threads buried the reasoning.',
        ],
      },
      {
        id: 'problem',
        heading: 'The problem',
        paragraphs: [
          'Decisions lived in memory. New joiners argued from scratch. We were paying meeting tax for missing paper.',
        ],
      },
      {
        id: 'learned',
        heading: 'What I learned',
        paragraphs: [
          'Write context, options rejected, and owner. Keep it short. Store it next to the code.',
          'Review when reality changes. A stale note erodes trust.',
        ],
      },
      {
        id: 'example',
        heading: 'Eight-line decision note',
        blocks: [
          {
            type: 'diagram',
            variant: 'workshop',
            label: 'Decision note shape',
            nodes: ['Context', 'Options', 'Decision', 'Owner'],
            mermaid: d.decisionNoteFlow,
          },
          {
            type: 'code',
            label: 'Template we use',
            language: 'markdown',
            code: `# Use read replica for reporting
Status: accepted
Context: dashboards hammer primary DB
Decision: replica for reads; 5m lag OK
Rejected: cache layer (invalidation risk)
Owner: platform team
Review: after Q3 traffic shape`,
          },
        ],
        paragraphs: [],
      },
      {
        id: 'takeaway',
        heading: 'Takeaway',
        paragraphs: [
          'Write it once. Point people to it. Good docs answer the same question one time.',
        ],
      },
    ],
  },

  'how-to-use-ai-tools-in-a-software-workflow-without-losing-engineering-judgment': {
    subtitle: 'Generated code that passed review and failed on null.',
    excerpt: 'AI output looked right. A null edge case proved it was not.',
    sections: [
      {
        id: 'null-edge',
        heading: 'The generated code passed review. It failed on a null edge case.',
        paragraphs: [
          'I used AI to draft a parser for optional metadata. Tests covered the happy path. Production rows had null in metadata.items[0].nested.',
        ],
      },
      {
        id: 'context',
        heading: 'Context',
        paragraphs: [
          'I use AI for scaffolding, summaries, and repetitive transforms. Speed is real. So is plausible wrong output.',
        ],
      },
      {
        id: 'problem',
        heading: 'The problem',
        paragraphs: [
          'Review treated generated code like trusted input. We skipped the odd paths because the diff looked familiar.',
        ],
      },
      {
        id: 'learned',
        heading: 'What I learned',
        paragraphs: [
          'AI assists. I still own verification. Read edge cases, run tests, confirm assumptions.',
          'Better context in the prompt helps. It does not replace proof.',
        ],
      },
      {
        id: 'example',
        heading: 'Review checklist',
        blocks: [
          {
            type: 'diagram',
            variant: 'flow-horizontal',
            label: 'Human-in-the-loop review',
            nodes: ['Prompt', 'Generate', 'Review', 'Verify'],
            mermaid: d.aiReviewLoop,
          },
          {
            type: 'code',
            label: 'Three checks before merge',
            language: 'text',
            code: `1. Null, empty, and malformed inputs handled?
2. Tests cover failure paths, not only success?
3. Dependencies introduced are justified and pinned?`,
          },
        ],
        paragraphs: [],
      },
      {
        id: 'takeaway',
        heading: 'Takeaway',
        paragraphs: [
          'Verify AI output like any untrusted input. Speed without proof is debt with a confident face.',
        ],
      },
    ],
  },

  'how-to-plan-and-run-a-technical-architecture-workshop-that-actually-helps': {
    subtitle: 'One workshop ended in opinions. The next ended with an owner.',
    excerpt: 'The second workshop left a one-page decision. The first left slides.',
    sections: [
      {
        id: 'two-workshops',
        heading: 'One workshop ended in opinions. The next ended with an owner.',
        paragraphs: [
          'The first session debated microservices versus monolith for two hours. No artifact. The second started with a decision question and finished with names on follow-ups.',
        ],
      },
      {
        id: 'context',
        heading: 'Context',
        paragraphs: [
          'The team was stuck on event bus versus direct calls. Delivery needed a call within the week.',
        ],
      },
      {
        id: 'problem',
        heading: 'The problem',
        paragraphs: [
          'We confused exploration with decision. Constraints were missing from the room. People argued from different assumptions.',
        ],
      },
      {
        id: 'learned',
        heading: 'What I learned',
        paragraphs: [
          'Define the outcome before people arrive. Bring real constraints: timeline, ops cost, team size.',
          'Capture decisions live. End with one next step and one owner.',
        ],
      },
      {
        id: 'example',
        heading: 'One-page workshop output',
        blocks: [
          {
            type: 'diagram',
            variant: 'workshop',
            label: 'Workshop output',
            nodes: ['Problem', 'Options', 'Decision', 'Next step'],
            mermaid: d.workshopOutput,
          },
          {
            type: 'code',
            label: 'Page structure',
            language: 'text',
            code: `Problem: cross-service notifications
Options: bus vs direct HTTP (pros/cons)
Decision: direct HTTP for v1; bus in Q2
Owner: Alex; ADR #18 by Friday`,
          },
        ],
        paragraphs: [],
      },
      {
        id: 'takeaway',
        heading: 'Takeaway',
        paragraphs: [
          'Leave with one next step, not applause. A workshop is useful when behavior changes the next day.',
        ],
      },
    ],
  },
};
