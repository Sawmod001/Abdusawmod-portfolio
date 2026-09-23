import type { Metadata, Viewport } from "next";
import { Teko, Cormorant_Garamond, Instrument_Sans, JetBrains_Mono } from "next/font/google";
import { MotionConfig } from "framer-motion";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

// Rare premium system: Teko (display condensed / engineer), Cormorant Garamond (editorial serif), Instrument Sans (body), JetBrains Mono (mono)
const teko = Teko({
  variable: "--font-teko",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const instrumentSans = Instrument_Sans({
  variable: "--font-instrument-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://abdusawmod-portfolio.vercel.app"),
  title: {
    default: "Abolaji Abdusawmod Akande, Software Engineer | Full Stack Developer",
    template: "%s, Abolaji Abdusawmod Akande",
  },
  description: "Professional portfolio of Abolaji Abdusawmod Akande, a Software Engineer and Full Stack Developer specializing in building reliable, scalable, and useful digital products.",
  keywords: [
    "Software Engineer",
    "Full Stack Developer",
    "Frontend",
    "Backend",
    "Next.js",
    "React",
    "Node.js",
    "Abolaji Akande"
  ],
  authors: [{ name: "Abolaji Abdusawmod Akande" }],
  creator: "Abolaji Abdusawmod Akande",
  alternates: {
    canonical: "https://abdusawmod-portfolio.vercel.app",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://abdusawmod-portfolio.vercel.app",
    siteName: "Abolaji Akande Portfolio",
    title: "Abolaji Abdusawmod Akande, Software Engineer | Full Stack Developer",
    description: "Building reliable, scalable, and useful digital products.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abolaji Abdusawmod Akande, Software Engineer | Full Stack Developer",
    description: "Building reliable, scalable, and useful digital products.",
    creator: "@Abolajisawmod",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${teko.variable} ${cormorant.variable} ${instrumentSans.variable} ${jetbrainsMono.variable} h-full scroll-smooth antialiased`}
    >
      <head>
      </head>
      <body className="min-h-full flex flex-col bg-[#0c0a09] text-stone-100 transition-colors duration-300">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "@id": "https://abdusawmod-portfolio.vercel.app/#person",
              name: "Abolaji Abdusawmod Akande",
              url: "https://abdusawmod-portfolio.vercel.app",
              jobTitle: "Software Engineer | Full Stack Developer",
              email: "mailto:sawmodabolaji@gmail.com",
              sameAs: [
                "https://github.com/Sawmod001",
                "https://www.linkedin.com/in/abdusawmod-abolaji-b25604245/",
                "https://x.com/Abolajisawmod",
              ],
              knowsAbout: [
                "Full Stack Development",
                "REST APIs",
                "Node.js",
                "Next.js",
                "React",
                "MongoDB",
                "PostgreSQL",
                "Secure Authentication",
                "Applied AI",
              ],
            }),
          }}
        />
        <MotionConfig reducedMotion="user">{children}</MotionConfig>
      </body>
    </html>
  );
}


