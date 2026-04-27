"use client";

import { motion } from "framer-motion";

type SkillCloudProps = {
  categories: Record<string, string[]>;
};

const categoryStyles: Record<string, string> = {
  expertise: "from-orange-500/20 to-orange-500/5 border-orange-500/40 text-orange-400",
  tooling: "from-amber-500/20 to-amber-500/5 border-amber-500/40 text-amber-400",
  experimentation: "from-yellow-500/20 to-yellow-500/5 border-yellow-500/40 text-yellow-400",
};

const defaultStyle = "from-zinc-700/20 to-zinc-700/5 border-zinc-700/40 text-zinc-400";

export function SkillCloud({ categories }: SkillCloudProps) {
  const entries = Object.entries(categories);

  return (
    <div className="mt-10 grid gap-6 lg:grid-cols-3">
      {entries.map(([key, values], index) => (
        <motion.section
          key={key}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.06 }}
          className={`rounded-3xl border bg-gradient-to-br p-6 shadow-lg shadow-zinc-950/40 ${
            categoryStyles[key] ?? defaultStyle
          }`}
        >
          <h3 className="text-lg font-semibold capitalize text-zinc-100">{key}</h3>
          <div className="mt-4 flex flex-wrap gap-2">
            {values.map((value) => (
              <span
                key={value}
                className="inline-flex items-center rounded-full border border-current/40 bg-zinc-950/40 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-current backdrop-blur-sm"
              >
                {value}
              </span>
            ))}
          </div>
        </motion.section>
      ))}
    </div>
  );
}
