import React from "react";
import { motion } from "framer-motion";
import { Landmark, Briefcase, HeartPulse, Truck, Factory, Building2, Cloud, ArrowUpRight } from "lucide-react";
import { SectionHeader } from "@/components/site/Services";

const industries = [
  { icon: Landmark, name: "Banking", desc: "Core banking flows, payment rails, ledger accuracy and transaction integrity validation." },
  { icon: Briefcase, name: "Finance", desc: "Reporting accuracy, regulatory checks, calculation engines and financial workflow validation." },
  { icon: HeartPulse, name: "Healthcare", desc: "Patient data integrity, clinical workflows, compliance-aware testing and audit-grade traceability." },
  { icon: Truck, name: "Logistics", desc: "Multi-leg shipment flows, tracking events, EDI exchanges and partner integration validation." },
  { icon: Factory, name: "Manufacturing", desc: "ERP and MES integrations, shop-floor data validation, and production-line workflow assurance." },
  { icon: Building2, name: "Enterprise Applications", desc: "Complex business workflows, role-based access, and cross-module integration validation at scale." },
  { icon: Cloud, name: "SaaS Platforms", desc: "Tenant isolation, subscription flows, release cadence support and continuous validation in CI/CD." },
];

const Industries = () => {
  return (
    <section id="industries" data-testid="industries-section" className="relative py-24 md:py-28 section-tint">
      <div className="absolute inset-x-0 top-0 divider-emerald" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          overline="Industries Served"
          title="Domain-aware quality engineering"
          subtitle="Cross-industry experience supporting regulated, transactional and high-throughput products where correctness, traceability and release confidence are non-negotiable."
        />

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {industries.map((it, i) => {
            const Icon = it.icon;
            return (
              <motion.div
                key={it.name}
                data-testid={`industry-card-${it.name.toLowerCase().replace(/\s+/g, "-")}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: i * 0.05 }}
                className="group relative rounded-2xl border border-emerald-100 bg-white p-6 hover:-translate-y-1 hover:border-emerald-300 hover:shadow-[0_28px_70px_-24px_rgba(16,185,129,0.4)] transition-all overflow-hidden"
              >
                <div className="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-emerald-100/40 blur-2xl group-hover:bg-emerald-200/60 transition-colors" />
                <div className="relative">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-700 text-white shadow-md shadow-emerald-500/30">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 font-heading text-lg font-semibold text-emerald-950">{it.name}</h3>
                  <p className="mt-1.5 text-sm text-slate-600 leading-relaxed">{it.desc}</p>
                  <div className="mt-4 inline-flex items-center gap-1 text-xs font-medium text-emerald-700 opacity-0 group-hover:opacity-100 transition">
                    Discuss your domain <ArrowUpRight className="h-3.5 w-3.5" />
                  </div>
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
