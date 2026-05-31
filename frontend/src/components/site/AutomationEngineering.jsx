import React from "react";
import { motion } from "framer-motion";
import { MousePointerClick, Plug, Activity, BrainCircuit } from "lucide-react";

const services = [
  {
    icon: MousePointerClick,
    title: "UI Automation",
    desc: "Reliable, maintainable web and application automation with strong locator strategy and stable execution.",
  },
  {
    icon: Plug,
    title: "API Automation",
    desc: "Service-level automation suites covering contract, behavior, security, and performance checkpoints.",
  },
  {
    icon: Activity,
    title: "CI/CD Integrated Automation",
    desc: "Automation suites wired into your build pipeline with meaningful failure signals and parallel execution.",
  },
  {
    icon: BrainCircuit,
    title: "AI Assisted QA",
    desc: "Targeted use of AI for test authoring, defect triage, and regression risk analysis where it produces real outcomes.",
  },
];

const AutomationEngineering = () => (
  <section
    id="automation-engineering"
    data-testid="automation-engineering-section"
    className="relative py-24 md:py-32 bg-emerald-950 text-white overflow-hidden"
  >
    {/* Grid + glow */}
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute inset-0 [background-image:linear-gradient(rgba(16,185,129,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.07)_1px,transparent_1px)] [background-size:48px_48px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_30%,#000_30%,transparent_80%)]" />
      <div className="absolute top-10 left-1/2 -translate-x-1/2 h-[420px] w-[700px] rounded-full bg-emerald-500/10 blur-[140px]" />
      <div className="absolute -top-24 -left-20 h-72 w-72 rounded-full bg-emerald-500/15 blur-3xl" />
      <div className="absolute bottom-10 -right-24 h-80 w-80 rounded-full bg-teal-500/10 blur-3xl" />
    </div>

    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl"
      >
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-900/40 backdrop-blur text-emerald-200 text-[11px] font-bold tracking-[0.22em]">
          AUTOMATION ENGINEERING
        </div>
        <h2 className="mt-6 font-heading text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-balance leading-[1.05]">
          <span className="text-white">Engineering test velocity that </span>
          <span className="bg-gradient-to-r from-emerald-300 via-emerald-400 to-teal-300 bg-clip-text text-transparent">
            holds up in production
          </span>
        </h2>
        <p className="mt-5 text-base md:text-lg text-emerald-100/75 leading-relaxed max-w-2xl">
          We build automation that engineering teams trust — stable suites, meaningful failures,
          and measurable coverage. AI is applied where it produces real QA outcomes, not as a
          marketing layer.
        </p>
      </motion.div>

      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {services.map((s, i) => {
          const Icon = s.icon;
          return (
            <motion.div
              key={s.title}
              data-testid={`automation-card-${s.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")}`}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="card-hover group relative rounded-3xl border border-emerald-500/20 bg-emerald-900/30 backdrop-blur-sm p-7 hover:border-emerald-400/40 hover:bg-emerald-900/50 overflow-hidden"
            >
              <div className="absolute -top-16 -right-16 h-40 w-40 rounded-full bg-emerald-500/10 blur-3xl group-hover:bg-emerald-500/20 transition-colors pointer-events-none" />
              <div className="relative">
                <div className="inline-flex items-center justify-center h-12 w-12 rounded-2xl bg-gradient-to-br from-emerald-300 to-emerald-500 text-emerald-950 shadow-[0_12px_28px_-8px_rgba(16,185,129,0.6)]">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-7 font-heading text-lg font-bold text-white">{s.title}</h3>
                <p className="mt-3 text-sm text-emerald-100/70 leading-relaxed">{s.desc}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  </section>
);

export default AutomationEngineering;
