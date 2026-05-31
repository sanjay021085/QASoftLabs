import React from "react";
import { motion } from "framer-motion";
import {
  Briefcase, Landmark, HeartPulse, Truck, Factory,
  CheckCircle2, Plug, MousePointerClick, Database, Workflow, RotateCcw, GitMerge,
  Bot, Cpu, Sparkles,
  Boxes, Wrench, Recycle, Gauge,
} from "lucide-react";
import { SectionHeader } from "@/components/site/Services";

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

const Group = ({ icon: Icon, overline, title, items, accent }) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-60px" }}
    transition={{ duration: 0.5 }}
    data-testid={`why-choose-${title.toLowerCase().replace(/\s+/g, "-")}`}
    className="group relative rounded-3xl border border-emerald-100 bg-white p-7 md:p-8 hover:shadow-[0_30px_80px_-30px_rgba(16,185,129,0.35)] transition-all overflow-hidden"
  >
    <div className="absolute -top-12 -right-12 h-40 w-40 rounded-full bg-emerald-100/40 blur-3xl pointer-events-none" />
    <div className="relative">
      <div className="flex items-center gap-3">
        <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-700 text-white shadow-md shadow-emerald-500/30">
          <Icon className="h-5 w-5" />
        </div>
        <div>
          <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-600">{overline}</div>
          <h3 className="font-heading text-xl md:text-2xl font-semibold text-emerald-950 mt-0.5">{title}</h3>
        </div>
      </div>
      <p className="mt-3 text-sm text-slate-500 italic">— {accent}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {items.map((it) => {
          const ItIcon = it.icon;
          return (
            <span
              key={it.label}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-100 text-xs font-medium text-emerald-800 hover:bg-emerald-100 transition-colors"
            >
              <ItIcon className="h-3.5 w-3.5 text-emerald-600" />
              {it.label}
            </span>
          );
        })}
      </div>
    </div>
  </motion.div>
);

const WhyChooseUs = () => (
  <section id="why-choose-us" data-testid="why-choose-us-section" className="relative py-24 md:py-28 bg-white">
    <div className="absolute inset-x-0 top-0 divider-emerald" />
    <div className="absolute inset-0 bg-grid opacity-20 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_30%,#000_30%,transparent_80%)] pointer-events-none" />
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeader
        overline="Why Choose QASoftLabs"
        title="Depth across industries, testing, automation and frameworks"
        subtitle="A consulting-led practice that combines domain knowledge, hands-on engineering experience and modern automation tooling — built to support release confidence at every stage of delivery."
      />

      <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6">
        <Group icon={Briefcase} overline="Pillar 01" title="Industry Experience" accent="Domains we have shipped into" items={industries} />
        <Group icon={CheckCircle2} overline="Pillar 02" title="Testing Expertise" accent="Every layer covered — UI, API, data, integrations" items={testing} />
        <Group icon={Bot} overline="Pillar 03" title="Automation Expertise" accent="Modern automation with AI assistance where it adds value" items={automation} />
        <Group icon={Cpu} overline="Pillar 04" title="Framework Engineering" accent="Production-grade frameworks engineered like infrastructure" items={frameworks} />
      </div>
    </div>
  </section>
);

export default WhyChooseUs;
