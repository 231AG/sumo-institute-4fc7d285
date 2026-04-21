import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Section, CTABanner } from "@/components/SectionComponents";
import { Clock, BookOpen, CheckCircle } from "lucide-react";
import { ProgramTabs } from "@/components/ProgramTabs";
import { ProgramFilter } from "@/components/ProgramFilter";
import {
  degreePrograms,
  type DegreeType,
  type DegreeCategory,
} from "@/data/degreePrograms";

export const Route = createFileRoute("/programs")({
  head: () => ({
    meta: [
      { title: "Programs — Sumo Institute of Technology" },
      {
        name: "description",
        content:
          "Explore SIT's BSc degrees, diplomas, honors diplomas, and certificates in Networking, Data Science, Cyber Security, MIS, Telecom Engineering, Project Management, and Monitoring & Evaluation.",
      },
      { property: "og:title", content: "Academic Programs — SIT" },
      {
        property: "og:description",
        content:
          "Accredited degree, diploma, and certificate programs in technology and management disciplines.",
      },
    ],
  }),
  component: ProgramsPage,
});

const TYPE_TABS = [
  { value: "Bachelor", label: "Bachelor" },
  { value: "Diploma", label: "Diploma" },
  { value: "Honors Diploma", label: "Honors Diploma" },
  { value: "Certificate", label: "Certificate" },
] as const satisfies ReadonlyArray<{ value: DegreeType; label: string }>;

const CATEGORY_OPTIONS: readonly DegreeCategory[] = ["IT", "Business"];

function ProgramsPage() {
  const [category, setCategory] = useState<DegreeCategory | "All">("All");

  const tabsWithCount = useMemo(
    () =>
      TYPE_TABS.map((t) => ({
        ...t,
        count: degreePrograms.filter(
          (p) =>
            p.type === t.value &&
            (category === "All" || p.category === category),
        ).length,
      })),
    [category],
  );

  return (
    <>
      <section className="dark-gradient text-secondary-foreground section-padding">
        <div className="max-w-7xl mx-auto">
          <span className="text-gold text-sm font-semibold uppercase tracking-widest">
            Academic Programs
          </span>
          <h1 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl font-bold mt-4">
            Degree <span className="gold-text-gradient">Programs</span>
          </h1>
          <p className="text-secondary-foreground/70 text-lg mt-6 max-w-2xl">
            Accredited bachelor, diploma, honors diploma, and certificate programs designed to
            prepare you for a successful career in technology and management.
          </p>
        </div>
      </section>

      <Section>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold">
            Browse Programs
          </h2>
          <ProgramFilter<DegreeCategory | "All">
            options={CATEGORY_OPTIONS}
            active={category}
            onChange={setCategory}
            allLabel="All"
          />
        </div>

        <ProgramTabs<DegreeType> tabs={tabsWithCount} defaultValue="Bachelor">
          {(activeType) => {
            const filtered = degreePrograms.filter(
              (p) =>
                p.type === activeType &&
                (category === "All" || p.category === category),
            );

            if (filtered.length === 0) {
              return (
                <div className="bg-card border border-border rounded-2xl p-12 text-center text-muted-foreground">
                  No {activeType} programs available in this category yet.
                </div>
              );
            }

            return (
              <div className="space-y-6">
                {filtered.map((prog) => (
                  <article
                    key={prog.id}
                    className="bg-card border border-border rounded-2xl p-8 hover:shadow-lg hover:border-gold/20 transition-all"
                  >
                    <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-2 mb-2">
                          <span className="inline-flex items-center rounded-full bg-gold/10 text-gold-dark text-xs font-medium px-2.5 py-1">
                            {prog.category}
                          </span>
                          <span className="inline-flex items-center rounded-full bg-muted text-muted-foreground text-xs font-medium px-2.5 py-1">
                            {prog.type}
                          </span>
                        </div>
                        <h3 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-foreground">
                          {prog.title}
                        </h3>
                        <div className="flex items-center gap-4 mt-2">
                          <span className="inline-flex items-center gap-1 text-gold text-sm font-medium">
                            <Clock className="w-4 h-4" /> {prog.duration}
                          </span>
                          <span className="inline-flex items-center gap-1 text-muted-foreground text-sm">
                            <BookOpen className="w-4 h-4" /> Full Time
                          </span>
                        </div>
                        <p className="text-muted-foreground mt-4 leading-relaxed">
                          {prog.focus}
                        </p>
                      </div>
                      {prog.requirements && prog.requirements.length > 0 && (
                        <div className="lg:w-80 shrink-0">
                          <h4 className="font-[family-name:var(--font-heading)] font-semibold text-sm text-foreground mb-3">
                            Admission Requirements
                          </h4>
                          <ul className="space-y-2">
                            {prog.requirements.map((req) => (
                              <li
                                key={req}
                                className="flex items-start gap-2 text-sm text-muted-foreground"
                              >
                                <CheckCircle className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                                {req}
                              </li>
                            ))}
                          </ul>
                          <Link
                            to="/admissions"
                            className="inline-flex items-center justify-center w-full gold-gradient text-secondary font-semibold text-sm px-4 py-2.5 rounded-lg mt-4 hover:brightness-110 transition-all"
                          >
                            Apply for This Program
                          </Link>
                        </div>
                      )}
                    </div>
                  </article>
                ))}
              </div>
            );
          }}
        </ProgramTabs>
      </Section>

      <CTABanner
        title="Start Your Academic Journey"
        description="Applications are open. Take the first step towards a rewarding career in technology."
      />
    </>
  );
}
