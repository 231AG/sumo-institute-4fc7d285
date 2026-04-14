import { createFileRoute } from "@tanstack/react-router";
import { Section, SectionTitle } from "@/components/SectionComponents";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Sumo Institute of Technology" },
      { name: "description", content: "Get in touch with Sumo Institute of Technology. Contact admissions, academic departments, or general inquiries." },
      { property: "og:title", content: "Contact Us — SIT" },
      { property: "og:description", content: "Reach out for admissions, academic, or general inquiries." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your message! We will get back to you shortly.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <>
      <section className="dark-gradient text-secondary-foreground section-padding">
        <div className="max-w-7xl mx-auto">
          <span className="text-gold text-sm font-semibold uppercase tracking-widest">Get in Touch</span>
          <h1 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl font-bold mt-4">
            Contact <span className="gold-text-gradient">Us</span>
          </h1>
          <p className="text-secondary-foreground/70 text-lg mt-6 max-w-2xl">
            Have questions? We'd love to hear from you. Reach out and our team will respond promptly.
          </p>
        </div>
      </section>

      <Section>
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            <SectionTitle>Contact Information</SectionTitle>
            {[
              { icon: MapPin, label: "Address", value: "Sumo Institute of Technology\nMain Campus, Technology Drive" },
              { icon: Phone, label: "Phone", value: "+231 (778) 747-451\n+231 (778) 747-451" },
              { icon: Mail, label: "Email", value: "info@sit.edu\nadmissions@sit.edu" },
              { icon: Clock, label: "Office Hours", value: "Monday – Friday: 8:00 AM – 5:00 PM\nSaturday: 9:00 AM – 1:00 PM" },
            ].map((item) => (
              <div key={item.label} className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg gold-gradient flex items-center justify-center shrink-0">
                  <item.icon className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm">{item.label}</h4>
                  <p className="text-muted-foreground text-sm whitespace-pre-line">{item.value}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            <SectionTitle subtitle="Fill out the form and we'll get back to you within 24 hours.">Send Us a Message</SectionTitle>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1.5">Full Name</label>
                  <input
                    type="text"
                    required
                    maxLength={100}
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1.5">Email Address</label>
                  <input
                    type="email"
                    required
                    maxLength={255}
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                    placeholder="you@email.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1.5">Subject</label>
                <select
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                  required
                >
                  <option value="">Select a subject</option>
                  <option value="admissions">Admissions Inquiry</option>
                  <option value="programs">Program Information</option>
                  <option value="cpsd">CPSD Training</option>
                  <option value="research">Research / INSURED</option>
                  <option value="general">General Inquiry</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1.5">Message</label>
                <textarea
                  required
                  maxLength={1000}
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                  placeholder="Your message..."
                />
              </div>
              <button
                type="submit"
                className="gold-gradient text-secondary font-[family-name:var(--font-heading)] font-semibold px-8 py-3.5 rounded-lg hover:brightness-110 transition-all inline-flex items-center gap-2 tracking-wide"
              >
                <Send className="w-4 h-4" /> Send Message
              </button>
            </form>
          </div>
        </div>
      </Section>
    </>
  );
}
