"use client";

import { ChevronDown, Download, Github, Linkedin, Mail } from "lucide-react";
import { motion } from "motion/react";
import { useTranslations } from "next-intl";
import { AuroraText } from "@/components/ui/aurora-text";
import { Particles } from "@/components/ui/particles";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export function HeroSection() {
  const t = useTranslations("hero");

  const handleScrollToProjects = () => {
    const element = document.getElementById("projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const socialLinks = [
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
    {
      name: "Email",
      href: "mailto:agustinzamar33@gmail.com",
      icon: Mail,
      label: t("social.email"),
    },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Particles */}
      <Particles
        className="absolute inset-0 z-0"
        quantity={50}
        ease={80}
        color="#6366F1"
        staticity={50}
      />

      {/* Gradient Background */}
      <div className="absolute inset-0 z-0 bg-linear-to-b from-background via-background to-muted/20" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Section Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-4"
        >
          <span className="text-primary font-medium text-sm tracking-wider uppercase">
            {t("badge")}
          </span>
        </motion.div>

        {/* Name */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-6"
        >
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight">
            <AuroraText
              colors={["#6366F1", "#8B5CF6", "#A78BFA", "#6366F1"]}
              speed={0.5}
            >
              Agustin Zamar
            </AuroraText>
          </h1>
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed"
        >
          {t("tagline")}{" "}
          <span className="text-foreground font-medium">Laravel</span>,{" "}
          <span className="text-foreground font-medium">React</span>,{" "}
          {t("tagline") && t("tagline").includes("con") ? "y " : "and "}
          <span className="text-foreground font-medium">Next.js</span>
        </motion.p>

        {/* Location */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex items-center justify-center gap-2 text-muted-foreground mb-10"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-label="Location"
          >
            <title>Location icon</title>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          <span className="text-sm">{t("location")}</span>
          <span className="mx-2">•</span>
          <span className="text-sm">{t("availability")}</span>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <ShimmerButton
            onClick={handleScrollToProjects}
            className="px-8 py-3 text-base font-medium"
            shimmerColor="#818CF8"
            background="linear-gradient(135deg, #6366F1 0%, #8B5CF6 100%)"
          >
            {t("cta.viewWork")}
          </ShimmerButton>

          <motion.a
            href="https://linkedin.com/in/agustinzamar"
            target="_blank"
            rel="noopener noreferrer"
            title={t("cta.linkedin")}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-2 px-8 py-3 text-base font-medium rounded-full bg-muted hover:bg-primary/10 text-foreground hover:text-primary transition-colors"
          >
            <Linkedin className="w-5 h-5" />
            {t("cta.linkedin")}
          </motion.a>
        </motion.div>

        {/* Social Icons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="flex items-center justify-center gap-3 mt-8"
        >
          {socialLinks.map((link) => {
            const Icon = link.icon;
            return (
              <Tooltip key={link.name}>
                <TooltipTrigger asChild>
                  <motion.a
                    href={link.href}
                    target={
                      link.href.startsWith("mailto") ? undefined : "_blank"
                    }
                    rel={
                      link.href.startsWith("mailto")
                        ? undefined
                        : "noopener noreferrer"
                    }
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-3 rounded-full bg-muted hover:bg-primary/10 text-muted-foreground hover:text-primary transition-colors"
                    aria-label={link.label}
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{link.label}</p>
                </TooltipContent>
              </Tooltip>
            );
          })}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.button
          onClick={handleScrollToProjects}
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          type="button"
          aria-label="Scroll to about section"
        >
          <span className="text-xs font-medium tracking-wider uppercase">
            {t("scroll")}
          </span>
          <ChevronDown className="w-5 h-5" />
        </motion.button>
      </motion.div>
    </section>
  );
}
