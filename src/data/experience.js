// Work experience, newest first. Add a new object to add a new role.
export const experience = [
  {
    id: 'cloudpro',
    company: 'CloudPro Bulut Bilişim A.Ş.',
    shortName: 'CloudPro',
    role: 'Software Engineering Intern — Cloud & DevOps',
    department: 'Cloud Services Department',
    location: 'Istanbul',
    period: '15 Jun — 10 Jul 2026',
    duration: '20 working days',
    summary:
      'A four-week internship in a cloud services team. I spent the first week learning the stack hands-on — Linux and the terminal, containers, Kubernetes and DevOps workflows — then applied it to InsightDesk, the internship engineering project I developed and deployed end to end.',
    timeline: [
      {
        label: 'Week 1',
        title: 'Foundations',
        text: 'Linux & terminal, container and Kubernetes basics, DevOps workflows. Containerized a Java web app with Docker and deployed a small Dockerized project on Kubernetes.',
      },
      {
        label: 'Week 2',
        title: 'First deployment',
        text: 'Planned the InsightDesk architecture, set up an AWS EC2 instance over SSH, deployed the app manually, then wrote the first Dockerfiles.',
      },
      {
        label: 'Week 3',
        title: 'AI + Kubernetes',
        text: 'Added the Redis queue and Gemini AI worker, ran all services with Docker Compose, then moved to a self-managed Kubernetes cluster on Google Cloud.',
      },
      {
        label: 'Week 4',
        title: 'Automate & test',
        text: 'Tested self-healing and scaling, built a GitHub Actions CI/CD pipeline, ran end-to-end tests and documented the system.',
      },
    ],
    exposure: ['Linux', 'Docker', 'Kubernetes', 'Cloud deployment', 'DevOps', 'CI/CD', 'AI integration'],
    projectLink: '#project',
  },
];
