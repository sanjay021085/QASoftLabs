import React from "react";
import { motion } from "framer-motion";
import {
  ClipboardList, FileText, Bug, Smartphone, Accessibility, ShieldCheck, BookOpenCheck, Users, ArrowRight,
} from "lucide-react";
import { openConsultation } from "@/lib/events";

const items = [
  { icon: ClipboardList, title: "Exploratory Testing", desc: "Experienced QA engineers uncover edge-case defects automation cannot reach." },
  { icon: FileText, title: "Requirement Validation", desc: "Traceability between business requirements, test scenarios, and execution evidence." },
  { icon: Bug, title: "Defect Reporting", desc: "Reproducible, well-documented defects with severity, impact, and clear reproduction steps." },
  { icon: Smartphone, title: "Cross-Device & Browser", desc: "Manual validation across real devices, browsers, and operating systems." },
  { icon: Accessibility, title: "Usability & Accessibility", desc: "Human evaluation of UX flows, accessibility (WCAG), and end-user experience quality." },
  { icon: ShieldCheck, title: "User Acceptance Testing", desc: "Structured UAT support — scenarios, sign-off documentation, and stakeholder collaboration." },
  { icon: BookOpenCheck, title: "Test Case Authoring", desc: "Detailed manual test case suites with coverage matrices and review-ready documentation." },
  { icon: Users, title: "Dedicated QA Teams", desc: "Skilled manual QA pods that integrate directly with your product and engineering team." },
];

const ManualTesting = () => (
  <section
    id="manual-testing"
    data-testid="manual-testing-section"
    className="relative py-24 md:py-32 bg-gradient-to-b from-emerald-50/60 via-emerald-50/30 to-white"
  >
    <div className="absolute inset-0 bg-dotgrid opacity-20 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_40%,#000_30%,transparent_80%)] pointer-events-none" />

    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl"
      >
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-200 bg-emerald-50/70 text-emerald-700 text-[11px] font-bold tracking-[0.22em]">
          MANUAL TESTING
        </div>
        <h2 className="mt-6 font-heading text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-emerald-950 text-balance leading-[1.05]">
          Human-led{" "}
          <span className="bg-gradient-to-r from-emerald-500 to-emerald-700 bg-clip-text text-transparent">
            quality assurance
          </span>{" "}
          that automation cannot replace
        </h2>
        <p className="mt-5 text-base md:text-lg text-slate-600 leading-relaxed max-w-2xl">
          Many organizations rely on rigorous manual testing for usability, exploratory coverage,
          and high-risk release validation. Our dedicated manual QA practice has equal importance
          alongside automation.
        </p>
      </motion.div>

      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {items.map((it, i) => {
          const Icon = it.icon;
          return (
            <motion.div
              key={it.title}
              data-testid={`manual-card-${it.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")}`}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.05 }}
              className="card-hover group relative rounded-3xl border border-emerald-100 bg-white p-7 hover:shadow-[0_28px_70px_-24px_rgba(16,185,129,0.45)] hover:border-emerald-300 overflow-hidden"
            >
              <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-emerald-50/60 to-transparent pointer-events-none" />
              <div className="relative">
                <div className="inline-flex items-center justify-center h-12 w-12 rounded-2xl bg-gradient-to-br from-emerald-300 to-emerald-500 text-emerald-950 shadow-md shadow-emerald-500/30 group-hover:from-emerald-400 group-hover:to-emerald-600 transition-colors">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-7 font-heading text-lg font-bold text-emerald-950">{it.title}</h3>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">{it.desc}</p>
              </div>
            </motion.div>
          );
        })}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mt-12 rounded-3xl border border-emerald-100 bg-white p-7 md:p-9 flex flex-col md:flex-row items-start md:items-center gap-5 md:gap-8 shadow-[0_20px_60px_-30px_rgba(2,44,34,0.18)]"
      >
        <div className="flex-1">
          <div className="text-[11px] font-bold tracking-[0.22em] text-emerald-600">MANUAL + AUTOMATION</div>
          <p className="mt-3 text-base md:text-lg text-slate-700 leading-relaxed max-w-3xl">
            We treat manual and automation testing as <strong className="text-emerald-950">equally critical</strong>{" "}
            disciplines. Engagements can be manual-only, automation-only, or a hybrid model —
            designed around what your product actually needs.
          </p>
        </div>
        <button
          onClick={openConsultation}
          data-testid="manual-discuss-cta"
          className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-emerald-500 text-emerald-950 text-sm font-bold hover:bg-emerald-400 transition shadow-[0_18px_40px_-12px_rgba(16,185,129,0.55)] hover:-translate-y-0.5 whitespace-nowrap shrink-0"
        >
          Discuss Manual QA <ArrowRight className="h-4 w-4" />
        </button>
      </motion.div>
    </div>
  </section>
);

export default ManualTesting;
