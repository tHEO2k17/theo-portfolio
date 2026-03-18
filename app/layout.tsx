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
  title: "Theophilus Paintsil | Senior Software Engineer & Technical Leader",
  description:
    "Premium portfolio of Theophilus Paintsil, Senior Software Engineer and Head of Technical Delivery. Full-stack engineer, DevOps architect, and technical leader with 8+ years of experience.",
  generator: "v0.app",
  keywords: [
    "Senior Software Engineer",
    "Technical Leader",
    "DevOps",
    "Full-Stack Developer",
    "React",
    "Node.js",
    "Cloud Architecture",
  ],
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
