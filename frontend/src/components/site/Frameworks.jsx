import React from "react";
import { motion } from "framer-motion";
import {
  Boxes,
  Recycle,
  BarChart3,
  ScrollText,
  RefreshCw,
  SplitSquareHorizontal,
  Globe2,
  Settings2,
  GitPullRequest,
  Workflow,
} from "lucide-react";
import { SectionHeader } from "@/components/site/Services";

const frameworks = [
  { icon: Boxes, title: "Framework Design", code: "framework.design()" },
  { icon: Recycle, title: "Reusable Architecture", code: "modules.reuse(true)" },
  { icon: BarChart3, title: "Reporting Integration", code: "report.allure+html" },
  { icon: ScrollText, title: "Logging & Monitoring", code: "log.level=INFO" },
  { icon: RefreshCw, title: "Retry Mechanism", code: "retry.flaky(3x)" },
  { icon: SplitSquareHorizontal, title: "Parallel Execution", code: "threads=32" },
  { icon: Globe2, title: "Cross-Browser Execution", code: "grid: chrome|edge|webkit" },
  { icon: Settings2, title: "Environment Configuration", code: "env.{dev,stg,prd}" },
  { icon: GitPullRequest, title: "CI/CD Integration", code: "trigger: on.pr" },
  { icon: Workflow, title: "Jenkins Integration", code: "pipeline { stages }" },
];

const Frameworks = () => {
  return (
    <section id="frameworks" data-testid="frameworks-section" className="relative py-24 md:py-32 bg-gradient-to-b from-white via-emerald-50/60 to-white">
      <div className="absolute inset-x-0 top-0 divider-emerald" />
      <div className="absolute inset-0 bg-dotgrid opacity-20 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_30%,#000_30%,transparent_80%)] pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          overline="Framework Engineering"
          title="Built like infrastructure, not scripts"
          subtitle="Production-grade automation frameworks engineered for scale, observability and CI-native execution."
        />

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {frameworks.map((f, i) => {
            const Icon = f.icon;
            return (
              <motion.div
                key={f.title}
                data-testid={`framework-card-${f.title.toLowerCase().replace(/\s+/g, "-").replace(/&/g, "and")}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: (i % 5) * 0.05 }}
                className="group relative rounded-2xl border border-emerald-100/80 bg-white/85 backdrop-blur-sm p-5 hover:-translate-y-1 hover:border-emerald-300 hover:bg-white hover:shadow-[0_24px_60px_-20px_rgba(16,185,129,0.45)] transition-all overflow-hidden"
              >
                <div className="absolute -top-10 -right-10 h-28 w-28 rounded-full bg-emerald-100/40 blur-2xl group-hover:bg-emerald-200/60 transition-colors" />
                <div className="relative">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 font-heading font-semibold text-base text-emerald-950">
                    {f.title}
                  </h3>
                  <div className="mt-3 rounded-md bg-slate-900 px-2.5 py-1.5 inline-block">
                    <code className="font-mono text-[11px] text-emerald-300">{f.code}</code>
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

export default Frameworks;
