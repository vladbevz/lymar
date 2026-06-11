import { ImageResponse } from "next/og";
import { readFileSync } from "fs";
import { join } from "path";

export const runtime = "nodejs";
export const alt = "Lymar Dermo Esthetic — Maquillage Permanent";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  const bauerBodoni = readFileSync(join(process.cwd(), "public/fonts/lte50438.ttf"));
  const glacial = readFileSync(join(process.cwd(), "public/fonts/GlacialIndifference-Regular.otf"));

  return new ImageResponse(
    (
      <div
        style={{
          background: "#0A0A0A",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* LYMAR */}
        <span
          style={{
            fontFamily: "BauerBodoni",
            fontSize: 148,
            fontWeight: 400,
            color: "#FFFFFF",
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            lineHeight: 1,
          }}
        >
          Lymar
        </span>

        {/* Gold divider */}
        <div
          style={{
            width: 56,
            height: 1,
            background: "#C9A96E",
            margin: "28px 0",
          }}
        />

        {/* DERMO ESTHETIC */}
        <span
          style={{
            fontFamily: "Glacial",
            fontSize: 15,
            fontWeight: 400,
            color: "#C9A96E",
            letterSpacing: "0.55em",
            textTransform: "uppercase",
          }}
        >
          Dermo Esthetic
        </span>

        {/* Subtitle */}
        <span
          style={{
            fontFamily: "Glacial",
            fontSize: 17,
            color: "#555555",
            letterSpacing: "0.12em",
            marginTop: 52,
          }}
        >
          Maquillage Permanent · Saint-Georges-de-Didonne
        </span>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "BauerBodoni", data: bauerBodoni, style: "normal", weight: 400 },
        { name: "Glacial", data: glacial, style: "normal", weight: 400 },
      ],
    }
  );
}
