import React from "react";
import { motion } from "framer-motion";
import { Landmark, Building2, HeartPulse, Truck, Factory, Network, Cloud } from "lucide-react";

const industries = [
  { icon: Landmark, name: "Banking", desc: "Core systems, channels, payments." },
  { icon: Building2, name: "Finance", desc: "Trading, lending, regulatory reporting." },
  { icon: HeartPulse, name: "Healthcare", desc: "EHR, claims, patient platforms." },
  { icon: Truck, name: "Logistics", desc: "TMS, WMS, last-mile platforms." },
  { icon: Factory, name: "Manufacturing", desc: "MES, supply chain, IIoT." },
  { icon: Network, name: "Enterprise Applications", desc: "ERP, CRM, internal platforms." },
  { icon: Cloud, name: "SaaS Platforms", desc: "Multi-tenant cloud products." },
];

const Industries = () => {
  return (
    <section id="industries" data-testid="industries-section" className="relative py-24 md:py-32 section-tint">
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
            INDUSTRIES
          </div>
          <h2 className="mt-6 font-heading text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-emerald-950 text-balance leading-[1.05]">
            Domain context that{" "}
            <span className="bg-gradient-to-r from-emerald-500 to-emerald-700 bg-clip-text text-transparent">
              shapes test design
            </span>
          </h2>
          <p className="mt-5 text-base md:text-lg text-slate-600 leading-relaxed max-w-2xl">
            Industry-aware QA delivery, with an understanding of the workflows, data sensitivities,
            and regulatory expectations that surround each vertical.
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {industries.map((it, i) => {
            const Icon = it.icon;
            return (
              <motion.div
                key={it.name}
                data-testid={`industry-card-${it.name.toLowerCase().replace(/\s+/g, "-")}`}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: (i % 4) * 0.05 }}
                className="group relative rounded-3xl border border-emerald-100 bg-white p-7 hover:-translate-y-1.5 hover:shadow-[0_28px_70px_-24px_rgba(16,185,129,0.45)] transition-all overflow-hidden"
              >
                <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-emerald-50/60 to-transparent pointer-events-none" />
                <div className="relative">
                  <div className="inline-flex items-center justify-center h-12 w-12 rounded-2xl bg-gradient-to-br from-emerald-300 to-emerald-500 text-emerald-950 shadow-md shadow-emerald-500/30 group-hover:from-emerald-400 group-hover:to-emerald-600 transition-colors">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-8 font-heading text-xl font-bold text-emerald-950">{it.name}</h3>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">{it.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Industries;
