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
  // Bachelor
  {
    id: "bba-business-administration",
    title: "BBA in Business Administration",
    type: "Bachelor",
    duration: "4 Years",
    focus:
      "Business fundamentals, enterprise applications, business development.",
    category: "Business",
  },
  {
    id: "bsc-information-technology",
    title: "BSc in Information Technology",
    type: "Bachelor",
    duration: "4 Years",
    focus:
      "IT foundations, programming, systems, networking, business-tech integration.",
    category: "IT",
  },
  {
    id: "ba-monitoring-evaluation",
    title: "Bachelor of Arts in Monitoring and Evaluation",
    type: "Bachelor",
    duration: "4 Years",
    focus: "Monitoring, evaluation, impact assessment.",
    category: "Business",
  },
  // Honors Diploma
  {
    id: "honors-diploma-it-software-eng",
    title: "Honors Diploma in IT (Software Engineering)",
    type: "Honors Diploma",
    duration: "~2 Years",
    focus: "Advanced software development, algorithms.",
    category: "IT",
  },
  {
    id: "honors-diploma-it-network-eng",
    title: "Honors Diploma in IT (Network Engineering)",
    type: "Honors Diploma",
    duration: "~2 Years",
    focus: "Network concepts, systems management.",
    category: "IT",
  },
  // Diploma
  {
    id: "professional-diploma-it-software-eng",
    title: "Professional Diploma in IT (Software Engineering)",
    type: "Diploma",
    duration: "2 Years",
    focus: "Software development fundamentals.",
    category: "IT",
  },
  {
    id: "professional-diploma-it-networking-eng",
    title: "Professional Diploma in IT (Networking Engineering)",
    type: "Diploma",
    duration: "2 Years",
    focus: "Network/server administration.",
    category: "IT",
  },
  {
    id: "diploma-data-analytics",
    title: "Diploma in Data Analytics",
    type: "Diploma",
    duration: "1 Year",
    focus: "Data analytics, visualization.",
    category: "IT",
  },
  {
    id: "diploma-full-stack-development",
    title: "Diploma in Full Stack Development",
    type: "Diploma",
    duration: "~1 Year",
    focus: "Frontend & backend development.",
    category: "IT",
  },
  // Certificates
  {
    id: "adv-cert-it-software-eng",
    title: "Advanced Certificate in IT – Software Engineering",
    type: "Certificate",
    duration: "6 Months",
    focus: "SQL Server, automation.",
    category: "IT",
  },
  {
    id: "adv-cert-it-network-eng",
    title: "Advanced Certificate in IT – Network Engineering",
    type: "Certificate",
    duration: "6 Months",
    focus: "Server administration.",
    category: "IT",
  },
  {
    id: "cert-java-programming",
    title: "Certificate in Java Programming",
    type: "Certificate",
    duration: "Short-term",
    focus: "Java basics.",
    category: "IT",
  },
  {
    id: "cert-python-programming",
    title: "Certificate in Python Programming",
    type: "Certificate",
    duration: "Short-term",
    focus: "Python basics.",
    category: "IT",
  },
  {
    id: "cert-ms-office",
    title: "Certificate in MS Office",
    type: "Certificate",
    duration: "Short-term",
    focus: "Office tools.",
    category: "Business",
  },
  {
    id: "cert-digital-marketing",
    title: "Certificate in Digital Marketing",
    type: "Certificate",
    duration: "Short-term",
    focus: "SEO, campaigns.",
    category: "Business",
  },
  {
    id: "cert-data-analysis",
    title: "Certificate in Data Analysis",
    type: "Certificate",
    duration: "Short-term",
    focus: "Data interpretation.",
    category: "IT",
  },
  {
    id: "cert-mis",
    title: "Certificate in MIS",
    type: "Certificate",
    duration: "Short-term",
    focus: "Information systems.",
    category: "Business",
  },
  {
    id: "cert-graphic-design",
    title: "Certificate in Graphic Design",
    type: "Certificate",
    duration: "Short-term",
    focus: "Design tools.",
    category: "IT",
  },
  {
    id: "cert-web-designing",
    title: "Certificate in Web Designing",
    type: "Certificate",
    duration: "Short-term",
    focus: "HTML, CSS.",
    category: "IT",
  },
  {
    id: "cert-advanced-excel",
    title: "Certificate in Advanced Excel",
    type: "Certificate",
    duration: "Short-term",
    focus: "Excel dashboards.",
    category: "Business",
  },
  {
    id: "cert-rdbms",
    title: "Certificate in RDBMS",
    type: "Certificate",
    duration: "Short-term",
    focus: "SQL databases.",
    category: "IT",
  },
  {
    id: "cert-comptia-network-plus",
    title: "Certificate in CompTIA Network+",
    type: "Certificate",
    duration: "Short-term",
    focus: "Networking.",
    category: "IT",
  },
  {
    id: "cert-comptia-a-plus",
    title: "Certificate in CompTIA A+",
    type: "Certificate",
    duration: "Short-term",
    focus: "IT support.",
    category: "IT",
  },
];
