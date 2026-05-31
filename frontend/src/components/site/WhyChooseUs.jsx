import React from "react";
import { motion } from "framer-motion";
import {
  Briefcase, Landmark, HeartPulse, Truck, Factory,
  CheckCircle2, Plug, MousePointerClick, Database, Workflow, RotateCcw, GitMerge,
  Bot, Cpu, Sparkles,
  Boxes, Wrench, Recycle, Gauge, Layers,
} from "lucide-react";

const industries = [
  { icon: Landmark, label: "Banking" },
  { icon: Briefcase, label: "Finance" },
  { icon: HeartPulse, label: "Healthcare" },
  { icon: Truck, label: "Logistics" },
  { icon: Factory, label: "Manufacturing" },
];

const testing = [
  { icon: CheckCircle2, label: "Functional Testing" },
  { icon: Plug, label: "API Testing" },
  { icon: MousePointerClick, label: "UI Testing" },
  { icon: Database, label: "Database Testing" },
  { icon: Workflow, label: "Integration Testing" },
  { icon: RotateCcw, label: "Regression Testing" },
  { icon: GitMerge, label: "End-to-End Testing" },
];

const automation = [
  { icon: MousePointerClick, label: "UI Automation" },
  { icon: Plug, label: "API Automation" },
  { icon: Sparkles, label: "AI Assisted Testing" },
];

const frameworks = [
  { icon: Boxes, label: "Design" },
  { icon: Wrench, label: "Enhancement" },
  { icon: Recycle, label: "Re-Engineering" },
  { icon: Gauge, label: "Optimization" },
];

const PillarCard = ({ icon: Icon, title, subtitle, items, count, accentIcon: AccentIcon = Layers }) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-60px" }}
    transition={{ duration: 0.5 }}
    data-testid={`why-choose-${title.toLowerCase().replace(/\s+/g, "-")}`}
    className="card-hover group relative rounded-3xl border border-emerald-100 bg-white p-7 md:p-9 hover:shadow-[0_30px_80px_-30px_rgba(16,185,129,0.4)] hover:border-emerald-300 overflow-hidden"
  >
    <div className="absolute -top-16 -right-16 h-56 w-56 rounded-full bg-emerald-100/50 blur-3xl pointer-events-none" />
    <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-emerald-50/60 to-transparent pointer-events-none" />

    <div className="relative flex items-start justify-between gap-4">
      <div className="flex items-center gap-3">
        <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700 ring-1 ring-emerald-100">
          <Icon className="h-5 w-5" />
        </div>
        <h3 className="font-heading text-xl md:text-2xl font-bold text-emerald-950">{title}</h3>
      </div>
      <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-emerald-700 bg-emerald-50 border border-emerald-100 px-2.5 py-1 rounded-full shrink-0">
        <AccentIcon className="h-3 w-3" />
        {count} areas
      </span>
    </div>

    <p className="relative mt-4 text-sm text-slate-600 leading-relaxed max-w-md">{subtitle}</p>

    <div className="relative mt-6 flex flex-wrap gap-2">
      {items.map((it) => {
        const ItIcon = it.icon;
        return (
          <span
            key={it.label}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-50/80 border border-emerald-100 text-xs font-semibold text-emerald-800 hover:bg-emerald-100 hover:border-emerald-200 transition-colors"
          >
            <ItIcon className="h-3.5 w-3.5 text-emerald-600" />
            {it.label}
          </span>
        );
      })}
    </div>
  </motion.div>
);

const WhyChooseUs = () => (
  <section id="why-choose-us" data-testid="why-choose-us-section" className="relative py-24 md:py-32 bg-white">
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
          WHY CHOOSE US
        </div>
        <h2 className="mt-6 font-heading text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-emerald-950 text-balance leading-[1.05]">
          Deep expertise where{" "}
          <span className="bg-gradient-to-r from-emerald-500 to-emerald-700 bg-clip-text text-transparent">software quality</span>{" "}
          is non-negotiable
        </h2>
        <p className="mt-5 text-base md:text-lg text-slate-600 leading-relaxed max-w-2xl">
          QASoftLabs combines industry experience, structured testing practice, and modern
          automation engineering to deliver dependable release outcomes.
        </p>
      </motion.div>

      <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-6">
        <PillarCard
          icon={Briefcase}
          title="Industry Experience"
          subtitle="Domain-aware QA delivery across regulated and high-velocity sectors."
          items={industries}
          count={industries.length}
        />
        <PillarCard
          icon={CheckCircle2}
          title="Testing Expertise"
          subtitle="Full-spectrum manual and structured testing across the SDLC."
          items={testing}
          count={testing.length}
        />
        <PillarCard
          icon={Bot}
          title="Automation Expertise"
          subtitle="Modern automation engineering for sustainable test velocity."
          items={automation}
          count={automation.length}
        />
        <PillarCard
          icon={Cpu}
          title="Framework Engineering"
          subtitle="Build, review, and modernize automation frameworks for the long run."
          items={frameworks}
          count={frameworks.length}
        />
      </div>
    </div>
  </section>
);

export default WhyChooseUs;
