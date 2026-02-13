"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { BlurFade } from "@/components/ui/blur-fade";
import { MagicCard } from "@/components/ui/magic-card";

export function AboutSection() {
  const t = useTranslations("about");

  const stats = [
    { key: "experience", value: t("stats.experience.value") },
    { key: "projects", value: t("stats.projects.value") },
    { key: "companies", value: t("stats.companies.value") },
    { key: "code", value: t("stats.code.value") },
  ] as const;

  return (
    <section id="about" className="py-24 sm:py-32 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Photo Column */}
          <BlurFade delay={0.2} inView>
            <div className="relative mx-auto lg:mx-0 max-w-sm lg:max-w-none">
              <MagicCard
                className="p-1 rounded-3xl"
                gradientColor="#6366F1"
                gradientOpacity={0.3}
              >
                <motion.div
                  whileHover={{ scale: 1.02, rotateY: 5, rotateX: -5 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  style={{ perspective: 1000 }}
                  className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-muted"
                >
                  <Image
                    src="/assets/img/me.webp"
                    alt="Agustin Zamar - Full Stack Developer"
                    fill
                    className="object-cover"
                    priority
                  />
                </motion.div>
              </MagicCard>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-violet-500/20 rounded-full blur-2xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-500/20 rounded-full blur-2xl" />
            </div>
          </BlurFade>

          {/* Content Column */}
          <div className="space-y-6">
            <BlurFade delay={0.3} inView>
              <span className="text-violet-600 dark:text-violet-400 font-medium text-sm tracking-wider uppercase">
                {t("sectionTitle")}
              </span>
            </BlurFade>

            <BlurFade delay={0.4} inView>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
                {t("heading")}
              </h2>
            </BlurFade>

            <BlurFade delay={0.5} inView>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t("bio1")}
              </p>
            </BlurFade>

            <BlurFade delay={0.6} inView>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t("bio2")}
              </p>
            </BlurFade>

            <BlurFade delay={0.7} inView>
              <div className="grid grid-cols-2 gap-6 pt-4">
                {stats.map((stat) => (
                  <div key={stat.key} className="space-y-2">
                    <div className="text-3xl font-bold text-violet-600 dark:text-violet-400">
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {t(`stats.${stat.key}.label`)}
                    </div>
                  </div>
                ))}
              </div>
            </BlurFade>
          </div>
        </div>
      </div>
    </section>
  );
}
