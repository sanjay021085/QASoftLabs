import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, X, Send, ArrowRight, CheckCircle2 } from "lucide-react";
import axios from "axios";
import { toast } from "sonner";
import { openConsultation } from "@/lib/events";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

const ROTATING_PROMPTS = [
  "Need API automation?",
  "Looking for QA consulting?",
  "Framework re-engineering?",
  "Release validation services?",
  "AI assisted testing?",
];

const SUGGESTIONS = [
  { label: "What services do you provide?", target: "#services" },
  { label: "QA consulting approach", target: "#qa-consulting" },
  { label: "Framework engineering", target: "#frameworks" },
  { label: "Engagement models", target: "#engagement-models" },
  { label: "Industries served", target: "#industries" },
  { label: "Request a proposal", target: "#contact" },
];

// Animated eye avatar
const EyeAvatar = ({ size = 40 }) => {
  const [blink, setBlink] = useState(false);
  const [pupil, setPupil] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const blinkId = setInterval(() => {
      setBlink(true);
      setTimeout(() => setBlink(false), 160);
    }, 3200 + Math.random() * 1500);
    return () => clearInterval(blinkId);
  }, []);

  useEffect(() => {
    const moveId = setInterval(() => {
      setPupil({
        x: (Math.random() - 0.5) * 4,
        y: (Math.random() - 0.5) * 2.5,
      });
    }, 1800);
    return () => clearInterval(moveId);
  }, []);

  return (
    <div
      className="relative inline-flex items-center justify-center rounded-full bg-gradient-to-br from-white to-emerald-50 ring-2 ring-emerald-300/60"
      style={{ width: size, height: size }}
      data-testid="qa-copilot-eye-avatar"
    >
      {/* Eye white */}
      <div className="relative h-[70%] w-[80%] rounded-full bg-white shadow-inner overflow-hidden">
        {/* Iris */}
        <motion.div
          animate={{ x: pupil.x, y: pupil.y }}
          transition={{ type: "spring", stiffness: 90, damping: 14 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[78%] w-[50%] rounded-full bg-gradient-to-br from-emerald-500 to-emerald-800"
        >
          {/* Pupil */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[55%] w-[55%] rounded-full bg-emerald-950" />
          {/* Highlight */}
          <div className="absolute top-[15%] left-[18%] h-[28%] w-[28%] rounded-full bg-white/90" />
        </motion.div>
        {/* Eyelid (blink) */}
        <motion.div
          initial={false}
          animate={{ scaleY: blink ? 1 : 0 }}
          transition={{ duration: 0.12 }}
          style={{ transformOrigin: "top" }}
          className="absolute inset-0 bg-gradient-to-b from-emerald-100 to-emerald-50"
        />
      </div>
      {/* Online indicator */}
      <span className="absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full bg-emerald-400 ring-2 ring-white animate-pulse" />
    </div>
  );
};

const AIAssistant = () => {
  const [open, setOpen] = useState(false);
  const [tipIndex, setTipIndex] = useState(0);
  const [messages, setMessages] = useState([
    { from: "bot", text: "Hi — I'm the QASoftLabs QA Copilot. How can I help you with your quality assurance needs today?" },
  ]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const [showLead, setShowLead] = useState(false);
  const [lead, setLead] = useState({ name: "", email: "", requirement: "" });
  const [leadSending, setLeadSending] = useState(false);
  const listRef = useRef(null);

  useEffect(() => {
    if (open) return;
    const id = setInterval(() => setTipIndex((i) => (i + 1) % ROTATING_PROMPTS.length), 3500);
    return () => clearInterval(id);
  }, [open]);

  useEffect(() => {
    if (listRef.current) listRef.current.scrollTop = listRef.current.scrollHeight;
  }, [messages, typing, showLead]);

  const pushUser = (text) => setMessages((m) => [...m, { from: "user", text }]);

  const handleSuggestion = (label) => {
    pushUser(label);
    botReply(label);
  };

  const handleSend = (e) => {
    e?.preventDefault?.();
    const txt = input.trim();
    if (!txt) return;
    pushUser(txt);
    setInput("");
    botReply(txt);
  };

  const botReply = (userText) => {
    setTyping(true);
    setTimeout(() => {
      const reply = generateReply(userText);
      setMessages((m) => [
        ...m,
        { from: "bot", text: reply.text, action: reply.action, followups: reply.followups },
      ]);
      setTyping(false);
      if (reply.askForLead) setShowLead(true);
    }, 700 + Math.random() * 500);
  };

  const submitLead = async (e) => {
    e.preventDefault();
    if (!lead.name || !lead.email || !lead.requirement) {
      toast.error("Please share your name, email and requirement.");
      return;
    }
    setLeadSending(true);
    try {
      await axios.post(`${API}/contact`, {
        name: lead.name,
        email: lead.email,
        company: "",
        message: `[QA Copilot enquiry]\n[Requirement: ${lead.requirement}]\n\nForwarded from chatbot fallback.`,
      });
      toast.success("Thanks — your enquiry has been forwarded. We'll respond shortly.");
      setMessages((m) => [
        ...m,
        { from: "bot", text: `Thanks ${lead.name.split(" ")[0]} — your enquiry has been logged. The team will reach out at ${lead.email} within one business day.` },
      ]);
      setShowLead(false);
      setLead({ name: "", email: "", requirement: "" });
    } catch {
      toast.error("Could not submit. Please try the contact form.");
    } finally {
      setLeadSending(false);
    }
  };

  return (
    <>
      <div className="fixed bottom-20 right-5 z-[90] flex flex-col items-end gap-2">
        <AnimatePresence>
          {!open && (
            <motion.div
              key={tipIndex}
              initial={{ opacity: 0, y: 8, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.95 }}
              transition={{ duration: 0.35 }}
              className="hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-2xl bg-white/95 backdrop-blur border border-emerald-100 shadow-[0_10px_40px_-10px_rgba(2,44,34,0.25)] text-sm text-emerald-900 mr-1"
            >
              <Sparkles className="h-3.5 w-3.5 text-emerald-500" />
              {ROTATING_PROMPTS[tipIndex]}
            </motion.div>
          )}
        </AnimatePresence>

        <motion.button
          data-testid="ai-assistant-toggle"
          onClick={() => setOpen((s) => !s)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.96 }}
          className="relative inline-flex items-center justify-center h-16 w-16 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-700 text-white shadow-[0_18px_40px_-12px_rgba(16,185,129,0.6)] animate-glow-pulse"
          aria-label="Open QA Copilot"
        >
          <span className="absolute inset-0 rounded-full bg-emerald-400/30 animate-pulse-ring" />
          <AnimatePresence mode="wait" initial={false}>
            {open ? (
              <motion.span key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                <X className="h-5 w-5" />
              </motion.span>
            ) : (
              <motion.span key="eye" initial={{ scale: 0.6, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.6, opacity: 0 }} transition={{ duration: 0.2 }}>
                <EyeAvatar size={36} />
              </motion.span>
            )}
          </AnimatePresence>
          {!open && (
            <span className="absolute -top-0.5 -right-0.5 h-3 w-3 rounded-full bg-rose-500 border-2 border-white" />
          )}
        </motion.button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            data-testid="ai-assistant-panel"
            initial={{ opacity: 0, y: 16, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.96 }}
            transition={{ duration: 0.25 }}
            className="fixed bottom-[11rem] right-5 z-[95] w-[92vw] max-w-sm rounded-3xl border border-emerald-100 bg-white shadow-[0_30px_80px_-20px_rgba(2,44,34,0.3)] overflow-hidden"
          >
            <div className="relative px-4 py-4 bg-gradient-to-br from-emerald-600 via-emerald-700 to-emerald-800 text-white overflow-hidden">
              <div className="absolute inset-0 bg-mesh opacity-30" />
              <div className="relative flex items-center gap-3">
                <EyeAvatar size={42} />
                <div>
                  <div className="text-sm font-semibold">QASoftLabs QA Copilot</div>
                  <div className="text-[11px] text-emerald-100/90 inline-flex items-center gap-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-300 animate-pulse" />
                    Online · Quality Engineering Assistant
                  </div>
                </div>
                <button
                  onClick={() => setOpen(false)}
                  className="ml-auto p-1.5 rounded-md hover:bg-white/10"
                  aria-label="Close"
                  data-testid="ai-assistant-close"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>

            <div ref={listRef} className="px-4 py-4 max-h-80 overflow-y-auto bg-gradient-to-b from-white to-emerald-50/40 space-y-2.5">
              {messages.map((m, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.25 }}
                  className={`flex ${m.from === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div className={`max-w-[88%] flex flex-col ${m.from === "user" ? "items-end" : "items-start"}`}>
                    <div
                      className={`rounded-2xl px-3.5 py-2 text-sm leading-relaxed ${
                        m.from === "user"
                          ? "bg-emerald-600 text-white rounded-br-sm"
                          : "bg-white border border-emerald-100 text-emerald-950 rounded-bl-sm shadow-sm"
                      }`}
                    >
                      {m.text}
                      {m.action && (
                        <button
                          onClick={() => {
                            if (m.action.type === "scroll") {
                              const el = document.querySelector(m.action.target);
                              el?.scrollIntoView({ behavior: "smooth", block: "start" });
                            } else if (m.action.type === "consult") {
                              openConsultation();
                            }
                          }}
                          className="mt-2 inline-flex items-center gap-1.5 text-[11px] font-semibold text-emerald-700 hover:text-emerald-900"
                        >
                          {m.action.label} <ArrowRight className="h-3 w-3" />
                        </button>
                      )}
                    </div>
                    {m.followups && i === messages.length - 1 && !typing && (
                      <div className="mt-1.5 flex flex-wrap gap-1.5">
                        {m.followups.map((f) => (
                          <button
                            key={f}
                            onClick={() => handleSuggestion(f)}
                            className="text-[11px] font-medium px-2.5 py-1 rounded-full bg-white border border-emerald-200 text-emerald-700 hover:bg-emerald-50 transition"
                          >
                            {f}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}

              {typing && (
                <div className="flex justify-start">
                  <div className="rounded-2xl rounded-bl-sm bg-white border border-emerald-100 px-3 py-2 shadow-sm">
                    <span className="inline-flex gap-1 items-end h-4">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-bounce" style={{ animationDelay: "0ms" }} />
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-bounce" style={{ animationDelay: "120ms" }} />
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-bounce" style={{ animationDelay: "240ms" }} />
                    </span>
                  </div>
                </div>
              )}

              {showLead && (
                <motion.form
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  onSubmit={submitLead}
                  data-testid="ai-assistant-lead-form"
                  className="mt-3 rounded-2xl border border-emerald-200 bg-white p-3 space-y-2"
                >
                  <div className="text-[11px] font-bold uppercase tracking-wider text-emerald-700">Share a quick brief</div>
                  <input value={lead.name} onChange={(e) => setLead({ ...lead, name: e.target.value })} placeholder="Your name" data-testid="ai-lead-name" className="w-full rounded-lg border border-slate-200 px-3 py-2 text-xs outline-none focus:border-emerald-400" />
                  <input value={lead.email} onChange={(e) => setLead({ ...lead, email: e.target.value })} placeholder="Work email" type="email" data-testid="ai-lead-email" className="w-full rounded-lg border border-slate-200 px-3 py-2 text-xs outline-none focus:border-emerald-400" />
                  <textarea value={lead.requirement} onChange={(e) => setLead({ ...lead, requirement: e.target.value })} placeholder="Your requirement" rows={2} data-testid="ai-lead-requirement" className="w-full rounded-lg border border-slate-200 px-3 py-2 text-xs outline-none focus:border-emerald-400" />
                  <button type="submit" disabled={leadSending} data-testid="ai-lead-submit" className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-600 text-white text-[11px] font-semibold hover:bg-emerald-700 disabled:opacity-60">
                    {leadSending ? "Sending…" : (<><CheckCircle2 className="h-3 w-3" /> Submit Enquiry</>)}
                  </button>
                </motion.form>
              )}
            </div>

            {messages.length <= 2 && !showLead && (
              <div className="px-4 pb-3 flex flex-wrap gap-1.5">
                {SUGGESTIONS.map((s) => (
                  <button
                    key={s.label}
                    data-testid={`ai-suggestion-${s.label.toLowerCase().replace(/\s+/g, "-")}`}
                    onClick={() => handleSuggestion(s.label)}
                    className="text-[11px] font-medium px-2.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-800 hover:bg-emerald-100 transition"
                  >
                    {s.label}
                  </button>
                ))}
              </div>
            )}

            <form onSubmit={handleSend} className="border-t border-emerald-100 px-3 py-2.5 bg-white flex items-center gap-2">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about testing, automation, frameworks, consulting…"
                data-testid="ai-assistant-input"
                className="flex-1 bg-transparent text-sm text-emerald-950 placeholder:text-slate-400 px-2 py-1.5 outline-none"
              />
              <button
                type="submit"
                data-testid="ai-assistant-send"
                className="inline-flex items-center justify-center h-9 w-9 rounded-full bg-emerald-600 text-white hover:bg-emerald-700 shadow-md shadow-emerald-500/25"
                aria-label="Send"
              >
                <Send className="h-4 w-4" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

function generateReply(text) {
  const t = text.toLowerCase();

  if (/\b(hi|hello|hey|hola|namaste)\b/.test(t)) {
    return {
      text: "Hello — happy to help. Are you exploring QA services for a new product, an existing system or a specific release?",
      followups: ["What services do you provide?", "Who are you?", "QA consulting approach"],
    };
  }

  if (/(who are you|about|company|qasoftlabs)/.test(t)) {
    return {
      text:
        "I represent QASoftLabs — a Quality Assurance, Automation Testing, Manual Testing, Consulting and Engineering service provider. We deliver testing, automation, framework engineering and QA consulting services across multiple industries.",
      action: { type: "scroll", target: "#why-choose-us", label: "See why choose us" },
      followups: ["What services do you provide?", "Industries served", "Engagement models"],
    };
  }

  if (/(what services|services|offerings|what do you offer|what do you do)/.test(t)) {
    return {
      text:
        "QASoftLabs offers testing services (functional, API, UI, database, integration, regression, end-to-end, release validation), automation engineering, framework engineering and QA consulting.",
      action: { type: "scroll", target: "#services", label: "Open services" },
      followups: ["QA consulting approach", "Framework engineering", "Engagement models"],
    };
  }

  if (/(functional)/.test(t)) {
    return {
      text: "Functional testing validates that product behaviour aligns with documented business requirements — including positive, negative and edge scenarios.",
      action: { type: "scroll", target: "#services", label: "View services" },
      followups: ["API Testing", "End-to-End Testing", "Release Validation"],
    };
  }

  if (/(\bapi\b|rest|graphql|grpc|endpoint)/.test(t)) {
    return {
      text:
        "API testing and automation covers request/response validation, schema and contract checks, security headers, authorization and integration paths — wired into CI for every change.",
      action: { type: "scroll", target: "#automation-engineering", label: "Automation Engineering" },
      followups: ["UI Automation", "AI Assisted Testing", "Framework engineering"],
    };
  }

  if (/(\bui\b|frontend|browser|playwright|selenium|cypress)/.test(t)) {
    return {
      text: "UI testing and automation validates web/application user experiences with stable selectors, parallel execution and cross-browser coverage.",
      action: { type: "scroll", target: "#automation-engineering", label: "View automation" },
      followups: ["API Automation", "Framework design", "Engagement models"],
    };
  }

  if (/(database|\bdb\b|\bsql\b|mongo|postgres|migration)/.test(t)) {
    return {
      text: "Database testing covers data integrity, migration accuracy, stored procedures and backend consistency — typically integrated as a dedicated stage in CI.",
      followups: ["Integration Testing", "End-to-End Testing", "Regression Testing"],
    };
  }

  if (/(integration)/.test(t)) {
    return {
      text: "Integration testing verifies system-to-system communication — services, queues, ESB layers, third-party APIs and partner integrations.",
      action: { type: "scroll", target: "#services", label: "See services" },
      followups: ["End-to-End Testing", "Regression Testing", "Framework engineering"],
    };
  }

  if (/(regression)/.test(t)) {
    return {
      text: "Regression testing ensures new changes do not break existing behaviour — delivered through risk-prioritized suites that grow with the product.",
      followups: ["Automation Roadmap", "Framework engineering", "AI Assisted Regression"],
    };
  }

  if (/(framework)/.test(t)) {
    return {
      text:
        "Framework engineering covers design, review, enhancement and re-engineering of UI, API and hybrid automation frameworks — engineered for scale and maintainability.",
      action: { type: "scroll", target: "#frameworks", label: "Framework engineering" },
      followups: ["UI Automation", "API Automation", "Engagement models"],
    };
  }

  if (/(consult|strategy|assessment|architecture|roadmap)/.test(t)) {
    return {
      text:
        "QA consulting spans testing strategy, QA assessments, test architecture design, quality improvement consulting and automation roadmap planning.",
      action: { type: "scroll", target: "#qa-consulting", label: "QA consulting" },
      followups: ["Engagement models", "Industries served", "Request a proposal"],
    };
  }

  if (/(engage|engagement|model|consultant|contract|project|dedicated|hire)/.test(t)) {
    return {
      text:
        "QASoftLabs supports consulting, contract-based, project-based, component-based, test scope-based and fully customized engagement shapes — aligned to delivery rather than staffing.",
      action: { type: "scroll", target: "#engagement-models", label: "View engagement models" },
      followups: ["Book Consultation", "Request a proposal", "Industries served"],
    };
  }

  if (/(industries|domain|banking|finance|health|logistics|manufactur|saas|enterprise)/.test(t)) {
    return {
      text:
        "Industries served include Banking, Finance, Healthcare, Logistics, Manufacturing, Enterprise Applications and SaaS Platforms.",
      action: { type: "scroll", target: "#industries", label: "View industries" },
      followups: ["What services do you provide?", "Engagement models", "Request a proposal"],
    };
  }

  if (/(book|consultation|call|meet|schedule)/.test(t)) {
    return {
      text: "You can book a free consultation directly — share product context and goals, and we will return with a clear scoping summary.",
      action: { type: "consult", label: "Book Free Consultation" },
      followups: ["Send inquiry", "Request a proposal"],
    };
  }

  if (/(proposal|quote|inquiry|enquir|inquir|contact)/.test(t)) {
    return {
      text: "Happy to put together a proposal. Share a quick brief — name, email and your requirement — and the QASoftLabs team will respond within one business day.",
      askForLead: true,
      followups: ["What services do you provide?", "Engagement models"],
    };
  }

  if (/(thank|thanks|bye|goodbye|cheers)/.test(t)) {
    return {
      text: "Anytime — reach out whenever you would like to discuss quality assurance or automation engineering further.",
      action: { type: "consult", label: "Book Free Consultation" },
    };
  }

  // Fallback — collect lead info
  return {
    text:
      "I want to make sure you get a precise answer. Share your name, email and a short requirement, and the QASoftLabs team will respond directly within one business day.",
    askForLead: true,
    followups: ["What services do you provide?", "Engagement models", "Book Free Consultation"],
  };
}

export default AIAssistant;
