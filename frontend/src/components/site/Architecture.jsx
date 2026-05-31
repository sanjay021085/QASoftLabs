import React from "react";
import { motion } from "framer-motion";
import { Target, Layers3, Crosshair, Cog } from "lucide-react";
import { SectionHeader } from "@/components/site/Services";

const pillars = [
  {
    icon: Target,
    title: "Testing Targets",
    accent: "Validate the surfaces",
    items: ["UI Testing", "API Testing", "Database Testing", "Integration Testing"],
  },
  {
    icon: Layers3,
    title: "Testing Levels",
    accent: "Validate the layers",
    items: ["Unit Testing", "Component Testing", "System Testing", "E2E Testing", "User Acceptance Testing"],
  },
  {
    icon: Crosshair,
    title: "Testing Objectives",
    accent: "Validate the intent",
    items: [
      "Smoke Testing",
      "Sanity Testing",
      "Regression Testing",
      "Retesting",
      "Exploratory Testing",
      "Negative Testing",
      "Boundary Validation",
      "Workflow Validation",
      "Business Rule Validation",
      "Data Validation",
      "Session Validation",
      "Authorization Validation",
      "Compatibility Validation",
      "Recovery Validation",
    ],
  },
  {
    icon: Cog,
    title: "Execution Approach",
    accent: "Validate the method",
    items: ["Manual Testing", "Automation Testing"],
  },
];

const Architecture = () => {
  return (
    <section id="architecture" data-testid="architecture-section" className="relative py-24 md:py-32 bg-gradient-to-b from-white via-emerald-50/40 to-white">
      {/* Decorative grid */}
      <div className="absolute inset-x-0 top-0 divider-emerald" />
      <div className="absolute inset-0 bg-grid opacity-25 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_30%,#000_30%,transparent_80%)] pointer-events-none" />
      <div className="absolute inset-0 bg-mesh opacity-30 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          overline="Architecture"
          title="Functional Testing Architecture"
          subtitle="A structured testing system that maps targets, levels, objectives and execution into a single, auditable engineering blueprint."
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
          {pillars.map((p, idx) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={p.title}
                data-testid={`arch-pillar-${p.title.toLowerCase().replace(/\s+/g, "-")}`}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="group relative rounded-3xl border border-emerald-100 bg-white p-7 md:p-9 overflow-hidden hover:shadow-[0_30px_80px_-30px_rgba(16,185,129,0.35)] transition-all"
              >
                <div className="absolute top-0 right-0 h-40 w-40 bg-gradient-to-br from-emerald-200/40 to-transparent rounded-full blur-3xl -translate-y-12 translate-x-12 pointer-events-none" />

                <div className="relative flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-700 text-white shadow-md shadow-emerald-500/30">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-600">
                        Pillar 0{idx + 1}
                      </div>
                      <h3 className="font-heading text-xl md:text-2xl font-semibold text-emerald-950 mt-0.5">
                        {p.title}
                      </h3>
                    </div>
                  </div>
                </div>

                <p className="relative mt-4 text-sm text-slate-500 italic">— {p.accent}</p>

                <div className="relative mt-6 flex flex-wrap gap-2">
                  {p.items.map((it) => (
                    <span
                      key={it}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-100 text-xs font-medium text-emerald-800 hover:bg-emerald-100 transition-colors"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                      {it}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Process strip — rope connector */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-14 rounded-3xl border border-emerald-100 bg-gradient-to-r from-emerald-50/70 via-white to-emerald-50/70 p-6 md:p-10 relative overflow-hidden"
        >
          {/* SVG rope connecting the 5 phases (desktop) */}
          <svg
            aria-hidden
            className="hidden md:block absolute inset-x-10 top-[58%] -translate-y-1/2 w-[calc(100%-5rem)] h-10 pointer-events-none"
            viewBox="0 0 1000 40"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="ropeGrad" x1="0" x2="1" y1="0" y2="0">
                <stop offset="0%" stopColor="#10B981" stopOpacity="0.15" />
                <stop offset="50%" stopColor="#10B981" stopOpacity="0.75" />
                <stop offset="100%" stopColor="#10B981" stopOpacity="0.15" />
              </linearGradient>
            </defs>
            <path
              d="M 0,20 C 120,-8 260,48 380,20 S 620,-8 760,20 880,48 1000,20"
              fill="none"
              stroke="#A7F3D0"
              strokeWidth="3"
              strokeLinecap="round"
            />
            <path
              d="M 0,20 C 120,-8 260,48 380,20 S 620,-8 760,20 880,48 1000,20"
              fill="none"
              stroke="url(#ropeGrad)"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeDasharray="6 8"
              className="animate-dash"
            />
          </svg>

          <div className="relative grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-2">
            {["Discover", "Design", "Automate", "Integrate", "Validate"].map((step, i) => (
              <div key={step} className="flex flex-col items-center text-center group">
                <span className="relative inline-flex h-12 w-12 items-center justify-center rounded-full bg-white border border-emerald-200 text-emerald-700 font-heading text-sm font-semibold shadow-[0_8px_24px_-12px_rgba(16,185,129,0.5)] group-hover:bg-emerald-600 group-hover:text-white group-hover:border-emerald-600 transition-colors z-10">
                  <span className="absolute inset-0 rounded-full ring-1 ring-emerald-100 group-hover:ring-emerald-300/60" />
                  0{i + 1}
                </span>
                <div className="mt-3 text-sm font-semibold text-emerald-950">{step}</div>
                <div className="text-[10px] text-emerald-600 font-mono uppercase tracking-[0.18em] mt-0.5">phase</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Architecture;
