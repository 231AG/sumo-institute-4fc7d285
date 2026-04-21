import { createFileRoute, Link } from "@tanstack/react-router";
import { Section, SectionTitle, CTABanner } from "@/components/SectionComponents";
import { CheckCircle, FileText, Download, ArrowRight } from "lucide-react";
import { admissionRequirements } from "@/data/admissionRequirements";

export const Route = createFileRoute("/admissions")({
  head: () => ({
    meta: [
      { title: "Admissions — Sumo Institute of Technology" },
      { name: "description", content: "Apply to SIT. Learn about admission requirements, application process, tuition fees, and financial aid." },
      { property: "og:title", content: "Admissions — SIT" },
      { property: "og:description", content: "Start your application. Admission requirements, process, and tuition information." },
    ],
  }),
  component: AdmissionsPage,
});

function AdmissionsPage() {
  return (
    <>
      <section className="dark-gradient text-secondary-foreground section-padding">
        <div className="max-w-7xl mx-auto">
          <span className="text-gold text-sm font-semibold uppercase tracking-widest">Admissions</span>
          <h1 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl font-bold mt-4">
            Begin Your <span className="gold-text-gradient">Journey</span> at SIT
          </h1>
          <p className="text-secondary-foreground/70 text-lg mt-6 max-w-2xl">
            We're looking for motivated students ready to make an impact. Here's everything you need to know about applying.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <a href="#apply-form" className="gold-gradient text-secondary font-[family-name:var(--font-heading)] font-bold px-8 py-3.5 rounded-lg hover:brightness-110 transition-all tracking-wider uppercase text-center">
              Apply Now
            </a>
            <button className="border-2 border-gold/50 text-secondary-foreground font-semibold px-8 py-3.5 rounded-lg hover:bg-gold/10 transition-all inline-flex items-center justify-center gap-2">
              <Download className="w-4 h-4" /> Download Forms
            </button>
          </div>
        </div>
      </section>

      {/* Requirements */}
      <Section>
        <SectionTitle subtitle="General requirements for admission to all SIT programs.">
          Admission Requirements
        </SectionTitle>
        <div className="bg-card border border-border rounded-2xl p-8 max-w-3xl mx-auto">
          <ul className="grid sm:grid-cols-2 gap-3">
            {admissionRequirements.map((req) => (
              <li
                key={req}
                className="flex items-start gap-2 text-muted-foreground text-sm"
              >
                <CheckCircle className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                {req}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* Application Process */}
      <Section dark>
        <SectionTitle light subtitle="Follow these steps to complete your application.">Application Process</SectionTitle>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { step: "01", title: "Submit Application", desc: "Fill out the online application form or download and submit a paper form." },
            { step: "02", title: "Upload Documents", desc: "Attach your transcripts, ID, recommendation letters, and personal statement." },
            { step: "03", title: "Pay Application Fee", desc: "Complete the non-refundable application fee payment online or at our office." },
            { step: "04", title: "Receive Decision", desc: "Admissions decisions are communicated within 2–4 weeks via email." },
          ].map((s) => (
            <div key={s.step} className="relative bg-secondary-foreground/5 border border-secondary-foreground/10 rounded-2xl p-6">
              <span className="font-[family-name:var(--font-heading)] text-4xl font-extrabold gold-text-gradient">{s.step}</span>
              <h3 className="font-[family-name:var(--font-heading)] font-semibold text-secondary-foreground mt-3 mb-2">{s.title}</h3>
              <p className="text-secondary-foreground/60 text-sm">{s.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Tuition */}
      <Section>
        <SectionTitle subtitle="Investing in your future.">Tuition & Fees</SectionTitle>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { type: "Degree Programs", fee: "Contact Admissions", note: "Tuition varies by program. Financial aid and scholarships available." },
            { type: "Diploma Programs", fee: "Contact Admissions", note: "2-year program fees. Installment payment plans available." },
            { type: "Certificate Courses", fee: "Contact Admissions", note: "Short course fees. Group discounts for organizations." },
          ].map((t) => (
            <div key={t.type} className="bg-card border border-border rounded-2xl p-8 text-center">
              <h3 className="font-[family-name:var(--font-heading)] font-bold">{t.type}</h3>
              <p className="text-2xl font-[family-name:var(--font-heading)] font-bold gold-text-gradient mt-3">{t.fee}</p>
              <p className="text-muted-foreground text-sm mt-2">{t.note}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Application Form CTA */}
      <section id="apply-form" className="gold-gradient">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <FileText className="w-12 h-12 text-secondary mx-auto mb-4" />
          <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold text-secondary mb-4">Ready to Apply?</h2>
          <p className="text-secondary/80 mb-8">
            Start your online application now or contact our admissions office for assistance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="bg-secondary text-secondary-foreground font-[family-name:var(--font-heading)] font-semibold px-8 py-3.5 rounded-lg hover:bg-secondary/90 transition-all inline-flex items-center justify-center gap-2">
              Contact Admissions <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
