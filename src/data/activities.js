// Engineering activities & clubs.
// For team entries, keep `team` (what the team does / achieved) separate from `myRole`.
export const featuredActivity = {
  id: 'ozu-racing',
  name: 'OzU Racing',
  unit: 'Autonomous Team',
  myRole: 'Team Member — Autonomous Team',
  period: '2025 — present',
  motto: 'See. Decide. Drive.',
  team: {
    intro:
      "OzU Racing is Özyeğin University's Formula Student team. Its Autonomous Team develops the software that lets the ADS-DV — the autonomous vehicle used in Formula Student AI — navigate a course without a driver.",
    achievements: [
      { event: 'Formula Student AI UK 2025', result: '2nd place', category: 'Real World AI' },
      { event: 'Formula Student AI UK 2026', result: 'Joint 3rd', category: 'Engineering Design' },
    ],
  },
  me:
    'I joined in 2025. It’s where my interest in autonomous systems meets a real engineering team — and a real car.',
  source: { label: 'racing.ozyegin.edu.tr', href: 'https://racing.ozyegin.edu.tr/' },
};

export const activities = [
  {
    id: 'ai-club',
    name: 'Artificial Intelligence Club',
    role: 'Member',
    period: '2024 — present',
    org: 'Özyeğin University',
    icon: 'spark',
  },
  {
    id: 'ieee',
    name: 'IEEE Club',
    role: 'Member',
    period: '2024 — present',
    org: 'Özyeğin University',
    icon: 'chip',
  },
];
