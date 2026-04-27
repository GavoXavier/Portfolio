"use client";

import { useState } from "react";
import { motion } from "framer-motion";

type FormState = {
  name: string;
  email: string;
  message: string;
};

const initialState: FormState = { name: "", email: "", message: "" };

function validateField(field: keyof FormState, value: string): string | undefined {
  if (field === "name" && !value.trim()) return "Please share your name.";
  if (field === "email") {
    if (!value.trim()) return "An email address helps me get back to you.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return "That email address looks incorrect.";
  }
  if (field === "message" && !value.trim()) return "Let me know how I can help.";
  return undefined;
}

export function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (field: keyof FormState) => (value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const handleBlur = (field: keyof FormState) => () => {
    const error = validateField(field, form[field]);
    if (error) setErrors((prev) => ({ ...prev, [field]: error }));
  };

  const validate = (): Partial<FormState> => {
    const nextErrors: Partial<FormState> = {};
    const ne = validateField("name", form.name);
    const ee = validateField("email", form.email);
    const me = validateField("message", form.message);
    if (ne) nextErrors.name = ne;
    if (ee) nextErrors.email = ee;
    if (me) nextErrors.message = me;
    setErrors(nextErrors);
    return nextErrors;
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validate();
    if (Object.keys(nextErrors).length > 0) {
      const firstField = Object.keys(nextErrors)[0];
      (document.getElementById(firstField) as HTMLElement)?.focus();
      return;
    }
    setSubmitted(true);
    setTimeout(() => {
      setForm(initialState);
      setSubmitted(false);
    }, 2400);
  };

  const inputClass =
    "mt-2 w-full rounded-2xl border border-zinc-800/60 bg-zinc-950/60 px-4 py-3 text-sm text-zinc-100 placeholder-zinc-600 shadow-inner shadow-zinc-950/40 outline-none transition-colors duration-300 focus:border-orange-500/60 focus:ring-2 focus:ring-orange-500/30 aria-[invalid=true]:border-rose-500/60";

  return (
    <motion.form
      onSubmit={handleSubmit}
      noValidate
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="rounded-3xl border border-zinc-800/60 bg-zinc-900/80 p-6 shadow-xl shadow-zinc-950/60 backdrop-blur-xl sm:p-8"
    >
      <fieldset className="grid gap-5 sm:grid-cols-2">
        <legend className="sr-only">Contact details</legend>

        <div className="sm:col-span-1">
          <label htmlFor="name" className="text-sm font-medium text-zinc-300">
            Name <span aria-hidden="true" className="text-rose-500">*</span>
          </label>
          <motion.input
            whileFocus={{ scale: 1.01 }}
            id="name"
            name="name"
            autoComplete="name"
            aria-required="true"
            aria-invalid={errors.name ? "true" : undefined}
            aria-describedby={errors.name ? "name-error" : undefined}
            value={form.name}
            onChange={(e) => handleChange("name")(e.target.value)}
            onBlur={handleBlur("name")}
            placeholder="How should I address you?"
            className={inputClass}
          />
          {errors.name ? <ErrorMessage id="name-error" message={errors.name} /> : null}
        </div>

        <div className="sm:col-span-1">
          <label htmlFor="email" className="text-sm font-medium text-zinc-300">
            Email <span aria-hidden="true" className="text-rose-500">*</span>
          </label>
          <motion.input
            whileFocus={{ scale: 1.01 }}
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            aria-required="true"
            aria-invalid={errors.email ? "true" : undefined}
            aria-describedby={errors.email ? "email-error" : undefined}
            value={form.email}
            onChange={(e) => handleChange("email")(e.target.value)}
            onBlur={handleBlur("email")}
            placeholder="name@company.com"
            className={inputClass}
          />
          {errors.email ? <ErrorMessage id="email-error" message={errors.email} /> : null}
        </div>
      </fieldset>

      <div className="mt-5">
        <label htmlFor="message" className="text-sm font-medium text-zinc-300">
          Project details <span aria-hidden="true" className="text-rose-500">*</span>
        </label>
        <motion.textarea
          whileFocus={{ scale: 1.01 }}
          id="message"
          name="message"
          autoComplete="off"
          aria-required="true"
          aria-invalid={errors.message ? "true" : undefined}
          aria-describedby={errors.message ? "message-error" : undefined}
          value={form.message}
          onChange={(e) => handleChange("message")(e.target.value)}
          onBlur={handleBlur("message")}
          placeholder="Tell me about your integration challenge, project timeline, or the tool stack you're curious about."
          rows={6}
          className={inputClass}
        />
        {errors.message ? <ErrorMessage id="message-error" message={errors.message} /> : null}
      </div>

      <motion.button
        type="submit"
        whileHover={{ scale: submitted ? 1 : 1.02 }}
        whileTap={{ scale: 0.96 }}
        disabled={submitted}
        aria-disabled={submitted}
        className="mt-6 inline-flex min-h-[44px] items-center justify-center rounded-full bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500 px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-zinc-950 shadow-lg shadow-orange-500/30 transition-all duration-300 hover:shadow-orange-500/50 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {submitted ? "Message Sent!" : "Send Message"}
      </motion.button>

      <motion.p
        role="status"
        aria-live="polite"
        animate={{ opacity: submitted ? 1 : 0, y: submitted ? 0 : 8 }}
        transition={{ duration: 0.3 }}
        className="mt-4 text-sm font-medium text-amber-400"
      >
        {submitted ? "Thanks for reaching out! I'll respond within 1–2 working days." : "\u00A0"}
      </motion.p>
    </motion.form>
  );
}

type ErrorMessageProps = { id: string; message: string };

function ErrorMessage({ id, message }: ErrorMessageProps) {
  return (
    <motion.p
      id={id}
      role="alert"
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      className="mt-2 text-xs font-medium text-rose-400"
    >
      {message}
    </motion.p>
  );
}
