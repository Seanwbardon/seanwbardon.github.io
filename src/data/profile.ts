// All site content lives here — edit this file to update the portfolio.

export const profile = {
  name: 'Seán Bardon',
  title: 'Software Developer · Cloud & AI',
  location: 'Mullingar, Co. Westmeath, Ireland',
  tagline:
    'Final-year Software Development for Cloud and AI student building full-stack web apps, Python tools and connected hardware.',
  summary:
    'I enjoy turning ideas into working software — from REST-powered web apps and machine-learning models to an ESP32 robot car with a live web dashboard. Alongside my studies I have hands-on IT support experience and have worked in international teams through the RUN-EU programme. I am looking for a graduate software engineering role where I can apply cloud development, modern frameworks and agile practices.',
  email: 'seanwbardon@gmail.com',
  github: 'https://github.com/Seanwbardon',
  githubHandle: 'Seanwbardon',
  linkedin: 'https://www.linkedin.com/in/sean-bardon317907',
  cv: '/Sean_Bardon_CV.pdf', // drop your CV PDF into /public with this name
};

export const education = {
  institution: 'Technological University of the Shannon, Athlone',
  degree: 'BSc (Hons) Software Development for Cloud and AI',
  dates: 'Sept 2023 – June 2027',
  result: 'On track for a 2:1, working towards a 1:1',
  modules: [
    'Software Engineering',
    'Software Development for Cloud',
    'Server-Side Web Development',
    'Networks',
    'Databases',
    'Data Visualisation',
    'Agile Methodologies',
    'Web App Development with AI',
  ],
};

export type Experience = {
  role: string;
  org: string;
  place?: string;
  dates?: string;
  tag: 'Work' | 'Leadership' | 'International';
  points: string[];
};

export const experience: Experience[] = [
  {
    role: 'Technical Assistant',
    org: 'Primary School IT Support',
    dates: 'Jun 2024 – Aug 2024',
    tag: 'Work',
    points: [
      'Installed, configured and tested wireless access points for reliable school-wide connectivity.',
      'Transported, deployed and configured interactive whiteboard systems across classrooms.',
      'Resolved configuration issues with classroom hardware and instructional software.',
    ],
  },
  {
    role: 'RUN-EU Entrepreneurship Short Advanced Programme',
    org: 'NHL Stenden',
    place: 'Leeuwarden, Netherlands',
    tag: 'International',
    points: [
      'Worked directly with a Dutch CEO to analyse whether he should invest in a specific startup.',
      'Presented findings to a panel at the end of the programme.',
      'Collaborated in cross-functional international teams on design thinking and business model generation.',
    ],
  },
];

export type Project = {
  name: string;
  kind: string;
  description: string;
  tech: string[];
  link?: string;
};

export const projects: Project[] = [
  {
    name: 'ESP32 Robot Car',
    kind: 'Group project · Project Manager',
    description:
      'Autonomous robot car built on an ESP32 acting as its own access point, with a web-based dashboard. Led the team, core logic, data handling and version control.',
    tech: ['C++', 'Arduino', 'ESP32', 'HTML/CSS/JS'],
  },
  {
    name: 'Student Performance Predictor',
    kind: 'Machine learning',
    description:
      'Decision Tree classifier trained on student results data to predict future grades.',
    tech: ['Python', 'Scikit-learn', 'Pandas'],
  },
  {
    name: 'Country Data Hub',
    kind: 'Front-end web app',
    description:
      'Interactive client-side app pulling live data from external REST APIs, with custom charts for wind speed, capital metrics and national coats of arms.',
    tech: ['JavaScript', 'REST APIs', 'HTML', 'CSS'],
  },
  {
    name: 'Module Tracker',
    kind: 'Desktop app',
    description:
      'Event-driven PyQt application for tracking coursework modules and grades with persistent file storage.',
    tech: ['Python', 'PyQt', 'File I/O'],
  },
];

export const skills = {
  Languages: ['Python', 'Java', 'C++', 'JavaScript', 'SQL', 'HTML', 'CSS'],
  'Frameworks & Libraries': ['React', 'PyQt', 'Tkinter', 'Pandas', 'Scikit-learn'],
  'Cloud, Data & APIs': ['Azure', 'RESTful APIs', 'JSON', 'MySQL', 'SQLite', 'H2'],
  'Tools & Practices': ['Git', 'GitHub', 'Jira', 'VS Code', 'PyCharm', 'Arduino', 'Agile / Scrum'],
};

export const extras = [
  'Gaisce Award',
  'Parallel Histories Debate',
  'GMetrix Certified: Microsoft Office',
  'First Aid Certified',
];
