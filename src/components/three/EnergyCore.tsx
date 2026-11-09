"use client";

import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Html } from "@react-three/drei";
import * as THREE from "three";

interface TechItem {
  name: string;
  category: string;
  radius: number;
  speed: number;
  tilt: number;
  phase: number;
  iconSvg: React.ReactNode;
}

const TECH_ITEMS: TechItem[] = [
  {
    name: "React",
    category: "UI Library",
    radius: 2.2,
    speed: 0.65,
    tilt: 0.35,
    phase: 0,
    iconSvg: (
      <svg viewBox="-11.5 -10.23174 23 20.46348" className="w-5 h-5 text-[#61DAFB]" fill="currentColor">
        <circle cx="0" cy="0" r="2.05" fill="#61DAFB" />
        <g stroke="#61DAFB" strokeWidth="1" fill="none">
          <ellipse rx="11" ry="4.2" />
          <ellipse rx="11" ry="4.2" transform="rotate(60)" />
          <ellipse rx="11" ry="4.2" transform="rotate(120)" />
        </g>
      </svg>
    ),
  },
  {
    name: "Next.js",
    category: "Full-Stack Framework",
    radius: 2.3,
    speed: 0.6,
    tilt: -0.4,
    phase: (Math.PI * 2) / 7,
    iconSvg: (
      <svg viewBox="0 0 180 180" className="w-5 h-5 text-white" fill="none">
        <circle cx="90" cy="90" r="85" fill="black" stroke="#333" strokeWidth="6" />
        <path d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z" fill="white" />
        <rect x="115" y="54" width="12" height="72" fill="white" />
      </svg>
    ),
  },
  {
    name: "TypeScript",
    category: "Typed JavaScript",
    radius: 2.15,
    speed: 0.72,
    tilt: 0.55,
    phase: (Math.PI * 4) / 7,
    iconSvg: (
      <svg viewBox="0 0 128 128" className="w-5 h-5">
        <rect width="128" height="128" rx="16" fill="#3178C6" />
        <path d="M72.2 46.4h-28v11.8h8v41h12v-41h8V46.4zm23.6 24.2c-4-2.8-8.8-4.4-13.6-4.4-4.8 0-7.8 2.2-7.8 5.6 0 3.6 3.2 5 9.4 7.4 9.4 3.8 14.8 8.4 14.8 17.6 0 10.6-8.2 17.8-21.8 17.8-7 0-14.2-2.4-19.6-6.4l4.6-9.8c4.6 3.4 10.2 5.4 15.2 5.4 5.6 0 8.6-2.6 8.6-6 0-3.8-3.4-5.2-10-7.8-9.4-3.6-14.2-8.2-14.2-17 0-10.2 8-17.4 20.6-17.4 6.2 0 12.4 2 17.2 5.2l-3.4 9.8z" fill="#FFF" />
      </svg>
    ),
  },
  {
    name: "Python",
    category: "Automation & Backend",
    radius: 2.4,
    speed: 0.58,
    tilt: -0.5,
    phase: (Math.PI * 6) / 7,
    iconSvg: (
      <svg viewBox="0 0 128 128" className="w-5 h-5">
        <path d="M63.6 5.5c-27 0-25.3 11.7-25.3 11.7l.1 12.1h25.7v3.6H28.7S12.4 31 12.4 58.2c0 27.1 14.3 26.2 14.3 26.2h8.5V72.2c0-13.8 11.8-13.3 11.8-13.3h25.4c11.3 0 11.1-10.8 11.1-10.8V21.4S86 5.5 63.6 5.5zm-13.9 7.4c2.5 0 4.5 2 4.5 4.5s-2 4.5-4.5 4.5-4.5-2-4.5-4.5 2-4.5 4.5-4.5z" fill="#3776AB" />
        <path d="M64.4 122.5c27 0 25.3-11.7 25.3-11.7l-.1-12.1H63.9v-3.6h35.4s16.3 1.9 16.3-25.3c0-27.1-14.3-26.2-14.3-26.2h-8.5v12.2c0 13.8-11.8 13.3-11.8 13.3H55.6c-11.3 0-11.1 10.8-11.1 10.8v26.7s-2.5 15.9 19.9 15.9zm13.9-7.4c-2.5 0-4.5-2-4.5-4.5s2-4.5 4.5-4.5 4.5 2 4.5 4.5-2 4.5-4.5 4.5z" fill="#FFD43B" />
      </svg>
    ),
  },
  {
    name: "Node.js",
    category: "Runtime Engine",
    radius: 2.25,
    speed: 0.68,
    tilt: 0.2,
    phase: (Math.PI * 8) / 7,
    iconSvg: (
      <svg viewBox="0 0 128 128" className="w-5 h-5">
        <path d="M64 8.5L14 37.4v57.8L64 124l50-28.8V37.4L64 8.5z" fill="#339933" />
        <path d="M64 24.3l36.3 21v41.9L64 108.2 27.7 87.2V45.3L64 24.3z" fill="#026E00" />
        <path d="M64 45.3l18.1 10.5v21L64 87.2 45.9 76.8v-21L64 45.3z" fill="#FFFFFF" />
      </svg>
    ),
  },
  {
    name: "Tailwind",
    category: "CSS Framework",
    radius: 2.1,
    speed: 0.76,
    tilt: -0.28,
    phase: (Math.PI * 10) / 7,
    iconSvg: (
      <svg viewBox="0 0 54 33" className="w-5 h-5 text-[#38BDF8]" fill="currentColor">
        <path d="M13.5 0C6.075 0 0 6.075 0 13.5c0 5.062 2.806 9.475 6.953 11.782-.32-.97-.453-2.008-.453-3.082 0-5.8 4.7-10.5 10.5-10.5 2.18 0 4.2.668 5.88 1.815C24.49 11.83 26.65 10.7 29 10.4 26.8 4.4 20.7 0 13.5 0zm13.5 9.5c-7.425 0-13.5 6.075-13.5 13.5 0 5.062 2.806 9.475 6.953 11.782-.32-.97-.453-2.008-.453-3.082 0-5.8 4.7-10.5 10.5-10.5 2.18 0 4.2.668 5.88 1.815C37.99 21.33 40.15 20.2 42.5 19.9 40.3 13.9 34.2 9.5 27 9.5z" />
      </svg>
    ),
  },
  {
    name: "Discord",
    category: "Bot API & Systems",
    radius: 2.35,
    speed: 0.55,
    tilt: 0.42,
    phase: (Math.PI * 12) / 7,
    iconSvg: (
      <svg viewBox="0 0 127.14 96.36" className="w-5 h-5 text-[#5865F2]" fill="currentColor">
        <path d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22h0C129.24,52.84,122.09,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.86,53,48.81,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74S96.23,46,96.12,53,91.08,65.69,84.69,65.69Z" />
      </svg>
    ),
  },
];

