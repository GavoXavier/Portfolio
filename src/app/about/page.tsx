"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/section-header";
import { Timeline } from "@/components/timeline";
import { SkillCloud } from "@/components/skill-cloud";
import { achievements, certifications, contactInfo, skills, timeline } from "@/data/profile";
import { Award, BadgeCheck } from "lucide-react";

const biography = [
  "As a Technical Implementation Engineer at Diamond Trust Bank via FinSense Africa, I work at the intersection of integration engineering, DevOps collaboration, and fintech relationship management. My role spans the full lifecycle of Fiorano ESB services—from design and QA through to production support across high-traffic billers, payments, and international corridors.",
  "I translate business and compliance needs into resilient middleware, frequently partnering with QA, DevSecOps, and infrastructure teams to ship integrations that are secure, observable, and ready for scale. When friction appears, I design automation—whether that's Rhino/JS PDF tooling, Node.js scripts to validate partner payloads, or pipelines that keep documentation in sync.",
  "Before joining DTB I interned at Quantum Plus Kenya, strengthening my full-stack foundations across React, Meteor, MongoDB, and agile operations. My BSc in Mathematics and Computer Science keeps me grounded in problem-solving and first-principles thinking.",
];

export default function AboutPage() {
  return (
    <div className="space-y-20 pb-12">
      <SectionHeader
        eyebrow="About"
        title="Fintech integrations with empathy for every stakeholder."
        description="From middleware orchestration to developer enablement, I build experiences that empower banking teams and fintech partners to work faster and safer together."
      />

      <section className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
        <div className="space-y-6 text-base text-zinc-400">
          {biography.map((paragraph, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="rounded-3xl border border-zinc-800/50 bg-zinc-900/60 p-6 leading-relaxed shadow-inner shadow-zinc-950/30"
            >
              {paragraph}
            </motion.p>
          ))}
        </div>

        <motion.aside
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-6"
        >
          <div className="rounded-3xl border border-orange-500/20 bg-orange-500/8 p-6 text-sm text-amber-300 shadow-inner shadow-orange-500/10">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-orange-400">Mission</p>
            <p className="mt-3 leading-relaxed">
              Enable banking teams to deliver dependable digital journeys—by pairing robust middleware
              with clear documentation, observability, and secure DevOps practices.
            </p>
          </div>
          <div className="rounded-3xl border border-zinc-800/60 bg-zinc-900/80 p-6 text-sm text-zinc-400 shadow-xl shadow-zinc-950/60">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-orange-400">Contact</p>
            <ul className="mt-4 space-y-2">
              <li>
                <strong className="text-zinc-300">Email:</strong>{" "}
                <a href={`mailto:${contactInfo.email}`} className="text-orange-400 transition-colors hover:text-orange-300">
                  {contactInfo.email}
                </a>
              </li>
              <li>
                <strong className="text-zinc-300">Phone:</strong>{" "}
                <a href={`tel:${contactInfo.phone.replace(/\s+/g, "")}`} className="text-orange-400 transition-colors hover:text-orange-300">
                  {contactInfo.phone}
                </a>
              </li>
              <li>
                <strong className="text-zinc-300">LinkedIn:</strong>{" "}
                <a href={contactInfo.linkedin} target="_blank" rel="noreferrer" className="text-orange-400 transition-colors hover:text-orange-300">
                  /gavinlee-fernandes
                </a>
              </li>
            </ul>
          </div>

          {/* Certifications */}
          <div className="rounded-3xl border border-zinc-800/60 bg-zinc-900/80 p-6 text-sm shadow-xl shadow-zinc-950/60">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-400">Certifications</p>
            <ul className="mt-4 space-y-3">
              {certifications.map((cert) => (
                <li key={cert.title} className="flex items-start gap-3">
                  <BadgeCheck className="mt-0.5 size-4 shrink-0 text-amber-400" aria-hidden />
                  <div>
                    <p className="font-medium text-zinc-200">{cert.title}</p>
                    <p className="text-xs text-zinc-500">{cert.issuer}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </motion.aside>
      </section>

      <section>
        <SectionHeader
          eyebrow="Career"
          title="Timeline"
          description="A snapshot of the roles and milestones that shaped my approach to integration engineering."
        />
        <Timeline items={timeline} />
      </section>

      <section>
        <SectionHeader
          eyebrow="Skills"
          title="Toolbox for integration and delivery."
          description="A blend of middleware, API, and DevOps tooling keeps me comfortable across the entire delivery lifecycle."
        />
        <SkillCloud categories={skills} />
      </section>

      <section>
        <SectionHeader
          eyebrow="Highlights"
          title="Achievements beyond the console."
          description="Empathy, grit, and teamwork travel with me—whether it's competitions, scholarships, or communities."
        />
        <motion.ul
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-8 grid gap-4 rounded-3xl border border-zinc-800/60 bg-zinc-900/80 p-6 shadow-xl shadow-zinc-950/60"
        >
          {achievements.map((achievement) => (
            <li key={achievement} className="flex gap-3 text-sm text-zinc-400">
              <Award className="mt-0.5 size-4 shrink-0 text-amber-400" aria-hidden />
              <span>{achievement}</span>
            </li>
          ))}
        </motion.ul>
      </section>
    </div>
  );
}
