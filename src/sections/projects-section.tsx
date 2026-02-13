"use client";

import { ArrowUpRight, Github, Globe } from "lucide-react";
import { motion, useMotionValue, useTransform } from "motion/react";
import { useTranslations } from "next-intl";
import { useRef, useState } from "react";
import { BlurFade } from "@/components/ui/blur-fade";
import { BorderBeam } from "@/components/ui/border-beam";
import { Particles } from "@/components/ui/particles";

interface Project {
  id: string;
  name: string;
  description: string;
  techStack: string[];
  gradient: string;
  initials: string;
}

const projects: Project[] = [
  {
    id: "taskflow",
    name: "TaskFlow Pro",
    description: "Enterprise task management SaaS with real-time collaboration",
    techStack: ["Next.js", "Laravel", "PostgreSQL", "WebSockets"],
    gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)",
    initials: "TF",
  },
  {
    id: "cloudstore",
    name: "CloudStore API",
    description: "Scalable e-commerce backend serving 100k+ requests daily",
    techStack: ["Laravel", "Redis", "MySQL", "Docker"],
    gradient: "linear-gradient(135deg, #0ba360 0%, #3cba92 50%, #00d2ff 100%)",
    initials: "CS",
  },
  {
    id: "analytics",
    name: "AnalyticsDash",
    description:
      "Real-time analytics dashboard with interactive visualizations",
    techStack: ["React", "NestJS", "MongoDB", "Socket.io"],
    gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 50%, #fa709a 100%)",
    initials: "AD",
  },
  {
    id: "authguard",
    name: "AuthGuard",
    description: "Secure authentication microservice with OAuth2 and MFA",
    techStack: ["Laravel", "JWT", "PostgreSQL", "Redis"],
    gradient: "linear-gradient(135deg, #ff9a9e 0%, #fecfef 50%, #f6d365 100%)",
    initials: "AG",
  },
  {
    id: "devhub",
    name: "DevHub Portal",
    description: "Developer community platform with code sharing and vetting",
    techStack: ["Next.js", "Tailwind", "Supabase", "Prisma"],
    gradient: "linear-gradient(135deg, #a18cd1 0%, #fbc2eb 50%, #8fd3f4 100%)",
    initials: "DH",
  },
  {
    id: "payflow",
    name: "PayFlow Integration",
    description: "Unified payment gateway wrapper with smart routing",
    techStack: ["PHP", "Laravel", "Stripe", "Webhook"],
    gradient: "linear-gradient(135deg, #ffecd2 0%, #fcb69f 50%, #ff6b6b 100%)",
    initials: "PF",
  },
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-0.5, 0.5], [10, -10]);
  const rotateY = useTransform(x, [-0.5, 0.5], [-10, 10]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const mouseX = (e.clientX - centerX) / (rect.width / 2);
    const mouseY = (e.clientY - centerY) / (rect.height / 2);

    x.set(mouseX);
    y.set(mouseY);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  return (
    <BlurFade delay={0.2 + index * 0.1} inView>
      <motion.div
        ref={cardRef}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="relative group"
      >
        <motion.div
          animate={{
            scale: isHovered ? 1.02 : 1,
          }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="relative h-full min-h-[280px] rounded-3xl overflow-hidden bg-card border border-border"
        >
          {/* Gradient Background */}
          <div
            className="absolute inset-0"
            style={{
              background: project.gradient,
            }}
          />

          {/* Particles on Hover */}
          {isHovered && (
            <Particles
              className="absolute inset-0 z-10"
              quantity={20}
              ease={50}
              color="#ffffff"
              staticity={30}
              size={2}
            />
          )}

          {/* Border Beam */}
          <BorderBeam
            className={`opacity-0 ${isHovered ? "opacity-100" : ""} transition-opacity duration-500`}
            size={150}
            duration={3}
            colorFrom="#ffffff"
            colorTo="rgba(255,255,255,0.5)"
          />

          {/* Content - Always Visible */}
          <div className="absolute inset-0 z-20 flex flex-col justify-between p-6">
            {/* Top Row - Initials */}
            <div className="flex justify-between items-start">
              <motion.div
                className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center"
                animate={{
                  scale: isHovered ? 1.1 : 1,
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <span className="text-xl font-bold text-white drop-shadow-lg">
                  {project.initials}
                </span>
              </motion.div>

              {/* Tech badges - visible on hover */}
              <motion.div
                initial={{ opacity: 0, x: 10 }}
                animate={{
                  opacity: isHovered ? 1 : 0,
                  x: isHovered ? 0 : 10,
                }}
                transition={{ duration: 0.2 }}
                className="flex gap-1 flex-wrap max-w-[60%] justify-end"
              >
                {project.techStack.slice(0, 2).map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 text-[10px] font-medium bg-white/20 backdrop-blur-sm rounded-md text-white"
                  >
                    {tech}
                  </span>
                ))}
              </motion.div>
            </div>

            {/* Bottom Content - Always Visible */}
            <div className="space-y-3">
              {/* Project Name */}
              <h3 className="text-2xl font-bold text-white drop-shadow-lg">
                {project.name}
              </h3>

              {/* Description - Always visible */}
              <p className="text-white/90 text-sm line-clamp-2 drop-shadow-md">
                {project.description}
              </p>

              {/* Tech Stack - visible on hover */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{
                  opacity: isHovered ? 1 : 0,
                  y: isHovered ? 0 : 10,
                }}
                transition={{ duration: 0.2, delay: 0.1 }}
                className="flex flex-wrap gap-2"
              >
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs font-medium bg-white/20 backdrop-blur-sm rounded-full text-white border border-white/30"
                  >
                    {tech}
                  </span>
                ))}
              </motion.div>

              {/* Action Buttons - visible on hover */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{
                  opacity: isHovered ? 1 : 0,
                  y: isHovered ? 0 : 10,
                }}
                transition={{ duration: 0.2, delay: 0.2 }}
                className="flex gap-2 pt-2"
              >
                <button
                  type="button"
                  className="flex items-center gap-1.5 px-3 py-2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-lg text-white text-xs font-medium transition-all"
                >
                  <Globe className="w-3.5 h-3.5" />
                  <span>Demo</span>
                </button>
                <button
                  type="button"
                  className="flex items-center gap-1.5 px-3 py-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-lg text-white text-xs font-medium transition-all border border-white/20"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>Code</span>
                </button>
              </motion.div>
            </div>
          </div>

          {/* Hover Glow Effect */}
          <motion.div
            className="absolute inset-0 rounded-3xl pointer-events-none"
            animate={{
              boxShadow: isHovered
                ? "0 0 40px rgba(255, 255, 255, 0.3)"
                : "none",
            }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
      </motion.div>
    </BlurFade>
  );
}

export function ProjectsSection() {
  const t = useTranslations("projects");

  return (
    <section id="projects" className="py-24 sm:py-32 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/4 top-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute right-1/4 bottom-1/4 w-[500px] h-[500px] bg-primary/3 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <BlurFade delay={0.1} inView>
            <span className="text-primary dark:text-primary font-medium text-sm tracking-wider uppercase">
              {t("sectionTitle")}
            </span>
          </BlurFade>
          <BlurFade delay={0.2} inView>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mt-4">
              {t("heading")}
            </h2>
          </BlurFade>
          <BlurFade delay={0.3} inView>
            <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
              {t("description")}
            </p>
          </BlurFade>
        </div>

        {/* Simple Grid - Equal Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* View All CTA */}
        <BlurFade delay={0.8} inView>
          <div className="text-center mt-12">
            <motion.button
              type="button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full font-medium shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all"
            >
              <span>{t("viewAll")}</span>
              <ArrowUpRight className="w-5 h-5" />
            </motion.button>
          </div>
        </BlurFade>
      </div>
    </section>
  );
}
