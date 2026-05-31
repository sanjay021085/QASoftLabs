import React from "react";
import { ShieldCheck, Mail, MessageCircle } from "lucide-react";

const cols = [
  {
    title: "Services",
    links: [
      { label: "Functional Testing", href: "#services" },
      { label: "API Testing", href: "#services" },
      { label: "UI Testing", href: "#services" },
      { label: "Release Validation", href: "#services" },
    ],
  },
  {
    title: "Engineering",
    links: [
      { label: "Automation Engineering", href: "#automation-engineering" },
      { label: "Framework Engineering", href: "#frameworks" },
      { label: "QA Consulting", href: "#qa-consulting" },
      { label: "Engagement Models", href: "#engagement-models" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Why QASoftLabs", href: "#why-choose-us" },
      { label: "Industries", href: "#industries" },
      { label: "Process", href: "#process" },
      { label: "Contact", href: "#contact" },
    ],
  },
];

const Footer = () => {
  return (
    <footer data-testid="site-footer" className="relative bg-gradient-to-br from-emerald-950 via-emerald-900 to-emerald-950 text-emerald-50 pt-20 pb-10 mt-10 overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-300/70 to-transparent" />
      <div className="absolute inset-x-0 -top-10 h-20 bg-gradient-to-b from-emerald-400/20 to-transparent blur-2xl" />
      <div className="absolute -left-20 top-10 h-64 w-64 rounded-full bg-emerald-500/10 blur-3xl pointer-events-none" />
      <div className="absolute -right-20 bottom-10 h-64 w-64 rounded-full bg-teal-500/10 blur-3xl pointer-events-none" />
      <div className="absolute inset-0 noise opacity-[0.06] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <a href="#home" className="inline-flex items-center gap-2.5">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-500 text-white">
                <ShieldCheck className="h-5 w-5" />
              </span>
              <span className="font-heading text-xl font-semibold tracking-tight text-white">
                QASoft<span className="text-emerald-300">Labs</span>
              </span>
            </a>
            <p className="mt-5 text-sm text-emerald-100/70 max-w-md leading-relaxed">
              Quality Assurance, Automation Testing, Consulting and Engineering services — partnering with startups, growing businesses and enterprise organizations to deliver release confidence.
            </p>

            <div className="mt-6 flex items-center gap-2">
              <SocialIcon href="mailto:sanjay.businesstech@gmail.com" testid="footer-email" Icon={Mail} label="Email" />
              <SocialIcon href="https://wa.me/919925123492?text=Hi%20QASoftLabs%2C%20I'd%20like%20to%20discuss%20a%20QA%20engagement." testid="footer-whatsapp" Icon={MessageCircle} label="WhatsApp" />
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {cols.map((c) => (
              <div key={c.title}>
                <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-300">
                  {c.title}
                </div>
                <ul className="mt-4 space-y-2.5">
                  {c.links.map((l) => (
                    <li key={l.label}>
                      <a
                        href={l.href}
                        className="text-sm text-emerald-50/80 hover:text-white transition-colors"
                      >
                        {l.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-xs text-emerald-100/60">
            © {new Date().getFullYear()} QASoftLabs. Engineered for release confidence.
          </p>
          <p className="font-mono text-[11px] text-emerald-300/80">
            v1.0 · enterprise-qa-automation
          </p>
        </div>
      </div>
    </footer>
  );
};

const SocialIcon = ({ href, Icon, testid, label }) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer"
    data-testid={testid}
    aria-label={label}
    className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-emerald-100 hover:bg-emerald-500 hover:text-white hover:border-emerald-500 transition"
  >
    <Icon className="h-4 w-4" />
  </a>
);

export default Footer;
