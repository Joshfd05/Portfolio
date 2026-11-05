import type { ImageMetadata } from 'astro';
import type { SimpleIcon } from 'simple-icons';
import {
  siAngular,
  siFirebase,
  siFlutter,
  siGit,
  siGooglecloud,
  siOpenjdk,
  siReact,
  siSpringboot,
  siSupabase,
  siTypescript,
} from 'simple-icons';

import headshot from '../assets/images/headshot.jpg';
import uowLogo from '../assets/images/UOW.png';
import iitLogo from '../assets/images/IIT.png';
import jvcLogo from '../assets/images/JVC.png';
import applovaLogo from '../assets/images/applova.png';
import musicPhoto1 from '../assets/images/music/placeholder-1.jpg';
import musicPhoto2 from '../assets/images/music/placeholder-2.jpg';
import musicPhoto3 from '../assets/images/music/placeholder-3.jpg';
import musicPhoto4 from '../assets/images/music/placeholder-4.jpg';
import musicPhoto5 from '../assets/images/music/placeholder-5.jpg';
import musicPhoto6 from '../assets/images/music/placeholder-6.jpg';
import musicPhoto7 from '../assets/images/music/placeholder-7.jpg';
import musicPhoto8 from '../assets/images/music/placeholder-8.jpg';
import musicPhoto9 from '../assets/images/music/placeholder-9.jpg';

import type { IconName } from '../lib/icons';

/** A run of text in a two-tone heading; `highlight` renders it in the accent colour. */
export type Segment = { text: string; highlight?: boolean };

export type SectionIntro = { label: string; heading: Segment[] };

export type SocialLink = { label: string; href: string };

export type Service = { icon: IconName; title: string; description: string };

export type Experience = {
  role: string;
  company: string;
  logo?: ImageMetadata;
  period: string;
  location?: string;
  summary?: string;
  points: string[];
  stack?: string[];
};

