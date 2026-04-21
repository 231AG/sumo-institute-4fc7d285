export type CpsdCategory =
  | "IT"
  | "Networking"
  | "Database"
  | "Business"
  | "Media"
  | "Security"
  | "Data"
  | "Management"
  | "Programming"
  | "Office & Admin";

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
    id: "intro-to-computer",
    title: "Introduction to Computer",
    category: "IT",
    objectives:
      "Basic PC operations: power on/off, file management, browsing, WordPad.",
    highlights: ["Fundamentals of Computer", "Internet", "Office apps"],
    duration: "5 Weeks",
    type: "Certificate",
  },
  {
    id: "office-pro-basics",
    title: "Office Professional Basics",
    category: "Office & Admin",
    objectives:
      "Use MS Office for letters, proposals, memos, resumes, spreadsheets, presentations.",
    highlights: ["Word", "Excel", "PowerPoint", "Publisher (2016)"],
    duration: "8 Weeks",
    type: "Certificate",
  },
  {
    id: "office-pro-advance",
    title: "Office Professional Advance",
    category: "Office & Admin",
    objectives: "Master advanced MS Office functions for office automation.",
    highlights: ["Word", "Excel", "PowerPoint", "Publisher (2016)"],
    duration: "14 Weeks",
    type: "Certificate",
  },
  {
    id: "linux-power-user",
    title: "Linux Power User",
    category: "IT",
    objectives: "Grasp fundamentals of Linux operating environment.",
    highlights: ["Linux OS basics", "Text editing", "Shell scripting", "Labs"],
    duration: "10 Weeks",
    type: "Certificate",
  },
  {
    id: "linux-system-admin",
    title: "Linux System Administration",
    category: "IT",
    objectives:
      "Administer Linux systems; user groups, file systems, backups, networking.",
    highlights: [
      "CLI/GUI",
      "User/group management",
      "Filesystem",
      "Networking",
      "Developer tools",
    ],
    duration: "12 Weeks",
    type: "Professional",
  },
  {
    id: "tech-business-career",
    title: "Technology for Business & Career Professionals",
    category: "Business",
    objectives: "Apply tech tools in everyday business activities.",
    highlights: [
      "Computer fundamentals",
      "Word",
      "Excel",
      "PowerPoint",
      "Access",
      "Internet research",
      "E-commerce",
    ],
    duration: "8 Weeks",
    type: "Certificate",
  },
  {
    id: "a-plus-build-computers",
    title: "A+ (Learning to Build Computers)",
    category: "IT",
    objectives: "Manage and troubleshoot PC hardware and software.",
    highlights: [
      "Hardware assembly",
      "Repairs",
      "OS installations (Windows 7+)",
    ],
    duration: "3 Months",
    type: "Certificate",
  },
  {
    id: "network-plus",
    title: "Network+",
    category: "Networking",
    objectives: "Basics of network infrastructure management.",
    highlights: ["Network communication", "Media and hardware essentials"],
    duration: "3 Months",
    type: "Certificate",
  },
  {
    id: "mcsa",
    title: "MCSA",
    category: "Networking",
    objectives:
      "Configure/administer Windows Server 2012; prepare for certification.",
    highlights: [
      "Windows 10",
      "Server 2019 AD",
      "Network infrastructure",
      "Enterprise admin",
    ],
    duration: "6 Months",
    type: "Professional",
  },
  {
    id: "mcse",
    title: "MCSE",
    category: "Networking",
    objectives: "Advanced administration of Windows Server 2019 networks.",
    highlights: [
      "Install",
      "Configure",
      "Plan",
      "Maintain enterprise network infrastructure",
    ],
    duration: "6 Months",
    type: "Professional",
  },
  {
    id: "cisco-networking-basic",
    title: "Cisco Networking Basic",
    category: "Networking",
    objectives: "Build and manage basic Cisco network setups.",
    highlights: ["Discovery 1", "Discovery 2"],
    duration: "6 Months",
    type: "Professional",
  },
  {
    id: "cisco-networking-advance",
    title: "Cisco Networking Advance",
    category: "Networking",
    objectives: "Advanced Cisco networking implementation.",
    highlights: ["Exploration 1", "Exploration 2"],
    duration: "6 Months",
    type: "Professional",
  },
  {
    id: "db-admin-standard",
    title: "Database Administration Standard",
    category: "Database",
    objectives: "Work with Access and SQL databases.",
    highlights: ["Access 2019", "SQL implementation"],
    duration: "3 Months",
    type: "Certificate",
  },
  {
    id: "db-admin-advance",
    title: "Database Administration Advance",
    category: "Database",
    objectives: "Advanced database management with Visual Basic.",
    highlights: ["SQL admin", "Visual Basic tools"],
    duration: "3 Months",
    type: "Professional",
  },
  {
    id: "oracle-11g-db-admin",
    title: "Oracle 11g Database Administration",
    category: "Database",
    objectives: "Administer enterprise-level Oracle databases.",
    highlights: ["Oracle 11g", "Linux administration"],
    duration: "4 Months",
    type: "Professional",
  },
  {
    id: "ms-cert-db-admin",
    title: "Microsoft Certified Database Administration",
    category: "Database",
    objectives: "Plan, configure, and manage MS database systems.",
    highlights: ["Microsoft database implementation"],
    duration: "6 Months",
    type: "Professional",
  },
  {
    id: "pm-application-knowledge",
    title: "Project Management Application Knowledge",
    category: "Management",
    objectives: "Manage projects ranging $100 to $1 billion.",
    highlights: ["Entrepreneurial project management concepts"],
    duration: "1 Month",
    type: "Certificate",
  },
  {
    id: "ms-project-software",
    title: "Microsoft Project Management Software",
    category: "Management",
    objectives: "Use MS Project to plan and manage projects.",
    highlights: ["Hands-on application software training"],
    duration: "1 Month",
    type: "Certificate",
  },
  {
    id: "digital-media-video",
    title: "Digital Media & Video Production",
    category: "Media",
    objectives: "Website design with HTML/Dreamweaver; video editing.",
    highlights: ["HTML", "Dreamweaver", "Premiere Pro", "Final Cut"],
    duration: "1 Month",
    type: "Certificate",
  },
  {
    id: "digital-media-video-pro",
    title: "Digital Media & Video Production (Pro)",
    category: "Media",
    objectives: "Advanced web, photo, and video editing.",
    highlights: ["JavaScript", "Photoshop", "Dreamweaver", "Premiere Pro"],
    duration: "3 Months",
    type: "Professional",
  },
  {
    id: "java-programming-intro",
    title: "Java Programming (Intro & Basics)",
    category: "Programming",
    objectives: "Learn object-oriented programming with Java.",
    highlights: ["CLI Java application development", "GUI Java application development"],
    duration: "3 Months",
    type: "Certificate",
  },
  {
    id: "information-systems-programs",
    title: "Information Systems Programs",
    category: "IT",
    objectives:
      "IT controls, network design, risk/security, data warehousing, web app dev.",
    highlights: ["Broad IS topics", "IS management"],
    duration: "9 Months",
    type: "Professional",
  },
  {
    id: "info-security-specialist",
    title: "Information Security Specialist Program",
    category: "Security",
    objectives:
      "Security management across internet, databases, networks.",
    highlights: [
      "Security tools/techniques",
      "Cryptography",
      "Database security",
      "Network security",
    ],
    duration: "9 Months",
    type: "Professional",
  },
  {
    id: "software-engineering-programming",
    title: "Software Engineering (Programming)",
    category: "Programming",
    objectives: "Full SDLC coverage for software development.",
    highlights: [
      "Requirements analysis",
      "Design",
      "Development",
      "Testing",
      "Deployment",
      "Documentation",
      "Training",
    ],
    duration: "12 Months",
    type: "Professional",
  },
  {
    id: "su-admin-assistant",
    title: "SU Administrative Assistant Training Program",
    category: "Office & Admin",
    objectives: "Training for the modern corporate administrative role.",
    highlights: [
      "Clerical",
      "Computer skills",
      "Email",
      "Communication",
      "Professionalism",
      "Office suite",
    ],
    duration: "6 Months",
    type: "Professional",
  },
  {
    id: "su-honors-diploma-it-business",
    title:
      "SU Advance Honors Course Diploma in IT, Business & Technology Integration",
    category: "Business",
    objectives:
      "Train hybrid professionals with IT and business integration skills.",
    highlights: [
      "IT fundamentals",
      "Operating systems",
      "Database design",
      "Visual Basic",
      "SQL Server",
      "Project management",
    ],
    duration: "12 Months",
    type: "Diploma",
  },
];
