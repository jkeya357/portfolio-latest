export const experience = [

  {
    id: 1,
    role: 'Full-Stack Software Developer',
    company: 'Saving Grace Education Group',
    location: 'Cape Town',
    period: 'Apr 2026 – Present',
    current: true,
    description: 'Own the design and delivery of production applications across frontend, backend, databases, integrations, cloud deployment and mobile packaging.',
    highlights: [
      'Build and run the Saving Grace AI Tutor and the SGEG Student Portal, connecting AI services, school systems, payments and learner-facing workflows.',
      'Make the engineering decisions around API contracts, database structure and migrations, authentication, deployment automation, performance, security and monitoring.',
      'Packaged the AI Tutor with Capacitor, wired Android release signing and published it through Google Play Console.',
    ],
    technologies: ['TypeScript', 'React', 'Express 5', 'PostgreSQL', 'Drizzle', 'OpenAI', 'AWS', 'Docker', 'GitHub Actions', 'Capacitor'],
  },

  {
    id: 2,
    role: 'Software Developer',
    company: 'Iron Gorilla',
    location: 'Cape Town',
    period: '2023 – 2026',
    current: false,
    description: 'Designed and deployed production-ready web applications in a team, with a focus on a reliable, pleasant user experience.',
    highlights: [
      'Planned features before execution, then built, deployed and iterated on them in production, delivering on schedule.',
      'Authored technical documentation and reports to keep code transparent and knowledge shared across the team.',
    ],
    technologies: ['Java', 'Spring Boot', 'JavaScript', 'React', 'Next.js', 'Node.js', 'PostgreSQL', 'MongoDB'],
  },

  {
    id: 3,
    role: 'Intern Web Developer',
    company: 'Litekube',
    location: 'Cape Town',
    period: '2022 – 2023',
    current: false,
    description: 'Helped design and build client websites while learning industry norms and best practices.',
    highlights: [
      'Contributed in brainstorming and design phases and proposed new implementations.',
      'Found and fixed bugs during debugging stages alongside senior developers.',
    ],
    technologies: ['HTML', 'CSS', 'JavaScript', 'React'],
  },
]

export const education = [
  {
    id: 1,
    qualification: 'Diploma in Information Technology',
    institution: 'Richfield College',
    location: 'Cape Town',
    period: '2023 – 2026',
  },
]

export const workingPrinciples = [
  { id: 1, icon: 'PencilRuler', title: 'Plan and design before building', description: 'Design contracts and data models early, then execute against them.' },
  { id: 2, icon: 'BookOpen',    title: 'Document decisions',              description: 'So any developer can pick up the code and understand the trade-offs.' },
  { id: 3, icon: 'SearchCode',  title: 'Debug methodically',              description: 'From logs, tests and monitoring to the actual root cause.' },
  { id: 4, icon: 'Users',       title: 'Communicate clearly',             description: 'Keep stakeholders aligned and lead when the situation needs it.' },
]
