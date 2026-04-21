export type DegreeType = "Bachelor" | "Diploma" | "Certificate" | "Honors Diploma";
export type DegreeCategory = "Business" | "IT";

export interface DegreeProgram {
  id: string;
  title: string;
  type: DegreeType;
  duration: string;
  focus: string;
  category: DegreeCategory;
  requirements?: string[];
}

export const degreePrograms: DegreeProgram[] = [
  // Bachelor — IT
  {
    id: "bsc-networking",
    title: "BSc Networking",
    type: "Bachelor",
    duration: "4 Years",
    focus:
      "Design, implement, and manage enterprise computer networks with cloud infrastructure, security, and wireless technologies.",
    category: "IT",
    requirements: [
      "High school diploma with credits in Mathematics and Physics",
      "Minimum GPA of 2.5",
      "English proficiency",
    ],
  },
  {
    id: "bsc-data-science",
    title: "BSc Data Science",
    type: "Bachelor",
    duration: "4 Years",
    focus:
      "Statistical analysis, machine learning, data visualization, and big data technologies with real industry datasets.",
    category: "IT",
    requirements: [
      "High school diploma with credits in Mathematics",
      "Minimum GPA of 2.5",
      "Basic computer literacy",
    ],
  },
  {
    id: "bsc-cyber-security",
    title: "BSc Cyber Security",
    type: "Bachelor",
    duration: "4 Years",
    focus:
      "Ethical hacking, digital forensics, cryptography, security operations, and compliance frameworks.",
    category: "IT",
    requirements: [
      "High school diploma with credits in Mathematics",
      "Minimum GPA of 2.5",
      "Aptitude for problem-solving",
    ],
  },
  {
    id: "bsc-telecom-eng",
    title: "BSc Telecommunication Engineering",
    type: "Bachelor",
    duration: "4 Years",
    focus:
      "Signal processing, mobile networks, fiber optics, satellite communications, and IoT infrastructure.",
    category: "IT",
    requirements: [
      "High school diploma with credits in Mathematics and Physics",
      "Minimum GPA of 2.8",
      "Strong analytical skills",
    ],
  },
  // Bachelor — Business
  {
    id: "bsc-mis",
    title: "BSc Management Information Systems",
    type: "Bachelor",
    duration: "4 Years",
    focus:
      "Bridge business and technology with database management, systems analysis, IT governance, and ERP systems.",
    category: "Business",
    requirements: [
      "High school diploma",
      "Minimum GPA of 2.5",
      "Interest in business and technology",
    ],
  },
  {
    id: "bsc-project-management",
    title: "BSc Project Management",
    type: "Bachelor",
    duration: "4 Years",
    focus:
      "Plan, execute, and manage complex technology projects using Agile, Scrum, risk management, and stakeholder communication.",
    category: "Business",
    requirements: [
      "High school diploma",
      "Minimum GPA of 2.5",
      "Leadership potential",
    ],
  },
  {
    id: "ba-monitoring-evaluation",
    title: "Bachelor of Arts in Monitoring and Evaluation",
    type: "Bachelor",
    duration: "4 Years",
    focus:
      "Program design, M&E frameworks, data collection methods, impact assessment, and reporting for development organizations.",
    category: "Business",
    requirements: [
      "High school diploma",
      "Minimum GPA of 2.5",
      "Interest in development work",
    ],
  },
  // Diplomas
  {
    id: "diploma-data-science",
    title: "Diploma in Data Science",
    type: "Diploma",
    duration: "2 Years",
    focus: "Python, statistics, machine learning, data wrangling, and visualization tools.",
    category: "IT",
  },
  {
    id: "diploma-it",
    title: "Diploma in Information Technology",
    type: "Diploma",
    duration: "2 Years",
    focus: "Networking, systems administration, database management, and web development.",
    category: "IT",
  },
  {
    id: "diploma-project-management",
    title: "Diploma in Project Management",
    type: "Diploma",
    duration: "2 Years",
    focus: "Project planning, PMP preparation, leadership, and stakeholder management.",
    category: "Business",
  },
  {
    id: "diploma-business-admin",
    title: "Diploma in Business Administration",
    type: "Diploma",
    duration: "2 Years",
    focus:
      "Management principles, accounting, marketing, human resources, and entrepreneurship.",
    category: "Business",
  },
  // Honors Diploma
  {
    id: "honors-diploma-me",
    title: "Honors Diploma in Monitoring & Evaluation",
    type: "Honors Diploma",
    duration: "1 Year",
    focus:
      "Advanced M&E frameworks, impact evaluation methodologies, and program assessment.",
    category: "Business",
  },
  // Certificates
  {
    id: "cert-computer-applications",
    title: "Certificate in Computer Applications",
    type: "Certificate",
    duration: "3 Months",
    focus: "Microsoft Office suite, basic networking, internet skills, and computer maintenance.",
    category: "IT",
  },
  {
    id: "cert-data-analysis",
    title: "Certificate in Data Analysis",
    type: "Certificate",
    duration: "3 Months",
    focus: "Advanced Excel, pivot tables, data visualization, and dashboarding.",
    category: "IT",
  },
  {
    id: "cert-project-management",
    title: "Certificate in Project Management",
    type: "Certificate",
    duration: "4 Months",
    focus: "Project planning, scheduling, risk management, and Agile/Scrum methodologies.",
    category: "Business",
  },
];
