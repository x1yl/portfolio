"use client";

import { motion } from "motion/react";
import { SiGmail as Mail } from "@icons-pack/react-simple-icons";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export function Header() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrollY > 50
          ? "bg-black/90 backdrop-blur-md supports-backdrop-filter:bg-black/80"
          : "bg-transparent"
      }`}
      style={{
        transform: "scale(calc(0.75 + (100vw - 1280px) / 2000))",
        transformOrigin: "top center",
      }}
    >
      <div className="mx-auto w-full px-[2.25vw]">
        <div className="flex h-[6vw] items-center justify-between">
          <Link href="/" className="group flex items-center">
            <div className="flex h-[2.25vw] w-[2.25vw] items-center justify-center">
              <span className="text-[1.875vw] font-bold text-blue-400 transition-colors group-hover:text-blue-300">
                KZ
              </span>
            </div>
          </Link>
          <nav className="flex items-center space-x-[2.25vw]">
            {["Home", "Projects", "Portfolio"].map((item) => (
              <Link
                key={item}
                href={`/${item === "Home" ? "" : item.toLowerCase()}`}
                className="relative px-[0.75vw] py-[0.375vw] text-[1.275vw] font-medium text-blue-100 transition-all hover:text-blue-300"
              >
                {item}
                <motion.span
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  className="absolute bottom-0 left-0 h-[0.15vw] bg-linear-to-r from-blue-400 to-blue-600"
                />
              </Link>
            ))}

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="default"
                className="ml-[0.75vw] rounded-[0.375vw] bg-linear-to-r from-blue-500 to-purple-600 px-[1.875vw] py-[0.75vw] text-[1.275vw] font-semibold text-white shadow-lg transition-all hover:from-blue-600 hover:to-purple-700 h-auto flex items-center gap-[0.6vw]"
              >
                <Mail
                  style={{
                    width: "1.275vw",
                    height: "1.275vw",
                    minWidth: "1.275vw",
                    minHeight: "1.275vw",
                  }}
                />
                Contact
              </Button>
            </motion.div>
          </nav>
        </div>
      </div>
    </header>
  );
}
