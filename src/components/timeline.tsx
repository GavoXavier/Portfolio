"use client";

import { motion } from "framer-motion";

type TimelineItem = {
  timeframe: string;
  title: string;
  organisation: string;
  highlights: string[];
};

type TimelineProps = {
  items: TimelineItem[];
};

export function Timeline({ items }: TimelineProps) {
  return (
    <div className="relative mt-10 space-y-8 pl-6 before:absolute before:left-3 before:top-2 before:h-[calc(100%-1rem)] before:w-px before:bg-gradient-to-b before:from-orange-500/60 before:via-amber-500/20 before:to-transparent">
      {items.map((item, index) => (
        <motion.article
          key={`${item.title}-${item.timeframe}`}
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.06 }}
          className="relative rounded-3xl border border-zinc-800/60 bg-zinc-900/80 px-6 py-6 shadow-lg shadow-zinc-950/60"
        >
          <span className="absolute left-[-28px] top-6 inline-flex size-4 items-center justify-center rounded-full border-2 border-zinc-950 bg-orange-500 shadow-md shadow-orange-500/50" />
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-400">
            {item.timeframe}
          </p>
          <h3 className="mt-3 text-xl font-semibold text-zinc-100">
            {item.title}
          </h3>
          <p className="text-sm font-medium text-orange-400">
            {item.organisation}
          </p>
          <ul className="mt-4 space-y-2 text-sm text-zinc-400">
            {item.highlights.map((highlight) => (
              <li key={highlight} className="flex gap-2">
                <span className="mt-1 size-1.5 shrink-0 rounded-full bg-orange-400/70" aria-hidden />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </motion.article>
      ))}
    </div>
  );
}
