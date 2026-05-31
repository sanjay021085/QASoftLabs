import React from "react";
import { motion } from "framer-motion";
import {
  ClipboardList, FileText, FilePlus2, Bug, Boxes, Code2, LayoutDashboard, BarChart3,
} from "lucide-react";
import { SectionHeader } from "@/components/site/Services";

const items = [
  { icon: ClipboardList, title: "Test Strategy", desc: "Defines coverage priorities, scope boundaries, environments and release-quality criteria." },
  { icon: FileText, title: "Test Plan", desc: "Schedules execution cycles, owners, entry/exit criteria and traceability to business goals." },
  { icon: FilePlus2, title: "Test Cases", desc: "Reusable functional, integration and regression scenarios mapped to product requirements." },
  { icon: Bug, title: "Defect Reports", desc: "Reproducible, prioritized defect records with severity, environment and impact analysis." },
  { icon: Boxes, title: "Automation Framework", desc: "Production-grade framework codebase with reporting, parallelism and CI integration patterns." },
  { icon: Code2, title: "Automation Scripts", desc: "Maintained UI, API and integration automation aligned to release pipelines." },
  { icon: LayoutDashboard, title: "QA Dashboard", desc: "Centralized visibility into run health, suite trends, environments and release readiness." },
  { icon: BarChart3, title: "Quality Metrics", desc: "Business-aligned metrics — defect leakage, coverage, stability and release confidence." },
];

const Deliverables = () => (
  <section id="deliverables" data-testid="deliverables-section" className="relative py-24 md:py-28 bg-white">
    <div className="absolute inset-x-0 top-0 divider-emerald" />
    <div className="absolute inset-0 bg-grid opacity-20 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_30%,#000_30%,transparent_80%)] pointer-events-none" />
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeader
        overline="Deliverables"
        title="Tangible artefacts handed over with every engagement"
        subtitle="Each engagement closes with documented, transferable assets — designed to be audit-ready, easy to maintain and useful long after the engagement ends."
      />

      <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {items.map((it, i) => {
          const Icon = it.icon;
          return (
            <motion.div
              key={it.title}
              data-testid={`deliverable-card-${it.title.toLowerCase().replace(/\s+/g, "-")}`}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: (i % 4) * 0.05 }}
              className="group rounded-2xl border border-emerald-100 bg-white p-5 hover:-translate-y-1 hover:border-emerald-300 hover:shadow-[0_24px_60px_-24px_rgba(16,185,129,0.4)] transition-all"
            >
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700 ring-1 ring-emerald-100 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-heading font-semibold text-base text-emerald-950">{it.title}</h3>
              <p className="mt-1.5 text-sm text-slate-600 leading-relaxed">{it.desc}</p>
            </motion.div>
          );
        })}
      </div>
    </div>
  </section>
);

export default Deliverables;
