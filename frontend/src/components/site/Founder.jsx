import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Code2, Workflow, MessageCircle } from "lucide-react";
import { openConsultation } from "@/lib/events";

const focus = [
  { icon: CheckCircle2, label: "Enterprise functional testing" },
  { icon: Code2, label: "API & UI automation" },
  { icon: Workflow, label: "Workflow & integration validation" },
];

const Founder = () => (
  <section id="founder" data-testid="founder-section" className="relative py-24 md:py-32 section-tint">
    <div className="absolute inset-x-0 top-0 divider-emerald" />
    <div className="absolute inset-0 bg-mesh opacity-40 pointer-events-none" />

    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        {/* Avatar block */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-5"
        >
          <div className="relative mx-auto max-w-sm">
            <div className="absolute -inset-4 bg-gradient-to-br from-emerald-300/30 via-teal-200/20 to-transparent rounded-[2.5rem] blur-2xl" />
            <div className="relative rounded-[2rem] border border-emerald-100 bg-gradient-to-br from-emerald-950 to-emerald-900 p-2 shadow-[0_30px_80px_-30px_rgba(2,44,34,0.35)]">
              <div className="aspect-[4/5] w-full rounded-[1.5rem] overflow-hidden relative">
                <img
                  src="https://customer-assets.emergentagent.com/job_verify-enterprise-1/artifacts/ce675d7q_sanjay%20photo.jpg"
                  alt="QASoftLabs — QA Engineering Studio"
                  className="absolute inset-0 h-full w-full object-cover saturate-[0.95]"
                />
                {/* Gradient overlays for premium SaaS framing */}
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/85 via-emerald-950/10 to-emerald-950/40 mix-blend-multiply" />
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/15 via-transparent to-transparent" />
                <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-[1.5rem]" />

                {/* Top floating tag */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/90 backdrop-blur text-[10px] font-semibold tracking-wider uppercase text-emerald-700">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    Active studio
                  </span>
                  <span className="font-mono text-[10px] text-white/70 bg-emerald-950/50 backdrop-blur px-2 py-1 rounded-md">v1.0</span>
                </div>

                {/* Bottom metadata strip */}
                <div className="absolute inset-x-3 bottom-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/15 px-3 py-2.5">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-[10px] uppercase tracking-[0.2em] text-emerald-200/80 font-semibold">Engineering Lead</div>
                      <div className="text-sm font-semibold text-white mt-0.5">QA Automation Studio</div>
                    </div>
                    <div className="text-right">
                      <div className="text-[10px] uppercase tracking-[0.18em] text-emerald-200/80 font-semibold">Stack</div>
                      <div className="font-mono text-[11px] text-white mt-0.5">PW · RA · JK</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bio block */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-7"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-emerald-200 bg-white text-emerald-700 text-xs font-medium">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            Boutique QA Engineering Studio
          </div>

          <h2 className="mt-5 font-heading text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-emerald-950 text-balance">
            Engineering reliable releases through{" "}
            <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">modern QA automation</span>.
          </h2>

          <p className="mt-5 text-base text-slate-600 leading-relaxed max-w-2xl">
            Helping startups and engineering teams build scalable QA automation through API, UI,
            regression, and workflow validation systems.
          </p>

          <div className="mt-7 grid sm:grid-cols-3 gap-3">
            {focus.map((f) => {
              const Icon = f.icon;
              return (
                <div
                  key={f.label}
                  className="flex items-center gap-2.5 rounded-xl border border-emerald-100 bg-white/80 backdrop-blur px-3.5 py-3 hover:border-emerald-300 hover:-translate-y-0.5 transition-all"
                >
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-50 text-emerald-700">
                    <Icon className="h-4 w-4" />
                  </span>
                  <span className="text-sm font-medium text-emerald-950">{f.label}</span>
                </div>
              );
            })}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <button
              data-testid="founder-book-consultation"
              onClick={openConsultation}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-emerald-600 text-white text-sm font-medium hover:bg-emerald-700 shadow-md shadow-emerald-500/20 hover:-translate-y-0.5 transition-all"
            >
              <MessageCircle className="h-4 w-4" /> Start a conversation
            </button>
            <a
              href="#portfolio"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-emerald-200 text-emerald-700 text-sm font-medium hover:bg-emerald-50 transition"
            >
              See recent work
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default Founder;
