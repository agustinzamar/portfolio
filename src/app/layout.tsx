import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { ScrollProgress } from "@/components/ui/scroll-progress";

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
  keywords: [
    "Full Stack Developer",
    "React",
    "Next.js",
    "Laravel",
    "TypeScript",
    "JavaScript",
    "Web Development",
  ],
  authors: [{ name: "Agustin Zamar" }],
  openGraph: {
    title: "Agustin Zamar | Full Stack Developer",
    description:
      "Full Stack Developer specializing in Laravel, React, Next.js, and modern web technologies.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange={false}
        >
          <ScrollProgress className="fixed top-0 left-0 right-0 h-1 z-50 bg-gradient-to-r from-violet-500 via-purple-500 to-indigo-500" />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
