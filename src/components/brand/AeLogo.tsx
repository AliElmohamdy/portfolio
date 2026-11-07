import React from "react";

export type LogoVariant =
  | "primary"
  | "horizontal"
  | "vertical"
  | "monochrome-white"
  | "monochrome-black"
  | "electric-blue"
  | "favicon";

interface AeLogoProps {
  variant?: LogoVariant;
  className?: string;
  size?: number | string;
  animated?: boolean;
}

/**
 * Custom geometric monogram combining "A" and "E".
 * Architectural vector construction with deliberate negative space:
 * - Left angled stroke & right vertical spine form the outer boundaries of A.
 * - Horizontal shared crossbar forms the cross of A and the center arm of E.
 * - Top apex horizontal return forms the upper arm of E.
 * - Bottom right horizontal base extension forms the base arm of E.
 * - Clean, flat vector mark, perfectly balanced on a 100x100 grid.
 */
export function AeSymbol({
  className = "",
  size = 40,
  fillColor = "#57C8FF",
  strokeColor = "none",
  animated = false,
}: {
  className?: string;
  size?: number | string;
  fillColor?: string;
  strokeColor?: string;
  animated?: boolean;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`select-none ${className}`}
      aria-label="AE Monogram Logo"
      role="img"
    >
      {/* Precision Geometric AE Path */}
      {/* Outer contour & shared architectural strokes */}
      <path
        d="M 12 88 L 42 12 L 88 12 L 88 26 L 50 26 L 46 36 L 82 36 L 82 50 L 40 50 L 25 88 L 12 88 Z"
        fill={fillColor}
        stroke={strokeColor}
        strokeWidth={animated ? "2" : "0"}
        className={animated ? "transition-all duration-700" : ""}
      />
      {/* Bottom base stroke completing the E foundation */}
      <path
        d="M 38 74 L 88 74 L 88 88 L 33 88 L 38 74 Z"
        fill={fillColor}
        stroke={strokeColor}
        strokeWidth={animated ? "2" : "0"}
        className={animated ? "transition-all duration-700" : ""}
      />
    </svg>
  );
}

export function AeLogo({
  variant = "primary",
  className = "",
  size = 40,
  animated = false,
}: AeLogoProps) {
  let fillColor = "#57C8FF";
  let textColor = "#F4F7FF";
  let subColor = "#9BAAC3";

  if (variant === "monochrome-white") {
    fillColor = "#FFFFFF";
    textColor = "#FFFFFF";
    subColor = "#CCCCCC";
  } else if (variant === "monochrome-black") {
    fillColor = "#080B12";
    textColor = "#080B12";
    subColor = "#333333";
  } else if (variant === "electric-blue") {
    fillColor = "#57C8FF";
    textColor = "#57C8FF";
    subColor = "#79DDFF";
  }

  if (variant === "favicon") {
    return <AeSymbol size={size} fillColor="#57C8FF" className={className} />;
  }

  if (variant === "horizontal") {
    return (
      <div className={`inline-flex items-center gap-3 ${className}`}>
        <AeSymbol size={size} fillColor={fillColor} animated={animated} />
        <div className="flex flex-col">
          <span
            style={{ color: textColor }}
            className="font-display font-bold tracking-[0.2em] text-sm uppercase leading-none"
          >
            ALY ELMOHAMDY
          </span>
          <span
            style={{ color: subColor }}
            className="font-mono text-[9px] tracking-[0.25em] uppercase mt-1 leading-none text-canvas-muted"
          >
            BEYOND CODE
          </span>
        </div>
      </div>
    );
  }

  if (variant === "vertical") {
    return (
      <div className={`inline-flex flex-col items-center gap-2 text-center ${className}`}>
        <AeSymbol size={typeof size === "number" ? size * 1.5 : size} fillColor={fillColor} animated={animated} />
        <span
          style={{ color: textColor }}
          className="font-display font-bold tracking-[0.25em] text-sm uppercase leading-tight mt-1"
        >
          ALY ELMOHAMDY
        </span>
        <span
          style={{ color: subColor }}
          className="font-mono text-[10px] tracking-[0.3em] uppercase text-canvas-muted"
        >
          BEYOND CODE
        </span>
      </div>
    );
  }

  // Primary variant
  return <AeSymbol size={size} fillColor={fillColor} className={className} animated={animated} />;
}

