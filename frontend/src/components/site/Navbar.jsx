import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ShieldCheck } from "lucide-react";
import { openConsultation } from "@/lib/events";

const links = [
  { label: "Home", href: "#home" },
  { label: "Why Us", href: "#why-choose-us" },
  { label: "Services", href: "#services" },
  { label: "Consulting", href: "#qa-consulting" },
  { label: "Automation", href: "#automation-engineering" },
  { label: "Frameworks", href: "#frameworks" },
  { label: "Engagements", href: "#engagement-models" },
  { label: "Process", href: "#process" },
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

  return (
    <header
      data-testid="site-navbar"
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-xl border-b border-emerald-100/70 shadow-[0_4px_24px_-12px_rgba(2,44,34,0.08)]"
          : "bg-white/40 backdrop-blur-md border-b border-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 md:h-20 flex items-center justify-between">
        <a href="#home" data-testid="navbar-logo" className="flex items-center gap-2.5 group">
          <span className="relative inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-700 text-white shadow-md shadow-emerald-500/20">
            <ShieldCheck className="h-5 w-5" />
            <span className="absolute -inset-0.5 rounded-xl ring-1 ring-emerald-300/40" />
          </span>
          <span className="font-heading text-lg md:text-xl font-semibold tracking-tight text-emerald-950">
            QASoft<span className="text-emerald-600">Labs</span>
          </span>
        </a>

        <ul className="hidden xl:flex items-center gap-0.5">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                data-testid={`nav-link-${l.label.toLowerCase().replace(/\s+/g, "-")}`}
                className="px-2.5 py-2 text-sm font-medium text-slate-700 hover:text-emerald-700 transition-colors rounded-md hover:bg-emerald-50/60"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-3">
          <button
            data-testid="navbar-book-consultation"
            onClick={openConsultation}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-emerald-600 text-white text-sm font-semibold hover:bg-emerald-700 transition-all shadow-md shadow-emerald-500/20 hover:shadow-emerald-500/30 hover:-translate-y-0.5"
          >
            Book Free Consultation
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-200 animate-pulse" />
          </button>
        </div>

        <button
          data-testid="navbar-mobile-toggle"
          onClick={() => setOpen((s) => !s)}
          className="md:hidden p-2 rounded-md text-emerald-900 hover:bg-emerald-50 transition"
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
            className="md:hidden border-t border-emerald-100 bg-white/95 backdrop-blur-xl"
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
                className="mt-2 w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-emerald-600 text-white text-sm font-semibold hover:bg-emerald-700"
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
