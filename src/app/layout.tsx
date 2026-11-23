import type { Metadata } from "next";
import Script from "next/script";
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
  title: {
    default: "Vishma Ghosh — Frontend Developer",
    template: "%s | Vishma Ghosh",
  },
  description:
    "Vishma Ghosh is a frontend developer with 4+ years of experience building responsive web applications with React, Next.js, and TypeScript.",
  openGraph: {
    title: "Vishma Ghosh — Frontend Developer",
    description: "Frontend developer · React · Next.js · TypeScript · Bengaluru, India",
    type: "website",
    siteName: "Vishma Ghosh Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vishma Ghosh — Frontend Developer",
    description: "Frontend developer · React · Next.js · TypeScript · Bengaluru, India",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  const googleAnalyticsId = process.env.NEXT_PUBLIC_GA_ID;

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Vishma Ghosh",
              jobTitle: "Frontend Developer",
              email: "vish26196@gmail.com",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Bengaluru",
                addressRegion: "Karnataka",
                addressCountry: "India",
              },
              sameAs: ["https://www.linkedin.com/in/vishma-ghosh"],
              knowsAbout: [
                "Frontend development",
                "React",
                "Next.js",
                "TypeScript",
                "Server-side rendering",
                "Redux Toolkit",
                "Tailwind CSS",
                "Material UI",
              ],
            }),
          }}
        />
        {children}
        {googleAnalyticsId ? (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`window.dataLayer = window.dataLayer || []; function gtag(){window.dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', '${googleAnalyticsId}');`}
            </Script>
          </>
        ) : null}
      </body>
    </html>
  );
}
