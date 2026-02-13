import { getRequestConfig } from "next-intl/server";

const locales = ["en", "es"] as const;
type Locale = (typeof locales)[number];

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;

  // Validate locale, fallback to 'en' if invalid
  if (!locale || !locales.includes(locale as Locale)) {
    locale = "en";
  }

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});
