
export const projects = [

  {
    id: 1,
    title: 'Saving Grace AI Tutor',
    description: 'A live AI tutor for school-age learners in South Africa. Students talk to "Grace", who replies with streaming speech, live transcripts and an AI-drawn whiteboard, then tracks progress and emails parents a daily report. I built the PostgreSQL/Drizzle data layer, Express APIs, Clerk auth, PayFast subscriptions, the admin console, the GitHub Actions to AWS App Runner pipeline, and the Android release via Capacitor and Google Play.',
    image: '/images/projects/aiTutor.png',
    category: 'Live Products',
    technologies: ['TypeScript', 'React', 'Express 5', 'PostgreSQL', 'Drizzle', 'OpenAI', 'Redis', 'AWS', 'Docker', 'Capacitor'],
    demo: 'https://app.savinggraceaitutor.co.za/',
    metrics: 'In production · Jul 2026 – Present · Saving Grace Education Group'
  },

  {
    id: 2,
    title: 'SGEG Student Portal',
    description: 'The parent and student portal for an online homeschool: one dashboard for a learner\'s overall average, assignments and course progress, fees, attendance, reports and school news. I built the secured CRM-to-portal enrolment webhook that provisions each new student with their number, grade and subjects, handled English/Afrikaans subject aliases and grade rules, and integrated Canvas LMS access and PayFast payments.',
    image: '/images/projects/studentPortal.png',
    category: 'Live Products',
    technologies: ['TypeScript', 'React', 'REST Webhooks', 'PayFast', 'Canvas LMS'],
    demo: 'https://savinggraceeducationstudentportal.co.za/',
    metrics: 'In production · 2026 · Saving Grace Education Group'
  },

  {
    id: 3,
    title: 'Banking App',
    description: 'A full-stack digital banking application that supports user authentication, account management, and financial transactions. Built with a Java backend and a modern React/Next.js frontend, using PostgreSQL for secure and reliable data persistence.',
    image: '/images/projects/bankingApp.png',
    category: 'Full Stack',
    technologies: ['Java', 'React', 'PostgreSQL', 'Next.js', 'Redux'],
    demo: 'https://banking-app-front.vercel.app/',
    githubUrl: 'https://github.com/jkeya357/bankingApp-backend-'
  },

  {
    id: 4,
    title: 'Expense App',
    description: 'A full-stack expense tracking application that allows users to record, categorize, and manage their daily expenses. Built with Node.js and MongoDB on the backend and a responsive React/Next.js frontend with Redux for state management.',
    image: '/images/projects/expenseApp.png',
    category: 'Full Stack',
    technologies: ['Node.js', 'React', 'MongoDB', 'Next.js', 'Redux'],
    demo: 'https://expense-project-front.onrender.com/',
    githubUrl: 'https://github.com/jkeya357/expense-project'
  },

  {
    id: 5,
    title: 'Blog App',
    description: 'A full-stack blogging platform that enables users to create, edit, and publish posts with persistent storage. Developed using Java and PostgreSQL on the backend and a React frontend for a smooth content management experience.',
    image: '/images/projects/blogApp.png',
    category: 'Full Stack',
    technologies: ['Java', 'Spring Boot', 'React', 'PostgreSQL', 'Redux'],
    demo: 'https://blog-app-two-woad-51.vercel.app/',
    githubUrl: 'https://github.com/jkeya357/blog-app'
  },

  {
    id: 6,
    title: 'AI Dental-Assistant',
    description: 'An AI-powered dental assistant web app with authenticated patient accounts and a clean, responsive interface. Built with Next.js and React on a Postgres-backed API, styled with Tailwind and secured with Clerk authentication.',
    image: '/images/projects/dental-Ai.png',
    category: 'Web Apps',
    technologies: ['Next.js', 'React', 'PostgreSQL', 'Tailwind', 'Clerk'],
    demo: 'https://dental-app-2xjr.vercel.app/',
    githubUrl: 'https://github.com/jkeya357/dental-app'
  },

  {
    id: 7,
    title: 'Netflix App',
    description: 'A Netflix-inspired web application that showcases movies and TV shows with a clean, responsive UI. Built using React and Firebase for authentication and data handling, focusing on modern layout and user experience.',
    image: '/images/projects/netflix-project.png',
    category: 'Web Apps',
    technologies: ['React', 'Firebase', 'Tailwind'],
    demo: 'https://web-dev-app-s.vercel.app/',
    githubUrl: 'https://github.com/jkeya357/WebDev-App-s'
  },

  {
    id: 8,
    title: 'YouTube App',
    description: 'A YouTube-style video browsing application built with React, HTML, and CSS. Focused on recreating core UI components and layouts, demonstrating responsive design and front-end fundamentals.',
    image: '/images/projects/youtube-project.png',
    category: 'Web Apps',
    technologies: ['React', 'CSS', 'HTML'],
    demo: 'https://youtube-clone-three-wheat.vercel.app/',
    githubUrl: 'https://github.com/jkeya357/youtube-clone'
  },
]

export const categories = ['All', 'Live Products', 'Full Stack', 'Web Apps']
