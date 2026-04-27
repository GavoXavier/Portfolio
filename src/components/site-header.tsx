"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/experience", label: "Experience" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-40 w-full backdrop-glass supports-[backdrop-filter]:backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2 font-semibold tracking-tight">
          <motion.span
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 280, damping: 24 }}
            className="rounded-full border border-orange-500/40 bg-orange-500/10 px-3 py-1 text-sm uppercase tracking-widest text-orange-400"
          >
            GF
          </motion.span>
          <span className="hidden text-sm font-medium text-zinc-300 transition-colors duration-300 sm:inline">
            Gavinlee Fernandes
          </span>
        </Link>

        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-1 rounded-full border border-zinc-800/60 bg-zinc-900/70 px-1 py-1 text-sm font-medium shadow-sm shadow-zinc-950/40 transition-colors duration-300 sm:flex"
        >
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={`relative rounded-full px-4 py-2.5 transition-colors duration-300 hover:text-orange-400 ${
                  isActive ? "text-orange-400" : "text-zinc-400"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-0 rounded-full bg-orange-500/15 shadow-inner shadow-orange-500/20"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </Link>
            );
          })}
        </nav>

        <motion.button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="inline-flex size-11 items-center justify-center rounded-full border border-zinc-800/60 bg-zinc-900/80 text-zinc-400 shadow-sm shadow-zinc-950/40 transition-colors duration-300 hover:text-orange-400 sm:hidden"
          whileTap={{ scale: 0.92 }}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label="Toggle navigation"
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={isOpen ? "close" : "menu"}
              initial={{ opacity: 0, rotate: -15, scale: 0.8 }}
              animate={{ opacity: 1, rotate: 0, scale: 1 }}
              exit={{ opacity: 0, rotate: 15, scale: 0.8 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              className="grid place-items-center"
            >
              {isOpen ? <X className="size-5" /> : <Menu className="size-5" />}
            </motion.span>
          </AnimatePresence>
        </motion.button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.nav
            id="mobile-menu"
            aria-label="Mobile navigation"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ type: "spring", stiffness: 180, damping: 24 }}
            className="sm:hidden"
          >
            <ul className="mx-4 mb-4 space-y-2 rounded-3xl border border-zinc-800/60 bg-zinc-900/80 p-4 text-base font-medium shadow-lg shadow-zinc-950/60">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <motion.li key={item.href} whileTap={{ scale: 0.98 }}>
                    <Link
                      href={item.href}
                      onClick={closeMenu}
                      aria-current={isActive ? "page" : undefined}
                      className={`relative block min-h-[44px] rounded-2xl px-4 py-3 transition-colors duration-300 hover:bg-orange-500/10 hover:text-orange-400 ${
                        isActive ? "text-orange-400" : "text-zinc-400"
                      }`}
                    >
                      {isActive && (
                        <motion.span
                          layoutId="mobile-active"
                          className="absolute inset-0 rounded-2xl border border-orange-500/30 bg-orange-500/10"
                          transition={{ type: "spring", stiffness: 280, damping: 26 }}
                        />
                      )}
                      <span className="relative z-10">{item.label}</span>
                    </Link>
                  </motion.li>
                );
              })}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
