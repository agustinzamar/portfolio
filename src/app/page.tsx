import { redirect } from "@/i18n/navigation";

export default async function RootPage() {
  redirect({ locale: "en", href: "en" });
}
