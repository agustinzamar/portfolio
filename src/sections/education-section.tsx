"use client";

import { Award, BookOpen, GraduationCap } from "lucide-react";
import { motion } from "motion/react";
import { useTranslations } from "next-intl";
import { BlurFade } from "@/components/ui/blur-fade";

interface CourseConfig {
  id: string;
  startDate: string;
  endDate: string;
}

const coursesConfig: CourseConfig[] = [
  { id: "platzi", startDate: "2020", endDate: "2025" },
  { id: "udemy", startDate: "2025", endDate: "2025" },
];

function EducationCard({ index }: { index: number }) {
  const t = useTranslations("education");

  return (
    <BlurFade delay={0.2 + index * 0.1} inView>
      <motion.div
        whileHover={{ y: -4 }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
        className="bg-card border border-border rounded-2xl p-6 h-full"
      >
        <div className="flex items-start gap-4">
          <div className="p-3 rounded-xl bg-violet-500/10 text-violet-600 dark:text-violet-400 shrink-0">
            <GraduationCap className="w-6 h-6" />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-xl font-semibold mb-1">
              {t("university.degree")}
            </h3>
            <p className="text-muted-foreground mb-2">
              {t("university.institution")}
            </p>
            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
              <span>Argentina</span>
              <span>•</span>
              <span>2016 - 2019</span>
            </div>
            <p className="text-muted-foreground">
              {t("university.description")}
            </p>
          </div>
        </div>
      </motion.div>
    </BlurFade>
  );
}

function CourseCard({
  config,
  index,
}: {
  config: CourseConfig;
  index: number;
}) {
  const t = useTranslations("education");

  const title = t(`courses.${config.id}.title`);
  const platform = t(`courses.${config.id}.platform`);

  // Get course items from translations (max 20 items per course)
  const items: string[] = [];
  const maxItems = config.id === "platzi" ? 6 : 2; // Platzi has 6 items, Udemy has 2
  for (let i = 0; i < maxItems; i++) {
    const item = t(`courses.${config.id}.items.${i}`);
    items.push(item);
  }

  return (
    <BlurFade delay={0.3 + index * 0.1} inView>
      <motion.div
        whileHover={{ y: -4 }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
        className="bg-card border border-border rounded-2xl p-6 h-full"
      >
        <div className="flex items-start gap-4">
          <div className="p-3 rounded-xl bg-violet-500/10 text-violet-600 dark:text-violet-400 shrink-0">
            <BookOpen className="w-6 h-6" />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-xl font-semibold mb-1">{title}</h3>
            <p className="text-muted-foreground mb-3">
              {platform} • {config.startDate}
              {config.endDate !== config.startDate && ` - ${config.endDate}`}
            </p>
            <ul className="space-y-2">
              {items.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 text-sm text-muted-foreground"
                >
                  <Award className="w-4 h-4 mt-0.5 text-violet-500 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>
    </BlurFade>
  );
}

export function EducationSection() {
  const t = useTranslations("education");

  return (
    <section id="education" className="py-24 sm:py-32 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <BlurFade delay={0.1} inView>
            <span className="text-violet-600 dark:text-violet-400 font-medium text-sm tracking-wider uppercase">
              {t("sectionTitle")}
            </span>
          </BlurFade>
          <BlurFade delay={0.2} inView>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mt-4">
              {t("heading")}
            </h2>
          </BlurFade>
          <BlurFade delay={0.3} inView>
            <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
              {t("description")}
            </p>
          </BlurFade>
        </div>

        {/* Education */}
        <div className="mb-12">
          <BlurFade delay={0.2} inView>
            <h3 className="text-2xl font-semibold mb-6">{t("formalTitle")}</h3>
          </BlurFade>
          <div className="max-w-2xl">
            <EducationCard index={0} />
          </div>
        </div>

        {/* Courses */}
        <div>
          <BlurFade delay={0.3} inView>
            <h3 className="text-2xl font-semibold mb-6">
              {t("developmentTitle")}
            </h3>
          </BlurFade>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {coursesConfig.map((config, index) => (
              <CourseCard key={config.id} config={config} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
