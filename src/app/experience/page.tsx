"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { SectionHeader } from "@/components/section-header";
import { ExperienceCard } from "@/components/experience-card";
import { contactInfo, experience } from "@/data/profile";
import { FileDown, ShieldCheck } from "lucide-react";

export default function ExperiencePage() {
  return (
    <div className="space-y-16 pb-12">
      <SectionHeader
        eyebrow="Experience"
        title="Navigating production systems with precision."
        description="From supporting high-stakes billers to automating documentation workflows, here's how I deliver value across fintech teams."
      />

      <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr]">
        <div className="space-y-6">
          {experience.map((role, index) => (
            <ExperienceCard key={role.company} item={role} index={index} />
          ))}
        </div>

        <motion.aside
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-6"
        >
          <div className="rounded-3xl border border-zinc-800/60 bg-zinc-900/80 p-8 text-sm text-zinc-400 shadow-xl shadow-zinc-950/60">
            <h3 className="text-lg font-semibold text-zinc-100">How I collaborate</h3>
            <ul className="mt-4 space-y-3">
              {[
                "Partner with DevSecOps to embed security scans, Trivy checks, and observability into release workflows.",
                "Translate API specs into developer-friendly docs and integration guides.",
                "Champion blameless post-incident reviews and transparent communication with partners.",
              ].map((point) => (
                <li key={point} className="flex gap-3">
                  <ShieldCheck className="mt-0.5 size-4 shrink-0 text-orange-400" aria-hidden />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl border border-orange-500/20 bg-orange-500/8 p-8 text-sm text-amber-300 shadow-inner shadow-orange-500/10">
            <h3 className="text-lg font-semibold text-zinc-100">Need my resume?</h3>
            <p className="mt-3 text-zinc-400">
              Explore a detailed view of integrations, tooling, and achievements I&apos;ve stewarded recently.
            </p>
            <Link
              href={contactInfo.resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex items-center justify-center rounded-full border border-orange-500/40 bg-zinc-900/80 px-5 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-orange-400 shadow-lg shadow-orange-500/10 transition-all duration-300 hover:scale-105 hover:bg-orange-500/10"
            >
              <FileDown className="mr-2 size-4" aria-hidden />
              Download CV
            </Link>
          </div>
        </motion.aside>
      </div>
    </div>
  );
}
