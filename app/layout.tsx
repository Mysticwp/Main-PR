import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

const siteUrl = "https://mysticpr.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Mystic PR - Strategic PR Solutions",
    template: "%s | Mystic PR"
  },
  description:
    "Discover tailored PR strategies and creative campaigns with Mystic PR for impactful brand growth.",
  keywords: [
    "PR agency Dubai",
    "public relations agency Dubai",
    "influencer marketing agency Dubai",
    "talent management Dubai",
    "press release distribution Dubai",
    "crisis management Dubai"
  ],
  alternates: {
    canonical: siteUrl
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Mystic PR - Strategic PR Solutions",
    description:
      "Discover tailored PR strategies and creative campaigns with Mystic PR for impactful brand growth.",
    siteName: "Mystic PR",
    images: [
      {
        url: "https://mysticpr.com/wp-content/uploads/2024/11/PR-1.png",
        width: 833,
        height: 504,
        alt: "Mystic PR Logo"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Mystic PR - Strategic PR Solutions",
    description:
      "Discover tailored PR strategies and creative campaigns with Mystic PR for impactful brand growth.",
    images: ["https://mysticpr.com/wp-content/uploads/2024/11/PR-1.png"]
  },
  category: "marketing",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1
    }
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Mystic PR",
    url: siteUrl,
    image: "https://mysticpr.com/wp-content/uploads/2024/11/PR-1.png",
    description:
      "Dubai-based PR consultancy specializing in strategic communication, influencer marketing, media outreach, and talent management.",
    areaServed: "Dubai",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Churchill Executive Towers - Business Bay",
      addressLocality: "Dubai",
      addressCountry: "AE"
    },
    telephone: "+971558434908",
    email: "business@mystic-advertising.com"
  };

  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema)
          }}
        />
        {children}
      </body>
    </html>
  );
}
