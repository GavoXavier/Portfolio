"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useTilt } from "@/hooks/use-tilt";

type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  bullets: string[];
};

type ExperienceCardProps = {
  item: ExperienceItem;
  index: number;
};

export function ExperienceCard({ item, index }: ExperienceCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const detailsId = `experience-details-${index}`;
  const { tiltStyle, highlight, onMouseMove, onMouseLeave } = useTilt(4);

  const toggleExpanded = () => setIsExpanded((prev) => !prev);

  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      style={tiltStyle}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className="group relative rounded-3xl border border-zinc-800/60 bg-zinc-900/80 p-6 shadow-xl shadow-zinc-950/60 transition-shadow duration-300 hover:shadow-orange-500/10 hover:shadow-2xl"
    >
      <motion.div
        className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background: highlight }}
      />
      <div className="absolute inset-x-8 top-0 h-px rounded-full bg-gradient-to-r from-transparent via-orange-500/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h3 className="text-xl font-semibold text-zinc-100">{item.role}</h3>
          <p className="text-sm font-medium text-orange-400">{item.company}</p>
        </div>
        <span className="rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-amber-400">
          {item.period}
        </span>
      </div>
      <motion.button
        type="button"
        onClick={toggleExpanded}
        className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-orange-500 transition-colors duration-300 hover:text-orange-400"
        whileTap={{ scale: 0.96 }}
        aria-expanded={isExpanded}
        aria-controls={detailsId}
      >
        {isExpanded ? "Hide details" : "Show more details"}
        <motion.span
          animate={{ rotate: isExpanded ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="grid size-5 place-items-center"
        >
          <ChevronDown className="size-4" aria-hidden />
        </motion.span>
      </motion.button>
      <AnimatePresence initial={false}>
        {isExpanded ? (
          <motion.div
            key="details"
            id={detailsId}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="overflow-hidden"
          >
            <ul className="mt-4 space-y-2 text-sm text-zinc-400">
              {item.bullets.map((bullet) => (
                <li key={bullet} className="flex gap-2">
                  <span className="mt-1 size-1.5 shrink-0 rounded-full bg-orange-400/60" aria-hidden />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.article>
  );
}
