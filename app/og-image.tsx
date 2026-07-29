import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630
};

export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px",
          background:
            "linear-gradient(135deg, rgb(8,7,11) 0%, rgb(18,16,24) 60%, rgb(39,28,18) 100%)",
          color: "rgb(245,240,232)",
          fontFamily: "sans-serif"
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            fontSize: "28px",
            letterSpacing: "0.12em",
            textTransform: "uppercase"
          }}
        >
          <div
            style={{
              width: "18px",
              height: "18px",
              borderRadius: "999px",
              background: "linear-gradient(135deg, rgb(213,171,103), rgb(240,201,143))"
            }}
          />
          Mystic PR
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <div style={{ fontSize: "76px", lineHeight: 1.05, maxWidth: "860px" }}>
            Strategic PR Solutions In Dubai
          </div>
          <div style={{ fontSize: "30px", maxWidth: "820px", color: "rgb(196,189,178)" }}>
            Influencer marketing, media outreach, talent management, and brand
            visibility campaigns built for lasting impact.
          </div>
        </div>
      </div>
    ),
    size
  );
}
