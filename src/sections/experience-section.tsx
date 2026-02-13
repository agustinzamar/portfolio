"use client";

import { Briefcase, Calendar, ChevronDown, MapPin } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { BlurFade } from "@/components/ui/blur-fade";
import { BorderBeam } from "@/components/ui/border-beam";
import { cn } from "@/lib/utils";

const experiences = [
  {
    company: "Crystal Desarrollo",
    position: "Full Stack Developer",
    employment: "Full-time",
    location: "Remote, Argentina",
    startDate: "2025-02",
    endDate: "present",
    highlights: [
      "Developed production web applications using Laravel and React",
      "Designed and implemented REST APIs",
      "Built responsive frontend components",
      "Managed relational databases (MySQL, SQL Server, SQLite)",
      "Implemented CI/CD pipelines with GitHub Actions",
      "Worked directly with clients from requirements to delivery",
    ],
  },
  {
    company: "GM2",
    position: "Full Stack Developer",
    employment: "Contract",
    location: "Remote, Argentina",
    startDate: "2024-11",
    endDate: "2025-02",
    highlights: [
      "Developed backend features using Laravel",
      "Built frontend interfaces with React and Next.js",
      "Designed and integrated REST APIs across Laravel microservices",
      "Contributed to an API Gateway using AWS SAM",
      "Worked in Agile Scrum teams (planning, dailies, code reviews)",
    ],
  },
  {
    company: "Freelance",
    position: "Full Stack Developer",
    employment: "Independent",
    location: "Remote, Argentina",
    startDate: "2023-08",
    endDate: "2024-10",
    highlights: [
      "Developed custom web solutions for multiple clients",
      "Built full-stack applications using Laravel and React",
      "Created and maintained RESTful APIs",
      "Implemented responsive designs with modern CSS frameworks",
      "Managed project timelines and client communications",
      "Deployed applications to cloud infrastructure",
    ],
  },
  {
    company: "Devsu",
    position: "Full Stack Developer",
    employment: "Full-time",
    location: "Remote, Argentina",
    startDate: "2022-07",
    endDate: "2023-07",
    highlights: [
      "Developed web applications using Laravel, React and TypeScript",
      "Worked on e-commerce platforms built with Magento",
      "Refactored legacy systems using Symfony",
      "Integrated external shipment tracking REST APIs",
      "Developed features for internal backoffice applications",
      "Used Git, GitHub, GitLab and Jenkins CI/CD",
      "Worked under Agile methodologies",
    ],
  },
  {
    company: "JBKnowledge",
    position: "Quality Assurance Analyst",
    employment: "Full-time",
    location: "Remote, Argentina",
    startDate: "2020-10",
    endDate: "2022-07",
    highlights: [
      "Designed and executed functional, regression and integration tests",
      "Created automated tests using Selenium and Cypress",
      "Performed cross-browser and cross-platform testing",
      "Tracked issues using JIRA and Bugzilla",
      "Worked closely with developers in Agile teams",
    ],
  },
];

function ExperienceCard({
  experience,
  index,
}: {
  experience: (typeof experiences)[0];
  index: number;
}) {
  const [isExpanded, setIsExpanded] = useState(false);

  const formatDate = (date: string) => {
    if (date === "present") return "Present";
    const [year, month] = date.split("-");
    const monthNames = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    return `${monthNames[Number.parseInt(month, 10) - 1]} ${year}`;
  };

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
                  <h3 className="text-xl font-semibold">
                    {experience.company}
                  </h3>
                  <p className="text-muted-foreground">{experience.position}</p>
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
                {experience.highlights.map((highlight, i) => (
                  <motion.li
                    key={`${experience.company}-highlight-${i}`}
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
              <span>{isExpanded ? "Show Less" : "Show Details"}</span>
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
  return (
    <section id="experience" className="py-24 sm:py-32 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <BlurFade delay={0.1} inView>
            <span className="text-violet-600 dark:text-violet-400 font-medium text-sm tracking-wider uppercase">
              Experience
            </span>
          </BlurFade>
          <BlurFade delay={0.2} inView>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mt-4">
              My Professional Journey
            </h2>
          </BlurFade>
          <BlurFade delay={0.3} inView>
            <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
              From QA to Full Stack Development, here&apos;s the path that
              shaped my career
            </p>
          </BlurFade>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line - Hidden on mobile */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-border hidden lg:block" />

          {/* Experience Cards */}
          <div className="space-y-8 lg:space-y-12">
            {experiences.map((experience, index) => (
              <div key={experience.company} className="lg:pl-20 relative">
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
