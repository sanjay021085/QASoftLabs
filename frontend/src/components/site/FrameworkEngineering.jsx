import React from "react";
import { motion } from "framer-motion";
import { Hammer, Wrench, RefreshCw, Monitor, Plug, Combine } from "lucide-react";

const offerings = [
  {
    icon: Hammer,
    title: "Framework Design",
    desc: "Build automation frameworks from scratch — architected for scale, readability, and team adoption.",
  },
  {
    icon: Wrench,
    title: "Framework Enhancement",
    desc: "Targeted improvements to scalability, reporting, parallelism, and test data handling.",
  },
  {
    icon: RefreshCw,
    title: "Framework Re-Engineering",
    desc: "Restructure poorly designed automation suites into a stable, maintainable foundation.",
  },
];

const types = [
  {
    icon: Monitor,
    title: "UI Automation Framework",
    desc: "Page-object or component-based architectures across modern web and desktop applications.",
  },
  {
    icon: Plug,
    title: "API Automation Framework",
    desc: "Layered service automation with contract validation, data factories, and CI integration.",
  },
  {
    icon: Combine,
    title: "Hybrid Framework",
    desc: "Unified UI + API + data orchestration for end-to-end business workflow automation.",
  },
];

const FrameworkEngineering = () => (
  <section
    id="frameworks"
    data-testid="framework-engineering-section"
    className="relative py-24 md:py-32 bg-gradient-to-b from-emerald-50/40 via-white to-emerald-50/30"
  >
    <div className="absolute inset-0 bg-dotgrid opacity-20 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_30%,#000_30%,transparent_80%)] pointer-events-none" />

    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl"
      >
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-200 bg-emerald-50/70 text-emerald-700 text-[11px] font-bold tracking-[0.22em]">
          FRAMEWORK ENGINEERING
        </div>
        <h2 className="mt-6 font-heading text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-emerald-950 text-balance leading-[1.05]">
          Automation frameworks{" "}
          <span className="bg-gradient-to-r from-emerald-500 to-emerald-700 bg-clip-text text-transparent">
            engineered to last
          </span>
        </h2>
        <p className="mt-5 text-base md:text-lg text-slate-600 leading-relaxed max-w-2xl">
          A framework is a long-term asset. We design, review, and modernize automation
          foundations so they remain reliable as teams, tooling, and products evolve.
        </p>
      </motion.div>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-5">
        {offerings.map((o, i) => {
          const Icon = o.icon;
          return (
            <motion.div
              key={o.title}
              data-testid={`framework-card-${o.title.toLowerCase().replace(/\s+/g, "-")}`}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="card-hover group relative rounded-3xl border border-emerald-100 bg-white p-7 md:p-8 hover:shadow-[0_28px_70px_-24px_rgba(16,185,129,0.4)] hover:border-emerald-300"
            >
              <div className="inline-flex items-center justify-center h-12 w-12 rounded-2xl bg-emerald-900 text-emerald-300 shadow-md shadow-emerald-900/30">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-7 font-heading text-xl font-bold text-emerald-950">{o.title}</h3>
              <p className="mt-3 text-sm md:text-base text-slate-600 leading-relaxed">{o.desc}</p>
            </motion.div>
          );
        })}
      </div>

      <div className="mt-20">
        <div className="text-[11px] font-bold tracking-[0.22em] text-emerald-600">
          SUPPORTED FRAMEWORK TYPES
        </div>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-5">
          {types.map((t, i) => {
            const Icon = t.icon;
            return (
              <motion.div
                key={t.title}
                data-testid={`framework-type-${t.title.toLowerCase().replace(/\s+/g, "-")}`}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="rounded-2xl border border-emerald-100 bg-white/90 backdrop-blur p-6 hover:border-emerald-300 transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-300 to-emerald-500 text-emerald-950 shadow-md shadow-emerald-500/30 shrink-0">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-heading text-base font-bold text-emerald-950">{t.title}</h4>
                    <p className="mt-1.5 text-sm text-slate-600 leading-relaxed">{t.desc}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  </section>
);

export default FrameworkEngineering;
