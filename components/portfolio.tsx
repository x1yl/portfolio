"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Mail, Moon, Sun, MapPin } from "lucide-react";
import { SiLinkedin, SiGithub } from "@icons-pack/react-simple-icons";
import Link from "next/link";
import { useState, useEffect } from "react";
import { ContactForm } from "./contactForm";

export function Portfolio() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800 transition-colors duration-500">
      <header className="sticky top-0 z-50 px-4 lg:px-6 h-14 flex items-center border-b border-gray-200 dark:border-gray-700 bg-white/80 dark:bg-gray-800/80 backdrop-blur-md">
        {" "}
        <Link className="flex items-center justify-center" href="#">
          <span className="sr-only">Kevin Zheng&aposs Portfolio</span>
          <span className="font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
            KZ
          </span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-sm font-medium hover:text-blue-500 transition-colors"
            href="#projects"
          >
            Projects
          </Link>
          <Link
            className="text-sm font-medium hover:text-blue-500 transition-colors"
            href="#about"
          >
            About
          </Link>
          <Link
            className="text-sm font-medium hover:text-blue-500 transition-colors"
            href="#contact"
          >
            Contact
          </Link>
        </nav>
        <Button
          variant="ghost"
          size="icon"
          className="ml-4"
          onClick={() => setDarkMode(!darkMode)}
          aria-label="Toggle dark mode"
        >
          {darkMode ? (
            <Sun className="h-[1.2rem] w-[1.2rem]" />
          ) : (
            <Moon className="h-[1.2rem] w-[1.2rem]" />
          )}
        </Button>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
                  Kevin Zheng
                </h1>
                <div className="flex items-center justify-center space-x-1 text-gray-500 dark:text-gray-400">
                  <MapPin className="h-4 w-4" />
                  <span className="text-sm">Brooklyn, NY • 15 yrs old</span>
                </div>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400 mt-4">
                  Backend intusisast, knowledgable in Typescript, Python, React
                  and Next.js. Crafting innovative solutions to complex
                  challenges.
                </p>
              </div>
              <div className="space-x-4">
                <Link href="#contact">
                  <Button
                    className={cn(
                      "bg-blue-700 hover:bg-blue-800 text-white", // Light mode (contrast ratio > 4.5:1)
                      "dark:bg-blue-600 dark:hover:bg-blue-700", // Dark mode (contrast ratio > 4.5:1)
                      "transition-colors duration-300"
                    )}
                  >
                    {" "}
                    Contact Me
                  </Button>
                </Link>
                <Link href="#projects">
                  <Button
                    variant="outline"
                    className="border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white transition-colors duration-300"
                  >
                    View Projects
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section
          id="projects"
          className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-900 transition-colors duration-500"
        >
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
              Projects
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <Link href="https://github.com/x1yl" className="group">
                <Card className="group hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle className="group-hover:text-blue-500 transition-colors duration-300">
                      My Portfolio
                    </CardTitle>
                    <CardDescription>Portfolio website</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Developed using React, Typescript, and Next.js. Simple yet
                      elegant design with responsive layout and dark mode
                      support.
                    </p>
                  </CardContent>
                </Card>
              </Link>
              <Link
                href="https://github.com/bths-action/website"
                className="group"
              >
                <Card className="group hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle className="group-hover:text-blue-500 transition-colors duration-300">
                      BTHS Action Website
                    </CardTitle>
                    <CardDescription>
                      Official website for high school student organization
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Built using React, Tailwind CSS, and Typescript. Used by
                      the club to manage events, announcements, and member
                      sign-ups. Users could create accounts, join events, and
                      receive notifications.
                    </p>
                  </CardContent>
                </Card>
              </Link>
              <Link
                href="https://github.com/x1yl/Amari-Leaderboard"
                className="group"
              >
                <Card className="group hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle className="group-hover:text-blue-500 transition-colors duration-300">
                      Amari Leaderboard
                    </CardTitle>
                    <CardDescription>
                      Hobby Project to create a custom site for Amari
                      Leaderboard
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Created with javascript, html, as well as the official
                      Amari API. Users can use this site to look up a Discord
                      server's leaderboard and search for specific usernames.
                    </p>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </div>
        </section>
        <section
          id="about"
          className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800 transition-colors duration-500"
        >
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
              About Me
            </h2>
            <div className="max-w-3xl mx-auto space-y-4">
              <p className="text-gray-500 dark:text-gray-400">
                I'm Kevin Zheng, a dedicated full-stack developer with a strong
                foundation in computer science and 5 years of hands-on
                experience in the tech industry. My expertise spans across
                modern web technologies, with a particular focus on React,
                Node.js, and emerging fields like blockchain and AI.
              </p>
              <p className="text-gray-500 dark:text-gray-400">
                I thrive on challenges that push the boundaries of what's
                possible in software development. Whether it's creating
                intuitive user interfaces or architecting scalable backend
                systems, I'm committed to delivering high-quality solutions that
                make a real impact.
              </p>
              <p className="text-gray-500 dark:text-gray-400">
                Outside of coding, I'm an avid tech enthusiast who enjoys
                staying up-to-date with the latest industry trends. I also love
                participating in hackathons and contributing to open-source
                projects in my free time.
              </p>
            </div>
          </div>
        </section>
        <section
          id="contact"
          className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-900 transition-colors duration-500"
        >
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
              Get In Touch
            </h2>
            <div className="max-w-md mx-auto">
              <ContactForm />
            </div>
            <div className="flex justify-center space-x-4 mt-8">
              <Link
                href="https://github.com/x1yl"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full hover:bg-blue-500 hover:text-white transition-colors duration-300"
                >
                  <SiGithub className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Button>
              </Link>
              <Link
                href="https://linkedin.com/in/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full hover:bg-blue-500 hover:text-white transition-colors duration-300"
                >
                  <SiLinkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Button>
              </Link>
              <Link href="mailto:kev.zheng0226@gmail.com">
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full hover:bg-blue-500 hover:text-white transition-colors duration-300"
                >
                  <Mail className="h-5 w-5" />
                  <span className="sr-only">Email</span>
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-gray-200 dark:border-gray-700 bg-white/50 dark:bg-gray-800/50 backdrop-blur-md">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          © 2024 Kevin Zheng. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-xs hover:underline underline-offset-4 text-gray-500 hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
            href="#projects"
          >
            Projects
          </Link>
          <Link
            className="text-xs hover:underline underline-offset-4 text-gray-500 hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
            href="#about"
          >
            About
          </Link>
          <Link
            className="text-xs hover:underline underline-offset-4 text-gray-500 hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
            href="#contact"
          >
            Contact
          </Link>
        </nav>
      </footer>
    </div>
  );
}
