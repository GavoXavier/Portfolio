"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

type Particle = {
  id: number;
  x: number;
  y: number;
  color: string;
  size: number;
  driftX: number;
  driftY: number;
  rotation: number;
};

const COLORS = [
  "#F97316", // orange-500
  "#F59E0B", // amber-500
  "#EAB308", // yellow-500
  "#FDE68A", // amber-200
  "#FFFFFF", // white
];

let particleId = 0;

export function CursorSparkle() {
  const [particles, setParticles] = useState<Particle[]>([]);
  const shouldReduceMotion = useReducedMotion();
  const lastSpawnTime = useRef(0);

  useEffect(() => {
    if (shouldReduceMotion) return;

    const handleMouseMove = (e: MouseEvent) => {
      const now = Date.now();
      if (now - lastSpawnTime.current < 45) return;
      lastSpawnTime.current = now;

      const p: Particle = {
        id: particleId++,
        x: e.clientX,
        y: e.clientY,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
        size: Math.random() * 9 + 5,
        driftX: (Math.random() - 0.5) * 55,
        driftY: -(Math.random() * 55 + 15),
        rotation: Math.random() * 360,
      };

      setParticles((prev) => [...prev.slice(-18), p]);

      setTimeout(() => {
        setParticles((prev) => prev.filter((s) => s.id !== p.id));
      }, 750);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [shouldReduceMotion]);

  if (shouldReduceMotion) return null;

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden"
    >
      <AnimatePresence>
        {particles.map((p) => (
          <motion.div
            key={p.id}
            initial={{ opacity: 1, scale: 1, x: 0, y: 0, rotate: p.rotation }}
            animate={{
              opacity: 0,
              scale: 0.2,
              x: p.driftX,
              y: p.driftY,
              rotate: p.rotation + 120,
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.75, ease: "easeOut" }}
            style={{
              position: "fixed",
              left: p.x,
              top: p.y,
              width: p.size,
              height: p.size,
              marginLeft: -(p.size / 2),
              marginTop: -(p.size / 2),
              pointerEvents: "none",
            }}
          >
            <SparkleShape size={p.size} color={p.color} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}

function SparkleShape({ size, color }: { size: number; color: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      style={{ filter: `drop-shadow(0 0 ${Math.round(size / 2)}px ${color})` }}
    >
      {/* 4-pointed star / sparkle */}
      <path d="M12 0 C12 0 13 10 24 12 C13 14 12 24 12 24 C12 24 11 14 0 12 C11 10 12 0 12 0Z" />
    </svg>
  );
}
