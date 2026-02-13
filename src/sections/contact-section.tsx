"use client";

import { ArrowUp, Download, Github, Linkedin, Mail } from "lucide-react";
import { motion } from "motion/react";
import { useTranslations } from "next-intl";
import { BlurFade } from "@/components/ui/blur-fade";
import { ShimmerButton } from "@/components/ui/shimmer-button";

export function ContactSection() {
  const t = useTranslations("contact");
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socialLinks = [
    {
      name: "Email",
      href: "mailto:agustinzamar33@gmail.com",
      icon: Mail,
      label: t("social.email"),
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com/in/agustinzamar",
      icon: Linkedin,
      label: t("social.linkedin"),
    },
    {
      name: "GitHub",
      href: "https://github.com/agustinzamar",
      icon: Github,
      label: t("social.github"),
    },
  ];

  return (
    <section id="contact" className="py-24 sm:py-32 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Contact CTA */}
        <div className="text-center mb-20">
          <BlurFade delay={0.1} inView>
            <span className="text-violet-600 dark:text-violet-400 font-medium text-sm tracking-wider uppercase">
              {t("sectionTitle")}
            </span>
          </BlurFade>
          <BlurFade delay={0.2} inView>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mt-4 mb-6">
              {t("heading")}
            </h2>
          </BlurFade>
          <BlurFade delay={0.3} inView>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
              {t("description")}
            </p>
          </BlurFade>
          <BlurFade delay={0.4} inView>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.a
                href="mailto:agustinzamar33@gmail.com"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex"
              >
                <ShimmerButton
                  className="px-8 py-4 text-base font-medium"
                  shimmerColor="#818CF8"
                  background="linear-gradient(135deg, #6366F1 0%, #8B5CF6 100%)"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  {t("cta.email")}
                </ShimmerButton>
              </motion.a>

              <motion.a
                href="/assets/files/Agustin_Zamar_CV.pdf"
                download
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 px-8 py-4 text-base font-medium rounded-full border border-border hover:bg-muted transition-colors"
              >
                <Download className="w-5 h-5" />
                {t("cta.downloadCV")}
              </motion.a>
            </div>
          </BlurFade>
        </div>

        {/* Footer */}
        <footer className="border-t border-border pt-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Social Links (moved to left) */}
            <BlurFade delay={0.6} inView>
              <div className="flex items-center gap-4 order-1 md:order-1">
                {socialLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <motion.a
                      key={link.name}
                      href={link.href}
                      target={
                        link.href.startsWith("mailto") ? undefined : "_blank"
                      }
                      rel={
                        link.href.startsWith("mailto")
                          ? undefined
                          : "noopener noreferrer"
                      }
                      whileHover={{ y: -4, scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-3 rounded-full bg-muted hover:bg-violet-500/10 text-muted-foreground hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
                      aria-label={link.label}
                    >
                      <Icon className="w-5 h-5" />
                    </motion.a>
                  );
                })}
              </div>
            </BlurFade>

            {/* Back to Top (right) */}
            <BlurFade delay={0.7} inView>
              <motion.button
                type="button"
                onClick={scrollToTop}
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors order-2 md:order-2"
              >
                <span>{t("footer.backToTop")}</span>
                <ArrowUp className="w-4 h-4" />
              </motion.button>
            </BlurFade>
          </div>
        </footer>
      </div>
    </section>
  );
}
