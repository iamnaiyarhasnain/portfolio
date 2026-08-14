import { ImageResponse } from "next/og";

export const alt = "Naiyar Hasnain — Software Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 96,
          background: "#ffffff",
          color: "#1c1915",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 28,
          }}
        >
          <div
            style={{
              width: 80,
              height: 80,
              borderRadius: "50%",
              border: "3px solid #c8a882",
              background: "#f5f5f3",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 36,
              fontFamily: "Georgia, serif",
              color: "#1c1915",
            }}
          >
            N
          </div>
          <div
            style={{
              fontSize: 72,
              fontFamily: "Georgia, serif",
              letterSpacing: "-0.03em",
              lineHeight: 1.05,
            }}
          >
            Naiyar Hasnain
          </div>
        </div>
        <div
          style={{
            marginTop: 28,
            fontSize: 28,
            color: "#6f685e",
            fontFamily: "Georgia, serif",
            fontStyle: "italic",
          }}
        >
          Exploring tech and exciting with AI.
        </div>
        <div
          style={{
            marginTop: 16,
            fontSize: 20,
            color: "#c8a882",
            fontFamily: "system-ui, sans-serif",
            letterSpacing: "0.05em",
          }}
        >
          Java · Spring · Web · AI/ML
        </div>
      </div>
    ),
    { ...size },
  );
}
