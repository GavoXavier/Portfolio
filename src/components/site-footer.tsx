"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

const socials = [
  {
    href: "https://www.linkedin.com/in/gavinlee-fernandes-a347a9281",
    label: "LinkedIn",
    icon: Linkedin,
  },
  {
    href: "https://github.com/gavoxavier",
    label: "GitHub",
    icon: Github,
  },
  {
    href: "mailto:gavoxavier@gmail.com",
    label: "Email",
    icon: Mail,
  },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-zinc-800/60 py-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 text-sm text-zinc-500 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="text-center sm:text-left"
        >
          Crafted with Next.js, Tailwind CSS, and Framer Motion.{" "}
          <span className="text-orange-500/70">© {new Date().getFullYear()}</span>{" "}
          Gavinlee Fernandes.
        </motion.p>

        <div className="flex items-center justify-center gap-3 sm:justify-end">
          {socials.map(({ href, label, icon: Icon }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 + i * 0.05 }}
            >
              <Link
                href={href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex size-10 items-center justify-center rounded-full border border-zinc-800/60 bg-zinc-900/80 text-zinc-500 shadow-sm shadow-zinc-950/40 transition-all duration-300 hover:border-orange-500/40 hover:text-orange-400 hover:shadow-orange-500/10"
              >
                <Icon className="size-[18px]" aria-hidden />
                <span className="sr-only">{label}</span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </footer>
  );
}
