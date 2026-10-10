import { withBase } from '@/utils/urls';

export type Publication = {
  title: string;
  subtitle?: string;
  year?: number;
  language?: string;
  description: string;
  topics: string[];
  cover?: string;
  url?: string;
  type: "Book" | "Professional IP";
};

export const publications: Publication[] = [
  {
    title: "The Aerospace People Standard",
    subtitle: "Building a Safe, Skilled and Mission-Ready Workforce",
    year: 2026,
    language: "English",
    description:
      "A practical People & Capability framework for aerospace organisations, connecting workforce and capability decisions with safe, sustainable operational readiness.",
    topics: [
      "Workforce planning",
      "Organisation design",
      "Recruitment and competency",
      "Capability development",
      "Leadership",
      "Safety and quality culture",
      "Localisation",
      "Succession and retention",
      "Knowledge management",
      "Long-term aerospace workforce sustainability",
    ],
    cover: withBase('/images/publications/the-aerospace-people-standard.jpg'),
    url: "https://anyflip.com/copqr/ljbo/",
    type: "Book",
  },
  {
    title: "Don't Get Sued for HR Mistakes",
    subtitle: "A practical Malaysian SME HR guide",
    language: "English",
    description:
      "A practical guide developed around recurring employer questions, helping Malaysian SME employers and managers handle day-to-day HR and employment processes more carefully.",
    topics: [
      "Leave and overtime",
      "Discipline and warning letters",
      "Misconduct",
      "Salary deductions",
      "Performance and PIP",
      "Resignation and termination",
      "Employer process",
      "Documentation",
    ],
    cover: withBase('/images/publications/dont-get-sued-for-hr-mistakes.jpg'),
    url: "https://anyflip.com/copqr/ygst/",
    type: "Book",
  },
  {
    title: "Jangan Sampai Kena Saman",
    subtitle: "Panduan praktikal HR dan pengurusan pekerjaan untuk SME Malaysia",
    language: "Bahasa Malaysia",
    description:
      "Panduan praktikal Bahasa Malaysia mengenai isu HR dan pengurusan pekerjaan untuk majikan dan pengurus di Malaysia.",
    topics: [
      "Pengurusan HR",
      "Isu pekerjaan",
      "Proses majikan",
      "Disiplin dan prestasi",
      "Dokumentasi",
      "Pengurusan risiko pekerjaan",
    ],
    cover: withBase('/images/publications/jangan-sampai-kena-saman.jpg'),
    url: "https://anyflip.com/copqr/gboa/",
    type: "Book",
  },
];

export const professionalIp: Publication[] = [
  {
    title: "Observer Sales Manual",
    subtitle: "Principal author and developer",
    description:
      "A structured sales capability manual integrating onboarding, learning-style assessment, company orientation, career pathways, product knowledge, sales systems, scripts, field learning and performance development.",
    topics: [
      "Onboarding",
      "Capability and learning",
      "Career development",
      "Field training",
      "Sales process",
      "Customer interaction",
      "Performance development",
    ],
    type: "Professional IP",
  },
  {
    title: "Sales Leadership Guide",
    subtitle: "Principal author and developer",
    description:
      "A practical guide supporting the transition into sales leadership and the development of capable, well-coached and performance-focused teams.",
    topics: [
      "Leadership transition",
      "Recruitment",
      "Coaching and mentoring",
      "Team development",
      "Performance management",
    ],
    type: "Professional IP",
  },
  {
    title: "Selected Learning & Performance Tools",
    description:
      "A wider body of developed learning, coaching and performance content used to support sales capability, leadership and organisational development.",
    topics: [
      "10 Steps That'll Turn You Into A Sales Machine",
      "Selling Without Being Salesy: The Kind Way to Sell",
      "Telesales training",
      "Sales scripts",
      "Rejection-handling frameworks",
      "Leadership modules",
      "Organisational development content",
      "Performance and coaching tools",
    ],
    type: "Professional IP",
  },
];
