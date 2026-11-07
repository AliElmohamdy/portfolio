"use client";

import React from "react";
import { motion } from "framer-motion";

interface AnimatedLogoProps {
  size?: number;
  className?: string;
}

export function AnimatedLogo({ size = 56, className = "" }: AnimatedLogoProps) {
  return (
    <div className={`relative inline-flex items-center justify-center ${className}`}>
      {/* Subtle controlled back illumination */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: [0.15, 0.45, 0.25], scale: [0.9, 1.1, 1] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -inset-2 rounded-full blur-xl bg-electric-blue/20 pointer-events-none"
      />

      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="relative z-10 select-none drop-shadow-[0_0_12px_rgba(87,200,255,0.4)]"
      >
        {/* Stroke Reveal of Main AE Geometric Structure */}
        <motion.path
          d="M 12 88 L 42 12 L 88 12 L 88 26 L 50 26 L 46 36 L 82 36 L 82 50 L 40 50 L 25 88 L 12 88 Z"
          fill="#57C8FF"
          stroke="#79DDFF"
          strokeWidth="1.5"
          initial={{ pathLength: 0, opacity: 0, fillOpacity: 0 }}
          animate={{
            pathLength: 1,
            opacity: 1,
            fillOpacity: 1,
          }}
          transition={{
            pathLength: { duration: 1.4, ease: "easeInOut" },
            opacity: { duration: 0.6 },
            fillOpacity: { delay: 0.9, duration: 0.8, ease: "easeOut" },
          }}
        />

        {/* Lower E Base Anchor */}
        <motion.path
          d="M 38 74 L 88 74 L 88 88 L 33 88 L 38 74 Z"
          fill="#57C8FF"
          stroke="#79DDFF"
          strokeWidth="1.5"
          initial={{ pathLength: 0, opacity: 0, fillOpacity: 0 }}
          animate={{
            pathLength: 1,
            opacity: 1,
            fillOpacity: 1,
          }}
          transition={{
            pathLength: { duration: 1.2, ease: "easeInOut", delay: 0.2 },
            opacity: { duration: 0.6, delay: 0.2 },
            fillOpacity: { delay: 1.0, duration: 0.8, ease: "easeOut" },
          }}
        />
      </svg>
    </div>
  );
}

