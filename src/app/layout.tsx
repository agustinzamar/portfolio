import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Agustin Zamar | Full Stack Developer",
  description:
    "Full Stack Developer specializing in Laravel, React, Next.js, and modern web technologies. Based in Salta, Argentina.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
      >
        {children}
        <SpeedInsights
          dsn={process.env.NEXT_PUBLIC_VERCEL_OBSERVABILITY_DSN}
          sampleRate={
            process.env.NEXT_PUBLIC_VERCEL_OBSERVABILITY_SAMPLE_RATE
              ? Number(process.env.NEXT_PUBLIC_VERCEL_OBSERVABILITY_SAMPLE_RATE)
              : undefined
          }
        />
      </body>
    </html>
  );
}
