import { Analytics } from '@vercel/analytics/next';
import type { Metadata, Viewport } from 'next';
import { Geist_Mono, Montserrat } from 'next/font/google';
import { Toaster } from 'sonner';
import './globals.css';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400'],
  variable: '--font-montserrat',
});
const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://theopaintsil.online'),
  title: {
    default: 'Theophilus Paintsil | Senior Software Engineer & Technical Lead',
    template: '%s | Theophilus Paintsil',
  },
  description:
    'Software engineer and technical lead based in Accra, working with teams across Ghana, Europe, and distributed environments. Web, mobile, backend, and cloud.',
  generator: 'tp',
  applicationName: 'Theophilus Paintsil Portfolio',
  referrer: 'origin-when-cross-origin',
  keywords: [
    'Senior Software Engineer',
    'Technical Leader',
    'Technical Lead',
    'Software Architect',
    'DevOps',
    'Full-Stack Engineer',
    'Next.js',
    'NestJS',
    'Flutter',
    'Cloud-Native Systems',
    'Software Architecture',
    'Product Development',
    'Systems Thinking',
    'Team Leadership',
    'Cross-Platform Engineering',
    'Remote Work',
    'Distributed Teams',
    'Ghana',
  ],
  authors: [{ name: 'Theophilus Paintsil' }],
  creator: 'Theophilus Paintsil',
  publisher: 'Theophilus Paintsil',
  alternates: {
    canonical: 'https://theopaintsil.online',
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Theophilus Paintsil | Senior Software Engineer & Technical Lead',
    description:
      'Software engineer and technical lead building products across web, mobile, backend, and cloud infrastructure.',
    url: 'https://theopaintsil.online',
    siteName: 'Theophilus Paintsil',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Theophilus Paintsil portfolio preview',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Theophilus Paintsil | Senior Software Engineer & Technical Lead',
    description:
      'Software engineer and technical lead building products across web, mobile, backend, and cloud infrastructure.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: '#0f0f0f',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${geistMono.variable}`}
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      <body
        className="font-sans antialiased bg-background text-foreground"
        suppressHydrationWarning
      >
        {children}
        {process.env.NODE_ENV === 'production' ? <Analytics /> : null}
        <Toaster toastOptions={{ style: { borderRadius: 0 } }} />
      </body>
    </html>
  );
}
