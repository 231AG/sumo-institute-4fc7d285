export interface ShortCourse {
  title: string;
  duration: string;
  content: string[];
  targetAudience: string;
}

export interface ShortCourseCategory {
  category: string;
  programs: ShortCourse[];
}

export const shortCourses: ShortCourseCategory[] = [
  {
    category: "IT & Digital Skills",
    programs: [
      {
        title: "Digital Literacy and Computer Basics",
        duration: "Short-term",
        content: ["Computer fundamentals", "Internet", "Office basics"],
        targetAudience: "Beginners and entry-level learners.",
      },
      {
        title: "Web Development",
        duration: "Short-term",
        content: ["HTML", "CSS", "JavaScript", "Responsive design"],
        targetAudience: "Aspiring web developers and designers.",
      },
      {
        title: "E-Commerce and Online Business Setup",
        duration: "Short-term",
        content: ["E-commerce platforms", "Payments", "Storefront setup"],
        targetAudience: "Entrepreneurs and small business owners.",
      },
      {
        title: "IT for Non-Profit Organizations",
        duration: "Short-term",
        content: ["IT tools for NGOs", "Productivity", "Collaboration"],
        targetAudience: "NGO and non-profit staff.",
      },
      {
        title: "Data Analysis Using Excel",
        duration: "Short-term",
        content: ["Pivot tables", "Charts", "Formulas", "Dashboards"],
        targetAudience: "Analysts, M&E officers, and admin staff.",
      },
      {
        title: "IT Support and Networking Essentials",
        duration: "Short-term",
        content: ["Hardware support", "Troubleshooting", "Networking basics"],
        targetAudience: "IT support staff and beginners.",
      },
      {
        title: "Advanced Microsoft Excel",
        duration: "Short-term",
        content: ["Advanced formulas", "Macros", "Power Query", "Dashboards"],
        targetAudience: "Professionals working with data.",
      },
      {
        title: "IT Project Management",
        duration: "Short-term",
        content: ["Planning", "Scheduling", "Risk management", "Agile"],
        targetAudience: "IT project leads and managers.",
      },
      {
        title: "Database Management with SQL",
        duration: "Short-term",
        content: ["Relational databases", "SQL queries", "Design"],
        targetAudience: "Aspiring DBAs and analysts.",
      },
      {
        title: "Graphic Design",
        duration: "Short-term",
        content: ["Design principles", "Photoshop", "Branding"],
        targetAudience: "Designers, marketers, and freelancers.",
      },
      {
        title: "Digital Marketing and Social Media Management",
        duration: "Short-term",
        content: ["SEO", "Social media", "Content strategy", "Ads"],
        targetAudience: "Marketers and small business owners.",
      },
      {
        title: "IT Entrepreneurship and Business Development",
        duration: "Short-term",
        content: ["Tech startups", "Business models", "Growth"],
        targetAudience: "Tech entrepreneurs and founders.",
      },
    ],
  },
  {
    category: "Business & Management",
    programs: [
      {
        title: "Project Management",
        duration: "Short-term",
        content: ["Planning", "Execution", "Monitoring", "Closure"],
        targetAudience: "Project managers and team leads.",
      },
      {
        title: "Monitoring and Evaluation",
        duration: "Short-term",
        content: ["M&E frameworks", "Indicators", "Data collection", "Reporting"],
        targetAudience: "Program officers and NGO staff.",
      },
      {
        title: "Procurement and Contract Management",
        duration: "Short-term",
        content: ["Procurement cycle", "Contracts", "Vendor management"],
        targetAudience: "Procurement and operations staff.",
      },
      {
        title: "Project Proposal Writing",
        duration: "Short-term",
        content: ["Proposal structure", "Logframes", "Budgets"],
        targetAudience: "NGO staff and consultants.",
      },
      {
        title: "Human Resource Management",
        duration: "Short-term",
        content: ["Recruitment", "Performance", "HR policies"],
        targetAudience: "HR officers and managers.",
      },
      {
        title: "Small Business Management",
        duration: "Short-term",
        content: ["Operations", "Finance", "Marketing", "Growth"],
        targetAudience: "Small business owners and entrepreneurs.",
      },
      {
        title: "Logistics and Supply Chain Management",
        duration: "Short-term",
        content: ["Logistics", "Inventory", "Supply chain operations"],
        targetAudience: "Operations and logistics staff.",
      },
    ],
  },
  {
    category: "Finance & Accounting",
    programs: [
      {
        title: "QuickBooks for Beginners",
        duration: "Short-term",
        content: ["QuickBooks setup", "Invoicing", "Basic reports"],
        targetAudience: "Bookkeepers and small business owners.",
      },
      {
        title: "Advanced QuickBooks",
        duration: "Short-term",
        content: ["Advanced reports", "Payroll", "Inventory"],
        targetAudience: "Accountants and finance officers.",
      },
      {
        title: "Financial Literacy and Budgeting",
        duration: "Short-term",
        content: ["Personal finance", "Budgeting", "Saving and investing"],
        targetAudience: "Professionals and the general public.",
      },
    ],
  },
  {
    category: "Data Analysis & Research",
    programs: [
      {
        title: "Data Analysis Using SPSS",
        duration: "Short-term",
        content: ["SPSS basics", "Descriptive statistics", "Cross-tabs", "Reports"],
        targetAudience: "Researchers and program officers.",
      },
      {
        title: "Introduction to Data Visualization",
        duration: "Short-term",
        content: ["Visualization principles", "Charts", "Dashboards"],
        targetAudience: "Analysts and report authors.",
      },
    ],
  },
  {
    category: "Soft Skills & Professional Development",
    programs: [
      {
        title: "Effective Communication Skills",
        duration: "Short-term",
        content: ["Verbal", "Written", "Presentation skills"],
        targetAudience: "Professionals at all levels.",
      },
      {
        title: "Leadership and Team Management",
        duration: "Short-term",
        content: ["Leadership styles", "Team dynamics", "Coaching"],
        targetAudience: "Supervisors, managers, and emerging leaders.",
      },
    ],
  },
];
