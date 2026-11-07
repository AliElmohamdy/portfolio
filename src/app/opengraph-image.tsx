import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "ALY ELMOHAMDY — BEYOND CODE";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "space-between",
          backgroundColor: "#080B12",
          backgroundImage:
            "radial-gradient(circle at 85% 15%, rgba(87, 200, 255, 0.25) 0%, transparent 60%)",
          padding: "80px",
          fontFamily: "sans-serif",
          color: "#F4F7FF",
        }}
      >
        {/* Top Header Monogram */}
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <svg width="60" height="60" viewBox="0 0 100 100" fill="none">
            <path
              d="M 12 88 L 42 12 L 88 12 L 88 26 L 50 26 L 46 36 L 82 36 L 82 50 L 40 50 L 25 88 L 12 88 Z"
              fill="#57C8FF"
            />
            <path d="M 38 74 L 88 74 L 88 88 L 33 88 L 38 74 Z" fill="#57C8FF" />
          </svg>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span
              style={{
                fontSize: "24px",
                fontWeight: 800,
                letterSpacing: "0.2em",
                color: "#F4F7FF",
              }}
            >
              ALY ELMOHAMDY
            </span>
            <span
              style={{
                fontSize: "14px",
                letterSpacing: "0.25em",
                color: "#9BAAC3",
              }}
            >
              BEYOND CODE
            </span>
          </div>
        </div>

        {/* Center Punchline */}
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <div
            style={{
              fontSize: "16px",
              letterSpacing: "0.25em",
              color: "#57C8FF",
              textTransform: "uppercase",
            }}
          >
            AVAILABLE FOR COLLABORATION • HR @ AMRIX
          </div>
          <div
            style={{
              fontSize: "76px",
              fontWeight: 900,
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
              color: "#F4F7FF",
            }}
          >
            BUILDING THE <span style={{ color: "#57C8FF" }}>IMPOSSIBLE.</span>
          </div>
          <div
            style={{
              fontSize: "24px",
              color: "#9BAAC3",
              maxWidth: "850px",
              lineHeight: 1.4,
            }}
          >
            Full-Stack Developer & Creative Builder turning ambitious ideas into
            websites, applications, bots, and digital experiences.
          </div>
        </div>

        {/* Footer Meta */}
        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: "1px solid rgba(87, 200, 255, 0.2)",
            paddingTop: "24px",
          }}
        >
          <span style={{ fontSize: "18px", color: "#79DDFF" }}>
            github.com/AliElmohamdy
          </span>
          <span
            style={{
              fontSize: "16px",
              color: "#62728C",
              letterSpacing: "0.15em",
            }}
          >
            BEYOND CODE. INTO REALITY.
          </span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}

