"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { SectionHeader } from "@/components/section-header";
import { Timeline } from "@/components/timeline";
import { SkillCloud } from "@/components/skill-cloud";
import { achievements, certifications, contactInfo, skills, timeline } from "@/data/profile";
import { Award, BadgeCheck, ShieldCheck } from "lucide-react";

const biography = [
  "I'm the Manager – IT Digital Production Support at Diamond Trust Bank, which basically means I'm the person who gets called when something breaks. I monitor EATTA, Digital IPF, Payment Gateway, and Digital Channels — and when an alert fires, I triage fast, escalate smart, and document everything. It's high-stakes work and I genuinely love the pressure.",
  "Before stepping into this role, I spent over a year as a Technical Implementation Engineer at DTB via FinSense Africa — building and deploying 10+ production APIs on Fiorano ESB, writing automation utilities in Node.js, and managing certificate lifecycles for high-risk systems. That engineering depth is what makes me effective in operations today: I can read a log, trace an API call, and diagnose a middleware fault because I've built these systems myself.",
  "Outside of DTB, I build websites and digital tools for people who need them done right and fast. React, Next.js, PHP, Node.js — from landing pages to full systems. I studied Mathematics and Computer Science at Kenya Methodist University, and that first-principles thinking shapes how I approach every problem, whether it's a 2AM incident or a greenfield project.",
];

function ProfileAvatar() {
  const [imageError, setImageError] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="relative mx-auto w-fit"
    >
      <div className="relative size-44 overflow-hidden rounded-[2rem] border border-orange-500/30 shadow-2xl shadow-orange-500/15">
        {!imageError ? (
          <Image
            src="/profile.jpg"
            alt="Gavinlee Xavier Fernandes"
            fill
            className="object-cover"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-orange-500/20 via-amber-500/10 to-zinc-900">
            <span className="select-none text-4xl font-bold tracking-tight text-orange-400/60">GF</span>
          </div>
        )}
        <div className="pointer-events-none absolute left-0 top-0 h-8 w-px bg-gradient-to-b from-orange-500/80 to-transparent" />
        <div className="pointer-events-none absolute left-0 top-0 h-px w-8 bg-gradient-to-r from-orange-500/80 to-transparent" />
        <div className="pointer-events-none absolute bottom-0 right-0 h-8 w-px bg-gradient-to-t from-amber-500/60 to-transparent" />
        <div className="pointer-events-none absolute bottom-0 right-0 h-px w-8 bg-gradient-to-l from-amber-500/60 to-transparent" />
      </div>
      <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-2 whitespace-nowrap rounded-full border border-orange-500/30 bg-zinc-900/95 px-3 py-1.5 shadow-lg">
        <span className="size-2 animate-pulse rounded-full bg-orange-400" />
        <span className="text-xs font-semibold text-orange-400">Nairobi, Kenya</span>
      </div>
    </motion.div>
  );
}

export default function AboutPage() {
  const dtbCerts = certifications.filter((c) => c.category === "Banking & Compliance");
  const personalCerts = certifications.filter((c) => c.category === "Personal Endeavours");

  return (
    <div className="space-y-20 pb-12">
      <SectionHeader
        eyebrow="About"
        title="Systems, code, and getting things done."
        description="I work at the intersection of IT operations and software development — keeping banking systems resilient and building digital products that actually ship."
      />

      {/* Bio + Sidebar */}
      <section className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
        <div className="space-y-5">
          {biography.map((paragraph, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="rounded-3xl border border-zinc-800/50 bg-zinc-900/60 p-6 text-base leading-relaxed text-zinc-400 shadow-inner shadow-zinc-950/30"
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
          <div className="flex justify-center pt-2">
            <ProfileAvatar />
          </div>

          <div className="mt-6 rounded-3xl border border-orange-500/20 bg-orange-500/8 p-6 text-sm text-amber-300 shadow-inner shadow-orange-500/10">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-orange-400">My philosophy</p>
            <p className="mt-3 leading-relaxed">
              The best systems are the ones nobody talks about — because they&apos;re always up.
              I build and support with that standard in mind.
            </p>
          </div>

          <div className="rounded-3xl border border-zinc-800/60 bg-zinc-900/80 p-6 text-sm text-zinc-400 shadow-xl shadow-zinc-950/60">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-orange-400">Quick contact</p>
            <ul className="mt-4 space-y-2">
              <li>
                <strong className="text-zinc-300">Email </strong>
                <a href={`mailto:${contactInfo.email}`} className="text-orange-400 transition-colors hover:text-orange-300">
                  {contactInfo.email}
                </a>
              </li>
              <li>
                <strong className="text-zinc-300">WhatsApp </strong>
                <a href={contactInfo.whatsapp} target="_blank" rel="noreferrer" className="text-green-400 transition-colors hover:text-green-300">
                  {contactInfo.phone}
                </a>
              </li>
              <li>
                <strong className="text-zinc-300">LinkedIn </strong>
                <a href={contactInfo.linkedin} target="_blank" rel="noreferrer" className="text-orange-400 transition-colors hover:text-orange-300">
                  /gavinlee-fernandes
                </a>
              </li>
            </ul>
          </div>
        </motion.aside>
      </section>

      {/* Certifications */}
      <section>
        <SectionHeader
          eyebrow="Certifications"
          title="8 certifications across compliance and engineering."
          description="A mix of corporate banking compliance training at DTB and personal technical certifications earned independently."
        />
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl border border-amber-500/20 bg-zinc-900/80 p-6 shadow-xl shadow-zinc-950/60"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-400">DTB — Banking &amp; Compliance</p>
            <ul className="mt-5 space-y-3">
              {dtbCerts.map((cert) => (
                <li key={cert.title} className="flex items-start gap-3">
                  <ShieldCheck className="mt-0.5 size-4 shrink-0 text-amber-400" aria-hidden />
                  <div>
                    <p className="text-sm font-medium text-zinc-200">{cert.title}</p>
                    <p className="text-xs text-zinc-500">{cert.issuer}</p>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-3xl border border-orange-500/20 bg-zinc-900/80 p-6 shadow-xl shadow-zinc-950/60"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-orange-400">Personal Endeavours</p>
            <ul className="mt-5 space-y-3">
              {personalCerts.map((cert) => (
                <li key={cert.title} className="flex items-start gap-3">
                  <BadgeCheck className="mt-0.5 size-4 shrink-0 text-orange-400" aria-hidden />
                  <div>
                    <p className="text-sm font-medium text-zinc-200">{cert.title}</p>
                    <p className="text-xs text-zinc-500">{cert.issuer}</p>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section>
        <SectionHeader
          eyebrow="Career"
          title="Where I've been."
          description="The roles and experiences that shaped who I am as an engineer and operator."
        />
        <Timeline items={timeline} />
      </section>

      {/* Skills */}
      <section>
        <SectionHeader
          eyebrow="Skills"
          title="What I work with."
          description="A blend of operational tools, middleware, and development frameworks built over real production experience."
        />
        <SkillCloud categories={skills} />
      </section>

      {/* Achievements */}
      <section>
        <SectionHeader
          eyebrow="Highlights"
          title="Beyond the terminal."
          description="Competition, scholarships, and sport — the things that taught me how to win under pressure."
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
