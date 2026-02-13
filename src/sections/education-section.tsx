"use client";

import { Award, BookOpen, GraduationCap } from "lucide-react";
import { motion } from "motion/react";
import { BlurFade } from "@/components/ui/blur-fade";

interface EducationItem {
  institution: string;
  degree: string;
  location: string;
  startDate: string;
  endDate: string;
  type: string;
  description: string;
}

const educationItems: EducationItem[] = [
  {
    institution: "Universidad Católica de Santiago del Estero",
    degree: "University Programmer Technician",
    location: "Argentina",
    startDate: "2016",
    endDate: "2019",
    type: "degree",
    description:
      "University-level technical degree focused on programming and software development.",
  },
];

interface CourseItem {
  platform: string;
  title: string;
  startDate: string;
  endDate: string;
  items: string[];
}

const courses: CourseItem[] = [
  {
    platform: "Platzi",
    title: "Professional Courses",
    startDate: "2020",
    endDate: "2025",
    items: [
      "Backend Development with NestJS",
      "Docker Fundamentals",
      "Software Testing Fundamentals",
      "Selenium with Python",
      "REST APIs and Postman",
      "JavaScript and React.js specialization",
    ],
  },
  {
    platform: "Udemy",
    title: "Professional Courses",
    startDate: "2025",
    endDate: "2025",
    items: [
      "Apache, Nginx and SSL configuration",
      "Linux servers and VPS management",
    ],
  },
];

function EducationCard({
  educationItem,
  index,
}: {
  educationItem: EducationItem;
  index: number;
}) {
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
              {educationItem.degree}
            </h3>
            <p className="text-muted-foreground mb-2">
              {educationItem.institution}
            </p>
            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
              <span>{educationItem.location}</span>
              <span>•</span>
              <span>
                {educationItem.startDate} - {educationItem.endDate}
              </span>
            </div>
            <p className="text-muted-foreground">{educationItem.description}</p>
          </div>
        </div>
      </motion.div>
    </BlurFade>
  );
}

function CourseCard({
  course,
  index,
}: {
  course: (typeof courses)[0];
  index: number;
}) {
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
            <h3 className="text-xl font-semibold mb-1">{course.title}</h3>
            <p className="text-muted-foreground mb-3">
              {course.platform} • {course.startDate}
              {course.endDate !== course.startDate && ` - ${course.endDate}`}
            </p>
            <ul className="space-y-2">
              {course.items.map((item) => (
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
  return (
    <section id="education" className="py-24 sm:py-32 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <BlurFade delay={0.1} inView>
            <span className="text-violet-600 dark:text-violet-400 font-medium text-sm tracking-wider uppercase">
              Education
            </span>
          </BlurFade>
          <BlurFade delay={0.2} inView>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mt-4">
              Learning & Growth
            </h2>
          </BlurFade>
          <BlurFade delay={0.3} inView>
            <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
              Continuous learning is the foundation of my development journey
            </p>
          </BlurFade>
        </div>

        {/* Education */}
        <div className="mb-12">
          <BlurFade delay={0.2} inView>
            <h3 className="text-2xl font-semibold mb-6">Formal Education</h3>
          </BlurFade>
          <div className="max-w-2xl">
            {educationItems.map((edu, index) => (
              <EducationCard
                key={edu.institution}
                educationItem={edu}
                index={index}
              />
            ))}
          </div>
        </div>

        {/* Courses */}
        <div>
          <BlurFade delay={0.3} inView>
            <h3 className="text-2xl font-semibold mb-6">
              Professional Development
            </h3>
          </BlurFade>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {courses.map((course, index) => (
              <CourseCard key={course.platform} course={course} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
