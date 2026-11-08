"use client";

import React, { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

export function MouseFollower() {
  const [mounted, setMounted] = useState(false);
  const mouseX = useSpring(0, { stiffness: 45, damping: 25 });
  const mouseY = useSpring(0, { stiffness: 45, damping: 25 });

  useEffect(() => {
    setMounted(true);
    const handlePointerMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", handlePointerMove);
    return () => window.removeEventListener("mousemove", handlePointerMove);
  }, [mouseX, mouseY]);

  if (!mounted) return null;

  return (
    <motion.div
      className="pointer-events-none fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] rounded-full z-0 opacity-40 mix-blend-screen hidden lg:block"
      style={{
        x: mouseX,
        y: mouseY,
        background:
          "radial-gradient(circle, rgba(56, 189, 248, 0.15) 0%, rgba(168, 85, 247, 0.08) 40%, transparent 70%)",
        filter: "blur(60px)",
      }}
      aria-hidden="true"
    />
  );
}

