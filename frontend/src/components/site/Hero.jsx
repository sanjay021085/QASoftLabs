import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CalendarCheck2, GitBranch, FlaskConical, Plug, Workflow, Rocket, CheckCircle2, Cpu } from "lucide-react";
import { openConsultation } from "@/lib/events";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
};

const stats = [
  { value: "12+", label: "Years of QA expertise" },
  { value: "200+", label: "Releases validated" },
  { value: "40+", label: "Automation frameworks" },
  { value: "7", label: "Industry verticals" },
];

const pipeline = [
  { icon: GitBranch, label: "Code Commit", status: "✓ PASSED", progress: 100, tone: "done" },
  { icon: CheckCircle2, label: "Unit Tests", status: "✓ PASSED", progress: 100, tone: "done" },
  { icon: Plug, label: "API Tests", status: "RUNNING", progress: 68, tone: "running" },
  { icon: Cpu, label: "E2E Suite", status: "QUEUED", progress: 0, tone: "queued" },
  { icon: Rocket, label: "Release Ready", status: "QUEUED", progress: 0, tone: "queued" },
];

const Hero = () => {
  return (
    <section
      id="home"
      data-testid="hero-section"
      className="relative pt-28 md:pt-32 pb-20 md:pb-24 overflow-hidden bg-emerald-950 text-white"
    >
      {/* Background grid + glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 [background-image:linear-gradient(rgba(16,185,129,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.07)_1px,transparent_1px)] [background-size:48px_48px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_30%,#000_30%,transparent_80%)]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[520px] w-[820px] rounded-full bg-emerald-500/15 blur-[140px]" />
        <div className="absolute -top-32 -left-24 h-72 w-72 rounded-full bg-emerald-500/15 blur-3xl" />
        <div className="absolute top-40 -right-20 h-80 w-80 rounded-full bg-teal-500/15 blur-3xl" />
      </div>

      {/* Floating accent eye top-right */}
      <div className="absolute top-28 right-10 hidden md:flex h-12 w-12 items-center justify-center rounded-2xl border border-emerald-500/30 bg-emerald-900/40 backdrop-blur">
        <CheckCircle2 className="h-5 w-5 text-emerald-300/80" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left content */}
          <motion.div {...fadeUp} transition={{ duration: 0.6 }} className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-900/40 backdrop-blur text-emerald-200 text-[11px] font-semibold tracking-[0.2em]">
              <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
              QUALITY ENGINEERING · CONSULTING · AUTOMATION
            </div>

            <h1
              data-testid="hero-headline"
              className="mt-7 font-heading font-bold text-[2.6rem] sm:text-5xl lg:text-6xl xl:text-7xl leading-[1.02] tracking-tight text-balance"
            >
              <span className="text-white">End-to-End </span>
              <span className="bg-gradient-to-r from-emerald-300 via-emerald-400 to-teal-300 bg-clip-text text-transparent animate-text-grad">
                Quality Assurance
              </span>
              <span className="text-white"> and </span>
              <span className="bg-gradient-to-r from-emerald-300 via-emerald-400 to-teal-300 bg-clip-text text-transparent animate-text-grad">
                Automation
              </span>
              <span className="text-white"> Engineering Services</span>
            </h1>

            <p className="mt-7 text-base sm:text-lg text-emerald-100/75 leading-relaxed max-w-2xl">
              Delivering functional testing, API validation, automation engineering, framework
              development, QA consulting, and release assurance services for startups, growing
              businesses, and enterprise organizations.
            </p>

            <div className="mt-9 flex flex-col sm:flex-row gap-3">
              <button
                onClick={openConsultation}
                data-testid="hero-book-free-consultation"
                className="btn-shine inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-emerald-500 text-emerald-950 text-sm font-bold hover:bg-emerald-400 shadow-[0_18px_40px_-12px_rgba(16,185,129,0.55)] transition-all hover:-translate-y-0.5"
              >
                <CalendarCheck2 className="h-4 w-4" />
                Book Free Consultation
                <ArrowRight className="h-4 w-4" />
              </button>
              <a
                href="#services"
                data-testid="hero-explore-services"
                className="btn-shine inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-emerald-900/50 border border-emerald-500/30 text-emerald-100 text-sm font-semibold hover:bg-emerald-900/80 hover:border-emerald-400/60 transition-all backdrop-blur"
              >
                Explore Services
              </a>
            </div>
          </motion.div>

          {/* Right: QA Pipeline Live mock */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-5 relative"
          >
            <div className="absolute -inset-6 bg-gradient-to-br from-emerald-500/20 via-teal-500/10 to-transparent blur-3xl rounded-[3rem]" />
            <div className="relative rounded-3xl border border-emerald-500/25 bg-emerald-900/40 backdrop-blur-xl p-5 sm:p-6 shadow-[0_30px_80px_-24px_rgba(0,0,0,0.6)]">
              {/* Window chrome */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-rose-400/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
                </div>
                <div className="inline-flex items-center gap-2 text-[10px] font-bold tracking-[0.22em] text-emerald-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  QA PIPELINE · LIVE
                </div>
              </div>

              <div className="space-y-3">
                {pipeline.map((row, i) => {
                  const Icon = row.icon;
                  const isDone = row.tone === "done";
                  const isRunning = row.tone === "running";
                  return (
                    <motion.div
                      key={row.label}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.15 + i * 0.08 }}
                      className="rounded-2xl border border-emerald-500/20 bg-emerald-900/30 p-3.5"
                    >
                      <div className="flex items-center gap-3">
                        <span
                          className={`inline-flex h-9 w-9 items-center justify-center rounded-xl ${
                            isDone
                              ? "bg-emerald-500/20 text-emerald-300"
                              : isRunning
                              ? "bg-emerald-500/15 text-emerald-300"
                              : "bg-emerald-500/10 text-emerald-300/70"
                          }`}
                        >
                          <Icon className="h-4 w-4" />
                        </span>
                        <div className="flex-1 min-w-0">
                          <div className="text-sm font-semibold text-emerald-50">{row.label}</div>
                        </div>
                        <div
                          className={`text-[10px] font-bold tracking-[0.2em] ${
                            isDone
                              ? "text-emerald-300"
                              : isRunning
                              ? "text-emerald-400"
                              : "text-emerald-200/40"
                          }`}
                        >
                          {row.status}
                        </div>
                      </div>
                      <div className="mt-3 h-1.5 w-full rounded-full bg-emerald-950/60 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${row.progress}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.1, delay: 0.25 + i * 0.08, ease: "easeOut" }}
                          className={`h-full rounded-full ${
                            isDone
                              ? "bg-gradient-to-r from-emerald-400 to-emerald-500"
                              : isRunning
                              ? "bg-gradient-to-r from-emerald-300 to-emerald-500 animate-pulse"
                              : "bg-emerald-700/50"
                          }`}
                        />
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              <div className="mt-5 flex items-center justify-between text-[11px]">
                <div className="inline-flex items-center gap-1.5 text-emerald-300/80">
                  <FlaskConical className="h-3.5 w-3.5" /> 0 critical defects
                </div>
                <div className="font-mono text-emerald-300">
                  coverage: <span className="text-emerald-200">94.2%</span><span className="animate-pulse">_</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 max-w-4xl"
        >
          {stats.map((s, i) => (
            <div
              key={s.label}
              data-testid={`hero-stat-${i}`}
              className="text-left"
            >
              <div className="font-heading text-3xl md:text-4xl font-bold text-emerald-300">{s.value}</div>
              <div className="mt-1 text-xs md:text-sm text-emerald-100/60">{s.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Trusted strip — marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-10 pt-8 border-t border-emerald-500/15"
        >
          <div className="flex items-center gap-3 mb-4 text-[11px] font-bold tracking-[0.22em] text-emerald-200/70">
            <Workflow className="h-3.5 w-3.5 text-emerald-400" />
            TRUSTED BY ENGINEERING TEAMS ACROSS
          </div>
          <div className="marquee-pause relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,#000_10%,#000_90%,transparent)]">
            <div className="marquee-track gap-10 py-1">
              {[...Array(2)].map((_, dup) => (
                <div key={dup} className="flex items-center gap-10 shrink-0 pr-10">
                  {["Banking", "Finance", "Healthcare", "Logistics", "Manufacturing", "Enterprise Apps", "SaaS Platforms"].map((d) => (
                    <span
                      key={`${dup}-${d}`}
                      className="text-sm md:text-base font-bold tracking-[0.18em] text-emerald-100/85 uppercase whitespace-nowrap inline-flex items-center gap-3"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                      {d}
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
