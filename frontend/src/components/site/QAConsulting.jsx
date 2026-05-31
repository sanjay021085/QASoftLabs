import React from "react";
import { motion } from "framer-motion";
import { Compass, ClipboardCheck, Layers3, TrendingUp, Map, ArrowUpRight } from "lucide-react";
import { SectionHeader } from "@/components/site/Services";
import { openConsultation } from "@/lib/events";

const offerings = [
  {
    icon: Compass,
    title: "Testing Strategy",
    desc: "Define a release-aligned testing strategy that balances coverage, risk and delivery velocity — including environments, tooling and ownership.",
  },
  {
    icon: ClipboardCheck,
    title: "QA Assessment",
    desc: "An evidence-based review of current QA practices, test assets, automation health and release outcomes — with a prioritized improvement plan.",
  },
  {
    icon: Layers3,
    title: "Test Architecture Design",
    desc: "Design a structured architecture covering targets, levels, objectives and execution layers — auditable, scalable and engineering-friendly.",
  },
  {
    icon: TrendingUp,
    title: "Quality Improvement Consulting",
    desc: "Operating-level guidance to lift defect prevention, shift-left validation, regression confidence and overall release quality metrics.",
  },
  {
    icon: Map,
    title: "Automation Roadmap Planning",
    desc: "A phased automation roadmap mapped to business goals — covering tool selection, framework choices, CI integration and team enablement.",
  },
];

const QAConsulting = () => (
  <section id="qa-consulting" data-testid="qa-consulting-section" className="relative py-24 md:py-28 section-tint">
    <div className="absolute inset-x-0 top-0 divider-emerald" />
    <div className="absolute inset-0 bg-mesh opacity-30 pointer-events-none" />
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeader
        overline="QA Consulting Services"
        title="Strategic guidance that translates into measurable quality outcomes"
        subtitle="Independent consulting across testing strategy, QA assessments, architecture design and automation planning — focused on practical, engineering-grade decisions rather than slideware."
      />

      <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {offerings.map((o, i) => {
          const Icon = o.icon;
          return (
            <motion.div
              key={o.title}
              data-testid={`consulting-card-${o.title.toLowerCase().replace(/\s+/g, "-")}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              className="group relative rounded-2xl border border-emerald-100 bg-white p-6 hover:-translate-y-1 hover:border-emerald-300 hover:shadow-[0_24px_60px_-24px_rgba(16,185,129,0.4)] transition-all"
            >
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700 ring-1 ring-emerald-100 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-heading font-semibold text-lg text-emerald-950">{o.title}</h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">{o.desc}</p>
            </motion.div>
          );
        })}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.3 }}
          className="relative rounded-2xl border border-emerald-200 bg-gradient-to-br from-emerald-600 to-emerald-700 text-white p-6 flex flex-col justify-between overflow-hidden"
        >
          <div className="absolute inset-0 bg-mesh opacity-30 pointer-events-none" />
          <div className="relative">
            <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-100">Engage</div>
            <h3 className="mt-2 font-heading text-xl font-semibold">Start with a focused QA discovery session</h3>
            <p className="mt-2 text-sm text-emerald-50/90">A 30-minute consultation to scope challenges, align priorities and outline a clear engagement path.</p>
          </div>
          <button
            onClick={openConsultation}
            data-testid="consulting-cta"
            className="relative mt-5 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-white text-emerald-700 text-sm font-semibold hover:bg-emerald-50 transition w-fit"
          >
            Book Free Consultation <ArrowUpRight className="h-4 w-4" />
          </button>
        </motion.div>
      </div>
    </div>
  </section>
);

export default QAConsulting;
