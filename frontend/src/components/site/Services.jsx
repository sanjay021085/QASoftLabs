import React from "react";
import { motion } from "framer-motion";
import {
  CheckCircle2, Plug, MousePointerClick, Database, Workflow, RotateCcw, GitMerge, Rocket,
} from "lucide-react";

const services = [
  { icon: CheckCircle2, title: "Functional Testing", desc: "Validate business requirements and workflows so each release behaves the way stakeholders expect." },
  { icon: Plug, title: "API Testing", desc: "Request, response, security, and integration validation across REST and service layers." },
  { icon: MousePointerClick, title: "UI Testing", desc: "Cross-browser web and application user experience verification under realistic conditions." },
  { icon: Database, title: "Database Testing", desc: "Data integrity, state transitions, and backend validation across persistence layers." },
  { icon: Workflow, title: "Integration Testing", desc: "System-to-system communication verification across services, queues, and third parties." },
  { icon: RotateCcw, title: "Regression Testing", desc: "Protect existing functionality as the product evolves through every sprint and release." },
  { icon: GitMerge, title: "End-to-End Testing", desc: "Validate complete business workflows across components, environments, and personas." },
  { icon: Rocket, title: "Release Validation", desc: "A structured final quality gate before production deployment and customer rollout." },
];

const Services = () => {
  return (
    <section id="services" data-testid="services-section" className="relative py-24 md:py-32 bg-gradient-to-b from-white via-emerald-50/40 to-white">
      <div className="absolute inset-x-0 top-0 divider-emerald" />
      <div className="absolute inset-0 bg-dotgrid opacity-20 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_40%,#000_30%,transparent_80%)] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-200 bg-emerald-50/70 text-emerald-700 text-[11px] font-bold tracking-[0.22em]">
            TESTING SERVICES
          </div>
          <h2 className="mt-6 font-heading text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-emerald-950 text-balance leading-[1.05]">
            A complete testing practice, built for{" "}
            <span className="bg-gradient-to-r from-emerald-500 to-emerald-700 bg-clip-text text-transparent">release confidence</span>
          </h2>
          <p className="mt-5 text-base md:text-lg text-slate-600 leading-relaxed max-w-2xl">
            Structured testing across every layer of the product — from unit and API to full user
            journeys — delivered by experienced QA engineers.
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.title}
                data-testid={`service-card-${s.title.toLowerCase().replace(/\s+/g, "-")}`}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: (i % 4) * 0.05 }}
                onMouseMove={(e) => {
                  const r = e.currentTarget.getBoundingClientRect();
                  e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
                  e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
                }}
                className="spotlight group relative overflow-hidden rounded-3xl border border-emerald-100 bg-white p-7 hover:border-emerald-300 hover:shadow-[0_28px_70px_-24px_rgba(16,185,129,0.45)] hover:-translate-y-1.5 transition-all duration-300"
              >
                <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-emerald-50/60 to-transparent pointer-events-none" />
                <div className="relative">
                  <div className="inline-flex items-center justify-center h-12 w-12 rounded-2xl bg-emerald-900 text-emerald-300 group-hover:bg-emerald-700 transition-colors shadow-md shadow-emerald-900/20">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-7 font-heading text-lg font-bold text-emerald-950">
                    {s.title}
                  </h3>
                  <p className="mt-3 text-sm text-slate-600 leading-relaxed">{s.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export const SectionHeader = ({ overline, title, subtitle, center = true }) => (
  <div className={`max-w-3xl ${center ? "mx-auto text-center" : ""}`}>
    {overline && (
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-200 bg-emerald-50/70 text-emerald-700 text-[11px] font-bold tracking-[0.22em]">
        {overline.toUpperCase()}
      </div>
    )}
    <h2 className="mt-6 font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-emerald-950 text-balance leading-[1.05]">
      {title}
    </h2>
    {subtitle && <p className="mt-4 text-base text-slate-600 leading-relaxed">{subtitle}</p>}
  </div>
);

export default Services;
