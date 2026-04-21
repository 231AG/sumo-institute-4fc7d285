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
        title: "Microsoft Office Mastery",
        duration: "6 Weeks",
        content: ["Word", "Excel", "PowerPoint", "Outlook"],
        targetAudience: "Office staff, students, and entry-level professionals.",
      },
      {
        title: "Web Design Fundamentals",
        duration: "8 Weeks",
        content: ["HTML", "CSS", "Responsive Design", "Intro to JavaScript"],
        targetAudience: "Aspiring web designers and content creators.",
      },
      {
        title: "Graphic Design with Canva & Photoshop",
        duration: "6 Weeks",
        content: ["Design principles", "Branding", "Social media graphics"],
        targetAudience: "Marketers, freelancers, small business owners.",
      },
    ],
  },
  {
    category: "Business & Management",
    programs: [
      {
        title: "Entrepreneurship & Small Business",
        duration: "6 Weeks",
        content: ["Business planning", "Market research", "Funding basics"],
        targetAudience: "Aspiring entrepreneurs and small business owners.",
      },
      {
        title: "Customer Service Excellence",
        duration: "4 Weeks",
        content: ["Communication", "Conflict resolution", "Service recovery"],
        targetAudience: "Frontline staff and customer-facing teams.",
      },
    ],
  },
  {
    category: "Finance & Accounting",
    programs: [
      {
        title: "Bookkeeping Essentials",
        duration: "6 Weeks",
        content: ["Double-entry", "Ledgers", "Trial balance", "QuickBooks intro"],
        targetAudience: "Small business owners and bookkeeping assistants.",
      },
      {
        title: "Practical Financial Management",
        duration: "8 Weeks",
        content: ["Budgeting", "Cash flow", "Financial statements"],
        targetAudience: "Managers, NGO staff, and team leaders.",
      },
    ],
  },
  {
    category: "Data Analysis & Research",
    programs: [
      {
        title: "Data Analysis with Excel",
        duration: "6 Weeks",
        content: ["Pivot tables", "Charts", "Lookup functions", "Dashboards"],
        targetAudience: "Analysts, M&E officers, and admin staff.",
      },
      {
        title: "Introduction to SPSS",
        duration: "6 Weeks",
        content: ["Data entry", "Descriptive statistics", "Cross-tabs", "Reports"],
        targetAudience: "Researchers, students, and program officers.",
      },
    ],
  },
  {
    category: "Soft Skills & Professional Development",
    programs: [
      {
        title: "Effective Communication",
        duration: "4 Weeks",
        content: ["Verbal", "Written", "Presentation skills"],
        targetAudience: "Professionals at all levels.",
      },
      {
        title: "Leadership & Team Building",
        duration: "5 Weeks",
        content: ["Leadership styles", "Team dynamics", "Coaching"],
        targetAudience: "Supervisors, managers, and emerging leaders.",
      },
    ],
  },
];
