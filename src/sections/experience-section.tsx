"use client";

import { Briefcase, Calendar, ChevronDown, MapPin } from "lucide-react";
import { motion } from "motion/react";
import { useMessages, useTranslations } from "next-intl";
import { useState } from "react";
import { BlurFade } from "@/components/ui/blur-fade";
import { BorderBeam } from "@/components/ui/border-beam";
import { cn } from "@/lib/utils";

interface Experience {
  id: string;
  location: string;
  startDate: string;
  endDate: string;
}

const experiencesData: Experience[] = [
  {
    id: "crystal",
    location: "Remote, Argentina",
    startDate: "2025-02",
    endDate: "present",
  },
  {
    id: "gm2",
    location: "Remote, Argentina",
    startDate: "2024-11",
    endDate: "2025-02",
  },
  {
    id: "freelance1",
    location: "Remote, Argentina",
    startDate: "2023-08",
    endDate: "2024-10",
  },
  {
    id: "devsu",
    location: "Remote, Argentina",
    startDate: "2022-07",
    endDate: "2023-07",
  },
  {
    id: "jbknowledge",
    location: "Remote, Argentina",
    startDate: "2020-10",
    endDate: "2022-07",
  },
];

function ExperienceCard({
  experience,
  index,
}: {
  experience: Experience;
  index: number;
}) {
  const [isExpanded, setIsExpanded] = useState(false);
  const t = useTranslations("experience");
  const messages = useMessages();

  const formatDate = (date: string) => {
    if (date === "present") return t("dateFormat.present");
    const [year, month] = date.split("-");
    const monthKey = [
      "jan",
      "feb",
      "mar",
      "apr",
      "may",
      "jun",
      "jul",
      "aug",
      "sep",
      "oct",
      "nov",
      "dec",
    ][Number.parseInt(month, 10) - 1] as
      | "jan"
      | "feb"
      | "mar"
      | "apr"
      | "may"
      | "jun"
      | "jul"
      | "aug"
      | "sep"
      | "oct"
      | "nov"
      | "dec";
    return `${t(`months.${monthKey}`)} ${year}`;
  };

  const company = t(`jobs.${experience.id}.company`);
  const position = t(`jobs.${experience.id}.position`);
  const employment = t(`jobs.${experience.id}.employment`);

  // Get highlights safely by checking messages structure
  const highlights: string[] = [];
  const experienceMessages = (messages as Record<string, unknown>)
    ?.experience as Record<string, unknown>;
  const jobsMessages = experienceMessages?.jobs as Record<string, unknown>;
  const jobData = jobsMessages?.[experience.id] as Record<string, unknown>;
  const jobHighlights = jobData?.highlights as string[] | undefined;

  if (jobHighlights && Array.isArray(jobHighlights)) {
    for (const highlight of jobHighlights) {
      highlights.push(highlight);
    }
  }

  return (
    <BlurFade delay={0.2 + index * 0.1} inView>
      <motion.div layout className="relative group">
        <motion.div
          whileHover={{ y: -4 }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
          className={cn(
            "relative bg-card border border-border rounded-2xl p-6 overflow-hidden",
            "transition-shadow duration-300",
            "hover:shadow-lg hover:shadow-violet-500/5",
          )}
        >
          {/* Border Beam Animation */}
          <BorderBeam
            className="opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            size={100}
            duration={4}
            colorFrom="#6366F1"
            colorTo="#8B5CF6"
          />

          <div className="relative z-10">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-violet-500/10 text-violet-600 dark:text-violet-400">
                  <Briefcase className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">{company}</h3>
                  <p className="text-muted-foreground">{position}</p>
                </div>
              </div>
              <div className="flex flex-col items-start sm:items-end gap-1 text-sm text-muted-foreground">
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4" />
                  <span>
                    {formatDate(experience.startDate)} -{" "}
                    {formatDate(experience.endDate)}
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4" />
                  <span>{experience.location}</span>
                </div>
              </div>
            </div>

            {/* Expandable Content */}
            <motion.div
              initial={false}
              animate={{ height: isExpanded ? "auto" : 0 }}
              className="overflow-hidden"
            >
              <ul className="space-y-2 pt-2">
                {highlights.map((highlight, i) => (
                  <motion.li
                    key={`${experience.id}-highlight-${i}`}
                    initial={{ opacity: 0, x: -10 }}
                    animate={
                      isExpanded ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }
                    }
                    transition={{ delay: i * 0.05 }}
                    className="flex items-start gap-3 text-muted-foreground"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-violet-500 mt-2 shrink-0" />
                    <span>{highlight}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Expand Button */}
            <button
              type="button"
              onClick={() => setIsExpanded(!isExpanded)}
              className="mt-4 flex items-center gap-2 text-sm font-medium text-violet-600 dark:text-violet-400 hover:text-violet-700 dark:hover:text-violet-300 transition-colors"
            >
              <span>{isExpanded ? t("expand.hide") : t("expand.show")}</span>
              <motion.div
                animate={{ rotate: isExpanded ? 180 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <ChevronDown className="w-4 h-4" />
              </motion.div>
            </button>
          </div>
        </motion.div>
      </motion.div>
    </BlurFade>
  );
}

export function ExperienceSection() {
  const t = useTranslations("experience");

  return (
    <section id="experience" className="py-24 sm:py-32 relative">
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

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line - Hidden on mobile */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-border hidden lg:block" />

          {/* Experience Cards */}
          <div className="space-y-8 lg:space-y-12">
            {experiencesData.map((experience, index) => (
              <div key={experience.id} className="lg:pl-20 relative">
                {/* Timeline Dot - Hidden on mobile */}
                <div className="absolute left-6 top-8 w-5 h-5 rounded-full bg-violet-500 border-4 border-background hidden lg:block" />

                <ExperienceCard experience={experience} index={index} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
