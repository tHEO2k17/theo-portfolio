import type { Metadata, Viewport } from "next";
import { Montserrat, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { Toaster } from "sonner";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});
const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

// Update this to your final custom domain
const siteUrl = "https://theopaintsil.online";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Theophilus Paintsil | Senior Software Engineer & Technical Lead",
    template: "%s | Theophilus Paintsil",
  },
  description:
    "Senior Software Engineer and Technical Lead specializing in Cloud-Native Architecture, Fintech, and IoT. Lead Developer of the Stride Platform.",
  keywords: [
    "Theophilus Paintsil",
    "Technical Lead Ghana",
    "Senior Software Engineer",
    "Cloud-Native Architect",
    "Fintech Developer",
    "IoT Engineering",
    "Stride Platform",
    "Technical Delivery Manager",
  ],
  authors: [{ name: "Theophilus Paintsil" }],
  creator: "Theophilus Paintsil",
  openGraph: {
    title: "Theophilus Paintsil | Senior Software Engineer & Technical Lead",
    description: "Architecting scalable cloud-native systems and leading technical delivery.",
    url: siteUrl,
    siteName: "Theophilus Paintsil Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Theophilus Paintsil Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Theophilus Paintsil | Tech Lead",
    description: "Building scalable systems in Fintech & IoT.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: siteUrl,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#121212", // Updated to match your website's charcoal aesthetic
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // JSON-LD Structured Data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Theophilus Paintsil",
    "jobTitle": "Senior Software Engineer & Technical Lead",
    "url": siteUrl,
    "sameAs": [
      "https://www.linkedin.com/in/theopaintsil",
      "https://github.com/theopaintsil"
    ],
    "description": "Expert in Cloud-Native Architecture and Technical Leadership.",
    "hasPart": [
      { "@type": "WebPageElement", "name": "Projects", "url": `${siteUrl}/#projects` },
      { "@type": "WebPageElement", "name": "Experience", "url": `${siteUrl}/#experience` },
      { "@type": "WebPageElement", "name": "Contact", "url": `${siteUrl}/#contact` }
    ]
  };

  return (
    <html lang="en" className={`${montserrat.variable} ${geistMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased bg-background text-foreground">
        {children}
        <Analytics />
        <Toaster />
      </body>
    </html>
  );
}
