import { Link, useLocation } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import sitLogo from "@/assets/logo.jpeg";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About SIT" },
  { to: "/programs", label: "Programs" },
  { to: "/insured", label: "Research (INSURED)" },
  { to: "/cpsd", label: "Training (CPSD)" },
  { to: "/admissions", label: "Admissions" },
  { to: "/news", label: "News & Events" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-secondary/95 backdrop-blur-md border-b border-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 shrink-0">
            <img src={sitLogo} alt="Sumo Institute of Technology" className="w-10 h-10 rounded-lg object-cover" />
            <div className="hidden sm:block">
              <span className="text-secondary-foreground font-[family-name:var(--font-heading)] font-bold text-lg leading-tight block">
                Sumo Institute
              </span>
              <span className="text-gold text-m font-medium tracking-wider uppercase">of Technology</span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  location.pathname === link.to
                    ? "text-gold"
                    : "text-white hover:text-gold"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Apply CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              to="/admissions"
              className="gold-gradient text-secondary font-[family-name:var(--font-heading)] font-semibold text-sm px-5 py-2.5 rounded-lg hover:brightness-110 transition-all tracking-wide"
            >
              Apply Now
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden text-secondary-foreground p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <div className="lg:hidden bg-secondary border-t border-secondary-foreground/10">
          <nav className="flex flex-col px-4 py-4 gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMobileOpen(false)}
                className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                  location.pathname === link.to
                    ? "text-gold bg-secondary-foreground/5"
                    : "text-white hover:text-gold"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/admissions"
              onClick={() => setMobileOpen(false)}
              className="gold-gradient text-secondary font-semibold text-sm px-4 py-3 rounded-lg text-center mt-2 tracking-wide"
            >
              Apply Now
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
