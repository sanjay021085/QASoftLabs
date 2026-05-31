import React from "react";
import { motion } from "framer-motion";
import { FileText, ClipboardList, ListChecks, Bug, Boxes, Code2, LayoutGrid, BarChart3 } from "lucide-react";

const items = [
  { icon: FileText, title: "Test Strategy", desc: "A documented approach to scope, risk, and quality objectives." },
  { icon: ClipboardList, title: "Test Plan", desc: "Schedule, ownership, environments, and exit criteria." },
  { icon: ListChecks, title: "Test Cases", desc: "Structured manual and automated scenario coverage." },
  { icon: Bug, title: "Defect Reports", desc: "Reproducible, actionable defects with priority and impact." },
  { icon: Boxes, title: "Automation Framework", desc: "Maintainable framework asset owned by your engineering team." },
  { icon: Code2, title: "Automation Scripts", desc: "Reliable suites integrated with your CI/CD pipeline." },
  { icon: LayoutGrid, title: "QA Dashboard", desc: "Live visibility into coverage, execution, and defect trends." },
  { icon: BarChart3, title: "Quality Metrics", desc: "Meaningful indicators that inform release decisions." },
];

const Deliverables = () => (
  <section
    id="deliverables"
    data-testid="deliverables-section"
    className="relative py-24 md:py-32 section-tint"
  >
    <div className="absolute inset-x-0 top-0 divider-emerald" />
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
          DELIVERABLES
        </div>
        <h2 className="mt-6 font-heading text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-emerald-950 text-balance leading-[1.05]">
          Tangible outputs that{" "}
          <span className="bg-gradient-to-r from-emerald-500 to-emerald-700 bg-clip-text text-transparent">
            your team can own
          </span>
        </h2>
        <p className="mt-5 text-base md:text-lg text-slate-600 leading-relaxed max-w-2xl">
          Every engagement leaves behind durable QA assets — not just a service report.
        </p>
      </motion.div>

      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {items.map((it, i) => {
          const Icon = it.icon;
          return (
            <motion.div
              key={it.title}
              data-testid={`deliverable-card-${it.title.toLowerCase().replace(/\s+/g, "-")}`}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.45, delay: (i % 4) * 0.05 }}
              className="group relative rounded-3xl border border-emerald-100 bg-white p-7 hover:-translate-y-1.5 hover:shadow-[0_24px_60px_-20px_rgba(16,185,129,0.4)] transition-all overflow-hidden"
            >
              <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-emerald-50/50 to-transparent pointer-events-none" />
              <div className="relative">
                <Icon className="h-7 w-7 text-emerald-500" />
                <h3 className="mt-8 font-heading text-lg font-bold text-emerald-950">{it.title}</h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">{it.desc}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  </section>
);

export default Deliverables;
