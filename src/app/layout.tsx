import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "Abdusawmod Abolaji Akande | Backend Developer Portfolio",
  description: "Professional portfolio of Abdusawmod Abolaji Akande, a backend developer specializing in building secure, scalable APIs with Node.js, Express, PostgreSQL, and MongoDB.",
  keywords: [
    "Backend Developer",
    "Node.js",
    "Express.js",
    "PostgreSQL",
    "MongoDB",
    "API Security",
    "Scalable APIs",
    "Software Engineer",
    "Abolaji Akande"
  ],
  authors: [{ name: "Abdusawmod Abolaji Akande" }],
  creator: "Abdusawmod Abolaji Akande",
  metadataBase: new URL("https://abdusawmod.vercel.app"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://abdusawmod.vercel.app",
    title: "Abdusawmod Abolaji Akande | Backend Developer Portfolio",
    description: "Building secure, scalable APIs with Node.js, Express, PostgreSQL, and MongoDB.",
    siteName: "Abdusawmod Akande Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abdusawmod Abolaji Akande | Backend Developer Portfolio",
    description: "Building secure, scalable APIs with Node.js, Express, PostgreSQL, and MongoDB.",
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
        {children}
      </body>
    </html>
  );
}

