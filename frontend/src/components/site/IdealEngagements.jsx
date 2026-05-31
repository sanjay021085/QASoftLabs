import React from "react";
import { motion } from "framer-motion";
import {
  Lightbulb, FolderKanban, MessageSquare, Cpu, Boxes, Gauge,
  Briefcase, FileSignature, Layers, Puzzle, Filter, Settings2,
  CheckCircle2,
} from "lucide-react";
import { openConsultation } from "@/lib/events";

const services = [
  { icon: Lightbulb, title: "On-Demand QA Expertise", desc: "Access experienced quality assurance expertise whenever testing, automation, validation, or quality assessment support is required." },
  { icon: FolderKanban, title: "Project-Based QA Services", desc: "End-to-end quality assurance services tailored to specific project deliverables and milestones." },
  { icon: MessageSquare, title: "QA Consulting Services", desc: "Strategic guidance for testing processes, automation adoption, quality assessments, and testing roadmaps." },
  { icon: Cpu, title: "Automation Engineering Services", desc: "Implementation and optimization of UI automation, API automation, regression automation, and CI/CD integrated testing solutions." },
  { icon: Boxes, title: "Framework Engineering Services", desc: "Design, enhancement, modernization, and optimization of automation frameworks to improve scalability and maintainability." },
  { icon: Gauge, title: "Flexible QA Capacity", desc: "Scale quality assurance activities based on project demands, release schedules, testing workloads, and business priorities." },
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
  "Flexible engagement options",
  "Access to specialized QA expertise",
  "Cost-effective quality assurance services",
  "Scalable support based on business needs",
  "Faster onboarding and execution",
  "Delivery aligned with project goals and timelines",
];

const IdealEngagements = () => (
  <section
    id="engagement-models"
    data-testid="engagement-models-section"
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
          FLEXIBLE QA ENGAGEMENT MODELS
        </div>
        <h2 className="mt-6 font-heading text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-emerald-950 text-balance leading-[1.05]">
          Quality Assurance expertise{" "}
          <span className="bg-gradient-to-r from-emerald-500 to-emerald-700 bg-clip-text text-transparent">
            aligned to your business needs
          </span>
        </h2>
        <p className="mt-5 text-base md:text-lg text-slate-600 leading-relaxed max-w-3xl">
          Every organization has unique quality assurance requirements. Some require testing support
          for a specific release, some need automation implementation, while others seek long-term
          quality improvement initiatives. Our services are designed to align with project scope,
          business objectives, timelines, and quality goals.
        </p>
      </motion.div>

      {/* Service cards */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {services.map((f, i) => {
          const Icon = f.icon;
          return (
            <motion.div
              key={f.title}
              data-testid={`engagement-service-${f.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")}`}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.05 }}
              className="group relative rounded-3xl border border-emerald-100 bg-white p-7 hover:-translate-y-1.5 hover:shadow-[0_28px_70px_-24px_rgba(16,185,129,0.4)] transition-all overflow-hidden"
            >
              <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-emerald-50/60 to-transparent pointer-events-none" />
              <div className="relative flex items-start gap-4">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-900 text-emerald-300 shadow-md shadow-emerald-900/30 shrink-0">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-heading text-lg font-bold text-emerald-950">{f.title}</h3>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">{f.desc}</p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Engagement Options */}
      <div className="mt-20">
        <div className="text-[11px] font-bold tracking-[0.22em] text-emerald-600">
          ENGAGEMENT OPTIONS
        </div>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
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
                className="flex items-center gap-4 rounded-2xl border border-emerald-100 bg-white p-4 hover:border-emerald-300 hover:shadow-[0_18px_45px_-20px_rgba(16,185,129,0.35)] transition"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-300 to-emerald-500 text-emerald-950 shadow-md shadow-emerald-500/30 shrink-0">
                  <Icon className="h-5 w-5" />
                </span>
                <span className="text-sm md:text-base font-bold text-emerald-950">{e.label}</span>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Why Organizations Choose This Approach */}
      <div className="mt-16">
        <div className="text-[11px] font-bold tracking-[0.22em] text-emerald-600">
          WHY ORGANIZATIONS CHOOSE THIS APPROACH
        </div>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {benefits.map((b, i) => (
            <motion.div
              key={b}
              data-testid={`engagement-benefit-${b.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")}`}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.04 }}
              className="flex items-center gap-3 rounded-xl border border-emerald-100 bg-emerald-50/40 px-4 py-3"
            >
              <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
              <span className="text-sm font-medium text-emerald-950">{b}</span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA banner */}
      <motion.button
        type="button"
        onClick={openConsultation}
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        data-testid="engagement-cta"
        className="mt-14 group w-full rounded-3xl bg-emerald-950 text-white p-8 md:p-12 text-center overflow-hidden relative hover:-translate-y-0.5 transition-all shadow-[0_30px_80px_-30px_rgba(2,44,34,0.5)]"
      >
        <div className="absolute inset-0 [background-image:linear-gradient(rgba(16,185,129,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.06)_1px,transparent_1px)] [background-size:48px_48px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_30%,#000_30%,transparent_80%)]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[300px] w-[600px] rounded-full bg-emerald-500/15 blur-[120px]" />
        <p className="relative font-heading text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-balance">
          Pay only for the quality assurance expertise and services required for your business
          objectives.
        </p>
      </motion.button>
    </div>
  </section>
);

export default IdealEngagements;
