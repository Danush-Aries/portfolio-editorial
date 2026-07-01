import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Dhanush Shankar — AI, security, product";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#0B0B0C",
          color: "#F5F1EA",
          display: "flex",
          flexDirection: "column",
          padding: "80px",
          fontFamily: "serif",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 20,
            letterSpacing: 3,
            textTransform: "uppercase",
            color: "#8A8078",
          }}
        >
          Portfolio · Vol. II · 2026
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 60,
            fontSize: 108,
            lineHeight: 1.02,
            fontWeight: 500,
            letterSpacing: -2,
            flexDirection: "column",
          }}
        >
          <span>Dhanush</span>
          <span>Shankar<span style={{ color: "#E8A24C" }}>.</span></span>
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 48,
            fontSize: 28,
            color: "#F5F1EA",
            opacity: 0.75,
          }}
        >
          I build the AI, I break the AI, I ship with the AI.
        </div>
        <div
          style={{
            marginTop: "auto",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            fontSize: 18,
            color: "#8A8078",
            letterSpacing: 2,
            textTransform: "uppercase",
          }}
        >
          <span>danushankar3@gmail.com</span>
          <span>Available — Summer 2026</span>
        </div>
        <div
          style={{
            marginTop: 20,
            width: "100%",
            height: 4,
            background: "#E8A24C",
          }}
        />
      </div>
    ),
    size,
  );
}
