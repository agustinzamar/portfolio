import type {Metadata} from "next";
import {NextIntlClientProvider} from "next-intl";

export const metadata: Metadata = {
  title: "Agustin Zamar | Full Stack Developer",
  description:
    "Full Stack Developer specializing in Laravel, React, Next.js, and modern web technologies. Based in Salta, Argentina.",
};

type Props = {
  children: React.ReactNode;
};

export default async function RootLayout({ children }: Props) {
  return (
    // biome-ignore lint/a11y/useHtmlLang: handled by next-intl
    <html>
      <body>
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
      </body>
    </html>
  );
}
