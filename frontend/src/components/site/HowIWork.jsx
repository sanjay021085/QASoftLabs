import React from "react";
import { motion } from "framer-motion";
import {
  Search, Compass, ClipboardList, FileCog, Play, BarChart3, ShieldCheck, RefreshCw,
} from "lucide-react";
import { SectionHeader } from "@/components/site/Services";

const steps = [
  { icon: Search, title: "Requirement Analysis", desc: "Capture business intent, product behaviour and quality risks across the release scope." },
  { icon: Compass, title: "Testing Strategy", desc: "Define a fit-for-purpose testing approach covering scope, environments, automation share and ownership." },
  { icon: ClipboardList, title: "Test Planning", desc: "Translate strategy into schedules, entry/exit criteria and traceable coverage commitments." },
  { icon: FileCog, title: "Test Design", desc: "Author functional, integration and regression scenarios with reusable data and validation hooks." },
  { icon: Play, title: "Execution", desc: "Run manual and automated cycles with environment isolation, parallelism and observable outcomes." },
  { icon: BarChart3, title: "Reporting", desc: "Communicate run health, defect trends and release readiness through clear, decision-grade reports." },
  { icon: ShieldCheck, title: "Release Validation", desc: "Final quality gate confirming readiness to ship — smoke, sanity and acceptance criteria validated." },
  { icon: RefreshCw, title: "Continuous Improvement", desc: "Retrospective tuning of suites, coverage and processes based on defect data and release outcomes." },
];

const HowIWork = () => (
  <section id="process" data-testid="process-section" className="relative py-24 md:py-28 bg-white">
    <div className="absolute inset-0 bg-grid opacity-20 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_30%,#000_30%,transparent_80%)] pointer-events-none" />
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeader
        overline="Our Process"
        title="A disciplined delivery loop, repeated every release"
        subtitle="Eight predictable stages that translate business intent into traceable test coverage, controlled execution and audit-ready release validation."
      />

      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((s, i) => {
          const Icon = s.icon;
          return (
            <motion.div
              key={s.title}
              data-testid={`process-step-${i + 1}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.45, delay: (i % 4) * 0.06 }}
              className="relative group rounded-2xl border border-emerald-100 bg-white p-6 hover:border-emerald-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_-20px_rgba(16,185,129,0.4)] transition-all"
            >
              <div className="flex items-start justify-between">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-700 text-white shadow-md shadow-emerald-500/30">
                  <Icon className="h-5 w-5" />
                </div>
                <span className="font-mono text-[11px] text-emerald-600">0{i + 1}</span>
              </div>
              <h3 className="mt-4 font-heading text-base font-semibold text-emerald-950">{s.title}</h3>
              <p className="mt-1.5 text-sm text-slate-600 leading-relaxed">{s.desc}</p>
            </motion.div>
          );
        })}
      </div>
    </div>
  </section>
);

export default HowIWork;
