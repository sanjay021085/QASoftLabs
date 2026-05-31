import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import { X, CalendarCheck2 } from "lucide-react";
import { toast } from "sonner";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

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

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || form.project_brief.length < 5) {
      toast.error("Please complete name, email and a short project brief.");
      return;
    }
    setLoading(true);
    try {
      await axios.post(`${API}/consultation`, form);
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
          <div className="absolute inset-0 bg-emerald-950/40 backdrop-blur-sm" onClick={() => setOpen(false)} />
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.97 }}
            transition={{ duration: 0.25 }}
            className="relative w-full max-w-xl rounded-3xl bg-white border border-emerald-100 shadow-2xl overflow-hidden"
          >
            <div className="px-6 md:px-8 pt-6 pb-4 bg-gradient-to-br from-emerald-50 to-white">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-600 text-white shadow-md shadow-emerald-500/30">
                    <CalendarCheck2 className="h-5 w-5" />
                  </span>
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-600">Consultation</div>
                    <h3 className="font-heading text-xl font-semibold text-emerald-950">Book a 30-min strategy call</h3>
                  </div>
                </div>
                <button
                  data-testid="consultation-close"
                  onClick={() => setOpen(false)}
                  className="p-2 rounded-lg text-slate-500 hover:bg-slate-100"
                  aria-label="Close"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>

            <form onSubmit={onSubmit} className="px-6 md:px-8 py-6 space-y-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <Input label="Full name" name="name" value={form.name} onChange={onChange} testid="consult-name" />
                <Input label="Work email" name="email" type="email" value={form.email} onChange={onChange} testid="consult-email" />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <Input label="Company" name="company" value={form.company} onChange={onChange} testid="consult-company" />
                <Input label="Phone (optional)" name="phone" value={form.phone} onChange={onChange} testid="consult-phone" />
              </div>
              <Input label="Preferred date / time" name="preferred_date" value={form.preferred_date} onChange={onChange} placeholder="e.g. Wed 4PM IST" testid="consult-date" />
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-emerald-700">Project brief</label>
                <textarea
                  name="project_brief"
                  value={form.project_brief}
                  onChange={onChange}
                  rows={4}
                  data-testid="consult-brief"
                  placeholder="Stack, current QA challenges, goals…"
                  className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm text-emerald-950 placeholder:text-slate-400 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition"
                />
              </div>
              <div className="flex items-center justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="px-5 py-2.5 rounded-full text-sm font-medium text-slate-600 hover:bg-slate-100"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  data-testid="consult-submit"
                  disabled={loading}
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-emerald-600 text-white text-sm font-medium hover:bg-emerald-700 shadow-md shadow-emerald-500/25 disabled:opacity-60"
                >
                  {loading ? "Submitting…" : "Request consultation"}
                </button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const Input = ({ label, name, value, onChange, type = "text", placeholder, testid }) => (
  <div>
    <label className="block text-xs font-semibold uppercase tracking-wider text-emerald-700">{label}</label>
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

export default ConsultationDialog;
