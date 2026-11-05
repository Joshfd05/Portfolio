import type { ImageMetadata } from 'astro';
import type { SimpleIcon } from 'simple-icons';
import {
  siAngular,
  siFirebase,
  siFlutter,
  siJavascript,
  siMysql,
  siOpenjdk,
  siPython,
  siSpringboot,
  siTypescript,
} from 'simple-icons';

import headshot from '../assets/images/headshot.jpg';
import uowLogo from '../assets/images/UOW.png';
import iitLogo from '../assets/images/IIT.png';
import jvcLogo from '../assets/images/JVC.png';

import type { IconName } from '../lib/icons';

/** A run of text in a two-tone heading; `highlight` renders it in the accent colour. */
export type Segment = { text: string; highlight?: boolean };

export type SectionIntro = { label: string; heading: Segment[] };

export type SocialLink = { label: string; href: string };

export type Service = { icon: IconName; title: string; description: string };

export type Experience = {
  role: string;
  company: string;
  period: string;
  location?: string;
  points: string[];
  stack?: string[];
  /** Shows a "details coming soon" badge until real content is added. */
  placeholder?: boolean;
};

export type Project = {
  title: string;
  summary: string;
  stack: string[];
  code?: string;
  live?: string;
};

export type Education = {
  institution: string;
  qualification: string;
  period: string;
  detail?: string;
  logo: ImageMetadata;
  /** Logos drawn in white sit on a dark tile; the rest get a white tile. */
  logoOnDark?: boolean;
};

export type MusicItem = {
  title: string;
  period: string;
  description: string;
  current?: boolean;
};

/* ------------------------------------------------------------------ */
/* Profile                                                             */
/* ------------------------------------------------------------------ */

export const profile = {
  name: 'Joshua Fernando',
  role: 'Software Engineering Student',
  email: 'fernandojoshua102@gmail.com',
  /** Served from /public — the PDF must exist at public/Joshua-Fernando-CV.pdf. */
  cvUrl: '/Joshua-Fernando-CV.pdf',
  headshot,
};

export const socials: SocialLink[] = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/joshua-fernando-590653332/' },
  { label: 'GitHub', href: 'https://github.com/Joshfd05' },
  { label: 'Instagram', href: 'https://www.instagram.com/jo______ooo/' },
];

export const hero = {
  nameTag: 'Joshua Fernando 👋',
  headline: [
    { text: 'Crafting software,' },
    { text: 'web apps, and', highlight: true },
    { text: 'live music.' },
  ] satisfies Segment[],
  intro:
    'Software Engineering student at the University of Westminster, building full-stack and mobile applications.',
  cta: { label: 'View my work', href: '#work' },
};

/** `color` is chosen to stay visible on the dark background (some official brand colours are black). */
export const techStack: { name: string; icon: SimpleIcon; color: string }[] = [
  { name: 'Java', icon: siOpenjdk, color: '#ED8B00' },
  { name: 'Spring Boot', icon: siSpringboot, color: '#6DB33F' },
  { name: 'Python', icon: siPython, color: '#4B8BBE' },
  { name: 'JavaScript', icon: siJavascript, color: '#F7DF1E' },
  { name: 'TypeScript', icon: siTypescript, color: '#3178C6' },
  { name: 'Angular', icon: siAngular, color: '#DD0031' },
  { name: 'Flutter', icon: siFlutter, color: '#47C5FB' },
  { name: 'Firebase', icon: siFirebase, color: '#FFCA28' },
  { name: 'MySQL', icon: siMysql, color: '#5B9BD5' },
];

/* ------------------------------------------------------------------ */
/* Section headings                                                    */
/* ------------------------------------------------------------------ */

export const sections = {
  services: {
    label: 'What I do',
    heading: [
      { text: 'Turning ideas into' },
      { text: 'reliable, well-crafted', highlight: true },
      { text: 'software.' },
    ],
  },
  experience: {
    label: 'Experience',
    heading: [{ text: 'Where I have' }, { text: 'learned on the job.', highlight: true }],
  },
  projects: {
    label: 'Selected work',
    heading: [{ text: 'Projects I have' }, { text: 'designed and built.', highlight: true }],
  },
  education: {
    label: 'Education',
    heading: [{ text: 'The foundations' }, { text: 'behind my work.', highlight: true }],
  },
  music: {
    label: 'Beyond code',
    heading: [
      { text: 'Music taught me' },
      { text: 'discipline, teamwork', highlight: true },
      { text: 'and stage confidence.' },
    ],
  },
} satisfies Record<string, SectionIntro>;

/* ------------------------------------------------------------------ */
/* Content                                                             */
/* ------------------------------------------------------------------ */

