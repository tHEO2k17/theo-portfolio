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
  metadataBase: new URL("https://theopaintsil.online"),
  title: {
    default: "Theophilus Paintsil | Senior Software Engineer & Technical Lead",
    template: "%s | Theophilus Paintsil",
  },
  description:
    "Senior Software Engineer and Technical Lead specializing in cloud-native systems, full-stack development, software architecture, DevOps, and AI-assisted product engineering. Based in Ghana and open to global remote opportunities.",
  generator: "tp",
  applicationName: "Theophilus Paintsil Portfolio",
  referrer: "origin-when-cross-origin",
  keywords: [
    "Senior Software Engineer",
    "Technical Leader",
    "Technical Lead",
    "Software Architect",
    "DevOps",
    "Full-Stack Engineer",
    "Next.js",
    "NestJS",
    "Flutter",
    "Cloud-Native Systems",
    "Software Architecture",
    "Technical Delivery",
    "AI Product Engineering",
    "Ghana",
    "Africa",
    "Remote Work",
  ],
  authors: [{ name: "Theophilus Paintsil" }],
  creator: "Theophilus Paintsil",
  publisher: "Theophilus Paintsil",
  alternates: {
    canonical: "https://theopaintsil.online",
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Theophilus Paintsil | Senior Software Engineer & Technical Lead",
    description:
      "Senior Software Engineer and Technical Lead building scalable, cloud-native systems across web, mobile, backend, and infrastructure.",
    url: "https://theopaintsil.online",
    siteName: "Theophilus Paintsil",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Theophilus Paintsil portfolio preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Theophilus Paintsil | Senior Software Engineer & Technical Lead",
    description:
      "Senior Software Engineer and Technical Lead building scalable, cloud-native systems across web, mobile, backend, and infrastructure.",
    images: ["/og-image.png"],
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
