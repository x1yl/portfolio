"use client";

import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/ui/header";
import { ImageCard } from "@/components/ui/image-card";

export default function ProjectsPage() {
  const projects = [
    {
      id: 1,
      title: "Project 1",
      description: "A brief description of the project and technologies used.",
      image: "/images/237-536x354.jpg",
    },
    // Add more projects as needed
  ];

  return (
    <div className="min-h-screen bg-black">
      <Header />
      <div className="py-[12vw]">
        <div className="mx-auto w-[85vw]">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="space-y-[3vw]"
            style={{
              transform: "scale(calc(0.75 + (100vw - 1280px) / 1500))",
              transformOrigin: "center",
            }}
          >
            <h1 className="text-[2.5vw] font-bold">Projects</h1>
            <div className="grid grid-cols-1 gap-[2vw] sm:grid-cols-2 xl:grid-cols-3">
              {projects.map((project) => (
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
      </div>
    </div>
  );
}