function OrbitingTechIcon({ item }: { item: TechItem }) {
  const groupRef = useRef<THREE.Group>(null!);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (!groupRef.current) return;
    const t = state.clock.elapsedTime * item.speed + item.phase;
    const r = item.radius;

    const x = Math.cos(t) * r;
    const z = Math.sin(t) * r;
    const y = Math.sin(t) * Math.sin(item.tilt) * r;

    groupRef.current.position.set(x, y, z);
  });

  return (
    <group ref={groupRef}>
      <Html center distanceFactor={7.5} zIndexRange={[100, 0]} transform={false}>
        <div
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          className={`cursor-pointer transition-transform duration-200 select-none ${
            hovered ? "scale-125 z-50" : "scale-100"
          }`}
        >
          <div
            className={`flex items-center gap-2.5 px-3 py-2 rounded-xl border transition-all ${
              hovered
                ? "bg-navy-surface border-electric-blue shadow-[0_0_20px_rgba(56,189,248,0.35)]"
                : "bg-navy-surface/90 border-navy-border hover:border-canvas-subtle shadow-md"
            }`}
          >
            <div className="shrink-0 flex items-center justify-center">
              {item.iconSvg}
            </div>
            <span className="font-mono text-xs font-semibold text-canvas-white whitespace-nowrap">
              {item.name}
            </span>
          </div>

          {hovered && (
            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1.5 px-2 py-0.5 rounded bg-obsidian border border-navy-border text-[10px] font-mono text-canvas-muted whitespace-nowrap shadow-md pointer-events-none">
              {item.category}
            </div>
          )}
        </div>
      </Html>
    </group>
  );
}

export function EnergyCore() {
  return (
    <div className="relative w-full h-[460px] sm:h-[520px] flex items-center justify-center select-none overflow-visible">
      <Canvas
        camera={{ position: [0, 0, 5.8], fov: 50 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        className="w-full h-full overflow-visible"
        fallback={
          <div className="w-full h-full flex items-center justify-center font-mono text-xs text-canvas-muted">
            Tech Orbit
          </div>
        }
      >
        <ambientLight intensity={1.5} />
        <pointLight position={[5, 5, 5]} intensity={2.0} color="#F8FAFC" />

        {/* Pure open orbits without any central clutter or bounding cage */}
        {TECH_ITEMS.map((item) => (
          <OrbitingTechIcon key={item.name} item={item} />
        ))}
      </Canvas>
    </div>
  );
}
