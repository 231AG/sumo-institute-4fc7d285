import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin } from "lucide-react";
import sitLogo from "@/assets/logo.jpeg";

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={sitLogo} alt="Sumo Institute of Technology" className="w-10 h-10 rounded-lg object-cover" />
              <div>
                <span className="font-[family-name:var(--font-heading)] font-bold text-lg block leading-tight">Sumo Institute</span>
                <span className="text-gold text-xs tracking-wider uppercase">of Technology</span>
              </div>
            </div>
            <p className="text-secondary-foreground/60 text-sm leading-relaxed">
              Technology, Skills and Innovation for Development. Building Africa's next generation of tech leaders.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-[family-name:var(--font-heading)] font-semibold text-gold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {[
                { to: "/about", label: "About SIT" },
                { to: "/programs", label: "Programs" },
                { to: "/admissions", label: "Admissions" },
                { to: "/cpsd", label: "CPSD Training" },
                { to: "/insured", label: "INSURED Research" },
              ].map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-secondary-foreground/60 hover:text-gold transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-[family-name:var(--font-heading)] font-semibold text-gold mb-4">Programs</h4>
            <ul className="space-y-2 text-sm">
              {["BSc Networking", "BSc Data Science", "BSc Cyber Security", "BSc Telecom Engineering", "BSc Project Management"].map((p) => (
                <li key={p}>
                  <Link to="/programs" className="text-secondary-foreground/60 hover:text-gold transition-colors">
                    {p}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-[family-name:var(--font-heading)] font-semibold text-gold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2 text-secondary-foreground/60">
                <MapPin className="w-4 h-4 mt-0.5 text-gold shrink-0" />
                <span>Sumo Institute of Technology, Main Campus</span>
              </li>
              <li className="flex items-center gap-2 text-secondary-foreground/60">
                <Phone className="w-4 h-4 text-gold shrink-0" />
                <span>+1 (234) 567-8900</span>
              </li>
              <li className="flex items-center gap-2 text-secondary-foreground/60">
                <Mail className="w-4 h-4 text-gold shrink-0" />
                <span>info@sit.edu</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-secondary-foreground/40 text-sm">
            &copy; {new Date().getFullYear()} Sumo Institute of Technology. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {["Facebook", "Twitter", "LinkedIn", "Instagram"].map((social) => (
              <a key={social} href="#" className="text-secondary-foreground/40 hover:text-gold transition-colors text-sm">
                {social}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
