import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * Floating live activity badges + animated pipeline SVG overlay.
 * Rendered absolutely positioned inside the Hero section.
 */
const LiveHeroOverlay = () => {
  const events = [
    { label: "API · /payments validated", color: "emerald" },
    { label: "UI · checkout.spec.ts passed", color: "emerald" },
    { label: "CI · pipeline #4821 green", color: "emerald" },
    { label: "DB · migration verified", color: "emerald" },
    { label: "E2E · regression complete", color: "emerald" },
  ];
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setIdx((i) => (i + 1) % events.length), 2200);
    return () => clearInterval(id);
  }, [events.length]);

  return (
    <>
      {/* Animated pipeline SVG behind hero text (subtle) */}
      <svg
        aria-hidden
        className="absolute -left-10 top-32 w-[60%] h-64 opacity-50 pointer-events-none hidden md:block"
        viewBox="0 0 600 200"
      >
        <defs>
          <linearGradient id="lg" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0%" stopColor="#10B981" stopOpacity="0" />
            <stop offset="50%" stopColor="#10B981" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#10B981" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path d="M0,160 C120,80 240,200 360,120 S560,40 600,90" fill="none" stroke="#10B981" strokeOpacity="0.25" strokeWidth="2" />
        <path d="M0,160 C120,80 240,200 360,120 S560,40 600,90" fill="none" stroke="url(#lg)" strokeWidth="2.5" className="animate-dash" />
        {/* nodes */}
        {[
          { cx: 60, cy: 132 },
          { cx: 220, cy: 158 },
          { cx: 360, cy: 120 },
          { cx: 500, cy: 70 },
        ].map((n, i) => (
          <g key={i}>
            <circle cx={n.cx} cy={n.cy} r="10" fill="#10B981" fillOpacity="0.12" />
            <circle cx={n.cx} cy={n.cy} r="4" fill="#10B981" />
          </g>
        ))}
      </svg>

      {/* Floating status pill — rotates messages */}
      <div className="absolute top-24 right-4 sm:right-12 z-10 pointer-events-none">
        <AnimatePresence mode="wait">
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: -6, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 6, scale: 0.96 }}
            transition={{ duration: 0.35 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/85 backdrop-blur border border-emerald-100 shadow-[0_8px_30px_-10px_rgba(2,44,34,0.18)] text-[11px] font-medium text-emerald-800"
          >
            <span className="relative inline-flex h-2 w-2">
              <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping" />
              <span className="relative h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            {events[idx].label}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Floating mini chips */}
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-3 sm:left-10 top-[55%] hidden md:flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-900 text-emerald-300 font-mono text-[10px] shadow-lg"
      >
        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" /> tests.run(parallel:32)
      </motion.div>
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-2 sm:right-6 bottom-24 hidden md:flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-[10px] font-semibold"
      >
        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" /> CI · GREEN
      </motion.div>
    </>
  );
};

export default LiveHeroOverlay;
