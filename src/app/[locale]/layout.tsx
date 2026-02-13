import type {Metadata} from "next";
import {Geist, Geist_Mono} from "next/font/google";
import "../globals.css";
import {notFound} from "next/navigation";
import {hasLocale, NextIntlClientProvider} from "next-intl";
import {getMessages} from "next-intl/server";
import {ThemeProvider} from "@/components/theme-provider";
import {ScrollProgress} from "@/components/ui/scroll-progress";
import {TooltipProvider} from "@/components/ui/tooltip";
import {routing} from "@/i18n/routing";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const messages = await getMessages();
  const t = (key: string) => {
    const keys = key.split(".");
    let value: unknown = messages;
    for (const k of keys) {
      value = (value as Record<string, unknown>)?.[k];
    }
    return (value as string) || key;
  };

  return {
    title: t("metadata.title"),
    description: t("metadata.description"),
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
      title: t("metadata.title"),
      description: t("metadata.description"),
      type: "website",
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
      >
        <NextIntlClientProvider messages={messages} locale={locale}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange={false}
          >
            <TooltipProvider delayDuration={100}>
              <ScrollProgress className="fixed top-0 left-0 right-0 h-1 z-50 bg-gradient-to-r from-violet-500 via-purple-500 to-indigo-500" />
              {children}
            </TooltipProvider>
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