export const services: Service[] = [
  {
    icon: 'monitor',
    title: 'Full-stack Web',
    description: 'Responsive web apps with Angular, TypeScript and Spring Boot.',
  },
  {
    icon: 'server',
    title: 'Backend & APIs',
    description: 'Java services with a focus on concurrency, data and clean architecture.',
  },
  {
    icon: 'smartphone',
    title: 'Mobile Apps',
    description: 'Cross-platform apps with Flutter and Firebase, from auth to real-time chat.',
  },
  {
    icon: 'music',
    title: 'Music & Performance',
    description: 'Guitarist, clarinettist and vocalist performing live in Negombo and Colombo.',
  },
];

export const experience: Experience[] = [
  {
    role: 'Software Engineering Intern',
    company: 'Company name',
    period: 'Dates',
    location: 'Location',
    points: [
      'What you built or improved, and the impact it had.',
      'Technologies, tools and practices you used day to day.',
      'A result you are proud of — numbers help if you have them.',
    ],
    placeholder: true,
  },
];

export const projects: Project[] = [
  {
    title: 'Real-Time Event Ticketing System',
    summary:
      'Concurrent ticket release and purchase using producer–consumer patterns and multi-threading for safe, scalable resource handling.',
    stack: ['Angular', 'Spring Boot', 'Java', 'Multi-threading'],
    code: 'https://github.com/Joshfd05/Real-Time-Event-Ticketing-Handler',
  },
  {
    title: 'Roameo Marketing Website',
    summary:
      'Responsive marketing and landing site for a travel mobile app, built to promote the product and its services.',
    stack: ['Angular', 'TypeScript', 'CSS'],
    code: 'https://github.com/Joshfd05/Roameo-MarketingWeb',
    live: 'https://roameo.world/',
  },
  {
    title: 'Chatlo — Chat App',
    summary: 'Minimal cross-platform messaging app with user authentication and instant messaging.',
    stack: ['Flutter', 'Dart', 'Firebase'],
    code: 'https://github.com/Joshfd05/Chatlo',
  },
  {
    title: 'Student Management System',
    summary:
      'Java application for student registration, grade tracking and report generation, built around solid OOP design.',
    stack: ['Java', 'OOP'],
    code: 'https://github.com/Joshfd05/University-Student-Management-System',
  },
  {
    title: 'Finance Tracker',
    summary: 'Personal finance tracker with both GUI and CLI, supporting full CRUD and categorised expenses.',
    stack: ['Python', 'Tkinter'],
    code: 'https://github.com/Joshfd05/Finance-Tracker-GUI-Version-',
  },
  {
    title: 'Shopping Webpage',
    summary: 'Responsive website built from scratch with semantic HTML, CSS and vanilla JavaScript.',
    stack: ['HTML', 'CSS', 'JavaScript'],
    code: 'https://github.com/Joshfd05/Shopping-Page',
  },
];

export const education: Education[] = [
  {
    institution: 'University of Westminster',
    qualification: 'BEng (Hons) Software Engineering',
    period: 'In progress',
    detail:
      'Key projects include a real-time event ticketing system, a student management system and a finance tracker.',
    logo: uowLogo,
    logoOnDark: true,
  },
  {
    institution: 'Informatics Institute of Technology',
    qualification: 'Foundation Certificate in Higher Education — IT',
    period: '2023',
    detail: 'Completed with a Distinction.',
    logo: iitLogo,
  },
  {
    institution: 'St. Joseph Vaz College, Wennappuwa',
    qualification: 'GCE Ordinary Level',
    period: '2022',
    detail: '9 A passes, including ICT, Mathematics, Science and Western Music.',
    logo: jvcLogo,
  },
];

export const music = {
  intro:
    'From classical exams to live gigs, music has been a constant since childhood. It taught me to practise deliberately, play as part of an ensemble and perform under pressure — habits I bring to every project.',
  items: [
    {
      title: 'Solo performer — guitar & vocals',
      period: 'Now',
      description: 'Regular sets at pubs, restaurants and hotels along Negombo Beach Road and in Colombo.',
      current: true,
    },
    {
      title: 'First clarinet — school brass band',
      period: '2016 — 2023',
      description: 'First clarinettist in the school brass band, performing in national-level competitions.',
    },
    {
      title: 'Classical guitarist',
      period: 'Since 2011',
      description: 'Completed all Trinity College London graded exams and performed at school and public events.',
    },
  ] satisfies MusicItem[],
};

export const contact = {
  heading: [
    { text: "Let's build" },
    { text: 'something', highlight: true },
    { text: 'together.' },
  ] satisfies Segment[],
  intro: 'Open to internships, graduate roles and interesting projects.',
};
