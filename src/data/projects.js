// Projects. The project with `featured: true` gets the large case-study layout;
// any other projects added here render in a compact grid below it.
import dashboard from '../assets/images/insightdesk/dashboard.webp';
import feedbackForm from '../assets/images/insightdesk/feedback-form.webp';
import geminiPrompt from '../assets/images/insightdesk/gemini-prompt.webp';
import kubernetes from '../assets/images/insightdesk/kubernetes.webp';
import githubActions from '../assets/images/insightdesk/github-actions.webp';
import dockerCompose from '../assets/images/insightdesk/docker-compose.webp';

export const projects = [
  {
    id: 'insightdesk',
    featured: true,
    name: 'InsightDesk',
    kicker: 'Internship engineering project · CloudPro · Jun — Jul 2026',
    oneLiner:
      'An AI-assisted feedback management system. Users submit feedback, Gemini AI reads it in the background, and the support team gets a filterable dashboard with the sentiment, category, urgency, a short summary and a suggested reply for every message.',
    problem:
      'When a company receives lots of complaints, questions and feature requests, someone has to read, classify and prioritise every message by hand — and that gets slow as the volume grows.',
    approach:
      'I built InsightDesk in Java and Spring Boot, step by step: first a form saving to PostgreSQL, then a Redis queue with a background AI worker, then Docker, a self-managed Kubernetes cluster on Google Cloud, and finally a CI/CD pipeline.',
    repo: 'https://github.com/aylinminayi/insightdesk',

    // What Gemini returns for each message (mirrors the real prompt format).
    aiOutput: [
      { key: 'sentiment', value: 'positive | neutral | negative' },
      { key: 'category', value: 'bug | feature_request | complaint | question' },
      { key: 'urgency', value: 'low | medium | high' },
      { key: 'summary', value: 'one short sentence' },
      { key: 'suggested_reply', value: 'short professional reply' },
    ],

    // Architecture flow, split into the fast request path and the async background path.
    architecture: {
      lanes: [
        {
          id: 'request',
          label: 'request path',
          note: 'the user never waits for the AI',
          steps: [
            { title: 'Feedback form', note: 'Thymeleaf page · title, description, optional email', tag: 'ui' },
            { title: 'Spring Boot API', note: 'saves first, confirms to the user right away', tag: 'java' },
            { title: 'PostgreSQL', note: 'feedback stored · status: queued', tag: 'db' },
            { title: 'Redis queue', note: 'feedback ID pushed to feedback:queue', tag: 'queue' },
          ],
        },
        {
          id: 'background',
          label: 'background path',
          note: 'processed asynchronously',
          steps: [
            { title: 'Worker', note: 'same image, worker role on · up to 3 attempts', tag: 'java' },
            { title: 'Gemini AI', note: 'returns strict JSON · validated before saving', tag: 'ai' },
            { title: 'PostgreSQL', note: 'AI results saved · status: analyzed', tag: 'db' },
            { title: 'Dashboard', note: 'filters + pagination · Redis-cached queries', tag: 'ui' },
          ],
        },
      ],
      platform: [
        { label: 'Docker', note: 'API + worker share one image' },
        { label: 'Kubernetes', note: 'self-managed, single node (kubeadm)' },
        { label: 'Google Cloud', note: 'Compute Engine VM' },
        { label: 'GitHub Actions', note: 'build → Docker Hub → redeploy' },
      ],
    },

    highlights: [
      {
        title: 'Async by design',
        text: 'The API saves feedback and queues it in Redis; a separate worker calls Gemini. Receiving feedback and analysing it are independent operations.',
      },
      {
        title: 'One image, two roles',
        text: 'API and worker run from the same Docker image — an APP_WORKER_ENABLED environment variable decides which role a container plays.',
      },
      {
        title: "Doesn't blindly trust the AI",
        text: 'Gemini must answer in strict JSON. Required fields and allowed values are validated; failed jobs are retried and marked failed after three attempts.',
      },
      {
        title: 'A fast, filterable dashboard',
        text: 'Filter by status, category, sentiment and urgency (Spring Data JPA Specifications), paginated newest-first, with Redis caching cleared whenever data changes.',
      },
      {
        title: 'Kubernetes, set up by hand',
        text: 'Single-node cluster with kubeadm, containerd and Calico on a Google Cloud VM. Manifests for PostgreSQL with persistent storage, Redis, API, worker, ConfigMap and Secrets.',
      },
      {
        title: 'Tested, then automated',
        text: 'Deleted a pod to watch Kubernetes self-heal, scaled the API to two replicas, and added a GitHub Actions pipeline that rebuilds and redeploys on every push to main.',
      },
    ],

    // Real problems hit during the project and how they were solved.
    plotTwists: [
      { problem: 'Amazon Bedrock access was blocked', fix: 'switched the AI layer to Gemini via Google AI Studio' },
      { problem: 'AWS account issue stopped the EC2 instance', fix: 'moved the cluster to Google Cloud Compute Engine' },
      { problem: 'Image built on Apple Silicon, server needs amd64', fix: 'rebuilt for linux/amd64 with Docker Buildx' },
    ],

    // Real screenshots from the internship report (sensitive details redacted).
    gallery: [
      {
        src: dashboard,
        width: 1600,
        height: 778,
        caption: 'AI-analyzed feedback on the support dashboard',
        alt: 'InsightDesk support dashboard showing a "Checkout problem" feedback with its AI analysis: sentiment negative, category bug, urgency high, a summary and a suggested reply, plus filter dropdowns.',
        size: 'wide',
      },
      {
        src: feedbackForm,
        width: 1400,
        height: 1029,
        caption: 'Where it starts: the feedback form',
        alt: 'Pink InsightDesk feedback form with title, description and optional contact email fields and a Send Feedback button.',
        size: 'small',
      },
      {
        src: geminiPrompt,
        width: 990,
        height: 774,
        caption: 'Structured AI output with Gemini',
        alt: 'Java code building the Gemini prompt that asks for only valid JSON with sentiment, category, urgency, summary and suggested reply.',
        size: 'small',
      },
      {
        src: kubernetes,
        width: 1470,
        height: 735,
        caption: 'InsightDesk services running on Kubernetes',
        alt: 'Terminal output of kubectl showing the node Ready and the InsightDesk API, worker, PostgreSQL and Redis pods Running. IP addresses are redacted.',
        size: 'medium',
      },
      {
        src: dockerCompose,
        width: 1000,
        height: 1168,
        caption: 'Four services, one Compose file',
        alt: 'Docker Compose file defining postgres, redis and the InsightDesk api services, with secrets passed as environment variable placeholders.',
        size: 'tall',
      },
      {
        src: githubActions,
        width: 1400,
        height: 664,
        caption: 'Automated build and deployment pipeline',
        alt: 'GitHub Actions list of successful "Build and Deploy InsightDesk" workflow runs on the main branch.',
        size: 'medium',
      },
    ],

    stack: [
      { group: 'core', items: ['Java 21', 'Spring Boot', 'Spring Data JPA', 'Thymeleaf', 'Maven'] },
      { group: 'data', items: ['PostgreSQL', 'Redis'] },
      { group: 'ai', items: ['Gemini API'] },
      {
        group: 'infra',
        items: ['Docker', 'Docker Compose', 'Kubernetes', 'Google Cloud', 'GitHub Actions', 'Docker Hub', 'Linux'],
      },
      { group: 'early stage', items: ['AWS EC2 / IAM'] },
    ],
  },
];
