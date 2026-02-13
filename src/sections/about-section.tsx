"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { BlurFade } from "@/components/ui/blur-fade";
import { MagicCard } from "@/components/ui/magic-card";

export function AboutSection() {
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
                About Me
              </span>
            </BlurFade>

            <BlurFade delay={0.4} inView>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
                Crafting digital experiences with passion
              </h2>
            </BlurFade>

            <BlurFade delay={0.5} inView>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I&apos;m a Full Stack Developer based in Salta, Argentina, with
                over 7 years of experience building web applications. My journey
                started as a QA Analyst, which gave me a unique perspective on
                writing clean, testable, and user-focused code.
              </p>
            </BlurFade>

            <BlurFade delay={0.6} inView>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Today, I specialize in creating modern web solutions using
                Laravel, React, and Next.js. I enjoy working on challenging
                projects that require both technical expertise and creative
                problem-solving.
              </p>
            </BlurFade>

            <BlurFade delay={0.7} inView>
              <div className="grid grid-cols-2 gap-6 pt-4">
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-violet-600 dark:text-violet-400">
                    5+
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Years of Experience
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-violet-600 dark:text-violet-400">
                    20+
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Projects Completed
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-violet-600 dark:text-violet-400">
                    4
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Companies Worked
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-violet-600 dark:text-violet-400">
                    ∞
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Lines of Code
                  </div>
                </div>
              </div>
            </BlurFade>
          </div>
        </div>
      </div>
    </section>
  );
}
