"use client";

import { useMotionTemplate, useMotionValue, useSpring, useTransform } from "framer-motion";

export function useTilt(maxDeg = 7) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [maxDeg, -maxDeg]), {
    stiffness: 300,
    damping: 30,
  });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-maxDeg, maxDeg]), {
    stiffness: 300,
    damping: 30,
  });

  const highlightX = useTransform(x, [-0.5, 0.5], ["20%", "80%"]);
  const highlightY = useTransform(y, [-0.5, 0.5], ["20%", "80%"]);
  const highlight = useMotionTemplate`radial-gradient(circle at ${highlightX} ${highlightY}, rgba(249,115,22,0.10), transparent 65%)`;

  const onMouseMove = (e: React.MouseEvent) => {
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const onMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return {
    tiltStyle: {
      rotateX,
      rotateY,
      transformStyle: "preserve-3d" as const,
    },
    highlight,
    onMouseMove,
    onMouseLeave,
  };
}
