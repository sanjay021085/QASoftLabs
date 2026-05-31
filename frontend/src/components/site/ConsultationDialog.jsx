import React, { useEffect, useState, useMemo } from "react";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import { X, CalendarCheck2, Calendar, Clock } from "lucide-react";
import { toast } from "sonner";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

// Helpers for date constraints
const pad = (n) => String(n).padStart(2, "0");
const formatLocalDateTime = (d) => `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}T${pad(d.getHours())}:${pad(d.getMinutes())}`;

const ConsultationDialog = () => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    preferred_date: "",
    project_brief: "",
  });

  // min = now+1h (rounded to next 30 min), max = now + 60 days
  // Recompute whenever the dialog opens, so "min" is always relative to the moment of opening
  const { minDT, maxDT } = useMemo(() => {
    if (!open) return { minDT: "", maxDT: "" };
    const now = new Date();
    const min = new Date(now.getTime() + 60 * 60 * 1000);
    const minutes = min.getMinutes();
    min.setMinutes(minutes < 30 ? 30 : 0, 0, 0);
    if (minutes >= 30) min.setHours(min.getHours() + 1);
    const max = new Date(now.getTime() + 60 * 24 * 60 * 60 * 1000);
    return { minDT: formatLocalDateTime(min), maxDT: formatLocalDateTime(max) };
  }, [open]);

  useEffect(() => {
    const handler = () => setOpen(true);
    window.addEventListener("qasl:open-consultation", handler);
    return () => window.removeEventListener("qasl:open-consultation", handler);
  }, []);

  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const onChange = (e) => setForm((s) => ({ ...s, [e.target.name]: e.target.value }));

  const setQuickSlot = (offsetDays, hour) => {
    const d = new Date();
    d.setDate(d.getDate() + offsetDays);
    d.setHours(hour, 0, 0, 0);
    setForm((s) => ({ ...s, preferred_date: formatLocalDateTime(d) }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || form.project_brief.length < 5) {
      toast.error("Please complete name, email and a short project brief.");
      return;
    }
    setLoading(true);
    try {
      // Convert datetime-local to ISO for backend friendliness
      const payload = {
        ...form,
        preferred_date: form.preferred_date
          ? new Date(form.preferred_date).toISOString()
          : "",
      };
      await axios.post(`${API}/consultation`, payload);
      toast.success("Consultation request received. We'll confirm a time shortly.");
      setForm({ name: "", email: "", company: "", phone: "", preferred_date: "", project_brief: "" });
      setOpen(false);
    } catch (err) {
      toast.error("Could not submit. Please try again or email us directly.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          data-testid="consultation-dialog"
        >
          <div className="absolute inset-0 bg-emerald-950/50 backdrop-blur-md" onClick={() => setOpen(false)} />
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.97 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-xl rounded-3xl bg-white border border-emerald-100 shadow-[0_30px_80px_-20px_rgba(2,44,34,0.4)] overflow-hidden max-h-[92vh] overflow-y-auto"
          >
            <div className="px-6 md:px-8 pt-6 pb-4 bg-gradient-to-br from-emerald-50 via-white to-emerald-50/40 border-b border-emerald-100">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-700 text-white shadow-md shadow-emerald-500/30">
                    <CalendarCheck2 className="h-5 w-5" />
                  </span>
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-600">Free Consultation</div>
                    <h3 className="font-heading text-xl font-bold text-emerald-950">Book a 30-min QA strategy call</h3>
                  </div>
                </div>
                <button
                  data-testid="consultation-close"
                  onClick={() => setOpen(false)}
                  className="p-2 rounded-lg text-slate-500 hover:bg-slate-100 transition-colors"
                  aria-label="Close"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>

            <form onSubmit={onSubmit} className="px-6 md:px-8 py-6 space-y-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <Input label="Full name" name="name" value={form.name} onChange={onChange} testid="consult-name" placeholder="Jane Doe" required />
                <Input label="Work email" name="email" type="email" value={form.email} onChange={onChange} testid="consult-email" placeholder="jane@company.com" required />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <Input label="Company" name="company" value={form.company} onChange={onChange} testid="consult-company" placeholder="Company Inc." />
                <Input label="Phone (optional)" name="phone" value={form.phone} onChange={onChange} testid="consult-phone" placeholder="+1 …" />
              </div>

              {/* Preferred date / time — native datetime picker */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-emerald-700">Preferred date / time</label>
                <div className="relative mt-2">
                  <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-emerald-600 pointer-events-none" />
                  <input
                    type="datetime-local"
                    name="preferred_date"
                    value={form.preferred_date}
                    onChange={onChange}
                    min={minDT}
                    max={maxDT}
                    data-testid="consult-date"
                    className="w-full rounded-xl border border-slate-200 bg-white pl-10 pr-4 py-2.5 text-sm text-emerald-950 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition"
                  />
                </div>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  <QuickSlot label="Tomorrow 10AM" onClick={() => setQuickSlot(1, 10)} />
                  <QuickSlot label="Tomorrow 4PM" onClick={() => setQuickSlot(1, 16)} />
                  <QuickSlot label="In 2 days 11AM" onClick={() => setQuickSlot(2, 11)} />
                  <QuickSlot label="In 3 days 3PM" onClick={() => setQuickSlot(3, 15)} />
                </div>
                <p className="mt-1.5 text-[11px] text-slate-500 inline-flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  Times shown in your local timezone — we'll confirm the slot within one business day.
                </p>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-emerald-700">Project brief</label>
                <textarea
                  name="project_brief"
                  value={form.project_brief}
                  onChange={onChange}
                  rows={4}
                  data-testid="consult-brief"
                  placeholder="Stack, current QA challenges, goals…"
                  className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm text-emerald-950 placeholder:text-slate-400 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition resize-none"
                />
              </div>

              <div className="flex items-center justify-end gap-3 pt-1">
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="px-5 py-2.5 rounded-full text-sm font-medium text-slate-600 hover:bg-slate-100 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  data-testid="consult-submit"
                  disabled={loading}
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-emerald-600 text-white text-sm font-bold hover:bg-emerald-700 transition-all shadow-md shadow-emerald-500/25 disabled:opacity-60 hover:-translate-y-0.5"
                >
                  {loading ? "Submitting…" : "Request Consultation"}
                </button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const Input = ({ label, name, value, onChange, type = "text", placeholder, testid, required }) => (
  <div>
    <label className="block text-xs font-semibold uppercase tracking-wider text-emerald-700">
      {label}{required && <span className="text-emerald-500 ml-0.5">*</span>}
    </label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      data-testid={testid}
      className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm text-emerald-950 placeholder:text-slate-400 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition"
    />
  </div>
);

const QuickSlot = ({ label, onClick }) => (
  <button
    type="button"
    onClick={onClick}
    className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 hover:bg-emerald-100 hover:border-emerald-300 transition-colors"
  >
    {label}
  </button>
);

export default ConsultationDialog;
