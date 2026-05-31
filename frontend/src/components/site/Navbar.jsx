import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { openConsultation } from "@/lib/events";

const links = [
  { label: "Services", href: "#services" },
  { label: "Manual QA", href: "#manual-testing" },
  { label: "Consulting", href: "#qa-consulting" },
  { label: "Automation", href: "#automation-engineering" },
  { label: "Frameworks", href: "#frameworks" },
  { label: "Engagement", href: "#engagement-models" },
  { label: "Industries", href: "#industries" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Transparent on hero (top), light glass on scroll
  const headerCls = scrolled
    ? "bg-white/85 backdrop-blur-xl border-b border-emerald-100/70 shadow-[0_4px_24px_-12px_rgba(2,44,34,0.08)]"
    : "bg-transparent border-b border-emerald-500/15";

  const linkColor = scrolled
    ? "text-slate-700 hover:text-emerald-700 hover:bg-emerald-50/60"
    : "text-emerald-50/85 hover:text-white hover:bg-emerald-500/15";

  const logoTextColor = scrolled ? "text-emerald-950" : "text-white";
  const logoTagColor = scrolled ? "text-emerald-600" : "text-emerald-300";

  return (
    <header
      data-testid="site-navbar"
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${headerCls}`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 md:h-20 flex items-center justify-between gap-3">
        <a
          href="#home"
          data-testid="navbar-logo"
          className="flex items-center gap-3 group shrink-0 whitespace-nowrap"
        >
          <span className="relative inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-400 to-emerald-600 text-emerald-950 shadow-md shadow-emerald-500/30 shrink-0 font-heading font-extrabold text-lg tracking-tighter">
            QS
            <span className="absolute -inset-0.5 rounded-xl ring-1 ring-emerald-300/40" />
          </span>
          <span className="flex flex-col leading-none">
            <span className={`font-heading text-lg md:text-xl font-bold tracking-tight ${logoTextColor}`}>
              QASoftLabs
            </span>
            <span className={`text-[9px] md:text-[10px] font-semibold tracking-[0.22em] mt-1 ${logoTagColor}`}>
              QUALITY ENGINEERING
            </span>
          </span>
        </a>

        <ul className="hidden xl:flex items-center gap-0.5 flex-1 justify-center min-w-0">
          {links.map((l) => (
            <li key={l.href} className="shrink-0">
              <a
                href={l.href}
                data-testid={`nav-link-${l.label.toLowerCase().replace(/\s+/g, "-")}`}
                className={`px-3 py-2 text-sm font-medium transition-colors rounded-md whitespace-nowrap ${linkColor}`}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center gap-3 shrink-0">
          <button
            data-testid="navbar-book-consultation"
            onClick={openConsultation}
            className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold transition-all whitespace-nowrap hover:-translate-y-0.5 ${
              scrolled
                ? "bg-emerald-600 text-white hover:bg-emerald-700 shadow-md shadow-emerald-500/20"
                : "bg-emerald-400 text-emerald-950 hover:bg-emerald-300 shadow-[0_14px_30px_-10px_rgba(16,185,129,0.55)]"
            }`}
          >
            Book Free Consultation
          </button>
        </div>

        <button
          data-testid="navbar-mobile-toggle"
          onClick={() => setOpen((s) => !s)}
          className={`lg:hidden p-2 rounded-md transition shrink-0 ${
            scrolled ? "text-emerald-900 hover:bg-emerald-50" : "text-white hover:bg-emerald-500/15"
          }`}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden border-t border-emerald-100 bg-white/95 backdrop-blur-xl"
          >
            <div className="px-4 py-4 space-y-1 max-h-[70vh] overflow-y-auto">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  data-testid={`mobile-nav-link-${l.label.toLowerCase().replace(/\s+/g, "-")}`}
                  className="block px-3 py-2.5 text-sm font-medium text-slate-700 hover:bg-emerald-50 rounded-md"
                >
                  {l.label}
                </a>
              ))}
              <button
                data-testid="mobile-book-consultation"
                onClick={() => {
                  setOpen(false);
                  openConsultation();
                }}
                className="mt-2 w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-emerald-600 text-white text-sm font-bold hover:bg-emerald-700"
              >
                Book Free Consultation
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
