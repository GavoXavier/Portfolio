"use client";

import Link from "next/link";
import { ArrowRight, FileText, ShieldCheck, Cpu, Globe, Zap } from "lucide-react";
import { motion } from "framer-motion";
import { contactInfo, timeline } from "@/data/profile";

const heroHighlights = [
  {
    icon: ShieldCheck,
    title: "L1/L2 Production Support",
    description: "End-to-end incident triage, diagnostics, and resolution for EATTA, Digital IPF, Payment Gateway, and Digital Channels.",
  },
  {
    icon: Globe,
    title: "Digital Partner Onboarding",
    description: "Leading partner onboarding across Astra, Xborder, and Developer Portal — aligning API specs, certificates, and compliance quickly.",
  },
  {
    icon: Zap,
    title: "Deployment & Monitoring",
    description: "Pre-deployment checks, execution support, post-deployment validation, and API performance monitoring across integration flows.",
  },
];

const stats = [
  { value: "L1/L2", label: "Production Support" },
  { value: "5+", label: "Digital Channels" },
  { value: "2", label: "Certifications" },
  { value: "2+", label: "Yrs at DTB" },
];

export default function HomePage() {
  const recentTimeline = timeline.slice(0, 2);

  return (
    <div className="space-y-20">
      {/* Hero */}
      <section className="relative overflow-hidden rounded-3xl border border-zinc-800/60 bg-gradient-to-br from-zinc-900/90 via-zinc-900/60 to-orange-950/20 p-8 shadow-2xl shadow-zinc-950/80 sm:p-12">
        {/* Corner accent lines */}
        <div className="pointer-events-none absolute left-0 top-0 h-16 w-px bg-gradient-to-b from-orange-500/60 to-transparent" />
        <div className="pointer-events-none absolute left-0 top-0 h-px w-16 bg-gradient-to-r from-orange-500/60 to-transparent" />
        <div className="pointer-events-none absolute bottom-0 right-0 h-16 w-px bg-gradient-to-t from-amber-500/40 to-transparent" />
        <div className="pointer-events-none absolute bottom-0 right-0 h-px w-16 bg-gradient-to-l from-amber-500/40 to-transparent" />

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <p className="inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-orange-400">
            <Cpu className="size-3" aria-hidden />
            {contactInfo.role}
          </p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="mt-6 text-4xl font-semibold tracking-tight text-zinc-100 sm:text-5xl lg:text-6xl"
          >
            {contactInfo.name}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="mt-3 text-lg font-medium text-orange-400"
          >
            Fintech Integrations · Fiorano ESB · DevOps Automation
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
            className="mt-6 text-base leading-relaxed text-zinc-400 sm:text-lg"
          >
            Building resilient API integrations, hardening DevSecOps workflows, and accelerating
            partner onboarding for Diamond Trust Bank&apos;s fintech ecosystem across East Africa.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35, ease: "easeOut" }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <Link
              href="/projects"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-orange-500 to-amber-500 px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-zinc-950 shadow-lg shadow-orange-500/30 transition-all duration-300 hover:scale-105 hover:shadow-orange-500/50"
            >
              View Projects
              <ArrowRight className="ml-2 size-4" aria-hidden />
            </Link>
            <Link
              href={contactInfo.resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-zinc-700/60 bg-zinc-900/70 px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-zinc-300 shadow-sm transition-all duration-300 hover:scale-105 hover:border-orange-500/40 hover:text-orange-400"
            >
              Download CV
              <FileText className="ml-2 size-4" aria-hidden />
            </Link>
          </motion.div>
        </motion.div>

        {/* Stats row */}
        <div className="mt-10 grid grid-cols-2 gap-4 border-t border-zinc-800/40 pt-8 sm:grid-cols-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 + i * 0.08 }}
              className="text-center"
            >
              <p className="text-2xl font-bold text-orange-400">{stat.value}</p>
              <p className="mt-1 text-xs font-medium uppercase tracking-widest text-zinc-500">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Highlights */}
        <div className="mt-8 grid gap-6 border-t border-zinc-800/40 pt-8 sm:grid-cols-3">
          {heroHighlights.map((highlight, index) => (
            <motion.div
              key={highlight.title}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 + index * 0.1, ease: "easeOut" }}
              className="group rounded-2xl border border-zinc-800/60 bg-zinc-900/60 p-5 transition-colors duration-300 hover:border-orange-500/30"
            >
              <highlight.icon className="size-5 text-orange-400" aria-hidden />
              <h3 className="mt-3 text-base font-semibold text-zinc-100">{highlight.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">{highlight.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Recent Impact + Current */}
      <section className="grid gap-10 lg:grid-cols-[1.2fr_1fr]">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl border border-zinc-800/60 bg-zinc-900/80 p-8 shadow-xl shadow-zinc-950/60"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-400">
            Recent Impact
          </p>
          <h2 className="mt-3 text-2xl font-semibold text-zinc-100">
            Keeping DTB&apos;s fintech ecosystem resilient.
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-zinc-400">
            Working across Fiorano ESB, FCUBS, and partner integrations to deliver seamless banking
            flows. From certificate renewals on high-risk services to UAT troubleshooting and automated
            documentation pipelines — always focused on performance, security, and developer experience.
          </p>
          <ul className="mt-6 space-y-3 text-sm text-zinc-400">
            {[
              "Trusted with production support for billers, payments, and Western Union corridors.",
              "Lead API onboarding conversations with partners, aligning specs and compliance quickly.",
              "Build tools that let operations teams self-serve documentation and validation checks.",
            ].map((point) => (
              <li key={point} className="flex gap-3">
                <span className="mt-1 size-1.5 shrink-0 rounded-full bg-orange-400/70" aria-hidden />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-6"
        >
          <div className="rounded-3xl border border-zinc-800/60 bg-zinc-900/80 p-8 shadow-xl shadow-zinc-950/60">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-400">Currently</p>
            <h3 className="mt-3 text-xl font-semibold text-zinc-100">DTB via FinSense Africa</h3>
            <p className="mt-3 text-sm text-zinc-400">
              Production support, UAT troubleshooting, API design, and DevSecOps collaboration.
            </p>
            <div className="mt-6 rounded-2xl border border-orange-500/20 bg-orange-500/8 p-4 text-sm text-amber-300">
              <p>
                &ldquo;From the middleware layer to the UX, every integration is an experience.
                I love building that bridge.&rdquo;
              </p>
            </div>
            <dl className="mt-6 space-y-2 text-sm text-zinc-400">
              <div className="flex items-center justify-between">
                <dt>Location</dt>
                <dd className="text-zinc-300">{contactInfo.location}</dd>
              </div>
              <div className="flex items-center justify-between">
                <dt>Email</dt>
                <dd>
                  <Link
                    href={`mailto:${contactInfo.email}`}
                    className="text-orange-400 transition-colors duration-300 hover:text-orange-300"
                  >
                    {contactInfo.email}
                  </Link>
                </dd>
              </div>
              <div className="flex items-center justify-between">
                <dt>Phone</dt>
                <dd>
                  <Link
                    href={`tel:${contactInfo.phone.replace(/\s/g, "")}`}
                    className="text-orange-400 transition-colors duration-300 hover:text-orange-300"
                  >
                    {contactInfo.phone}
                  </Link>
                </dd>
              </div>
            </dl>
          </div>
        </motion.div>
      </section>

      {/* Recent Milestones */}
      <section>
        <div className="rounded-3xl border border-zinc-800/60 bg-zinc-900/80 p-8 shadow-xl shadow-zinc-950/60">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-400">
            Recent Milestones
          </p>
          <div className="mt-6 space-y-6">
            {recentTimeline.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
                className="rounded-2xl border border-zinc-800/60 bg-zinc-950/50 p-6"
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="text-lg font-semibold text-zinc-100">{item.title}</h3>
                  <span className="rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-amber-400">
                    {item.timeframe}
                  </span>
                </div>
                <p className="mt-2 text-sm font-medium text-orange-400">{item.organisation}</p>
                <p className="mt-3 text-sm text-zinc-400">{item.highlights[0]}</p>
              </motion.div>
            ))}
          </div>
          <div className="mt-8 text-right text-sm font-semibold uppercase tracking-[0.2em] text-orange-400">
            <Link
              href="/experience"
              className="inline-flex items-center gap-2 transition-all duration-300 hover:translate-x-1 hover:text-orange-300"
            >
              Explore full experience
              <ArrowRight className="size-4" aria-hidden />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
