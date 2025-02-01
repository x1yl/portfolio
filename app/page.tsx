"use client";

import { motion } from "framer-motion";
import { Github, Youtube } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import {
  EnvelopeClosedIcon,
  RocketIcon,
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
        <div className="mx-auto w-full  px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex h-28 items-center justify-between">
            <Link href="/" className="group flex items-center space-x-4">
              <motion.div
                whileHover={{ rotate: 45, scale: 1.1 }}
                className="rounded-full border-3 border-blue-400 p-5 transition-all duration-300 group-hover:border-blue-300"
              >
                <div className="flex h-10 w-10 items-center justify-center">
                  <span className="text-3xl font-bold text-blue-400 transition-colors group-hover:text-blue-300">
                    KZ
                  </span>
                </div>
              </motion.div>
            </Link>
            <nav className="flex items-center space-x-8 pr-6">
              {["Home", "Profile", "Projects"].map((item) => (
                <Link
                  key={item}
                  href="#"
                  className="relative px-2 py-3 text-lg font-medium text-blue-100 transition-all hover:text-blue-300"
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
                  className="ml-6 bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-2.5 text-lg font-semibold text-white shadow-lg transition-all hover:from-blue-600 hover:to-purple-700 hover:shadow-blue-500/30"
                >
                  <EnvelopeClosedIcon className="mr-2 h-5 w-5" />
                  Contact
                </Button>
              </motion.div>
            </nav>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative flex min-h-screen items-center justify-center bg-black px-4 sm:px-6 lg:px-8">
          <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
          <div className="relative z-10 mx-auto w-full ">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <h1 className="mb-6 text-5xl font-bold leading-tight tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl">
                Hi, I&apos;m <br />
                <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                  Kevin Zheng
                </span>
              </h1>
              <p className="mx-auto mb-8 max-w-2xl text-xl text-blue-200 sm:text-2xl">
                Crafting digital experiences and bringing ideas to life through
                code.
              </p>
              <div className="flex justify-center space-x-4">
                <Button
                  size="lg"
                  className="bg-blue-500 text-white hover:bg-blue-600"
                >
                  View Projects
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-blue-500 text-blue-400 hover:bg-blue-500/10"
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
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
          >
            <div className="animate-bounce">
              <ChevronDownIcon className="h-8 w-8 text-blue-400" />
            </div>
          </motion.div>
        </section>

        {/* Skills Section */}
        <section className="bg-gradient-to-b from-black to-blue-900/20 py-20 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto w-full ">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-12"
            >
              <h2 className="text-3xl font-bold">Skills</h2>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
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
                    className="rounded-lg border border-blue-500/20 bg-blue-950/30 p-4 transition-colors hover:border-blue-500/50"
                  >
                    <p className="text-lg font-medium">{skill}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-12"
            >
              <h2 className="text-3xl font-bold">Featured Projects</h2>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
                {[1, 2, 3].map((project) => (
                  <div
                    key={project}
                    className="group relative aspect-video overflow-hidden rounded-lg border bg-blue-950/30"
                  >
                    <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black to-black/20 p-6">
                      <h3 className="mb-2 text-xl font-semibold">
                        Project {project}
                      </h3>
                      <p className="mb-4 text-sm text-blue-200">
                        A brief description of the project and technologies
                        used.
                      </p>
                      <div className="flex gap-4 opacity-0 transition-opacity group-hover:opacity-100">
                        <Button size="sm" variant="secondary">
                          View Demo
                        </Button>
                        <Button size="sm" variant="outline">
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

        {/* Contact Section */}
        <section className="bg-gradient-to-t from-black to-blue-900/20 py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-12"
            >
              <h2 className="text-3xl font-bold">Get in Touch</h2>
              <div className="flex flex-col items-center space-y-6">
                <div className="flex gap-6">
                  <Button
                    variant="outline"
                    size="lg"
                    className="h-12 w-12 rounded-full p-0"
                  >
                    <Github className="h-6 w-6" />
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="h-12 w-12 rounded-full p-0"
                  >
                    <Youtube className="h-6 w-6" />
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="h-12 w-12 rounded-full p-0"
                  >
                    <EnvelopeClosedIcon className="h-6 w-6" />
                  </Button>
                </div>
                <p className="max-w-[500px] text-center text-blue-200">
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
