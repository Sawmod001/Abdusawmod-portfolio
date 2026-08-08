import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { MotionConfig } from "framer-motion";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://abdusawmod-portfolio.vercel.app"),
  title: {
    default: "Abolaji Abdusawmod Akande — Software Engineer | Full Stack Developer",
    template: "%s — Abolaji Abdusawmod Akande",
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
    title: "Abolaji Abdusawmod Akande — Software Engineer | Full Stack Developer",
    description: "Building reliable, scalable, and useful digital products.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abolaji Abdusawmod Akande — Software Engineer | Full Stack Developer",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.documentElement.classList.add('dark');
                } else {
                  document.documentElement.classList.remove('dark');
                }
              } catch (_) {}
            `,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-slate-50 dark:bg-gray-950 text-slate-900 dark:text-gray-100 transition-colors duration-300">
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

