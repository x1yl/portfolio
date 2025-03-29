"use client";

import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/ui/header";
import { ImageCard } from "@/components/ui/image-card";
import { fetchUserRepositories, Repository } from "@/lib/github";
import { useEffect, useState } from "react";

export default function ProjectsPage() {
  const [repos, setRepos] = useState<Repository[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUserRepositories()
      .then(setRepos)
      .finally(() => setLoading(false));
  }, []);

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
            {loading ? (
              <div className="text-[1.5vw] text-blue-400 text-center">
                Loading projects...
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-[2vw] sm:grid-cols-2 xl:grid-cols-3">
                {repos.map((repo) => (
                  <ImageCard key={repo.id} image={repo.screenshot_url}>
                    <h3 className="mb-[0.5vw] text-[1.5vw] font-semibold">
                      {repo.name}
                    </h3>
                    <p className="mb-[1vw] text-[1vw] text-blue-200">
                      {repo.description || "No description available"}
                    </p>
                    <div className="flex gap-[1vw] opacity-0 transition-opacity group-hover:opacity-100">
                      {repo.homepage && (
                        <Button
                          size="sm"
                          variant="secondary"
                          className="text-[1vw] px-[1.5vw] py-[0.75vw] h-auto"
                          onClick={() =>
                            repo.homepage &&
                            window.open(repo.homepage, "_blank")
                          }
                        >
                          View Demo
                        </Button>
                      )}
                      <Button
                        size="sm"
                        variant="outline"
                        className="text-[1vw] px-[1.5vw] py-[0.75vw] h-auto"
                        onClick={() => window.open(repo.html_url, "_blank")}
                      >
                        View Code
                      </Button>
                    </div>
                  </ImageCard>
                ))}
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
