import React from "react";
import { motion } from "framer-motion";
import { Boxes, ScanSearch, Wrench, Recycle, MousePointerClick, Plug, Combine } from "lucide-react";
import { SectionHeader } from "@/components/site/Services";

const offerings = [
  {
    icon: Boxes,
    title: "Framework Design",
    desc: "Build automation frameworks from the ground up — modular architecture, reporting, observability and CI-native execution by design.",
  },
  {
    icon: ScanSearch,
    title: "Framework Review",
    desc: "Independent assessment of existing frameworks — measuring scalability, maintainability, reliability and readiness for future automation goals.",
  },
  {
    icon: Wrench,
    title: "Framework Enhancement",
    desc: "Targeted improvements to current frameworks — parallel execution, environment configuration, reporting upgrades and stability fixes.",
  },
  {
    icon: Recycle,
    title: "Framework Re-Engineering",
    desc: "Redesign poorly structured or outdated automation frameworks into clean, scalable engineering platforms aligned with current delivery practices.",
  },
];

const types = [
  { icon: MousePointerClick, title: "UI Automation Framework", desc: "Browser-centric framework for web application validation with stable selectors and parallel execution." },
  { icon: Plug, title: "API Automation Framework", desc: "Contract-first framework covering REST, GraphQL and gRPC with schema and security validation." },
  { icon: Combine, title: "Hybrid Framework", desc: "Unified UI + API framework supporting cross-layer scenarios, shared utilities and consolidated reporting." },
];

const FrameworkEngineering = () => (
  <section id="frameworks" data-testid="framework-engineering-section" className="relative py-24 md:py-28 bg-gradient-to-b from-white via-emerald-50/60 to-white">
    <div className="absolute inset-x-0 top-0 divider-emerald" />
    <div className="absolute inset-0 bg-dotgrid opacity-20 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_30%,#000_30%,transparent_80%)] pointer-events-none" />
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeader
        overline="Framework Engineering"
        title="Automation frameworks engineered like production software"
        subtitle="Design, review, enhance or re-engineer automation frameworks so they scale with your product, integrate cleanly with delivery pipelines and remain easy to maintain over time."
      />

      <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-5">
        {offerings.map((o, i) => {
          const Icon = o.icon;
          return (
            <motion.div
              key={o.title}
              data-testid={`framework-card-${o.title.toLowerCase().replace(/\s+/g, "-")}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              className="group relative rounded-2xl border border-emerald-100 bg-white p-6 md:p-7 hover:-translate-y-1 hover:border-emerald-300 hover:shadow-[0_24px_60px_-24px_rgba(16,185,129,0.4)] transition-all"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-700 text-white shadow-md shadow-emerald-500/30">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-heading font-semibold text-xl text-emerald-950">{o.title}</h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">{o.desc}</p>
            </motion.div>
          );
        })}
      </div>

      <div className="mt-12">
        <div className="text-center">
          <div className="inline-flex items-center gap-2">
            <span className="h-px w-6 bg-emerald-500" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-600">Supported Framework Types</span>
            <span className="h-px w-6 bg-emerald-500" />
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-5">
          {types.map((t, i) => {
            const Icon = t.icon;
            return (
              <motion.div
                key={t.title}
                data-testid={`framework-type-${t.title.toLowerCase().replace(/\s+/g, "-")}`}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="rounded-2xl border border-emerald-100 bg-white/85 backdrop-blur p-5 hover:border-emerald-300 transition-all"
              >
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700">
                  <Icon className="h-5 w-5" />
                </div>
                <div className="mt-3 font-heading font-semibold text-base text-emerald-950">{t.title}</div>
                <div className="mt-1.5 text-sm text-slate-600 leading-relaxed">{t.desc}</div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  </section>
);

export default FrameworkEngineering;
