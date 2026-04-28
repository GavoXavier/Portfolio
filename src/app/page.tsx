"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { ArrowRight, FileText, Monitor, Code2, Network, Activity } from "lucide-react";
import { motion } from "framer-motion";
import { contactInfo, timeline } from "@/data/profile";

const services = [
  {
    icon: Monitor,
    title: "Production Support",
    description:
      "24/7 system monitoring, incident triage, SLA management, and on-call coverage. I keep your systems online and your team unblocked.",
  },
  {
    icon: Code2,
    title: "Web & App Development",
    description:
      "React, Next.js, PHP, Node.js — clean, fast, production-ready websites and applications built to actually work.",
  },
  {
    icon: Network,
    title: "API & System Integration",
    description:
      "REST/SOAP APIs, middleware orchestration, and partner onboarding. I connect your systems with precision and document every step.",
  },
];

const stats = [
  { value: "L1/L2", label: "Production Support" },
  { value: "5+", label: "Digital Channels" },
  { value: "8", label: "Certifications" },
  { value: "2+", label: "Years at DTB" },
];

function ProfileAvatar() {
  const [imageError, setImageError] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 16 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
      className="relative mx-auto w-fit"
    >
      <div className="relative size-52 overflow-hidden rounded-[2.5rem] border border-orange-500/30 shadow-2xl shadow-orange-500/20">
        {!imageError ? (
          <Image
            src="/profile.jpg"
            alt="Gavinlee Xavier Fernandes"
            fill
            className="object-cover"
            onError={() => setImageError(true)}
            priority
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-orange-500/20 via-amber-500/10 to-zinc-900">
            <span className="select-none text-5xl font-bold tracking-tight text-orange-400/60">GF</span>
          </div>
        )}
        <div className="pointer-events-none absolute left-0 top-0 h-10 w-px bg-gradient-to-b from-orange-500/80 to-transparent" />
        <div className="pointer-events-none absolute left-0 top-0 h-px w-10 bg-gradient-to-r from-orange-500/80 to-transparent" />
        <div className="pointer-events-none absolute bottom-0 right-0 h-10 w-px bg-gradient-to-t from-amber-500/60 to-transparent" />
        <div className="pointer-events-none absolute bottom-0 right-0 h-px w-10 bg-gradient-to-l from-amber-500/60 to-transparent" />
      </div>
      <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-2 whitespace-nowrap rounded-full border border-green-500/30 bg-zinc-900/95 px-4 py-1.5 shadow-lg shadow-zinc-950/60">
        <span className="size-2 animate-pulse rounded-full bg-green-400" />
        <span className="text-xs font-semibold tracking-wide text-green-400">Open to Projects</span>
      </div>
    </motion.div>
  );
}

