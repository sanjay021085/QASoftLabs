import React from "react";
import { motion } from "framer-motion";
import { MousePointerClick, Plug, Sparkles, ShieldAlert, RotateCcw } from "lucide-react";
import { SectionHeader } from "@/components/site/Services";

const services = [
  {
    icon: MousePointerClick,
    title: "UI Automation",
    desc: "Engineered browser automation across web applications — stable selectors, smart waits and parallel execution wired into release pipelines.",
  },
  {
    icon: Plug,
    title: "API Automation",
    desc: "Contract-aware API automation covering request validation, response schemas, integration paths and security checks at scale.",
  },
  {
    icon: Sparkles,
    title: "AI Assisted Test Design",
    desc: "Apply AI to accelerate test case generation, scenario coverage analysis and validation logic — guided by experienced QA review.",
  },
  {
    icon: ShieldAlert,
    title: "AI Assisted Defect Analysis",
    desc: "Use AI to triage logs, cluster failures and surface root-cause patterns faster — reducing turnaround on production-impacting issues.",
  },
  {
    icon: RotateCcw,
    title: "AI Assisted Regression Analysis",
    desc: "Risk-based selection of regression scenarios using historical failure patterns and change-impact analysis to keep suites lean and meaningful.",
  },
];

const AutomationEngineering = () => (
  <section id="automation-engineering" data-testid="automation-engineering-section" className="relative py-24 md:py-28 bg-gradient-to-b from-white via-emerald-50/60 to-white">
    <div className="absolute inset-x-0 top-0 divider-emerald" />
    <div className="absolute inset-0 bg-dotgrid opacity-20 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_30%,#000_30%,transparent_80%)] pointer-events-none" />
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeader
        overline="Automation Engineering"
        title="Practical automation that ships with your releases"
        subtitle="Automation engineering grounded in real product workflows — building reliable suites, integrating them into CI/CD and applying AI where it produces verifiable QA outcomes."
      />

      <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {services.map((s, i) => {
          const Icon = s.icon;
          return (
            <motion.div
              key={s.title}
              data-testid={`automation-card-${s.title.toLowerCase().replace(/\s+/g, "-")}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              className="group relative rounded-2xl border border-emerald-100 bg-white p-6 hover:-translate-y-1 hover:border-emerald-300 hover:shadow-[0_24px_60px_-24px_rgba(16,185,129,0.45)] transition-all overflow-hidden"
            >
              <div className="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-emerald-100/40 blur-2xl group-hover:bg-emerald-200/60 transition-colors" />
              <div className="relative">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700 ring-1 ring-emerald-100 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-heading font-semibold text-lg text-emerald-950">{s.title}</h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">{s.desc}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  </section>
);

export default AutomationEngineering;
