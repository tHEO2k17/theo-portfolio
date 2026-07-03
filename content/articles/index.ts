import { articleBodies } from '@/content/articles/bodies';
import { getArticleCoverImage } from '@/lib/writing/article-covers';
import { getArticleContentPlan } from '@/lib/writing/content-plan';
import { applyNarrativeHeadings } from '@/lib/writing/section-headings';
import type { Article } from '@/types/article';

type ArticleMeta = Omit<Article, 'sections' | 'subtitle' | 'excerpt'>;

const articleMeta: ArticleMeta[] = [
  {
    slug: 'top-10-things-i-would-do-if-i-were-starting-again-as-a-junior-developer',
    title: 'Starting Again as a Junior Developer',
    publishedAt: '2026-02-04',
    updatedAt: '2026-02-04',
    author: 'Theophilus Paintsil',
    authorRole: 'Software engineer',
    category: 'Field Notes',
    tags: ['Junior Developers', 'Fundamentals', 'Git', 'Debugging'],
    featured: true,
  },
  {
    slug: 'developing-scalable-solutions-for-ghanaian-users-as-a-secure-software-lifecycle-professional',
    title: 'Building for Ghanaian Users',
    publishedAt: '2026-01-21',
    updatedAt: '2026-01-21',
    author: 'Theophilus Paintsil',
    authorRole: 'Software engineer',
    category: 'Product Notes',
    tags: ['Ghana', 'Payments', 'Mobile', 'Networks'],
  },
  {
    slug: 'structuring-large-flutter-applications-using-clean-architecture',
    title: 'Flutter Apps That Stay Readable',
    publishedAt: '2025-12-17',
    updatedAt: '2025-12-17',
    author: 'Theophilus Paintsil',
    authorRole: 'Software engineer',
    category: 'Engineering Notes',
    tags: ['Flutter', 'Mobile', 'Boundaries'],
  },
  {
    slug: 'lessons-from-building-cloud-native-systems-with-nextjs-and-nestjs',
    title: 'Next.js and NestJS in Production',
    publishedAt: '2025-11-26',
    updatedAt: '2025-11-26',
    author: 'Theophilus Paintsil',
    authorRole: 'Software engineer',
    category: 'Architecture Notes',
    tags: ['Next.js', 'NestJS', 'Queues', 'APIs'],
  },
  {
    slug: 'why-technical-leadership-is-more-than-just-writing-code',
    title: 'Leadership Beyond Code',
    publishedAt: '2025-10-30',
    updatedAt: '2025-10-30',
    author: 'Theophilus Paintsil',
    authorRole: 'Software engineer',
    category: 'Leadership Notes',
    tags: ['Technical Leadership', 'Delivery', 'Contracts', 'Teams'],
  },
  {
    slug: 'how-to-design-api-endpoints-that-stay-small-predictable-and-easy-to-test',
    title: 'API Endpoints That Stay Small',
    publishedAt: '2025-10-14',
    updatedAt: '2025-10-14',
    author: 'Theophilus Paintsil',
    authorRole: 'Software engineer',
    category: 'Engineering Notes',
    tags: ['API Design', 'Testing', 'Backend'],
  },
  {
    slug: 'how-to-structure-a-react-frontend-so-ui-data-and-state-do-not-collide',
    title: 'React Without Tangled State',
    publishedAt: '2025-09-25',
    updatedAt: '2025-09-25',
    author: 'Theophilus Paintsil',
    authorRole: 'Software engineer',
    category: 'Engineering Notes',
    tags: ['React', 'State', 'Frontend'],
  },
  {
    slug: 'how-to-debug-a-production-incident-without-guessing',
    title: 'Debugging Production Without Guessing',
    publishedAt: '2025-09-10',
    updatedAt: '2025-09-10',
    author: 'Theophilus Paintsil',
    authorRole: 'Software engineer',
    category: 'Field Notes',
    tags: ['Incidents', 'Debugging', 'Production'],
  },
  {
    slug: 'how-to-build-offline-first-mobile-features-for-unstable-networks',
    title: 'Offline-First on Bad Networks',
    publishedAt: '2025-08-27',
    updatedAt: '2025-08-27',
    author: 'Theophilus Paintsil',
    authorRole: 'Software engineer',
    category: 'Product Notes',
    tags: ['Offline First', 'Mobile', 'Sync'],
  },
  {
    slug: 'how-to-refactor-a-monolith-into-clearer-modules-without-breaking-everything',
    title: 'Refactoring a Monolith Safely',
    publishedAt: '2025-08-12',
    updatedAt: '2025-08-12',
    author: 'Theophilus Paintsil',
    authorRole: 'Software engineer',
    category: 'Architecture Notes',
    tags: ['Monolith', 'Refactoring', 'Modules'],
  },
  {
    slug: 'how-to-set-up-a-practical-ci-pipeline-that-catches-regressions-early',
    title: 'CI That Catches Regressions Early',
    publishedAt: '2025-07-30',
    updatedAt: '2025-07-30',
    author: 'Theophilus Paintsil',
    authorRole: 'Software engineer',
    category: 'Engineering Notes',
    tags: ['CI/CD', 'Testing', 'Automation'],
  },
  {
    slug: 'how-to-build-a-feature-team-feedback-loop-with-logging-metrics-and-alerts',
    title: 'When Metrics Looked Fine',
    publishedAt: '2025-07-16',
    updatedAt: '2025-07-16',
    author: 'Theophilus Paintsil',
    authorRole: 'Software engineer',
    category: 'Field Notes',
    tags: ['Metrics', 'Logging', 'Product'],
  },
  {
    slug: 'how-to-document-engineering-decisions-so-the-team-can-move-faster',
    title: 'One Note Ended Three Meetings',
    publishedAt: '2025-07-02',
    updatedAt: '2025-07-02',
    author: 'Theophilus Paintsil',
    authorRole: 'Software engineer',
    category: 'Leadership Notes',
    tags: ['Documentation', 'Decisions', 'Teams'],
  },
  {
    slug: 'how-to-use-ai-tools-in-a-software-workflow-without-losing-engineering-judgment',
    title: 'AI in the Workflow',
    publishedAt: '2025-06-18',
    updatedAt: '2025-06-18',
    author: 'Theophilus Paintsil',
    authorRole: 'Software engineer',
    category: 'Engineering Notes',
    tags: ['AI Tools', 'Review', 'Workflow'],
  },
  {
    slug: 'how-to-plan-and-run-a-technical-architecture-workshop-that-actually-helps',
    title: 'Architecture Workshops That Decide',
    publishedAt: '2025-06-04',
    updatedAt: '2025-06-04',
    author: 'Theophilus Paintsil',
    authorRole: 'Software engineer',
    category: 'Architecture Notes',
    tags: ['Workshops', 'Decisions', 'Planning'],
  },
];

