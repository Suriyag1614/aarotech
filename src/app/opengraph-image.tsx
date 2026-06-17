import { ImageResponse } from "next/og";

export const runtime = "edge";

// Image metadata
export const alt = "Aarotech Digital Marketing Agency";
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
          background: "linear-gradient(to right bottom, #0f172a, #1e293b)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "sans-serif",
          padding: "80px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "40px",
          }}
        >
          <div
            style={{
              width: "60px",
              height: "60px",
              backgroundColor: "#22c55e",
              borderRadius: "50%",
              marginRight: "20px",
            }}
          />
          <h1
            style={{
              fontSize: "80px",
              fontWeight: "900",
              color: "white",
              letterSpacing: "-0.05em",
              margin: 0,
            }}
          >
            Aarotech.
          </h1>
        </div>

        <h2
          style={{
            fontSize: "48px",
            fontWeight: "700",
            color: "#e2e8f0",
            textAlign: "center",
            maxWidth: "900px",
            lineHeight: 1.2,
            marginBottom: "20px",
          }}
        >
          Get More Leads, Customers, and Revenue for Your Business
        </h2>

        <p
          style={{
            fontSize: "32px",
            color: "#94a3b8",
            textAlign: "center",
            fontWeight: "500",
          }}
        >
          Web Design • SEO • Ads • Social Media
        </p>
      </div>
    ),
    {
      ...size,
    }
  );
}
