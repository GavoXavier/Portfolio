"use client";

import { useEffect, type ReactNode } from "react";
import { motion, type MotionValue, useMotionValue, useReducedMotion, useSpring, useTransform } from "framer-motion";
import { SiteHeader } from "./site-header";
import { PageTransition } from "./page-transition";
import { SiteFooter } from "./site-footer";

type AppShellProps = {
  children: ReactNode;
};

export function AppShell({ children }: AppShellProps) {
  const progress = useMotionValue(0.3);
  const spring = useSpring(progress, { stiffness: 40, damping: 12 });
  const opacity = useTransform(spring, (value) => Math.max(0.1, value));

  useEffect(() => {
    const timeout = setTimeout(() => {
      progress.set(0.5);
    }, 200);
    return () => clearTimeout(timeout);
  }, [progress]);

  return (
    <div className="relative flex min-h-dvh flex-col">
      <AnimatedBackdrop opacity={opacity} />
      <SiteHeader />
      <PageTransition>
        <main
          id="main-content"
          tabIndex={-1}
          className="mx-auto flex w-full max-w-6xl flex-1 flex-col px-4 pb-16 pt-10 outline-none sm:px-6 lg:px-8"
        >
          {children}
        </main>
      </PageTransition>
      <SiteFooter />
    </div>
  );
}

type AnimatedBackdropProps = {
  opacity: MotionValue<number>;
};

function AnimatedBackdrop({ opacity }: AnimatedBackdropProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none absolute inset-0 z-[-1] overflow-hidden"
    >
      <motion.div
        className="absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-orange-500/25 blur-[130px] sm:h-[420px] sm:w-[420px]"
        animate={shouldReduceMotion ? {} : { y: [-40, 30, -50], scale: [1, 1.15, 0.95] }}
        transition={{ repeat: Infinity, duration: 18, ease: "easeInOut" }}
        style={{ opacity }}
      />
      <motion.div
        className="absolute left-[15%] top-1/3 h-64 w-64 rounded-full bg-amber-500/15 blur-[130px] sm:left-[20%]"
        animate={shouldReduceMotion ? {} : { y: [0, -30, 0], x: [0, 20, -15], scale: [1, 0.9, 1.1] }}
        transition={{ repeat: Infinity, duration: 16, ease: "easeInOut" }}
        style={{ opacity }}
      />
      <motion.div
        className="absolute right-[8%] top-1/2 h-72 w-72 rounded-full bg-yellow-500/10 blur-[130px]"
        animate={shouldReduceMotion ? {} : { y: [10, -20, 10], x: [0, -12, 18], scale: [1, 1.05, 0.95] }}
        transition={{ repeat: Infinity, duration: 20, ease: "easeInOut" }}
        style={{ opacity }}
      />
    </motion.div>
  );
}