const readMoreLinks: Record<string, NonNullable<Article['readMore']>> = {
  'top-10-things-i-would-do-if-i-were-starting-again-as-a-junior-developer': [
    {
      label: 'MDN Learn web development',
      url: 'https://developer.mozilla.org/en-US/docs/Learn_web_development',
    },
    {
      label: 'freeCodeCamp curriculum',
      url: 'https://www.freecodecamp.org/learn/',
    },
  ],
  'developing-scalable-solutions-for-ghanaian-users-as-a-secure-software-lifecycle-professional': [
    {
      label: 'web.dev offline and resilience guidance',
      url: 'https://web.dev/articles/offline-cookbook',
    },
    {
      label: 'Flutter performance best practices',
      url: 'https://docs.flutter.dev/perf/best-practices',
    },
  ],
  'structuring-large-flutter-applications-using-clean-architecture': [
    {
      label: 'Flutter architecture guide',
      url: 'https://docs.flutter.dev/app-architecture/guide',
    },
  ],
  'lessons-from-building-cloud-native-systems-with-nextjs-and-nestjs': [
    {
      label: 'Next.js documentation',
      url: 'https://nextjs.org/docs',
    },
    {
      label: 'NestJS documentation',
      url: 'https://docs.nestjs.com/',
    },
  ],
  'how-to-design-api-endpoints-that-stay-small-predictable-and-easy-to-test': [
    {
      label: 'Microsoft REST API guidelines',
      url: 'https://github.com/microsoft/api-guidelines',
    },
    {
      label: 'OWASP API Security Top 10',
      url: 'https://owasp.org/API-Security/editions/2023/en/0x11-t10/',
    },
  ],
  'how-to-structure-a-react-frontend-so-ui-data-and-state-do-not-collide': [
    {
      label: 'React documentation',
      url: 'https://react.dev/learn',
    },
  ],
  'how-to-build-offline-first-mobile-features-for-unstable-networks': [
    {
      label: 'web.dev offline cookbook',
      url: 'https://web.dev/articles/offline-cookbook',
    },
  ],
  'how-to-refactor-a-monolith-into-clearer-modules-without-breaking-everything': [
    {
      label: 'Martin Fowler on monolith first',
      url: 'https://martinfowler.com/bliki/MonolithFirst.html',
    },
    {
      label: 'Martin Fowler on evolutionary architecture',
      url: 'https://martinfowler.com/articles/evolutionary-architecture/',
    },
  ],
  'how-to-set-up-a-practical-ci-pipeline-that-catches-regressions-early': [
    {
      label: 'GitHub Actions documentation',
      url: 'https://docs.github.com/actions',
    },
  ],
  'how-to-build-a-feature-team-feedback-loop-with-logging-metrics-and-alerts': [
    {
      label: 'OpenTelemetry documentation',
      url: 'https://opentelemetry.io/docs/',
    },
  ],
  'how-to-document-engineering-decisions-so-the-team-can-move-faster': [
    {
      label: 'Architecture decision records',
      url: 'https://adr.github.io/',
    },
  ],
  'how-to-plan-and-run-a-technical-architecture-workshop-that-actually-helps': [
    {
      label: 'Martin Fowler on software architecture',
      url: 'https://martinfowler.com/architecture/',
    },
    {
      label: 'Architecture decision records',
      url: 'https://adr.github.io/',
    },
  ],
};

export const articles: Article[] = articleMeta.map((meta) => {
  const body = articleBodies[meta.slug];
  const contentPlan = getArticleContentPlan(meta.slug);

  if (!body) {
    throw new Error(`Missing article body for slug: ${meta.slug}`);
  }

  return {
    ...meta,
    title: contentPlan?.plannedTitle ?? meta.title,
    subtitle: body.subtitle,
    excerpt: body.excerpt,
    category: contentPlan?.noteType ?? meta.category,
    noteType: contentPlan?.noteType,
    coverVariant: contentPlan?.coverVariant,
    coverImage: getArticleCoverImage(meta.slug),
    sections: applyNarrativeHeadings(meta.slug, body.sections),
    readMore: readMoreLinks[meta.slug],
  };
});