export type Project = {
  title: string;
  /** Short context shown above the title, e.g. "Freelance · Web store". */
  type: string;
  summary: string;
  stack: string[];
  code?: string;
  live?: string;
  /** Shown in place of links when neither `code` nor `live` is public. */
  note?: string;
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

export type GalleryPhoto = {
  src: ImageMetadata;
  alt: string;
  caption?: string;
  /** Tile shape in the mosaic; defaults to a single square. */
  size?: 'tall' | 'wide';
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
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/joshhua/' },
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

/**
 * `icon` is a brand logo from simple-icons, or a line icon name for tech without one (e.g. SQL).
 * `color` is chosen to stay visible on the dark background (some official brand colours are black).
 */
export const techStack: { name: string; icon: SimpleIcon | IconName; color: string }[] = [
  { name: 'Java', icon: siOpenjdk, color: '#ED8B00' },
  { name: 'Spring Boot', icon: siSpringboot, color: '#6DB33F' },
  { name: 'React', icon: siReact, color: '#61DAFB' },
  { name: 'TypeScript', icon: siTypescript, color: '#3178C6' },
  { name: 'Angular', icon: siAngular, color: '#DD0031' },
  { name: 'SQL', icon: 'database', color: '#7FA7D9' },
  { name: 'Supabase', icon: siSupabase, color: '#3FCF8E' },
  { name: 'Google Cloud', icon: siGooglecloud, color: '#4285F4' },
  { name: 'Flutter', icon: siFlutter, color: '#47C5FB' },
  { name: 'Firebase', icon: siFirebase, color: '#FFCA28' },
  { name: 'Git', icon: siGit, color: '#F05032' },
];

/* ------------------------------------------------------------------ */
/* Section headings                                                    */
/* ------------------------------------------------------------------ */

export const sections = {
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
    description: 'Responsive web apps with React, Angular, TypeScript, Spring Boot and Supabase.',
  },
  {
    icon: 'smartphone',
    title: 'Mobile Apps',
    description: 'Cross-platform apps with Flutter and React Native, backed by Firebase or Supabase.',
  },
  {
    icon: 'briefcase',
    title: 'Custom Business Solutions',
    description: 'Tailored web and mobile apps for real businesses, from gym tracking to stock, billing and route management.',
  },
  {
    icon: 'music',
    title: 'Music & Performance',
    description: 'Guitarist and vocalist performing live gigs at pubs, hotels, restaurants and events.',
  },
];

export const experience: Experience[] = [
  {
    role: 'Software Engineering Intern',
    company: 'Applova (Pvt) Ltd',
    logo: applovaLogo,
    period: 'Jul 2025 - Jun 2026',
    location: 'Sri Lanka',
    summary: 'Part of the core engineering team building SaaS products for the restaurant industry.',
    points: [
      'Shipped full-stack features across Merchant Web, Admin Web, POS and self-ordering Kiosk apps. From UI and REST APIs to database changes and production deployments.',
      'Built merchant facing enhancements, including CRM opt-out controls and such more.',
      'Co-built an internal Customer Success dashboard from the ground up to flag at-risk merchants, with data visualisation, Zoho CRM and Desk integrations, automated reports and real-time Google Chat alerts.',
    ],
    stack: ['Java', 'Spring Boot', 'React', 'SQL', 'REST APIs', 'OAuth 2.0', 'Zoho CRM & Desk APIs', 'Google Cloud', 'Git', 'Jira'],
  },
];

export const projects: Project[] = [
  {
    title: 'Workloader',
    type: 'Personal · Web app',
    summary:
      'A planner for students and anyone with a busy schedule, well beyond a to-do list. Organise projects or modules into tasks, subtasks and events, with reminders, an integrated calendar and a dashboard showing work left, overdue items and upcoming deadlines. Google sign-in syncs everything to the cloud.',
    stack: ['React', 'TypeScript', 'Tailwind CSS', 'shadcn/ui', 'Zustand', 'Supabase'],
    live: 'https://workloader.vercel.app/',
  },
  {
    title: 'Flowstock',
    type: 'Freelance · Client · Mobile app',
    summary:
      'Operations app for a grocery distributor running two delivery trucks, replacing a manual, phone-based process. The owner manages stock, shops and truck allocations while reps create bills on the road and print them over Bluetooth or Wi-Fi, with live sync and role-based access enforced by row-level security.',
    stack: ['React Native', 'Expo', 'TypeScript', 'Supabase', 'Zustand'],
    note: 'Private client project',
  },
  {
    title: 'RuuWear',
    type: 'Freelance · Client · Web store',
    summary:
      'Online clothing store for RuuWear, a fashion label launching its debut linen collection. In active development, with the launch page already live.',
    stack: ['React', 'TypeScript', 'Vite', 'React Router', 'Supabase', 'CSS Modules'],
    live: 'https://www.ruuwear.lk/',
  },
  {
    title: 'DemoGenie',
    type: 'Internship · AI workshop',
    summary:
      'AI assistant I conceived and built for an internship AI workshop. It turns restaurant merchant bookings into demo prep briefs for sales teams, with business insights, relevant features and tailored pitch ideas, falling back gracefully when the AI is unavailable.',
    stack: ['Next.js', 'TypeScript', 'FastAPI', 'OpenAI API', 'PostgreSQL'],
    code: 'https://github.com/Joshfd05/DemoGenie',
  },
  {
    title: 'CalTrackr',
    type: 'Personal · iOS app',
    summary:
      'Calorie and workout tracker built for iPhone. Set calorie-burn goals, follow a 4-day workout rotation and log sets, reps and weights with a session stopwatch, then review progress on an activity heatmap and weekly chart. Works offline and syncs when back online.',
    stack: ['Flutter', 'Dart', 'Riverpod', 'Firebase Auth', 'Cloud Firestore', 'Codemagic'],
    note: 'Private project',
  },
  {
    title: 'Chatlo',
    type: 'University · Mobile app',
    summary:
      'One of my first mobile apps, built in second year to learn Flutter end to end: a cross-platform messaging app with user authentication and real-time chat.',
    stack: ['Flutter', 'Dart', 'Firebase'],
    code: 'https://github.com/Joshfd05/Chatlo',
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
    period: '2022',
    detail: 'Completed with a Distinction.',
    logo: iitLogo,
  },
  {
    institution: 'St. Joseph Vaz College, Wennappuwa',
    qualification: 'GCE Ordinary Level',
    period: '2021',
    detail: '9 A passes, including ICT, Mathematics, Science and Western Music while doing extra curricular activities too.',
    logo: jvcLogo,
  },
];

export const music = {
  /** Placeholders: swap the files in src/assets/images/music for real photos. */
  gallery: [
    { src: musicPhoto1, alt: 'Live gig', caption: 'Live gig' },
    { src: musicPhoto2, alt: 'Performing on stage', caption: 'Performing on stage', size: 'tall' },
    { src: musicPhoto3, alt: 'Solo set with guitar', caption: 'Solo set with guitar', size: 'wide' },
    { src: musicPhoto4, alt: 'School brass band', caption: 'School brass band' },
    { src: musicPhoto5, alt: 'Clarinet', caption: 'Clarinet' },
    { src: musicPhoto6, alt: 'Classical guitar', caption: 'Classical guitar' },
    { src: musicPhoto7, alt: 'Music competition', caption: 'Music competition' },
    { src: musicPhoto8, alt: 'Rehearsal', caption: 'Rehearsal' },
    { src: musicPhoto9, alt: 'Evening performance', caption: 'Evening performance', size: 'wide' },
  ] satisfies GalleryPhoto[],
  items: [
    {
      title: 'Solo performer - guitar & vocals',
      period: 'Now',
      description: 'Regular sets at pubs, restaurants and hotels along Negombo and in Colombo such as Grandneeza, Gold Sands, Jade, Masma Eat, La prestige, Fish and chips and many more.',
      current: true,
    },
    {
      title: 'First clarinet - school brass band',
      period: '2016 - 2023',
      description: 'First clarinettist in the school brass band, performing in school western orchestra and All Island School Music Competition.',
    },
    {
      title: 'Classical guitarist',
      period: 'Since 2011',
      description: 'Completed all Trinity College London graded exams upto grade 8 and right now working on ATCL exam. Performed at school and public events such as All Island School Music Competition.',
    },
  ] satisfies MusicItem[],
};

export const contact = {
  heading: [
    { text: "Let's build" },
    { text: 'something', highlight: true },
    { text: 'together.' },
  ] satisfies Segment[],
  intro: 'Open to internships and interesting projects.',
  servicesLabel: 'What I do',
};
