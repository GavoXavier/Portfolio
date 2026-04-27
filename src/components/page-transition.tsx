"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, type ReactNode } from "react";

type PageTransitionProps = {
  children: ReactNode;
};

export function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname();
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const el = document.getElementById("main-content");
    if (el) el.focus({ preventScroll: true });
  }, [pathname]);

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={pathname}
        initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 12 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.35, ease: "easeOut" },
        }}
        exit={{
          opacity: 0,
          y: shouldReduceMotion ? 0 : -8,
          transition: { duration: 0.22, ease: "easeIn" },
        }}
        className="flex-1"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
