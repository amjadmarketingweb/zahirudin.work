import { withBase } from '@/utils/urls';

export type Profile = {
  name: string;
  alternateName: string;
  eyebrow: string;
  headline: string[];
  strapline: string;
  heroIntro: string;
  profileParagraphs: string[];
  primaryCredentials: string[];
  domain: string;
  location: string;
  portrait: {
    src: string;
    alt: string;
  };
};

export type Metric = {
  value: string;
  label: string;
  context: string;
};

export type ExpertiseGroup = {
  title: string;
  items: string[];
};

export type OrganisationalSystem = {
  title: string;
  description: string;
};

export const profile: Profile = {
  name: "Muhammad Zahiruddin",
  alternateName: "Zahier Khairul",
  eyebrow: "People & Organisational Capability",
  headline: [
    "HR Business Partner",
    "Talent Management",
    "Learning & Development",
    "Organisational Development",
  ],
  strapline:
    "Business-facing People leadership with deep Talent, Learning & Development and Organisational Development capability.",
  heroIntro:
    "HR Business Partner and People & Capability professional with 15+ years of cross-sector experience across aerospace and defence-related MRO, diversified businesses, SME consulting, emergency response and education. I connect business requirements with workforce, talent, capability, organisation structure and performance.",
  profileParagraphs: [
    "My career combines HR Business Partnering, Talent Management, Learning & Development and Organisational Development with commercial and operational understanding.",
    "I have translated business requirements into organisation structures, workforce plans, career pathways, competency frameworks, performance systems, leadership programmes, learning interventions and scalable People processes.",
    "My experience has progressed from HR operations and learning delivery into national organisational development, commercial organisational consulting, Group HR leadership and multinational HR Business Partnering.",
  ],
  primaryCredentials: [
    "SHRM-SCP",
    "Project Management Professional (PMP)",
    "Lean Six Sigma Black Belt",
  ],
  domain: "https://zahiruddin.work",
  location: "Kuala Lumpur, Malaysia",
  portrait: {
    src: withBase('/images/hero/muhammad-zahiruddin.webp'),
    alt: "Muhammad Zahiruddin",
  },
};

export const metrics: Metric[] = [
  {
    value: "15+",
    label: "Years of experience",
    context: "Cross-sector People, capability and organisational experience.",
  },
  {
    value: "5 → 50",
    label: "Planned workforce framework",
    context:
      "A phased workforce plan supporting the planned growth of TAE Aerospace Malaysia; this is not current headcount.",
  },
  {
    value: "150+",
    label: "Amjad workforce supported",
    context:
      "An approximate workforce across a diversified business ecosystem, including around 120 active sales agents.",
  },
  {
    value: "60+",
    label: "SME founders and clients",
    context:
      "Personally managed and consulted at RichWorks across approximately 10–15 industries.",
  },
  {
    value: "500+",
    label: "Largest client workforce scale",
    context:
      "The approximate workforce of the largest RichWorks client organisation personally consulted; not direct reports.",
  },
  {
    value: "800 + ~3,000",
    label: "National personnel network",
    context:
      "Approximately 800 active PTCM personnel and approximately 3,000 auxiliary volunteers across 12 states.",
  },
  {
    value: "50+",
    label: "Governance tools",
    context:
      "PTCM SOPs, forms, templates, manuals and organisational governance tools created or standardised.",
  },
  {
    value: "25,000+",
    label: "Learning participants reached",
    context:
      "Students, parents and participants reached through programmes delivered across 60+ educational institutions.",
  },
];

export const expertiseGroups: ExpertiseGroup[] = [
  {
    title: "HR Business Partnering",
    items: [
      "HR Business Partnering",
      "People Strategy",
      "Employee Relations",
      "HR Governance",
      "Policy Localisation",
      "Executive Stakeholder Management",
    ],
  },
  {
    title: "Talent & Workforce",
    items: [
      "Strategic Workforce Planning",
      "Talent Management",
      "Talent Acquisition",
      "Succession Planning",
      "Career Architecture",
      "Talent Pipelines",
      "Workforce Localisation",
    ],
  },
  {
    title: "Learning & Capability",
    items: [
      "Learning & Development",
      "Training Needs Analysis",
      "Leadership Development",
      "Coaching & Mentoring",
      "Curriculum & Learning Design",
      "Knowledge Transfer",
      "Capability Development",
    ],
  },
  {
    title: "Organisational Development",
    items: [
      "Organisation Design",
      "Organisational Development",
      "RACI",
      "Position Architecture",
      "Change Management",
      "Culture Development",
      "Performance Systems",
    ],
  },
  {
    title: "Business & Execution",
    items: [
      "Project Management",
      "Lean Six Sigma",
      "Process Improvement",
      "People Analytics",
      "Commercial Acumen",
      "Risk Management",
      "Occupational Safety & Health",
    ],
  },
];

export const organisationalSystems: OrganisationalSystem[] = [
  {
    title: "Sales Career & Leadership Architecture",
    description:
      "Career structures supported by competencies, performance expectations and clear progression standards.",
  },
  {
    title: "Performance & Learning Frameworks",
    description:
      "Role-based learning, KPI, coaching and performance systems that connect development with business outcomes.",
  },
  {
    title: "Commission & Reward Architecture",
    description:
      "Performance-linked commission, incentive and reward structures developed for a direct-sales ecosystem.",
  },
  {
    title: "Leadership Development Architecture",
    description:
      "Coaching, mentoring, leadership transition, team development and succession structures.",
  },
  {
    title: "Training & Capability Systems",
    description:
      "Onboarding, TNA, field learning, coaching, assessment, individual development and performance monitoring.",
  },
  {
    title: "Organisation Design & Workforce Systems",
    description:
      "Organisation structures, reporting relationships, workforce plans, SOPs, RACI, governance and performance systems.",
  },
];
