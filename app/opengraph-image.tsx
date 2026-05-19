import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Lymar Dermo-Esthetic — Maquillage Permanent";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#ffffff",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "Georgia, serif",
        }}
      >
        <p
          style={{
            fontSize: 13,
            color: "#999999",
            letterSpacing: "0.45em",
            margin: 0,
            marginBottom: 28,
            textTransform: "uppercase",
          }}
        >
          Maquillage Permanent
        </p>
        <h1
          style={{
            fontSize: 104,
            fontWeight: 300,
            color: "#0A0A0A",
            margin: 0,
            letterSpacing: "0.12em",
          }}
        >
          Lymar
        </h1>
        <p
          style={{
            fontSize: 14,
            color: "#888888",
            letterSpacing: "0.55em",
            margin: 0,
            marginTop: 6,
            textTransform: "uppercase",
          }}
        >
          Dermo-Esthetic
        </p>
        <div
          style={{ width: 44, height: 1, background: "#0A0A0A", margin: "44px 0" }}
        />
        <p style={{ fontSize: 18, color: "#555555", margin: 0 }}>
          Saint-Georges-de-Didonne · Beaune
        </p>
        <p style={{ fontSize: 13, color: "#aaaaaa", margin: 0, marginTop: 14 }}>
          ★★★★★ &nbsp; 5.0 — 200+ avis vérifiés
        </p>
      </div>
    ),
    { ...size }
  );
}