export default function HomePage() {
  const recentTimeline = timeline.slice(0, 2);

  return (
    <div className="space-y-24">
      {/* Hero */}
      <section className="relative overflow-hidden rounded-3xl border border-zinc-800/60 bg-gradient-to-br from-zinc-900/90 via-zinc-900/60 to-orange-950/20 p-8 shadow-2xl shadow-zinc-950/80 sm:p-12">
        <div className="pointer-events-none absolute left-0 top-0 h-20 w-px bg-gradient-to-b from-orange-500/70 to-transparent" />
        <div className="pointer-events-none absolute left-0 top-0 h-px w-20 bg-gradient-to-r from-orange-500/70 to-transparent" />
        <div className="pointer-events-none absolute bottom-0 right-0 h-20 w-px bg-gradient-to-t from-amber-500/50 to-transparent" />
        <div className="pointer-events-none absolute bottom-0 right-0 h-px w-20 bg-gradient-to-l from-amber-500/50 to-transparent" />

        <div className="grid gap-12 lg:grid-cols-[1fr_auto] lg:items-start">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="max-w-2xl"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.05, ease: "easeOut" }}
              className="text-4xl font-bold tracking-tight text-zinc-100 sm:text-5xl lg:text-6xl"
            >
              Gavinlee Xavier
              <br />
              <span className="bg-gradient-to-r from-orange-400 via-amber-400 to-yellow-400 bg-clip-text text-transparent">
                Fernandes
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
              className="mt-3 text-base font-medium tracking-wide text-orange-400/80"
            >
              IT Production Support · Banking Systems · Full-Stack Development
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.25, ease: "easeOut" }}
              className="mt-6 text-base leading-relaxed text-zinc-400 sm:text-lg"
            >
              I keep critical banking systems online at Diamond Trust Bank and build digital tools
              for people who need them done right. From 2AM incidents to greenfield web apps —
              if it needs engineering, I&apos;m your person.
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.35 }}
              className="mt-3 text-sm italic text-zinc-500"
            >
              Based in Nairobi, Kenya · Working across East Africa&apos;s fintech ecosystem
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.42, ease: "easeOut" }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <Link
                href="/projects"
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-orange-500 to-amber-500 px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-zinc-950 shadow-lg shadow-orange-500/30 transition-all duration-300 hover:scale-105 hover:shadow-orange-500/50"
              >
                View My Work
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
              <Link
                href={contactInfo.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-green-500/30 bg-green-500/8 px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-green-400 shadow-sm transition-all duration-300 hover:scale-105 hover:border-green-500/50 hover:bg-green-500/15"
              >
                WhatsApp Me
              </Link>
            </motion.div>
          </motion.div>

          <div className="hidden pt-2 lg:block">
            <ProfileAvatar />
          </div>
        </div>

        {/* Stats row */}
        <div className="mt-12 grid grid-cols-2 gap-4 border-t border-zinc-800/40 pt-8 sm:grid-cols-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 + i * 0.08 }}
              className="text-center"
            >
              <p className="text-2xl font-bold text-orange-400">{stat.value}</p>
              <p className="mt-1 text-xs font-medium uppercase tracking-widest text-zinc-500">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-orange-400">What I do</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            Need something built or kept online?
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-zinc-400">
            I combine hands-on engineering with real operational experience. Whether you need a web
            app from scratch, an API integration, or systems that stay up — I deliver fast and reliably.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group rounded-3xl border border-zinc-800/60 bg-zinc-900/70 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-orange-500/30 hover:shadow-xl hover:shadow-orange-500/8"
            >
              <div className="flex size-10 items-center justify-center rounded-2xl border border-orange-500/20 bg-orange-500/10">
                <service.icon className="size-5 text-orange-400" aria-hidden />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-zinc-100">{service.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">{service.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 text-center"
        >
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-sm font-semibold text-orange-400 transition-all duration-300 hover:gap-3 hover:text-orange-300"
          >
            Let&apos;s talk about your project
            <ArrowRight className="size-4" aria-hidden />
          </Link>
        </motion.div>
      </section>

      {/* Day to day + Currently */}
      <section className="grid gap-10 lg:grid-cols-[1.2fr_1fr]">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl border border-zinc-800/60 bg-zinc-900/80 p-8 shadow-xl shadow-zinc-950/60"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-400">Day to day</p>
          <h2 className="mt-3 text-2xl font-bold text-zinc-100">Keeping DTB&apos;s systems resilient.</h2>
          <p className="mt-4 text-sm leading-relaxed text-zinc-400">
            As Manager – IT Digital Production Support, I&apos;m the first line of defence when things go wrong.
            I monitor digital channels, triage incidents against strict SLAs, and work closely with engineering
            teams to keep everything running — from EATTA to Payment Gateway to partner-facing APIs.
          </p>
          <ul className="mt-6 space-y-3 text-sm text-zinc-400">
            {[
              "On-call coverage across critical banking platforms with strict SLA adherence.",
              "Lead partner onboarding on Astra, Xborder, and the Developer Portal.",
              "Pre and post-deployment validation ensuring zero-downtime production releases.",
            ].map((point) => (
              <li key={point} className="flex gap-3">
                <Activity className="mt-0.5 size-4 shrink-0 text-orange-400" aria-hidden />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-6"
        >
          <div className="rounded-3xl border border-zinc-800/60 bg-zinc-900/80 p-8 shadow-xl shadow-zinc-950/60">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-400">Currently</p>
            <h3 className="mt-3 text-xl font-bold text-zinc-100">Diamond Trust Bank</h3>
            <p className="mt-2 text-sm text-zinc-500">Manager – IT Digital Production Support</p>
            <div className="mt-5 rounded-2xl border border-orange-500/20 bg-orange-500/8 p-4 text-sm text-amber-300">
              <p>
                &ldquo;The best engineers I know aren&apos;t just builders —
                they&apos;re the ones who stay when things break.&rdquo;
              </p>
            </div>
            <dl className="mt-5 space-y-2 text-sm text-zinc-400">
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
                <dt>WhatsApp</dt>
                <dd>
                  <Link
                    href={contactInfo.whatsapp}
                    target="_blank"
                    rel="noreferrer"
                    className="text-green-400 transition-colors duration-300 hover:text-green-300"
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
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-400">Recent Milestones</p>
          <div className="mt-6 space-y-6">
            {recentTimeline.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="rounded-2xl border border-zinc-800/60 bg-zinc-950/50 p-6"
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="text-lg font-bold text-zinc-100">{item.title}</h3>
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
