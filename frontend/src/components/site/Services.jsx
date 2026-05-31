import React from "react";
import { motion } from "framer-motion";
import {
  CheckCircle2, Plug, MousePointerClick, Database, Workflow, RotateCcw, GitMerge, Rocket,
} from "lucide-react";

const services = [
  { icon: CheckCircle2, title: "Functional Testing", desc: "Validate business requirements and workflows against actual product behaviour — covering positive, negative and edge scenarios." },
  { icon: Plug, title: "API Testing", desc: "Request, response, security and integration validation across REST, GraphQL and gRPC services with schema-level assurance." },
  { icon: MousePointerClick, title: "UI Testing", desc: "Validate the user experience across web and application interfaces — interaction, navigation, accessibility and visual consistency." },
  { icon: Database, title: "Database Testing", desc: "Data integrity, backend validation, migration accuracy and consistency checks across application data layers." },
  { icon: Workflow, title: "Integration Testing", desc: "Verify system-to-system communication across services, queues, partners and third-party integration points." },
  { icon: RotateCcw, title: "Regression Testing", desc: "Ensure new changes do not break existing functionality through risk-prioritized regression cycles." },
  { icon: GitMerge, title: "End-to-End Testing", desc: "Validate complete business workflows across UI, API, data and integration layers from initiation to completion." },
  { icon: Rocket, title: "Release Validation", desc: "Final quality gate before production — smoke, sanity and release readiness checks wired into deployment pipelines." },
];

const Services = () => {
  return (
    <section id="services" data-testid="services-section" className="relative py-24 md:py-28 bg-gradient-to-b from-white via-emerald-50/50 to-white">
      <div className="absolute inset-x-0 top-0 divider-emerald" />
      <div className="absolute inset-0 bg-dotgrid opacity-20 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_40%,#000_30%,transparent_80%)] pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          overline="Services"
          title="Comprehensive testing services across every product layer"
          subtitle="A focused catalog of testing services covering functional, integration, data, regression and release validation — engineered to deliver verifiable quality outcomes."
        />

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.title}
                data-testid={`service-card-${s.title.toLowerCase().replace(/\s+/g, "-")}`}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.04 }}
                onMouseMove={(e) => {
                  const r = e.currentTarget.getBoundingClientRect();
                  e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
                  e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
                }}
                className="spotlight group relative overflow-hidden rounded-2xl border border-emerald-100/70 bg-white/85 backdrop-blur-sm p-5 hover:border-emerald-300 hover:bg-white hover:shadow-[0_28px_70px_-24px_rgba(16,185,129,0.45)] hover:-translate-y-1 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/0 via-emerald-50/0 to-emerald-100/0 group-hover:from-emerald-50/40 group-hover:to-transparent transition-all duration-500 pointer-events-none" />
                <div className="relative">
                  <div className="inline-flex items-center justify-center h-11 w-11 rounded-xl bg-emerald-50 text-emerald-700 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 font-heading text-base md:text-lg font-semibold text-emerald-950">
                    {s.title}
                  </h3>
                  <p className="mt-1.5 text-sm text-slate-600 leading-relaxed">{s.desc}</p>
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
      <div className="inline-flex items-center gap-2">
        <span className="h-px w-6 bg-emerald-500" />
        <span className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-600">{overline}</span>
        <span className="h-px w-6 bg-emerald-500" />
      </div>
    )}
    <h2 className="mt-4 font-heading text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-emerald-950 text-balance">
      {title}
    </h2>
    {subtitle && <p className="mt-4 text-base text-slate-600 leading-relaxed">{subtitle}</p>}
  </div>
);

export default Services;
