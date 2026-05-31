import React from "react";
import { motion } from "framer-motion";

const steps = [
  { title: "Requirement Analysis", desc: "Understand product context, risk areas, and acceptance expectations." },
  { title: "Testing Strategy", desc: "Define scope, approach, environments, data, and exit criteria." },
  { title: "Test Planning", desc: "Schedule, resourcing, traceability, and governance setup." },
  { title: "Test Design", desc: "Scenario authoring, data design, and automation candidate selection." },
  { title: "Execution", desc: "Disciplined manual and automated execution with clear evidence." },
  { title: "Reporting", desc: "Actionable defect reports and quality signals for engineering and stakeholders." },
  { title: "Release Validation", desc: "Final readiness review and go/no-go quality assessment." },
  { title: "Continuous Improvement", desc: "Retrospective insights converted into measurable QA improvements." },
];

const HowIWork = () => (
  <section
    id="process"
    data-testid="process-section"
    className="relative py-24 md:py-32 section-tint"
  >
    <div className="absolute inset-x-0 top-0 divider-emerald" />
    <div className="absolute inset-0 bg-grid opacity-[0.18] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_30%,#000_30%,transparent_80%)] pointer-events-none" />

    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl"
      >
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-200 bg-emerald-50/70 text-emerald-700 text-[11px] font-bold tracking-[0.22em]">
          DELIVERY PROCESS
        </div>
        <h2 className="mt-6 font-heading text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-emerald-950 text-balance leading-[1.05]">
          A structured path from{" "}
          <span className="bg-gradient-to-r from-emerald-500 to-emerald-700 bg-clip-text text-transparent">
            requirement to release
          </span>
        </h2>
        <p className="mt-5 text-base md:text-lg text-slate-600 leading-relaxed max-w-2xl">
          A repeatable engagement model that brings discipline, transparency, and predictable
          outcomes to every QA initiative.
        </p>
      </motion.div>

      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {steps.map((s, i) => (
          <motion.div
            key={s.title}
            data-testid={`process-step-${i + 1}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.45, delay: (i % 4) * 0.05 }}
            className="card-hover group relative rounded-3xl border border-emerald-100 bg-white p-7 hover:shadow-[0_24px_60px_-20px_rgba(16,185,129,0.4)] hover:border-emerald-300 overflow-hidden"
          >
            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-emerald-50/60 to-transparent pointer-events-none" />
            <div className="relative">
              <span className="font-mono text-sm font-bold text-emerald-500">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-7 font-heading text-lg font-bold text-emerald-950">{s.title}</h3>
              <p className="mt-3 text-sm text-slate-600 leading-relaxed">{s.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default HowIWork;
