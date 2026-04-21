export type CpsdCategory =
  | "IT"
  | "Networking"
  | "Database"
  | "Business"
  | "Media"
  | "Security"
  | "Data"
  | "Management";

export type CpsdType = "Certificate" | "Diploma" | "Professional";

export interface CpsdProgram {
  id: string;
  title: string;
  category: CpsdCategory;
  objectives: string;
  highlights: string[];
  duration: string;
  type: CpsdType;
}

export const cpsdPrograms: CpsdProgram[] = [
  {
    id: "cert-computer-apps",
    title: "Computer Applications",
    category: "IT",
    objectives:
      "Equip learners with practical computer skills for the modern workplace.",
    highlights: ["Microsoft Office Suite", "Basic Networking", "Internet & Email", "Computer Maintenance"],
    duration: "3 Months",
    type: "Certificate",
  },
  {
    id: "cert-data-analysis-excel",
    title: "Data Analysis with Excel",
    category: "Data",
    objectives:
      "Build advanced spreadsheet and analytics skills for data-driven decisions.",
    highlights: ["Advanced Excel", "Pivot Tables", "Data Visualization", "Statistical Analysis", "Dashboards"],
    duration: "3 Months",
    type: "Certificate",
  },
  {
    id: "cert-project-management",
    title: "Project Management",
    category: "Management",
    objectives:
      "Train professionals in modern project planning and team leadership.",
    highlights: ["Planning & Scheduling", "Risk Management", "Agile / Scrum", "Team Leadership"],
    duration: "4 Months",
    type: "Certificate",
  },
  {
    id: "cert-monitoring-evaluation",
    title: "Monitoring & Evaluation",
    category: "Management",
    objectives:
      "Strengthen capacity in program design, M&E frameworks, and impact reporting.",
    highlights: ["Program Design", "M&E Frameworks", "Data Collection", "Impact Assessment"],
    duration: "3 Months",
    type: "Certificate",
  },
  {
    id: "cert-digital-marketing",
    title: "Digital Marketing",
    category: "Media",
    objectives:
      "Master the tools and strategies of modern digital marketing campaigns.",
    highlights: ["SEO", "Social Media Marketing", "Content Strategy", "Google Ads", "Analytics"],
    duration: "3 Months",
    type: "Certificate",
  },
  {
    id: "diploma-data-science",
    title: "Diploma in Data Science",
    category: "Data",
    objectives:
      "Develop end-to-end data science capabilities from data wrangling to ML deployment.",
    highlights: ["Python", "Statistics", "Machine Learning", "Data Visualization"],
    duration: "2 Years",
    type: "Diploma",
  },
  {
    id: "diploma-project-management",
    title: "Diploma in Project Management",
    category: "Management",
    objectives:
      "Comprehensive preparation for senior project management roles and PMP certification.",
    highlights: ["Advanced Planning", "PMP Prep", "Leadership", "Stakeholder Management"],
    duration: "2 Years",
    type: "Diploma",
  },
  {
    id: "diploma-business-admin",
    title: "Diploma in Business Administration",
    category: "Business",
    objectives:
      "Prepare graduates for managerial and entrepreneurial roles across industries.",
    highlights: ["Management", "Accounting", "Marketing", "HR", "Entrepreneurship"],
    duration: "2 Years",
    type: "Diploma",
  },
  {
    id: "diploma-it",
    title: "Diploma in Information Technology",
    category: "IT",
    objectives:
      "Build broad IT competencies covering systems, networks, and applications.",
    highlights: ["Networking", "Systems Administration", "Database Management", "Web Development"],
    duration: "2 Years",
    type: "Diploma",
  },
  {
    id: "prof-cyber-security",
    title: "Professional Cyber Security",
    category: "Security",
    objectives:
      "Equip IT professionals with hands-on cyber defense and incident response skills.",
    highlights: ["Threat Analysis", "Penetration Testing", "Incident Response", "Security Compliance"],
    duration: "6 Months",
    type: "Professional",
  },
  {
    id: "prof-database-admin",
    title: "Professional Database Administration",
    category: "Database",
    objectives:
      "Master enterprise database design, optimization, and administration.",
    highlights: ["SQL Server", "MySQL", "Performance Tuning", "Backup & Recovery"],
    duration: "5 Months",
    type: "Professional",
  },
  {
    id: "prof-network-eng",
    title: "Professional Network Engineering",
    category: "Networking",
    objectives:
      "Prepare engineers to design and operate enterprise-grade network infrastructure.",
    highlights: ["Cisco Routing & Switching", "Network Security", "Wireless", "Cloud Networking"],
    duration: "6 Months",
    type: "Professional",
  },
];
