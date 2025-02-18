"use client";

import { motion } from "framer-motion";
import { Github, Youtube } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import {
  EnvelopeClosedIcon,
  ChevronDownIcon,
} from "@radix-ui/react-icons";

export default function Page() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex min-h-screen flex-col">
      <header
        className={`fixed top-0 z-50 w-full transition-all duration-300 ${
          scrollY > 50
            ? "bg-black/90 backdrop-blur-md supports-[backdrop-filter]:bg-black/80"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto w-full px-[4vw] py-[2vh]">
          <div className="flex h-[8vh] items-center justify-between">
            <Link href="/" className="group flex items-center space-x-4">
              <motion.div
                whileHover={{ rotate: 45, scale: 1.1 }}
                className="rounded-full border-3 border-blue-400 p-5 transition-all duration-300 group-hover:border-blue-300"
              >
                <div className="flex h-[3vw] w-[3vw] min-w-[40px] min-h-[40px] items-center justify-center">
                  <span className="text-[max(2vw,24px)] font-bold text-blue-400 transition-colors group-hover:text-blue-300">
                    KZ
                  </span>
                </div>
              </motion.div>
            </Link>
            <nav className="flex items-center space-x-[2vw] pr-[2vw]">
              {["Home", "Profile", "Projects"].map((item) => (
                <Link
                  key={item}
                  href="#"
                  className="relative px-[0.5vw] py-[1vh] text-[max(1vw,16px)] font-medium text-blue-100 transition-all hover:text-blue-300"
                >
                  {item}
                  <motion.span
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                    className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-400 to-blue-600"
                  />
                </Link>
              ))}

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="lg"
                  className="ml-[1vw] bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-3 text-[max(1vw,16px)] font-semibold text-white shadow-lg transition-all hover:from-blue-600 hover:to-purple-700 hover:shadow-blue-500/30"
                >
                  <EnvelopeClosedIcon className="mr-2 h-[1.2em] w-[1.2em]" />
                  Contact
                </Button>
              </motion.div>
            </nav>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <section className="relative flex min-h-screen items-center justify-center bg-black px-[4vw]">
          <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
          <div className="relative z-10 mx-auto w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <h1 className="mb-[3vh] text-[max(5vw,48px)] font-bold leading-tight tracking-tighter">
                Hi, I&apos;m <br />
                <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                  Kevin Zheng
                </span>
              </h1>
              <p className="mx-auto mb-[4vh] max-w-[60vw] text-[max(1.5vw,18px)] text-blue-200">
                Crafting digital experiences and bringing ideas to life through
                code.
              </p>
              <div className="flex justify-center space-x-[2vw]">
                <Button
                  size="lg"
                  className="bg-blue-500 text-[max(1vw,16px)] text-white hover:bg-blue-600 px-6 py-3"
                >
                  View Projects
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-blue-500 text-[max(1vw,16px)] text-blue-400 hover:bg-blue-500/10 px-6 py-3"
                >
                  Get in Touch
                </Button>
              </div>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="absolute bottom-[4vh] left-1/2 -translate-x-1/2"
          >
            <div className="animate-bounce">
              <ChevronDownIcon className="h-[4vh] w-[4vh] text-blue-400" />
            </div>
          </motion.div>
        </section>

        <section className="bg-gradient-to-b from-black to-blue-900/20 py-[10vh] px-[4vw]">
          <div className="mx-auto w-full">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-[6vh]"
            >
              <h2 className="text-[max(2.5vw,30px)] font-bold">Skills</h2>
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
                    className="rounded-lg border border-blue-500/20 bg-blue-950/30 p-[2vh] transition-colors hover:border-blue-500/50"
                  >
                    <p className="text-[max(1.2vw,16px)] font-medium">{skill}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-[10vh] px-[4vw]">
          <div className="mx-auto w-full">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-[6vh]"
            >
              <h2 className="text-[max(2.5vw,30px)] font-bold">Featured Projects</h2>
              <div className="grid grid-cols-1 gap-[2vw] sm:grid-cols-2 xl:grid-cols-3">
                {[1, 2, 3].map((project) => (
                  <div
                    key={project}
                    className="group relative aspect-video overflow-hidden rounded-lg border bg-blue-950/30"
                  >
                    <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black to-black/20 p-[2vw]">
                      <h3 className="mb-[1vh] text-[max(1.5vw,18px)] font-semibold">
                        Project {project}
                      </h3>
                      <p className="mb-[2vh] text-[max(1vw,14px)] text-blue-200">
                        A brief description of the project and technologies used.
                      </p>
                      <div className="flex gap-[1vw] opacity-0 transition-opacity group-hover:opacity-100">
                        <Button size="sm" variant="secondary" className="text-[max(0.8vw,12px)]">
                          View Demo
                        </Button>
                        <Button size="sm" variant="outline" className="text-[max(0.8vw,12px)]">
                          View Code
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        <section className="bg-gradient-to-t from-black to-blue-900/20 py-[10vh] px-[4vw]">
          <div className="mx-auto w-full">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-[6vh]"
            >
              <h2 className="text-[max(2.5vw,30px)] font-bold">Get in Touch</h2>
              <div className="flex flex-col items-center space-y-[3vh]">
                <div className="flex gap-[2vw]">
                  <Button
                    variant="outline"
                    size="lg"
                    className="h-[4vw] w-[4vw] min-h-[40px] min-w-[40px] rounded-full p-0"
                  >
                    <Github className="h-[2vw] w-[2vw] min-h-[20px] min-w-[20px]" />
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="h-[4vw] w-[4vw] min-h-[40px] min-w-[40px] rounded-full p-0"
                  >
                    <Youtube className="h-[2vw] w-[2vw] min-h-[20px] min-w-[20px]" />
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="h-[4vw] w-[4vw] min-h-[40px] min-w-[40px] rounded-full p-0"
                  >
                    <EnvelopeClosedIcon className="h-[2vw] w-[2vw] min-h-[20px] min-w-[20px]" />
                  </Button>
                </div>
                <p className="max-w-[50vw] text-center text-[max(1.2vw,16px)] text-blue-200">
                  Feel free to reach out for collaborations or just a friendly hello
                </p>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
}