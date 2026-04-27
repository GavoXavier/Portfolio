"use client";

import Link from "next/link";
import { useState } from "react";
import { Github, Globe, ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useTilt } from "@/hooks/use-tilt";

export type Project = {
  title: string;
  description: string;
  outcomes: string[];
  technologies: string[];
  github?: string;
  demo?: string;
  details?: {
    overview: string;
    features?: { title: string; description: string }[];
    stack?: { label: string; items: string[] }[];
    resources?: { label: string; href: string }[];
  };
};

type ProjectCardProps = {
  project: Project;
  index: number;
};

export function ProjectCard({ project, index }: ProjectCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const detailsId = `project-details-${index}`;
  const { tiltStyle, highlight, onMouseMove, onMouseLeave } = useTilt(6);

  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      style={tiltStyle}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className="group relative flex flex-col rounded-3xl border border-zinc-800/60 bg-zinc-900/80 p-6 shadow-xl shadow-zinc-950/60 transition-shadow duration-300 hover:shadow-orange-500/10 hover:shadow-2xl"
    >
      {/* Dynamic highlight that follows cursor tilt */}
      <motion.div
        className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background: highlight }}
      />
      {/* Top edge glow on hover */}
      <div className="absolute inset-x-8 top-0 h-px rounded-full bg-gradient-to-r from-transparent via-orange-500/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <h3 className="text-2xl font-semibold text-zinc-100">{project.title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-zinc-400">{project.description}</p>
      <ul className="mt-4 space-y-2 text-sm text-zinc-400">
        {project.outcomes.map((outcome) => (
          <li key={outcome} className="flex gap-2">
            <span className="mt-1 size-1.5 shrink-0 rounded-full bg-orange-400/70" aria-hidden />
            <span>{outcome}</span>
          </li>
        ))}
      </ul>
      <div className="mt-6 flex flex-wrap gap-2">
        {project.technologies.map((tech) => (
          <span
            key={tech}
            className="rounded-full border border-zinc-700/60 bg-zinc-800/70 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-zinc-400"
          >
            {tech}
          </span>
        ))}
      </div>
      <div className="mt-6 flex items-center gap-4 text-sm font-medium text-orange-500">
        {project.github ? (
          <Link
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 transition-colors duration-300 hover:text-amber-400"
          >
            <Github className="size-4" aria-hidden />
            GitHub
          </Link>
        ) : null}
        {project.demo && project.demo !== "#" ? (
          <Link
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 transition-colors duration-300 hover:text-amber-400"
          >
            <Globe className="size-4" aria-hidden />
            Live Demo
          </Link>
        ) : null}
      </div>
      {project.details ? (
        <div className="mt-6 border-t border-zinc-800/70 pt-6">
          <button
            type="button"
            onClick={() => setIsExpanded((prev) => !prev)}
            aria-expanded={isExpanded}
            aria-controls={detailsId}
            className="inline-flex min-h-[44px] items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/8 px-5 py-2 text-sm font-semibold tracking-wide text-orange-400 transition-colors duration-300 hover:border-orange-500/50 hover:bg-orange-500/15 hover:text-orange-300"
          >
            <span>{isExpanded ? "Hide deep dive" : "Explore the build"}</span>
            <ChevronDown
              className={`size-4 transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`}
              aria-hidden
            />
          </button>
          <AnimatePresence initial={false}>
            {isExpanded ? (
              <motion.div
                id={detailsId}
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="mt-5 space-y-5 rounded-2xl border border-zinc-800/60 bg-zinc-950/60 p-5 text-left text-sm text-zinc-400">
                  <p className="leading-relaxed text-zinc-300">{project.details.overview}</p>
                  {project.details.features && project.details.features.length > 0 ? (
                    <div>
                      <h4 className="text-xs font-semibold uppercase tracking-[0.22em] text-zinc-500">
                        Feature highlights
                      </h4>
                      <ul className="mt-2 space-y-3">
                        {project.details.features.map((feature) => (
                          <li key={feature.title}>
                            <p className="font-semibold text-zinc-200">{feature.title}</p>
                            <p className="mt-1 text-zinc-400">{feature.description}</p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : null}
                  {project.details.stack && project.details.stack.length > 0 ? (
                    <div>
                      <h4 className="text-xs font-semibold uppercase tracking-[0.22em] text-zinc-500">
                        Stack
                      </h4>
                      <div className="mt-3 grid gap-3 sm:grid-cols-2">
                        {project.details.stack.map((group) => (
                          <div
                            key={group.label}
                            className="rounded-xl border border-zinc-800/80 bg-zinc-900/70 p-3"
                          >
                            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">
                              {group.label}
                            </p>
                            <ul className="mt-2 space-y-1">
                              {group.items.map((item) => (
                                <li key={item} className="text-zinc-400">{item}</li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : null}
                  {project.details.resources && project.details.resources.length > 0 ? (
                    <div>
                      <h4 className="text-xs font-semibold uppercase tracking-[0.22em] text-zinc-500">
                        Resources
                      </h4>
                      <ul className="mt-2 flex flex-wrap gap-3">
                        {project.details.resources.map((resource) => (
                          <li key={resource.href}>
                            <Link
                              href={resource.href}
                              target="_blank"
                              rel="noreferrer"
                              className="inline-flex items-center gap-2 rounded-full border border-zinc-700/70 bg-zinc-900/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-orange-400 transition-colors duration-300 hover:border-orange-500/40 hover:bg-orange-500/10"
                            >
                              {resource.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : null}
                </div>
              </motion.div>
            ) : null}
          </AnimatePresence>
        </div>
      ) : null}
    </motion.article>
  );
}
