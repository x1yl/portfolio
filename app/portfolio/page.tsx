"use client";

import { motion } from "motion/react";
import { Header } from "@/components/ui/header";

export default function PortfolioPage() {
  const experiences = [
    {
      title: "Maintain Club Website",
      company: "BTHS Action",
      period: "2024 - Present",
      description: "Maintain the functionality of the club website and implement new features to improve user experience. https://bthsaction.org",
      skills: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
    },
  ];

  const education = [
    {
      degree: "Mechatronics and Robotics Engineering",
      school: "Brooklyn Technical High School",
      period: "2023 - 2027",
      description: "Relevet coursework: AP Computer Science Principles, Design & Drawing Production, Regents Physics, and more."
    },
  ];

  return (
    <div className="min-h-screen bg-black">
      <Header />
      <div className="pt-[12vw]">
        <div className="mx-auto w-[85vw]">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="space-y-[6vw]"
            style={{
              transform: "scale(calc(0.75 + (100vw - 1280px) / 1500))",
              transformOrigin: "top center",
            }}
          >
            <section className="space-y-[3vw]">
              <h1 className="text-[3vw] font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                Experience
              </h1>
              <div className="space-y-[2vw]">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={exp.title}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="rounded-[1vw] border border-blue-500/20 bg-blue-950/30 p-[2vw] space-y-[1vw]"
                  >
                    <div className="flex justify-between items-center">
                      <h2 className="text-[1.5vw] font-bold">{exp.title}</h2>
                      <span className="text-[1vw] text-blue-300">{exp.period}</span>
                    </div>
                    <h3 className="text-[1.2vw] text-blue-400">{exp.company}</h3>
                    <p className="text-[1.1vw] text-blue-200">{exp.description}</p>
                    <div className="flex gap-[1vw] flex-wrap">
                      {exp.skills.map((skill) => (
                        <span
                          key={skill}
                          className="rounded-full bg-blue-500/10 px-[1vw] py-[0.5vw] text-[0.9vw] text-blue-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>

            <section className="space-y-[3vw]">
              <h2 className="text-[3vw] font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                Education
              </h2>
              <div className="space-y-[2vw]">
                {education.map((edu, index) => (
                  <motion.div
                    key={edu.degree}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="rounded-[1vw] border border-blue-500/20 bg-blue-950/30 p-[2vw] space-y-[1vw]"
                  >
                    <div className="flex justify-between items-center">
                      <h3 className="text-[1.5vw] font-bold">{edu.degree}</h3>
                      <span className="text-[1vw] text-blue-300">{edu.period}</span>
                    </div>
                    <h4 className="text-[1.2vw] text-blue-400">{edu.school}</h4>
                    <p className="text-[1.1vw] text-blue-200">{edu.description}</p>
                  </motion.div>
                ))}
              </div>
            </section>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
