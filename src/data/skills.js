// Skills grouped by area. No percentages — each skill can carry an honest note instead.
// note: 'insightdesk' = used hands-on in InsightDesk · 'learning' = currently learning · 'basics' = introductory exposure
export const skillGroups = [
  {
    id: 'languages',
    title: 'Languages',
    file: 'languages.txt',
    skills: [
      { name: 'Java', note: 'insightdesk' },
      { name: 'Python' },
      { name: 'C' },
      { name: 'SQL' },
      { name: 'C++', note: 'learning' },
    ],
  },
  {
    id: 'backend',
    title: 'Backend / Web',
    file: 'backend.java',
    skills: [
      { name: 'Spring Boot', note: 'insightdesk' },
      { name: 'Spring Data JPA', note: 'insightdesk' },
      { name: 'Thymeleaf', note: 'insightdesk' },
      { name: 'Maven', note: 'insightdesk' },
      { name: 'HTML' },
      { name: 'CSS' },
    ],
  },
  {
    id: 'data',
    title: 'Data',
    file: 'data.sql',
    skills: [
      { name: 'PostgreSQL', note: 'insightdesk' },
      { name: 'Redis', note: 'insightdesk' },
    ],
  },
  {
    id: 'cloud',
    title: 'Cloud & DevOps',
    file: 'deploy.yaml',
    skills: [
      { name: 'Docker', note: 'insightdesk' },
      { name: 'Docker Compose', note: 'insightdesk' },
      { name: 'Kubernetes', note: 'insightdesk' },
      { name: 'GitHub Actions', note: 'insightdesk' },
      { name: 'Google Cloud', note: 'insightdesk' },
      { name: 'Docker Hub', note: 'insightdesk' },
      { name: 'Linux', note: 'insightdesk' },
      { name: 'AWS', note: 'basics' },
    ],
  },
  {
    id: 'ai-tools',
    title: 'AI / Tools',
    file: 'tools.json',
    skills: [
      { name: 'Gemini API', note: 'insightdesk' },
      { name: 'Structured AI output / prompting', note: 'insightdesk' },
      { name: 'Git & GitHub' },
      { name: 'VS Code' },
    ],
  },
];

export const skillNotes = {
  insightdesk: { symbol: '♥', label: 'used hands-on in InsightDesk' },
  learning: { symbol: '◌', label: 'currently learning' },
  basics: { symbol: '·', label: 'basics / early exposure' },
};
