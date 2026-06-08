import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    <div
      style={{
        width: 32,
        height: 32,
        background: "#FFFFFF",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "Georgia, 'Times New Roman', serif",
        fontSize: 22,
        fontWeight: 400,
        color: "#1C1C1C",
        letterSpacing: "0px",
        paddingBottom: 1,
      }}
    >
      L
    </div>,
    { ...size }
  );
}
