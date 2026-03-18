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

export const metadata: Metadata = {
  metadataBase: new URL("https://theoonline.netlify.app"),
  // metadataBase: new URL("https://theophiluspaintsil.com"),
  title: {
    default:
      "Theophilus Paintsil | Senior Software Engineer & Technical Leader",
    template: "%s | Theophilus Paintsil",
  },
  description:
    "Premium portfolio of Theophilus Paintsil, Senior Software Engineer and Head of Technical Delivery. Full-stack engineer, DevOps architect, and technical leader with 8+ years of experience.",
  generator: "tp",
  applicationName: "Theophilus Paintsil Portfolio",
  referrer: "origin-when-cross-origin",
  keywords: [
    "Senior Software Engineer",
    "Technical Leader",
    "DevOps",
    "Full-Stack Developer",
    "React",
    "Node.js",
    "Cloud Architecture",
    "Software Architecture",
    "Technical Delivery",
  ],
  authors: [{ name: "Theophilus Paintsil" }],
  creator: "Theophilus Paintsil",
  publisher: "Theophilus Paintsil",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      {
        url: "/icon/light",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon/dark",
        media: "(prefers-color-scheme: dark)",
      },
    ],
    apple: "/apple-icon",
  },
  openGraph: {
    title: "Theophilus Paintsil | Senior Software Engineer & Technical Leader",
    description:
      "Premium portfolio of Theophilus Paintsil, Senior Software Engineer and Head of Technical Delivery.",
    url: "https://theophiluspaintsil.com",
    siteName: "Theophilus Paintsil",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Theophilus Paintsil | Senior Software Engineer",
    description:
      "Senior Software Engineer and Head of Technical Delivery with 8+ years of experience.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: "#0f0f0f",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${montserrat.variable} ${geistMono.variable}`}>
      <body className="font-sans antialiased bg-background text-foreground">
        {children}
        <Analytics />
        <Toaster />
      </body>
    </html>
  );
}
