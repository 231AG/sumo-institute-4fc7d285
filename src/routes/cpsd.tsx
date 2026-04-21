import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Section, SectionTitle, CTABanner } from "@/components/SectionComponents";
import { Award, BookOpen, Clock, Download } from "lucide-react";
import trainingBg from "@/assets/training-bg.jpg";
import { ProgramTable } from "@/components/ProgramTable";
import { ProgramFilter } from "@/components/ProgramFilter";
import { CategorySection } from "@/components/CategorySection";
import { cpsdPrograms, type CpsdCategory } from "@/data/cpsdPrograms";
import { shortCourses } from "@/data/shortCourses";

export const Route = createFileRoute("/cpsd")({
  head: () => ({
    meta: [
      { title: "CPSD — Professional Training — Sumo Institute of Technology" },
      {
        name: "description",
        content:
          "Center for Professional Skills Development. Certificate, diploma and short courses in Data Analysis, Project Management, Digital Marketing, IT, Business, and more.",
      },
      { property: "og:title", content: "CPSD — Professional Training at SIT" },
      {
        property: "og:description",
        content: "Upskill with industry-recognized certificate, diploma, and short course programs.",
      },
    ],
  }),
  component: CPSDPage,
});

function CPSDPage() {
  const categories = useMemo(() => {
    const set = new Set<CpsdCategory>();
    cpsdPrograms.forEach((p) => set.add(p.category));
    return Array.from(set).sort();
  }, []);

  const [activeCategory, setActiveCategory] = useState<CpsdCategory | "All">("All");

  const filteredPrograms = useMemo(
    () =>
      activeCategory === "All"
        ? cpsdPrograms
        : cpsdPrograms.filter((p) => p.category === activeCategory),
    [activeCategory],
  );

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={trainingBg}
            alt="CPSD Training"
            className="w-full h-full object-cover"
            width={1920}
            height={800}
            loading="lazy"
          />
          <div className="absolute inset-0 bg-secondary/85" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="inline-flex items-center gap-2 gold-gradient text-secondary rounded-full px-4 py-1.5 text-sm font-semibold mb-6">
            <Award className="w-4 h-4" /> CPSD
          </div>
          <h1 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl font-bold text-secondary-foreground">
            Center for <span className="gold-text-gradient">Professional Skills</span> Development
          </h1>
          <p className="text-secondary-foreground/70 text-lg mt-6 max-w-2xl">
            Accelerate your career with industry-recognized certificate, diploma, and short
            courses. Flexible schedules designed for working professionals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Link
              to="/admissions"
              className="gold-gradient text-secondary font-[family-name:var(--font-heading)] font-bold px-8 py-3.5 rounded-lg hover:brightness-110 transition-all tracking-wider uppercase text-center"
            >
              Apply Now
            </Link>
            <button className="border-2 border-gold/50 text-secondary-foreground font-semibold px-8 py-3.5 rounded-lg hover:bg-gold/10 transition-all inline-flex items-center justify-center gap-2">
              <Download className="w-4 h-4" /> Download Form
            </button>
          </div>
        </div>
      </section>

      {/* About CPSD */}
      <Section>
        <SectionTitle subtitle="Bridging the gap between education and employment through practical, industry-aligned training.">
          About CPSD
        </SectionTitle>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { icon: Clock, title: "Flexible Schedules", desc: "Evening, weekend, and intensive formats to fit your lifestyle." },
            { icon: Award, title: "Industry Certifications", desc: "Earn credentials recognized by employers across industries." },
            { icon: BookOpen, title: "Practical Training", desc: "Hands-on projects and real-world case studies in every course." },
          ].map((f) => (
            <div key={f.title} className="bg-card border border-border rounded-2xl p-6 text-center">
              <f.icon className="w-10 h-10 text-gold mx-auto mb-4" />
              <h3 className="font-[family-name:var(--font-heading)] font-semibold mb-2">{f.title}</h3>
              <p className="text-muted-foreground text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Main Programs Table */}
      <Section dark>
        <SectionTitle
          light
          subtitle="Browse our certificate, diploma, and professional programs. Filter by category to narrow your search."
        >
          Programs Catalogue
        </SectionTitle>
        <div className="mb-6">
          <ProgramFilter<CpsdCategory | "All">
            options={categories}
            active={activeCategory}
            onChange={setActiveCategory}
            allLabel="All"
          />
        </div>
        <ProgramTable programs={filteredPrograms} />
      </Section>

      {/* Short Courses */}
      <Section>
        <SectionTitle subtitle="Targeted short courses grouped by discipline. Perfect for upskilling on a specific topic.">
          Short Courses
        </SectionTitle>
        <div className="space-y-12">
          {shortCourses.map((cat) => (
            <CategorySection key={cat.category} data={cat} />
          ))}
        </div>
      </Section>

      <CTABanner
        title="Invest in Your Career"
        description="Enroll in a CPSD program today and gain the skills employers are looking for."
      />
    </>
  );
}
