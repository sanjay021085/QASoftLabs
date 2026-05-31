import React, { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { Mail, MessageCircle, Send, CalendarCheck2 } from "lucide-react";
import { toast } from "sonner";
import { SectionHeader } from "@/components/site/Services";
import { openConsultation } from "@/lib/events";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;
const WHATSAPP_NUMBER = "919925123492";
const WHATSAPP_TEXT = "Hi%20QASoftLabs%2C%20I'd%20like%20to%20discuss%20a%20QA%20engagement.";

const REQUIREMENTS = [
  "Functional Testing",
  "API Testing",
  "UI Testing",
  "Database Testing",
  "Integration Testing",
  "Regression Testing",
  "End-to-End Testing",
  "Release Validation",
  "UI Automation",
  "API Automation",
  "AI Assisted Testing",
  "Framework Design",
  "Framework Enhancement",
  "Framework Re-Engineering",
  "QA Consulting",
  "QA Assessment",
  "Test Architecture Design",
  "Automation Roadmap Planning",
  "Other",
];

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", company: "", requirement: "", message: "" });
  const [loading, setLoading] = useState(false);

  const onChange = (e) => setForm((s) => ({ ...s, [e.target.name]: e.target.value }));

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || form.message.length < 5) {
      toast.error("Please complete name, email and a brief message.");
      return;
    }
    setLoading(true);
    try {
      const composed = form.requirement
        ? `[Requirement: ${form.requirement}]\n\n${form.message}`
        : form.message;
      await axios.post(`${API}/contact`, {
        name: form.name,
        email: form.email,
        company: form.company,
        message: composed,
      });
      toast.success("Thanks! Your enquiry has been received. We'll reply within 1 business day.");
      setForm({ name: "", email: "", company: "", requirement: "", message: "" });
    } catch (err) {
      toast.error("Could not send right now. Please try again or use WhatsApp.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" data-testid="contact-section" className="relative py-24 md:py-28 bg-white">
      <div className="absolute inset-0 bg-radial-emerald opacity-60 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          overline="Contact"
          title="Discuss your quality assurance objectives"
          subtitle="Share a short brief about your product, release goals or current QA challenges. A practical response — with the next step — usually comes back within one business day."
        />

        <div className="mt-14 grid lg:grid-cols-5 gap-8 items-start">
          <motion.aside
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2 space-y-5"
          >
            <div className="rounded-3xl border border-emerald-100 bg-gradient-to-br from-emerald-600 to-emerald-700 p-7 md:p-8 text-white shadow-[0_30px_80px_-30px_rgba(16,185,129,0.5)]">
              <div className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-100">
                <span className="h-px w-6 bg-emerald-200" /> Direct Channel
              </div>
              <h3 className="mt-3 font-heading text-2xl font-semibold">Engage directly with QA engineering.</h3>
              <p className="mt-3 text-sm text-emerald-50/90 leading-relaxed">
                Every enquiry is handled by the engineers who deliver the work — no sales filters, no scripted pitches. Just a direct, practical conversation about your QA objectives.
              </p>

              <div className="mt-6 space-y-3 text-sm">
                <a
                  href="mailto:sanjay.businesstech@gmail.com"
                  data-testid="contact-email"
                  className="flex items-center gap-3 hover:underline"
                >
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-white/10">
                    <Mail className="h-4 w-4" />
                  </span>
                  sanjay.businesstech@gmail.com
                </a>
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_TEXT}`}
                  target="_blank"
                  rel="noreferrer"
                  data-testid="contact-whatsapp-link"
                  className="flex items-center gap-3 hover:underline"
                >
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-white/10">
                    <MessageCircle className="h-4 w-4" />
                  </span>
                  Chat on WhatsApp
                </a>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                <a
                  data-testid="contact-whatsapp"
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_TEXT}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-emerald-700 text-sm font-semibold hover:bg-emerald-50 transition"
                >
                  <MessageCircle className="h-4 w-4" /> Open WhatsApp
                </a>
                <button
                  data-testid="contact-book-consultation"
                  onClick={openConsultation}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-950 text-white text-sm font-semibold hover:bg-black transition"
                >
                  <CalendarCheck2 className="h-4 w-4" /> Book Free Consultation
                </button>
              </div>
            </div>

            <div className="rounded-3xl border border-emerald-100 bg-white p-6">
              <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-600">Response Window</div>
              <div className="mt-2 font-heading text-lg font-semibold text-emerald-950">
                Typically responds within one business day
              </div>
              <p className="mt-2 text-sm text-slate-500">
                Share product context, current QA pain points or a Loom walk-through. You will receive a clear scoping summary along with an indicative engagement shape.
              </p>
            </div>
          </motion.aside>

          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            onSubmit={onSubmit}
            data-testid="contact-form"
            className="lg:col-span-3 rounded-3xl border border-emerald-100 bg-white p-6 md:p-10 shadow-[0_20px_60px_-30px_rgba(2,44,34,0.15)]"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <Field label="Full Name" name="name" value={form.name} onChange={onChange} placeholder="Jane Doe" testid="contact-name" />
              <Field label="Company" name="company" value={form.company} onChange={onChange} placeholder="Company Inc." testid="contact-company" />
            </div>
            <div className="mt-5 grid sm:grid-cols-2 gap-5">
              <Field label="Work Email" name="email" type="email" value={form.email} onChange={onChange} placeholder="jane@company.com" testid="contact-email-input" />
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-emerald-700">Requirement</label>
                <select
                  name="requirement"
                  value={form.requirement}
                  onChange={onChange}
                  data-testid="contact-requirement"
                  className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-emerald-950 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition"
                >
                  <option value="">Select a service area</option>
                  {REQUIREMENTS.map((r) => (
                    <option key={r} value={r}>{r}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="mt-5">
              <label className="block text-xs font-semibold uppercase tracking-wider text-emerald-700">Message</label>
              <textarea
                name="message"
                value={form.message}
                onChange={onChange}
                rows={5}
                data-testid="contact-message"
                placeholder="Describe your product, current QA setup and what you would like to achieve…"
                className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-emerald-950 placeholder:text-slate-400 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition"
              />
            </div>
            <div className="mt-7 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <p className="text-xs text-slate-500">
                By submitting, you agree to be contacted regarding your enquiry. Your information is never shared.
              </p>
              <button
                type="submit"
                data-testid="contact-submit"
                disabled={loading}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-600 text-white text-sm font-semibold hover:bg-emerald-700 transition shadow-md shadow-emerald-500/20 disabled:opacity-60"
              >
                {loading ? "Sending…" : (<>Send Enquiry <Send className="h-4 w-4" /></>)}
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

const Field = ({ label, name, value, onChange, type = "text", placeholder, testid }) => (
  <div>
    <label className="block text-xs font-semibold uppercase tracking-wider text-emerald-700">{label}</label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      data-testid={testid}
      className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-emerald-950 placeholder:text-slate-400 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition"
    />
  </div>
);

export default Contact;
