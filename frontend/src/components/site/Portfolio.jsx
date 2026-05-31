import React from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink, TrendingUp, Bug, Clock, Layers } from "lucide-react";
import { SectionHeader } from "@/components/site/Services";

const projects = [
  {
    title: "Banking API Automation",
    tag: "BFSI · API",
    desc: "Contract-first automation suite covering payments, KYC and ledger APIs, wired into a Jenkins pipeline with parallel execution and audit-ready reporting.",
    img: "https://images.pexels.com/photos/9553905/pexels-photo-9553905.jpeg",
    metrics: [
      { icon: Layers, label: "API scenarios", value: "240+" },
      { icon: Clock, label: "Run mode", value: "Parallel" },
      { icon: Bug, label: "CI gating", value: "Enabled" },
    ],
    stack: ["RestAssured", "Java", "Jenkins", "Allure"],
  },
  {
    title: "Enterprise Regression Suite",
    tag: "SaaS · E2E",
    desc: "Risk-based regression framework across multiple product modules with shared fixtures and intelligent test selection on every pull request.",
    img: "https://images.unsplash.com/photo-1549692520-acc6669e2f0c",
    metrics: [
      { icon: Layers, label: "Suites", value: "Modular" },
      { icon: Clock, label: "Trigger", value: "On PR" },
      { icon: TrendingUp, label: "Coverage", value: "Expanded" },
    ],
    stack: ["Playwright", "TypeScript", "GitHub Actions", "AWS"],
  },
  {
    title: "Logistics Workflow Validation",
    tag: "Logistics · Workflow",
    desc: "End-to-end validation of multi-leg shipment workflows across EDI, ERP and partner APIs, including event correlation and exception scenarios.",
    img: "https://images.pexels.com/photos/9328777/pexels-photo-9328777.jpeg",
    metrics: [
      { icon: Layers, label: "Workflows", value: "Multi-step" },
      { icon: Clock, label: "Envs", value: "Dev / Stg / Prd" },
      { icon: Bug, label: "Exceptions", value: "Covered" },
    ],
    stack: ["Karate", "Kafka", "Docker", "Grafana"],
  },
  {
    title: "E-commerce Testing Framework",
    tag: "Retail · UI + API",
    desc: "Built a Playwright-based UI + API contract testing layer with visual regression baked into CI/CD for a high-traffic storefront.",
    img: "https://images.pexels.com/photos/5239822/pexels-photo-5239822.jpeg",
    metrics: [
      { icon: Layers, label: "Layers", value: "UI + API" },
      { icon: Clock, label: "Pipeline", value: "CI-integrated" },
      { icon: TrendingUp, label: "Visual reg.", value: "Baseline" },
    ],
    stack: ["Playwright", "Pact", "Vercel", "Datadog"],
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" data-testid="portfolio-section" className="relative py-24 md:py-32 bg-gradient-to-b from-emerald-50/40 via-white to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          overline="Selected Work"
          title="Recent engagements"
          subtitle="A snapshot of QA automation engagements — built to be technically credible, not metric theatre."
        />

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((p, idx) => (
            <motion.article
              key={p.title}
              data-testid={`portfolio-card-${p.title.toLowerCase().replace(/\s+/g, "-")}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.08 }}
              className="group relative overflow-hidden rounded-3xl border border-emerald-100 bg-white hover:shadow-[0_30px_80px_-24px_rgba(2,44,34,0.18)] transition-all"
            >
              <div className="relative h-56 md:h-64 overflow-hidden">
                <img
                  src={p.img}
                  alt={p.title}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover group-hover:scale-[1.04] transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/70 via-emerald-950/10 to-transparent" />
                <div className="absolute top-4 left-4 inline-flex items-center px-2.5 py-1 rounded-full bg-white/90 backdrop-blur text-[11px] font-semibold text-emerald-800 tracking-wide">
                  {p.tag}
                </div>
              </div>

              <div className="p-6 md:p-8">
                <h3 className="font-heading text-xl md:text-2xl font-semibold text-emerald-950">
                  {p.title}
                </h3>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">{p.desc}</p>

                <div className="mt-6 grid grid-cols-3 gap-3">
                  {p.metrics.map((m) => {
                    const Icon = m.icon;
                    return (
                      <div
                        key={m.label}
                        className="rounded-xl border border-emerald-100 bg-emerald-50/50 p-3"
                      >
                        <div className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-emerald-700">
                          <Icon className="h-3 w-3" /> {m.label}
                        </div>
                        <div className="mt-1 font-heading text-xl font-semibold text-emerald-950">
                          {m.value}
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      className="font-mono text-[10px] px-2 py-1 rounded-md bg-slate-900 text-emerald-300"
                    >
                      {s}
                    </span>
                  ))}
                </div>

                <div className="mt-7 flex items-center gap-3">
                  <a
                    href="https://github.com/sanjay021085"
                    target="_blank"
                    rel="noreferrer"
                    data-testid={`portfolio-github-${p.title.toLowerCase().replace(/\s+/g, "-")}`}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-200 text-sm font-medium text-slate-700 hover:border-emerald-400 hover:text-emerald-700 transition"
                  >
                    <Github className="h-4 w-4" /> Repository
                  </a>
                  <a
                    href="https://github.com/sanjay021085"
                    target="_blank"
                    rel="noreferrer"
                    data-testid={`portfolio-report-${p.title.toLowerCase().replace(/\s+/g, "-")}`}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-600 text-white text-sm font-medium hover:bg-emerald-700 transition shadow-md shadow-emerald-500/20"
                  >
                    <ExternalLink className="h-4 w-4" /> View Report
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
