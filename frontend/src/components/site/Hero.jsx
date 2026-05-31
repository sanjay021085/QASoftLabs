import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, CalendarCheck2, CheckCircle2, Activity, Zap, GitBranch, Sparkles } from "lucide-react";
import { openConsultation } from "@/lib/events";
import LiveHeroOverlay from "@/components/site/LiveHeroOverlay";

const ROTATING_HINTS = [
  "Functional & API automation",
  "Framework re-engineering",
  "Release validation gates",
  "QA consulting & strategy",
];

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
};

const Hero = () => {
  const [hintIdx, setHintIdx] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setHintIdx((i) => (i + 1) % ROTATING_HINTS.length), 2800);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="home" data-testid="hero-section" className="relative pt-28 md:pt-36 pb-20 md:pb-24 overflow-hidden">
      <div className="absolute inset-0 bg-mesh opacity-80 pointer-events-none" />
      <div className="absolute inset-0 bg-radial-emerald pointer-events-none" />
      <div className="absolute inset-0 bg-grid opacity-[0.35] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_30%,#000_30%,transparent_75%)] pointer-events-none" />
      <div className="absolute inset-0 noise pointer-events-none mix-blend-soft-light" />
      <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-emerald-300/20 blur-3xl pointer-events-none" />
      <div className="absolute top-32 -right-10 h-80 w-80 rounded-full bg-teal-300/20 blur-3xl pointer-events-none" />

      <LiveHeroOverlay />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          <motion.div {...fadeUp} transition={{ duration: 0.6 }} className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-emerald-200 bg-emerald-50/70 text-emerald-700 text-xs font-medium tracking-wide">
              <span className="relative flex h-2 w-2">
                <span className="animate-pulse-ring absolute inline-flex h-full w-full rounded-full bg-emerald-400" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              QA Consulting · Testing · Automation · Engineering
            </div>

            <h1 className="mt-6 font-heading font-semibold text-4xl sm:text-5xl lg:text-[3.6rem] xl:text-6xl leading-[1.05] tracking-tight text-emerald-950 text-balance">
              End-to-End{" "}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-600 bg-clip-text text-transparent">
                  Quality Assurance
                </span>
                <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-emerald-400/0 via-emerald-400/70 to-emerald-400/0 rounded-full" />
              </span>{" "}
              and Automation Engineering Services
            </h1>

            <p className="mt-6 text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed">
              Delivering functional testing, API validation, automation engineering,
              framework development, QA consulting, and release assurance services for
              startups, growing businesses, and enterprise organizations.
            </p>

            <div className="mt-5 h-7 flex items-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={hintIdx}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.4 }}
                  className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/80 backdrop-blur border border-emerald-100 text-xs font-medium text-emerald-800 shadow-sm"
                >
                  <Sparkles className="h-3 w-3 text-emerald-500" />
                  {ROTATING_HINTS[hintIdx]}
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <button
                onClick={openConsultation}
                data-testid="hero-book-free-consultation"
                className="btn-shine inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-emerald-600 text-white text-sm font-semibold hover:bg-emerald-700 shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/30 transition-all hover:-translate-y-0.5"
              >
                <CalendarCheck2 className="h-4 w-4" />
                Book Free Consultation
              </button>
              <a
                href="#services"
                data-testid="hero-explore-services"
                className="btn-shine inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white text-emerald-700 border border-emerald-200 hover:border-emerald-400 hover:bg-emerald-50 text-sm font-semibold transition-all"
              >
                Explore Services
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-2 max-w-xl">
              {[
                "Functional Testing",
                "API Automation",
                "UI Automation",
                "Framework Engineering",
                "Release Validation",
                "QA Consulting",
              ].map((c) => (
                <span
                  key={c}
                  data-testid={`hero-capability-${c.toLowerCase().replace(/\//g, "-").replace(/\s+/g, "-")}`}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/80 backdrop-blur border border-emerald-100 text-xs font-medium text-emerald-800 hover:border-emerald-300 hover:bg-emerald-50 transition"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  {c}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative animate-float-slow">
              <div className="absolute -inset-6 bg-gradient-to-br from-emerald-300/30 via-teal-200/30 to-transparent blur-3xl rounded-[3rem]" />
              <div className="relative rounded-3xl glass border border-white/60 shadow-[0_30px_80px_-24px_rgba(2,44,34,0.18)] p-5 sm:p-6 gradient-border">
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-rose-400/80" />
                    <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
                  </div>
                  <span className="font-mono text-[10px] text-slate-500">qasoftlabs › release-pipeline</span>
                </div>

                <div className="grid grid-cols-3 gap-3">
                  <Tile icon={<Activity className="h-4 w-4" />} label="Suites" value="248" />
                  <Tile icon={<Zap className="h-4 w-4" />} label="Pass Rate" value="99.2%" highlight />
                  <Tile icon={<GitBranch className="h-4 w-4" />} label="Parallel" value="32x" />
                </div>

                <div className="mt-5 rounded-2xl border border-emerald-100 bg-white/70 p-4">
                  <div className="flex items-center justify-between text-xs text-slate-500 mb-3">
                    <span className="font-medium">Regression Run · #4821</span>
                    <span className="font-mono text-emerald-600">02:14</span>
                  </div>
                  <div className="space-y-2.5">
                    {[
                      { label: "auth.spec.ts", time: "412ms" },
                      { label: "checkout.spec.ts", time: "1.1s" },
                      { label: "api/payments.test.ts", time: "289ms" },
                      { label: "dashboard.e2e.ts", time: "964ms" },
                    ].map((row, i) => (
                      <motion.div
                        key={row.label}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 + i * 0.08 }}
                        className="flex items-center justify-between text-xs"
                      >
                        <div className="flex items-center gap-2 font-mono text-slate-600">
                          <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500" />
                          {row.label}
                        </div>
                        <span className="font-mono text-slate-400">{row.time}</span>
                      </motion.div>
                    ))}
                  </div>

                  <div className="mt-4 h-1.5 w-full rounded-full bg-emerald-50 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "92%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, ease: "easeOut" }}
                      className="h-full bg-gradient-to-r from-emerald-400 to-emerald-600"
                    />
                  </div>
                </div>

                <div className="mt-4 flex items-center gap-2 text-[11px] text-slate-500">
                  <span className="font-mono">coverage</span>
                  {[88, 92, 76, 95, 81, 90, 84, 96].map((v, i) => (
                    <span
                      key={i}
                      className="inline-block rounded-sm bg-emerald-500/80"
                      style={{ width: 6, height: `${v / 6}px` }}
                    />
                  ))}
                  <span className="font-mono text-emerald-600 ml-1">+12.4%</span>
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="absolute -left-4 sm:-left-10 top-10 hidden sm:flex items-center gap-2 px-3 py-2 rounded-2xl bg-white border border-emerald-100 shadow-lg shadow-emerald-500/5"
              >
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                <span className="text-xs font-medium text-emerald-900">Release Gate · Passed</span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.65 }}
                className="absolute -right-3 sm:-right-8 bottom-10 hidden sm:flex items-center gap-2 px-3 py-2 rounded-2xl bg-emerald-600 text-white shadow-lg shadow-emerald-500/30"
              >
                <CheckCircle2 className="h-4 w-4" />
                <span className="text-xs font-medium">Zero Critical Defects</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Tile = ({ icon, label, value, highlight }) => (
  <div
    className={`rounded-2xl border p-3 ${
      highlight
        ? "bg-emerald-600 border-emerald-600 text-white shadow-md shadow-emerald-500/20"
        : "bg-white border-emerald-100 text-emerald-900"
    }`}
  >
    <div className={`flex items-center gap-1.5 text-[10px] font-medium uppercase tracking-wider ${highlight ? "text-emerald-100" : "text-emerald-600"}`}>
      {icon}
      {label}
    </div>
    <div className="mt-1.5 font-heading text-lg font-semibold">{value}</div>
  </div>
);

export default Hero;
