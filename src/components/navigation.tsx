"use client";

import { Menu, Moon, Sun, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { usePathname, useRouter } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
import { useTheme } from "next-themes";
import { useEffect, useMemo, useState } from "react";
import { Locales } from "@/i18n/locales";
import { cn } from "@/lib/utils";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const t = useTranslations("navigation");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const navItems = useMemo(
    () => [
      { label: t("about"), href: "#about" },
      { label: t("experience"), href: "#experience" },
      { label: t("skills"), href: "#skills" },
      { label: t("education"), href: "#education" },
      { label: t("contact"), href: "#contact" },
    ],
    [t],
  );

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Determine active section
      const sections = navItems.map((item) => item.href.replace("#", ""));
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navItems]);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const toggleLanguage = () => {
    const newLocale = locale === Locales.EN ? Locales.ES : Locales.EN;
    // Replace only the first path segment (the locale)
    const segments = pathname.split("/").filter(Boolean);
    segments[0] = newLocale;
    const newPathname = "/" + segments.join("/");
    router.push(newPathname);
  };

  if (!mounted) {
    return null;
  }

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          "fixed top-0 left-0 right-0 z-40 transition-all duration-300",
          /* keep outer nav transparent to avoid a full-width border line; inner pill handles compact bg/border */
          "bg-transparent",
        )}
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          {/* Inner pill container (edge-to-edge nav with centered pill) */}
          <div
            className={cn(
              "mx-auto flex items-center justify-between transition-all duration-300",
              isScrolled
                ? "rounded-md bg-background/95 dark:bg-background/95 backdrop-blur-sm border border-border/40 py-2 mt-2 shadow-sm px-6 sm:px-8"
                : "rounded-full bg-white/6 dark:bg-black/30 backdrop-blur-lg border border-white/8 py-4 mt-4 shadow-md px-6 sm:px-8",
            )}
          >
            {/* Logo / Name */}
            <motion.button
              className="text-lg font-semibold tracking-tight whitespace-nowrap px-4"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              type="button"
              aria-label="Go to top — Agustín Zamar"
            >
              Agustín Zamar
            </motion.button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  type="button"
                  onClick={() => handleNavClick(item.href)}
                  className={cn(
                    "relative px-4 py-2 text-sm font-medium transition-colors duration-200",
                    activeSection === item.href.replace("#", "")
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground",
                  )}
                >
                  {item.label}
                  {activeSection === item.href.replace("#", "") && (
                    <motion.div
                      layoutId="activeSection"
                      className="absolute bottom-0 left-2 right-2 h-0.5 bg-violet-500 rounded-full"
                      transition={{
                        type: "spring",
                        bounce: 0.2,
                        duration: 0.6,
                      }}
                    />
                  )}
                </button>
              ))}
            </div>

            {/* Let's Talk Button, Language Switcher, Theme Toggle & Mobile Menu */}
            <div className="flex items-center gap-2">
              {/* Let's Talk Button - Desktop Only */}
              <motion.button
                type="button"
                onClick={() => handleNavClick("#contact")}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="hidden lg:flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-full bg-violet-500 text-white hover:bg-violet-600 transition-colors"
              >
                {t("letsTalk")}
              </motion.button>

              {/* Language Switcher - Desktop Only */}
              <div className="hidden lg:flex items-center bg-muted rounded-full p-1">
                <motion.button
                  type="button"
                  onClick={() => {
                    if (locale !== Locales.EN) toggleLanguage();
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={cn(
                    "px-3 py-1 text-sm font-medium rounded-full transition-colors",
                    locale === Locales.EN
                      ? "bg-background text-foreground shadow-sm"
                      : "text-muted-foreground hover:text-foreground",
                  )}
                >
                  EN
                </motion.button>
                <motion.button
                  type="button"
                  onClick={() => {
                    if (locale !== Locales.ES) toggleLanguage();
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={cn(
                    "px-3 py-1 text-sm font-medium rounded-full transition-colors",
                    locale === Locales.ES
                      ? "bg-background text-foreground shadow-sm"
                      : "text-muted-foreground hover:text-foreground",
                  )}
                >
                  ES
                </motion.button>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() =>
                  setTheme(resolvedTheme === "dark" ? "light" : "dark")
                }
                className="p-2 rounded-full hover:bg-muted transition-colors"
                aria-label="Toggle theme"
              >
                <AnimatePresence mode="wait" initial={false}>
                  {resolvedTheme === "dark" ? (
                    <motion.div
                      key="sun"
                      initial={{ y: -20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: 20, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Sun className="w-5 h-5" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="moon"
                      initial={{ y: -20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: 20, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Moon className="w-5 h-5" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>

              {/* Mobile Menu Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 rounded-full hover:bg-muted transition-colors"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-16 z-30 md:hidden bg-background/95 backdrop-blur-xl border-b border-border"
          >
            <div className="px-4 py-6 space-y-2">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => handleNavClick(item.href)}
                  className={cn(
                    "block w-full text-left px-4 py-3 text-lg font-medium rounded-lg transition-colors",
                    activeSection === item.href.replace("#", "")
                      ? "bg-violet-500/10 text-violet-600 dark:text-violet-400"
                      : "hover:bg-muted",
                  )}
                >
                  {item.label}
                </motion.button>
              ))}
              {/* Let's Talk in Mobile Menu */}
              <motion.button
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navItems.length * 0.1 }}
                onClick={() => handleNavClick("#contact")}
                className="block w-full text-left px-4 py-3 text-lg font-medium rounded-lg bg-violet-500 text-white hover:bg-violet-600 transition-colors mt-4"
              >
                {t("letsTalk")}
              </motion.button>

              {/* Language Switcher - Mobile */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: (navItems.length + 1) * 0.1 }}
                className="flex items-center bg-muted rounded-full p-1 mt-4"
              >
                <button
                  type="button"
                  onClick={() => {
                    if (locale !== Locales.EN) {
                      toggleLanguage();
                      setIsMobileMenuOpen(false);
                    }
                  }}
                  className={cn(
                    "flex-1 px-3 py-2 text-sm font-medium rounded-full transition-colors",
                    locale === Locales.EN
                      ? "bg-background text-foreground shadow-sm"
                      : "text-muted-foreground",
                  )}
                >
                  EN
                </button>
                <button
                  type="button"
                  onClick={() => {
                    if (locale !== Locales.ES) {
                      toggleLanguage();
                      setIsMobileMenuOpen(false);
                    }
                  }}
                  className={cn(
                    "flex-1 px-3 py-2 text-sm font-medium rounded-full transition-colors",
                    locale === Locales.ES
                      ? "bg-background text-foreground shadow-sm"
                      : "text-muted-foreground",
                  )}
                >
                  ES
                </button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
