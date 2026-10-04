// Personal / contact information.
// Only public information belongs here — never add phone, address, birth date or student ID.
import portraitWebp from '../assets/images/aylin-portrait.webp';
import portraitJpg from '../assets/images/aylin-portrait.jpg';
import ozyeginLogo from '../assets/images/ozyegin-logo.webp';

export const profile = {
  firstName: 'Aylin',
  lastName: 'Minayi',
  fullName: 'Aylin Minayi',
  headline: 'Computer Science student · Özyeğin University',
  status: '3rd-year CS @ Özyeğin',
  heroHello: '> hello, world — I’m',
  heroLabels: ['Computer Science Student @ Özyeğin University', 'Cloud & DevOps Intern @ CloudPro · 2026'],

  // Hero tagline — specific to what Aylin has actually done.
  tagline:
    'Third-year Computer Science student at Özyeğin University. During my CloudPro internship I built InsightDesk — a Spring Boot app that reads customer feedback with Gemini AI — and deployed it on a Kubernetes cluster I set up myself.',

  interests: ['software engineering', 'AI', 'cloud & DevOps', 'backend', 'autonomous systems'],

  email: 'aminayi2006@gmail.com',
  links: {
    github: 'https://github.com/aylinminayi',
    linkedin: 'https://www.linkedin.com/in/aylin-minayi-b92084331/',
  },

  photo: {
    webp: portraitWebp,
    jpg: portraitJpg,
    alt: 'Portrait photo of Aylin Minayi',
    note: "hi, it's me!",
  },

  terminal: [
    { type: 'cmd', text: 'whoami' },
    { type: 'out', text: '3rd-year CS student @ Özyeğin' },
    { type: 'out', text: 'backend · cloud & devops · AI' },
    { type: 'cmd', text: 'kubectl get pods -n insightdesk' },
    { type: 'pod', text: 'insightdesk-api', status: 'Running' },
    { type: 'pod', text: 'insightdesk-worker', status: 'Running' },
  ],
};

export const about = {
  paragraphs: [
    "I'm a third-year Computer Science student at Özyeğin University in Istanbul, with a minor in Electrical and Electronics Engineering. I'm most curious about the places where software meets infrastructure and intelligence: backend systems, AI integration, cloud & DevOps — and, through OzU Racing, autonomous systems.",
    'Coursework in object-oriented programming, databases/SQL and computer networking gave me the foundations I leaned on during my internship. The internship taught me that shipping software means running, securing and updating it too — not only writing the code.',
  ],
  education: [
    {
      school: 'Özyeğin University',
      place: 'Istanbul',
      period: '2024 — present',
      lines: [
        'Faculty of Engineering',
        'Department of Computer Science',
        'Minor: Electrical and Electronics Engineering',
      ],
      badge: '3rd year',
      logo: { src: ozyeginLogo, alt: 'Özyeğin University logo', width: 520, height: 154 },
    },
    {
      school: 'Birikim Science High School',
      place: 'Istanbul',
      period: '2020 — 2024',
      lines: [],
    },
  ],
  languages: [
    { name: 'Turkish', level: 'Native' },
    { name: 'Persian', level: 'Native' },
    { name: 'English', level: 'B2' },
    { name: 'German', level: 'Learning' },
  ],
};

// "Beyond code" section (shown just before Contact).
export const music = {
  title: 'Piano',
  since: 'since age 8',
  text: 'I’ve been playing the piano since I was 8, alongside school and engineering.',
  detail: 'Royal Conservatory of Music (RCM) — Grade 4 candidate',
};
