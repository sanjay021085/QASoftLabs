import React from "react";
import { motion } from "framer-motion";
import {
  Headphones, FolderKanban, MessageSquare, Cpu, Boxes, Gauge,
  Briefcase, FileSignature, Layers, Puzzle, Filter, Settings2,
  ShieldCheck, Sparkles, Wallet, ScaleIcon, Rocket, Target,
} from "lucide-react";
import { SectionHeader } from "@/components/site/Services";
import { openConsultation } from "@/lib/events";

const services = [
  { icon: Headphones, title: "On-Demand QA Expertise", desc: "Access experienced quality assurance expertise whenever testing, automation, validation or quality assessment support is required." },
  { icon: FolderKanban, title: "Project-Based QA Services", desc: "End-to-end quality assurance services aligned to specific project deliverables, milestones and release commitments." },
  { icon: MessageSquare, title: "QA Consulting Services", desc: "Strategic guidance for testing processes, automation adoption, quality assessments and long-term testing roadmaps." },
  { icon: Cpu, title: "Automation Engineering Services", desc: "Implementation and optimization of UI automation, API automation, regression automation and CI/CD integrated testing solutions." },
  { icon: Boxes, title: "Framework Engineering Services", desc: "Design, enhancement, modernization and optimization of automation frameworks to improve scalability and maintainability." },
  { icon: Gauge, title: "Flexible QA Capacity", desc: "Scale quality assurance activities based on project demands, release schedules, testing workloads and business priorities." },
];

const engagements = [
  { icon: Briefcase, label: "Consulting Engagement" },
  { icon: FileSignature, label: "Contract-Based Engagement" },
  { icon: Layers, label: "Project-Based Engagement" },
  { icon: Puzzle, label: "Component-Based Engagement" },
  { icon: Filter, label: "Test Scope-Based Engagement" },
  { icon: Settings2, label: "Customized Engagement Models" },
];

const benefits = [
  { icon: Settings2, label: "Flexible engagement options" },
  { icon: ShieldCheck, label: "Access to specialized QA expertise" },
  { icon: Wallet, label: "Cost-effective quality assurance services" },
  { icon: Sparkles, label: "Scalable support based on business needs" },
  { icon: Rocket, label: "Faster onboarding and execution" },
  { icon: Target, label: "Delivery aligned with project goals and timelines" },
];

const IdealEngagements = () => (
  <section id="engagement-models" data-testid="engagement-models-section" className="relative py-24 md:py-28 section-tint">
    <div className="absolute inset-x-0 top-0 divider-emerald" />
    <div className="absolute inset-0 bg-dotgrid opacity-25 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_30%,#000_30%,transparent_80%)] pointer-events-none" />
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeader
        overline="Flexible QA Engagement Models"
        title="Quality Assurance Expertise Aligned to Your Business Needs"
        subtitle="Every organization has unique quality assurance requirements. Some require testing support for a specific release, some need automation implementation, while others seek long-term quality improvement initiatives. Our services are designed to align with project scope, business objectives, timelines, and quality goals."
      />

      <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {services.map((f, i) => {
          const Icon = f.icon;
          return (
            <motion.div
              key={f.title}
              data-testid={`engagement-service-${f.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")}`}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              className="group relative rounded-2xl border border-emerald-100/80 bg-white/85 backdrop-blur-md p-6 hover:-translate-y-1 hover:border-emerald-300 hover:shadow-[0_24px_60px_-24px_rgba(16,185,129,0.4)] transition-all"
            >
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700 ring-1 ring-emerald-100 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-heading font-semibold text-lg text-emerald-950">{f.title}</h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">{f.desc}</p>
            </motion.div>
          );
        })}
      </div>

      <div className="mt-16">
        <div className="text-center">
          <div className="inline-flex items-center gap-2">
            <span className="h-px w-6 bg-emerald-500" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-600">Engagement Options</span>
            <span className="h-px w-6 bg-emerald-500" />
          </div>
          <h3 className="mt-3 font-heading text-2xl md:text-3xl font-semibold text-emerald-950">Choose an engagement shape that fits your delivery</h3>
        </div>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {engagements.map((e, i) => {
            const Icon = e.icon;
            return (
              <motion.div
                key={e.label}
                data-testid={`engagement-option-${e.label.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")}`}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
                className="flex items-center gap-3 rounded-2xl border border-emerald-100 bg-white p-4 hover:border-emerald-300 transition"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700">
                  <Icon className="h-4 w-4" />
                </span>
                <span className="text-sm font-semibold text-emerald-950">{e.label}</span>
              </motion.div>
            );
          })}
        </div>
      </div>

      <div className="mt-16">
        <div className="text-center">
          <div className="inline-flex items-center gap-2">
            <span className="h-px w-6 bg-emerald-500" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-600">Why Organizations Choose This Approach</span>
            <span className="h-px w-6 bg-emerald-500" />
          </div>
        </div>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {benefits.map((b, i) => {
            const Icon = b.icon;
            return (
              <motion.div
                key={b.label}
                data-testid={`engagement-benefit-${b.label.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")}`}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
                className="flex items-start gap-3 rounded-2xl border border-emerald-100 bg-emerald-50/40 p-4"
              >
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-600 text-white shrink-0">
                  <Icon className="h-4 w-4" />
                </span>
                <span className="text-sm font-medium text-emerald-950 leading-relaxed">{b.label}</span>
              </motion.div>
            );
          })}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mt-14 rounded-3xl border border-emerald-200 bg-gradient-to-br from-emerald-600 to-emerald-700 text-white p-7 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-5 overflow-hidden relative"
      >
        <div className="absolute inset-0 bg-mesh opacity-30 pointer-events-none" />
        <div className="relative">
          <h3 className="font-heading text-xl md:text-2xl font-semibold text-balance">
            Pay only for the quality assurance expertise and services required for your business objectives.
          </h3>
          <p className="mt-2 text-sm text-emerald-50/90 max-w-2xl">No staffing markup. No fixed retainers. Clear scope, defined outcomes and engagement shapes built to match how your team actually delivers.</p>
        </div>
        <button
          data-testid="engagement-cta"
          onClick={openConsultation}
          className="relative inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white text-emerald-700 text-sm font-semibold hover:bg-emerald-50 transition shrink-0"
        >
          Discuss Engagement Fit
        </button>
      </motion.div>
    </div>
  </section>
);

export default IdealEngagements;
