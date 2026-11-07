"use client";

import React, { useEffect, useRef } from "react";

/**
 * Ambient Cyber Code & Matrix 01 Stream Canvas
 * Renders subtle floating binary fragments (010101) and real code snippets
 * in glowing electric blue & deep navy tones with soft opacity so it doesn't distract.
 */
export function MatrixStreamBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    // Code & Binary tokens
    const tokens = [
      "01", "10", "11", "00", "0101", "1010", "0xFF", "void", "async",
      "const", "return", "01101", "init()", "{ }", "=>", "import", "type",
      "0x4A", "1001", "0111", "0010"
    ];

    const columnCount = Math.floor(width / 38);
    const columns: { y: number; speed: number; char: string; opacity: number }[] = [];

    for (let i = 0; i < columnCount; i++) {
      columns.push({
        y: Math.random() * height,
        speed: 0.4 + Math.random() * 0.8,
        char: tokens[Math.floor(Math.random() * tokens.length)],
        opacity: 0.04 + Math.random() * 0.12,
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      ctx.font = "11px 'JetBrains Mono', monospace";

      for (let i = 0; i < columns.length; i++) {
        const col = columns[i];
        const x = i * 38;

        ctx.fillStyle = `rgba(87, 200, 255, ${col.opacity})`;
        ctx.fillText(col.char, x, col.y);

        col.y += col.speed;
        if (col.y > height + 20) {
          col.y = -20;
          col.char = tokens[Math.floor(Math.random() * tokens.length)];
          col.speed = 0.4 + Math.random() * 0.8;
          col.opacity = 0.04 + Math.random() * 0.12;
        }

        // Randomly mutate characters occasionally
        if (Math.random() < 0.015) {
          col.char = tokens[Math.floor(Math.random() * tokens.length)];
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-0 opacity-80"
      aria-hidden="true"
    />
  );
}

