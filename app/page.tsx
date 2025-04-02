"use client";

import { motion } from "motion/react";
import { ChevronDown } from "lucide-react";
import {
  SiGithub as Github,
  SiGmail as Mail,
} from "@icons-pack/react-simple-icons";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ContactForm } from "@/components/ui/contactForm";
import { Header } from "@/components/ui/header";
import { ImageCard } from "@/components/ui/image-card";

export default function Page() {
  const scrollToSkills = () => {
    const skillsSection = document.getElementById("skills");
    skillsSection?.scrollIntoView({ behavior: "smooth" });
  };

  const featuredProjects = [
    {
      id: 1,
      title: "Project 1",
      description: "A brief description of the project and technologies used.",
      image: "/images/237-536x354.jpg",
    },
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        <section className="relative flex min-h-screen w-full items-center justify-center bg-black">
          <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />

          {/* Scalable Hero Content */}
          <div
            className="relative z-10 flex flex-col items-center text-center"
            style={{
              transform: "scale(calc(0.75 + (100vw - 1280px) / 1500))",
              transformOrigin: "center",
            }}
          >
            <h1 className="text-[4.5vw] md:text-[3.75vw] font-bold leading-none tracking-tighter">
              <span className="block mb-[0.75vw]">Hi, I&apos;m</span>
              <span className="bg-linear-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                Kevin Zheng
              </span>
            </h1>
            <p className="mx-auto mt-[1.5vw] mb-[2.25vw] max-w-[45vw] text-[1.5vw] text-blue-200">
              Crafting digital experiences and bringing ideas to life through
              code.
            </p>
            <div className="flex justify-center space-x-[1.5vw]">
              <Button
                size="lg"
                className="bg-blue-500 text-white hover:bg-blue-600 px-[2.25vw] py-[1.125vw] text-[1.125vw] h-auto rounded-[0.375vw]"
              >
                View Projects
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-blue-500 text-blue-400 hover:bg-blue-500/10 px-[2.25vw] py-[1.125vw] text-[1.125vw] h-auto rounded-[0.375vw]"
              >
                Get in Touch
              </Button>
            </div>
          </div>

          {/* Animated Scroll Icon */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="absolute bottom-[3vw] left-1/2 -translate-x-1/2 cursor-pointer"
            onClick={scrollToSkills}
          >
            <div className="animate-bounce">
              <ChevronDown className="h-[3vw] w-[3vw] text-blue-400" />
            </div>
          </motion.div>
        </section>

        {/* Skills Section */}
        <section
          id="skills"
          className="bg-linear-to-b from-black to-blue-900/20 py-[10vw] min-h-[100vh]"
        >
          <div className="mx-auto w-[90vw]">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-[4vw] h-full"
              style={{
                transform: "scale(calc(0.75 + (100vw - 1280px) / 2000))",
                transformOrigin: "center",
              }}
            >
              <h2 className="text-[2.5vw] font-bold">Skills</h2>
              <div className="grid grid-cols-2 gap-[2vw] sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
                {[
                  "JavaScript",
                  "React",
                  "Node.js",
                  "Python",
                  "TypeScript",
                  "Next.js",
                  "TailwindCSS",
                  "Git",
                ].map((skill) => (
                  <div
                    key={skill}
                    className="rounded-[0.5vw] border border-blue-500/20 bg-blue-950/30 p-[2vw] transition-colors hover:border-blue-500/50"
                  >
                    <p className="text-[1.2vw] font-medium">{skill}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="py-[10vw] min-h-screen">
          <div className="mx-auto w-[85vw]">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-[3vw]"
              style={{
                transform: "scale(calc(0.75 + (100vw - 1280px) / 2000))",
                transformOrigin: "center",
              }}
            >
              <h2 className="text-[2.5vw] font-bold">Featured Projects</h2>
              <div className="grid grid-cols-1 gap-[2vw] sm:grid-cols-2 xl:grid-cols-3">
                {featuredProjects.map((project) => (
                  <ImageCard key={project.id} image={project.image}>
                    <h3 className="mb-[0.5vw] text-[1.5vw] font-semibold">
                      {project.title}
                    </h3>
                    <p className="mb-[1vw] text-[1vw] text-blue-200">
                      {project.description}
                    </p>
                    <div className="flex gap-[1vw] opacity-0 transition-opacity group-hover:opacity-100">
                      <Button
                        size="sm"
                        variant="secondary"
                        className="text-[1vw] px-[1.5vw] py-[0.75vw] h-auto"
                      >
                        View Demo
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="text-[1vw] px-[1.5vw] py-[0.75vw] h-auto"
                      >
                        View Code
                      </Button>
                    </div>
                  </ImageCard>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="bg-linear-to-t from-black to-blue-900/20 py-[3.5vw]">
          <div className="mx-auto w-[85vw]">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col items-center"
              style={{
                transform: "scale(calc(0.75 + (100vw - 1280px) / 1500))",
                transformOrigin: "center",
              }}
            >
              <h2 className="text-[2.5vw] font-bold self-start mb-[3vw]">
                Get in Touch
              </h2>
              <ContactForm />
              <div className="mt-[3vw] flex flex-col items-center space-y-[2vw]">
                <div className="flex gap-[2vw]">
                  <Link
                    href="https://github.com/x1yl"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      variant="outline"
                      style={{
                        width: "4vw",
                        height: "4vw",
                        borderRadius: "50%",
                        padding: 0,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Github style={{ width: "2vw", height: "2vw" }} />
                    </Button>
                  </Link>
                  <Link
                    href="https://www.linkedin.com/in/kevin-zheng-020665356/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      variant="outline"
                      style={{
                        width: "4vw",
                        height: "4vw",
                        borderRadius: "50%",
                        padding: 0,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <img
                        src="/images/linkedin.svg"
                        alt="Linkedin"
                        width="45vw"
                        height="45vh"
                      />
                    </Button>
                  </Link>
                  <Link
                    href="mailto:kevin@fryvex.is-a.dev"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      variant="outline"
                      style={{
                        width: "4vw",
                        height: "4vw",
                        borderRadius: "50%",
                        padding: 0,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Mail style={{ width: "2vw", height: "2vw" }} />
                    </Button>
                  </Link>
                </div>
                <p className="max-w-[40vw] text-center text-[1.2vw] text-blue-200">
                  Feel free to reach out for collaborations or just a friendly
                  hello
                </p>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
}
