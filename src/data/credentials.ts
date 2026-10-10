export type EducationItem = {
  qualification: string;
  institution: string;
  year: number;
};

export type Credential = {
  name: string;
  issuer?: string;
  year: number;
  featured?: boolean;
};

export const education: EducationItem[] = [
  {
    qualification: "Bachelor of Business Administration",
    institution: "Charter University",
    year: 2019,
  },
  {
    qualification: "Diploma in Risk Management",
    institution: "Putra Intelek International College",
    year: 2015,
  },
  {
    qualification: "Diploma in Human Resource Management",
    institution: "Udemy",
    year: 2025,
  },
  {
    qualification: "SPM",
    institution: "Victoria Institution",
    year: 2010,
  },
];

export const credentials: Credential[] = [
  {
    name: "SHRM Senior Certified Professional (SHRM-SCP)",
    year: 2026,
    featured: true,
  },
  {
    name: "Project Management Professional (PMP)",
    issuer: "Project Management Institute (PMI)",
    year: 2026,
    featured: true,
  },
  {
    name: "Lean Six Sigma Black Belt",
    year: 2026,
    featured: true,
  },
  {
    name: "OSH Coordinator",
    issuer: "NIOSH Malaysia",
    year: 2025,
  },
  {
    name: "JPK Certified Trainer",
    issuer: "Ministry of Human Resources",
    year: 2023,
  },
  {
    name: "HRD Corp Train-the-Trainer",
    year: 2023,
  },
  {
    name: "Anti-Sexual Harassment Train-the-Trainer",
    issuer: "Malaysia Social Institute",
    year: 2023,
  },
  {
    name: "Certified Supervisor",
    issuer: "Institute of Certified Professional Managers",
    year: 2020,
  },
  {
    name: "Safety and Health Officer",
    issuer: "NIOSH Malaysia",
    year: 2017,
  },
  {
    name: "Certified Risk Associate (C.R.A.)",
    issuer: "European Institute of Risk Management",
    year: 2011,
  },
];
