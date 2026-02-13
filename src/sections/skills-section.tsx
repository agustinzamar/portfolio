"use client";

import {
  Bot,
  Cloud,
  Code2,
  Database,
  GitBranch,
  Layout,
  type LucideIcon,
  Server,
  TestTube2,
} from "lucide-react";
import { motion } from "motion/react";
import { useTranslations } from "next-intl";
import { BlurFade } from "@/components/ui/blur-fade";

interface SkillConfig {
  icon: LucideIcon;
  color: string;
  translationKey: string;
}

const skillsConfig: SkillConfig[] = [
  { icon: Code2, color: "#F59E0B", translationKey: "languages" },
  { icon: Server, color: "#10B981", translationKey: "backend" },
  { icon: Layout, color: "#3B82F6", translationKey: "frontend" },
  { icon: Database, color: "#8B5CF6", translationKey: "databases" },
  { icon: Cloud, color: "#06B6D4", translationKey: "devops" },
  { icon: TestTube2, color: "#EF4444", translationKey: "testing" },
  { icon: GitBranch, color: "#6366F1", translationKey: "tools" },
  { icon: Bot, color: "#EC4899", translationKey: "ai" },
];

function SkillCard({ config, index }: { config: SkillConfig; index: number }) {
  const t = useTranslations("skills.categories");
  const Icon = config.icon;

  const name = t(`${config.translationKey}.name`);
  // Get items array directly from translations
  const items: string[] = t.raw(`${config.translationKey}.items`) || [];

  return (
    <BlurFade delay={0.1 + index * 0.05} inView>
      <motion.div
        whileHover={{ y: -8, scale: 1.02 }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
        className="group relative bg-card border border-border rounded-2xl p-6 h-full"
      >
        {/* Gradient overlay on hover */}
        <div
          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: `radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), ${config.color}10, transparent 40%)`,
          }}
        />

        <div className="relative z-10">
          {/* Icon */}
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-colors duration-300"
            style={{ backgroundColor: `${config.color}15` }}
          >
            <Icon
              className="w-6 h-6 transition-colors duration-300"
              style={{ color: config.color }}
            />
          </div>

          {/* Title */}
          <h3 className="text-lg font-semibold mb-3">{name}</h3>

          {/* Skills List */}
          <div className="flex flex-wrap gap-2">
            {items.map((item) => (
              <span
                key={item}
                className="px-3 py-1 text-sm rounded-full bg-muted text-muted-foreground hover:bg-violet-500/10 hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </BlurFade>
  );
}

export function SkillsSection() {
  const t = useTranslations("skills");

  return (
    <section id="skills" className="py-24 sm:py-32 relative">
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

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsConfig.map((config, index) => (
            <SkillCard
              key={config.translationKey}
              config={config}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
