import React from "react";
import { motion } from "framer-motion";
import { Compass, ClipboardCheck, LayoutGrid, TrendingUp, Map, ArrowUpRight } from "lucide-react";
import { openConsultation } from "@/lib/events";

const offerings = [
  {
    icon: Compass,
    title: "Testing Strategy",
    desc: "A clear, prioritized testing approach mapped to product risk, release cadence, and business objectives.",
  },
  {
    icon: ClipboardCheck,
    title: "QA Assessment",
    desc: "Independent evaluation of current QA maturity, gaps, and the practical steps to elevate it.",
  },
  {
    icon: LayoutGrid,
    title: "Test Architecture Design",
    desc: "Layered architecture for test data, environments, tooling, and reporting that scales with your delivery model.",
  },
  {
    icon: TrendingUp,
    title: "Quality Improvement Consulting",
    desc: "Targeted interventions that reduce defect leakage and improve predictability across releases.",
  },
  {
    icon: Map,
    title: "Automation Roadmap Planning",
    desc: "A phased automation plan covering tooling, coverage priorities, ROI, and adoption milestones.",
  },
];

const QAConsulting = () => (
  <section
    id="qa-consulting"
    data-testid="qa-consulting-section"
    className="relative py-24 md:py-32 section-tint"
  >
    <div className="absolute inset-x-0 top-0 divider-emerald" />
    <div className="absolute inset-0 bg-mesh opacity-25 pointer-events-none" />

    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
        {/* Left: sticky headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-5 lg:sticky lg:top-28"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-200 bg-emerald-50/70 text-emerald-700 text-[11px] font-bold tracking-[0.22em]">
            QA CONSULTING
          </div>
          <h2 className="mt-6 font-heading text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-emerald-950 text-balance leading-[1.05]">
            Practical advisory that{" "}
            <span className="bg-gradient-to-r from-emerald-500 to-emerald-700 bg-clip-text text-transparent">
              moves quality forward
            </span>
          </h2>
          <p className="mt-5 text-base md:text-lg text-slate-600 leading-relaxed max-w-md">
            Consulting engagements grounded in delivery experience — focused on outcomes, not
            frameworks-for-frameworks-sake.
          </p>

          <button
            onClick={openConsultation}
            data-testid="consulting-cta"
            className="mt-8 inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-emerald-600 text-white text-sm font-bold hover:bg-emerald-700 transition shadow-md shadow-emerald-500/20 hover:-translate-y-0.5"
          >
            Book Free Consultation <ArrowUpRight className="h-4 w-4" />
          </button>
        </motion.div>

        {/* Right: numbered cards */}
        <div className="lg:col-span-7 space-y-4">
          {offerings.map((o, i) => {
            const Icon = o.icon;
            return (
              <motion.div
                key={o.title}
                data-testid={`consulting-card-${o.title.toLowerCase().replace(/\s+/g, "-")}`}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: i * 0.06 }}
                className="card-hover group relative rounded-2xl border border-emerald-100 bg-white p-6 md:p-7 hover:border-emerald-300 hover:shadow-[0_24px_60px_-24px_rgba(16,185,129,0.35)]"
              >
                <div className="flex items-start gap-5">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700 ring-1 ring-emerald-200 shrink-0">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-baseline gap-3">
                      <span className="font-mono text-xs font-bold text-emerald-500">
                        0{i + 1}
                      </span>
                      <h3 className="font-heading text-lg md:text-xl font-bold text-emerald-950">
                        {o.title}
                      </h3>
                    </div>
                    <p className="mt-2 text-sm md:text-base text-slate-600 leading-relaxed">
                      {o.desc}
                    </p>
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

export default QAConsulting;
