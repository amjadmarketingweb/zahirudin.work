import { withBase } from '@/utils/urls';

export type Experience = {
  id: string;
  company: string;
  role: string;
  function?: string;
  dates: string;
  context: string[];
  summary: string;
  achievements: string[];
  impact: string[];
  tags: string[];
  logo: {
    src: string;
    alt: string;
  };
};

export type CareerProgressionItem = {
  organisation: string;
  focus: string;
};

export const experiences: Experience[] = [
  {
    id: "tae-aerospace-malaysia",
    company: "TAE Aerospace Malaysia",
    role: "HR Business Partner, Malaysia",
    function: "People & Capability",
    dates: "May 2025 – Present",
    context: ["Aerospace", "Defence", "MRO", "Greenfield"],
    summary:
      "Supports the establishment and progressive localisation of TAE Aerospace's Malaysian operation, connecting business requirements with workforce strategy, talent, organisational capability and execution.",
    achievements: [
      "Provides HR Business Partnering support to Malaysian and Australian leadership across workforce strategy, organisation design, manpower planning and Malaysian workplace localisation.",
      "Developed organisation structure, position architecture, RACI and a phased workforce framework for planned growth from approximately 5 to 50 employees.",
      "Supports recruitment and technical recruitment, position descriptions, candidate selection, onboarding, employee documentation, HR systems, payroll coordination and performance matters.",
      "Develops talent pipelines through PERHEBAT, the Malaysian Armed Forces and the Royal Malaysian Air Force to support veteran employability, military-to-civilian transition and aerospace talent localisation.",
      "Coordinates Training Needs Analysis, capability development, knowledge transfer and Australian training arrangements for specialist workforce readiness.",
      "Supports cross-border workforce, expatriate and Employment Pass matters, immigration and training visas, HR governance, employee relations, HSE and project execution.",
    ],
    impact: [
      "5 → 50 planned phased workforce framework; 50 is not current headcount.",
      "Localisation planning covers maintenance, technical leadership, planning, logistics, warehouse and operational support.",
      "Cross-border People coordination connects Malaysia and Australia while keeping workforce strategy, Talent, Capability and OD at the centre.",
    ],
    tags: [
      "HR Business Partnering",
      "Strategic Workforce Planning",
      "Organisation Design",
      "Workforce Localisation",
      "Technical Recruitment",
      "Talent Pipelines",
      "Training Needs Analysis",
      "Knowledge Transfer",
      "Employee Relations",
      "HR Governance",
      "Position Architecture",
      "RACI",
      "Cross-Border Workforce",
      "Change Management",
    ],
    logo: {
      src: withBase('/logos/tae-aerospace.webp'),
      alt: "TAE Aerospace logo",
    },
  },
  {
    id: "yayasan-amjad-amjad-group",
    company: "Yayasan Amjad / Amjad Group",
    role: "Group HR Manager",
    dates: "December 2022 – April 2025",
    context: [
      "Diversified Group",
      "Direct Sales",
      "Digital Marketing",
      "Retail & F&B",
      "Training & TVET",
    ],
    summary:
      "Supported a diversified ecosystem as Group HR Manager, combining HR Business Partnering, Talent Management, Learning & Development and Organisational Development with practical Group HR operations.",
    achievements: [
      "Worked as a shared decision-maker with, and developed recommendations for, the CEO and MD on recruitment, appointments, restructuring, performance, development, compensation, commissions and workforce matters.",
      "Personally designed a sales career pathway from Sales Trainee through progressive representative and leadership levels to senior sales leadership and GM-level responsibility.",
      "Developed career architecture, competency and progression requirements, leadership pipelines and KPI/development frameworks for trainees, sales representatives, senior representatives and sales leaders.",
      "Redesigned commission, incentive and reward structures using performance experience, improvements to earlier systems and external research.",
      "Served as principal author/developer of the Observer Sales Manual and Sales Leadership Guide, alongside LOA logbooks, sales scripts, rejection-handling frameworks, telesales training, coaching materials and performance tools.",
      "Applied personality and learning-style assessment, onboarding, aspiration and role-fit discussions, targeted learning, feedback and career planning in individual development.",
      "Developed a nine-member multidisciplinary Amjad Marketing team spanning design, web, digital marketing, sales, videography and animation disciplines.",
      "Supported Amjad Academy development involving HRD Corp Training Provider requirements, JPK/TVET, SLDN, SLaPB, trainer sourcing, programme architecture, internships and early-career pipelines.",
    ],
    impact: [
      "Supported an approximate workforce of 150+, including around 120 active sales agents; this was not a permanently fixed headcount.",
      "Connected performance, capability, leadership, recruitment, retention and progression through structured career and learning systems.",
      "Amjad Marketing comprised a nine-member multidisciplinary team developed across creative, digital and commercial roles.",
    ],
    tags: [
      "Group HR Management",
      "HR Business Partnering",
      "Talent Management",
      "Organisational Development",
      "Career Architecture",
      "Succession Planning",
      "Leadership Development",
      "Learning & Development",
      "Performance Management",
      "KPI Development",
      "Commission Design",
      "Coaching & Mentoring",
      "TVET",
      "Change Management",
    ],
    logo: {
      src: withBase('/logos/yayasan-amjad.webp'),
      alt: "Yayasan Amjad and Amjad Group logo",
    },
  },
  {
    id: "richworks-international",
    company: "RichWorks International Sdn. Bhd.",
    role: "Client Account Manager – SME Consulting",
    dates: "December 2019 – November 2022",
    context: [
      "SME Consulting",
      "Business Diagnosis",
      "Organisational Development",
      "Commercial HR",
    ],
    summary:
      "Worked as a primary consulting contact between founders, senior mentors and internal specialists, translating business and people diagnoses into structured actions, clear ownership, timelines and monitored execution.",
    achievements: [
      "Managed and consulted 60+ SME founders across approximately 10–15 industries, first understanding the business model before developing people or organisational recommendations.",
      "Designed or co-developed organisation charts, reporting lines, roles, SOPs, process flows, KPI structures, meeting systems, manpower plans and restructuring plans.",
      "Helped founder-led organisations reduce key-person dependency through delegation, management layers, departmentalisation, leadership identification, accountability and SOPs.",
      "Identified high-potential employees, future managers, promotion and replacement options, wrong-role situations and learning needs, and designed career progression structures for several clients.",
      "Co-developed KPIs, targets, appraisals, dashboards, PIPs and coaching systems while supporting managers with performance and employee-relations conversations.",
      "Personally delivered founder and group coaching, workshops, online sessions and client-team learning across leadership, teams, communication, HR, performance, OD, process, culture, digital marketing and change.",
      "Analysed revenue, target performance, workforce, activity, productivity, engagement, training, compliance gaps and operational roadblocks.",
      "Supported COVID/MCO transformation through digitalisation, cost and workforce restructuring, remote teams, business continuity and crisis communication.",
      "For DMR Academy Marketing, created/coordinated an employee development tracker and personally held career and development conversations; for Vennea Marketing, delivered High Performance Leadership and Gen Y/Gen Z workplace-management content alongside wider OD work.",
    ],
    impact: [
      "60+ SME founders and clients supported across approximately 10–15 industries.",
      "500+ was the approximate workforce size of the largest client organisation personally consulted, not a direct-report population.",
      "DMR Academy Marketing and Vennea Marketing were embedded client engagements, not separate employers.",
    ],
    tags: [
      "SME Consulting",
      "Business Diagnosis",
      "HR Business Partnering",
      "Organisation Design",
      "Talent Management",
      "Career Pathways",
      "Leadership Development",
      "Learning & Development",
      "Performance Management",
      "Employee Relations",
      "SOP Development",
      "Process Improvement",
      "Change Management",
      "People Analytics",
      "Commercial Acumen",
    ],
    logo: {
      src: withBase('/logos/richworks.webp'),
      alt: "RichWorks International logo",
    },
  },
  {
    id: "pasukan-tindakan-cemas-malaysia",
    company: "Pasukan Tindakan Cemas Malaysia",
    role: "Human Resources & Corporate Affairs",
    dates: "February 2015 – November 2019",
    context: [
      "National Organisation",
      "Emergency Response",
      "Governance",
      "Workforce Readiness",
    ],
    summary:
      "Supported national leadership and State Directors through HR and organisational business partnering, organisation development, governance, capability building and workforce-readiness systems.",
    achievements: [
      "Designed or revised national, state and district organisation structures, reporting lines, roles, manpower allocations, authority levels, approvals and governance arrangements.",
      "Created or standardised more than 50 SOPs, forms, templates, manuals and governance tools covering correspondence, meetings, personnel, incidents, discipline, deployment, policies and organisation design.",
      "Developed a formal national induction and onboarding programme that was cascaded to state and district level.",
      "Personally trained approximately 100–300 officers and members across several states in documentation, leadership, communication, protocol, SOPs, HR administration, crisis coordination, risk and OSH.",
      "Identified and evaluated officers for appointments, promotions, rank advancement, future leadership, succession, replacement and removal through structured performance criteria and panels.",
      "Diagnosed manpower, performance, conflict, discipline, role, recruitment, training, engagement and operational-readiness issues, developed recommendations, coached leaders and followed implementation.",
      "Applied debriefs, root-cause review, SOP revision, role clarification, retraining and monitoring to organisational learning after flood, conflict and communication challenges.",
    ],
    impact: [
      "National scope covered approximately 800 active personnel and approximately 3,000 auxiliary volunteers across 12 states; they were not 3,800 employees.",
      "Approximately 18 officers were coordinated directly.",
      "Specialist certified trainers delivered specialist first aid, CPR and SAR subjects; those courses are not claimed as personal delivery.",
      "JPK Certified Trainer and HRD Corp Train-the-Trainer credentials were obtained later, in 2023.",
    ],
    tags: [
      "Human Resources",
      "Organisational Development",
      "Organisation Design",
      "Workforce Planning",
      "Talent Management",
      "Succession Planning",
      "Learning & Development",
      "Performance Management",
      "Governance",
      "SOP Development",
      "Organisational Learning",
      "Crisis Management",
      "Workforce Readiness",
      "Risk Management",
      "Corporate Affairs",
    ],
    logo: {
      src: withBase('/logos/ptcm.webp'),
      alt: "Pasukan Tindakan Cemas Malaysia logo",
    },
  },
  {
    id: "akademi-pintas",
    company: "Akademi Pintas",
    role: "HR & Administration",
    dates: "January 2011 – January 2015",
    context: ["Education", "HR Operations", "Learning & Development"],
    summary:
      "Built an early foundation in practical HR administration, tutor management, education operations and learning delivery within a family-owned tuition and education centre.",
    achievements: [
      "Handled recruitment administration from vacancy posting and screening through interviews, recommendations, appointment letters and onboarding.",
      "Maintained tutor and staff records, attendance, leave, scheduling, payroll preparation, claims, discipline, performance monitoring, contracts and statutory HR administration including EPF, SOCSO and PCB.",
      "Coordinated tutor orientation, coaching, learning materials, modules, classroom and student-management training, observation, feedback and development sessions.",
      "Taught History to secondary-school students alongside HR, administration and learning responsibilities.",
      "Designed and delivered programmes in leadership, motivation, communication, academic development, entrepreneurship, wellbeing and risk awareness across educational institutions.",
      "Personally designed most programme content, with some material co-developed.",
    ],
    impact: [
      "Supported up to approximately 31 full-time, part-time and freelance tutors and staff at peak.",
      "The centre served approximately 700 students at peak.",
      "Programmes reached 60+ educational institutions and 25,000+ students, parents and participants.",
    ],
    tags: [
      "HR Operations",
      "Recruitment",
      "Onboarding",
      "Payroll Administration",
      "Employee Records",
      "Performance Monitoring",
      "Employee Relations",
      "Workforce Scheduling",
      "Tutor Management",
      "Learning & Development",
      "Training Design",
      "Facilitation",
      "Coaching",
      "Public Speaking",
    ],
    logo: {
      src: withBase('/logos/akademi-pintas.webp'),
      alt: "Akademi Pintas logo",
    },
  },
];

export const careerProgression: CareerProgressionItem[] = [
  {
    organisation: "Akademi Pintas",
    focus: "HR foundation, early Learning & Development and facilitation",
  },
  {
    organisation: "Pasukan Tindakan Cemas Malaysia",
    focus:
      "National HR, Talent, Learning & Development, organisational development, governance and workforce readiness",
  },
  {
    organisation: "RichWorks International",
    focus:
      "Cross-industry business diagnosis, organisational consulting and commercial HR exposure",
  },
  {
    organisation: "Amjad Group",
    focus:
      "Group HR, Talent, Learning & Development, organisational development, performance, career architecture and organisation building",
  },
  {
    organisation: "TAE Aerospace Malaysia",
    focus:
      "Multinational HR Business Partnering, workforce strategy, localisation, capability and organisational readiness",
  },
];
