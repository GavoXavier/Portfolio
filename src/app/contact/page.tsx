"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/section-header";
import { ContactForm } from "@/components/contact-form";
import { contactInfo, contactLinks } from "@/data/profile";

export default function ContactPage() {
  return (
    <div className="space-y-16 pb-12">
      <SectionHeader
        eyebrow="Contact"
        title="Let's build something together."
        description="Need a website, a system integration, or just someone reliable to keep your tech running? I'm available for projects — reach out directly or fill in the form."
      />

      <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr]">
        <ContactForm />

        <motion.aside
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-6"
        >
          <div className="rounded-3xl border border-zinc-800/60 bg-zinc-900/80 p-6 text-sm text-zinc-400 shadow-xl shadow-zinc-950/60">
            <h3 className="text-lg font-semibold text-zinc-100">Quickest ways to reach me.</h3>
            <p className="mt-3 leading-relaxed">
              WhatsApp is fastest for project conversations. Email works great for formal
              enquiries. I typically respond within a few hours.
            </p>
            <dl className="mt-5 space-y-2">
              <div className="flex items-center justify-between">
                <dt>Email</dt>
                <dd>
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="text-orange-400 transition-colors hover:text-orange-300"
                  >
                    {contactInfo.email}
                  </a>
                </dd>
              </div>
              <div className="flex items-center justify-between">
                <dt>WhatsApp</dt>
                <dd>
                  <a
                    href={contactInfo.whatsapp}
                    target="_blank"
                    rel="noreferrer"
                    className="text-green-400 transition-colors hover:text-green-300"
                  >
                    {contactInfo.phone}
                  </a>
                </dd>
              </div>
            </dl>
          </div>

          <div className="space-y-4">
            {contactLinks.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                className="group block rounded-3xl border border-zinc-800/60 bg-zinc-900/80 p-5 text-sm text-zinc-400 shadow-lg shadow-zinc-950/40 transition-all duration-300 hover:-translate-y-1 hover:border-orange-500/30 hover:shadow-orange-500/10 hover:shadow-xl"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-400">
                  {link.label}
                </p>
                <p className="mt-2 text-zinc-400">{link.description}</p>
              </motion.a>
            ))}
          </div>
        </motion.aside>
      </div>
    </div>
  );
}
