"use client";

import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { ChevronDown, Github, Linkedin, Mail } from "lucide-react";

export function HeroSection() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const scrollToNext = (): void => {
    const nextSection = document.getElementById("about");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center px-6"
    >
      {/* Glassmorphism Container */}
      <motion.div
        className={`relative z-10 rounded-3xl border p-8 text-center backdrop-blur-md ${isDark ? "border-white/10 bg-white/5" : "border-black/10 bg-black/5"}`}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        {/* Animated Greeting */}
        <motion.div
          className="mb-6"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <span
            className={`text-lg font-medium ${isDark ? "text-cyan-400" : "text-blue-600"}`}
          >
            {"Hello, I'm"}
          </span>
        </motion.div>

        {/* Main Name */}
        <motion.h1
          className={`mb-4 text-6xl font-bold md:text-8xl ${isDark ? "text-white" : "text-black"}`}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          Ayush
        </motion.h1>

        {/* Profession */}
        <motion.h2
          className={`mb-8 text-2xl font-medium md:text-3xl ${isDark ? "text-white/80" : "text-black/80"}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          Full Stack Developer  <br /> & <br /> Cyber Security Enthusiast
        </motion.h2>

        {/* Social Links */}
        <motion.div
          className="mb-10 flex justify-center space-x-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
        >

          <motion.a
            href="https://github.com/Ayush-AM"
            target="_blank"
            rel="noopener noreferrer"
            className={`flex h-12 w-12 items-center justify-center rounded-full ${isDark ? "bg-white/10 hover:bg-white/20" : "bg-black/10 hover:bg-black/20"} transition-colors`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github className="h-6 w-6 text-white" />
          </motion.a>

          <motion.a
            href="https://www.linkedin.com/in/ayush-mahajan-a50bb3277"
            target="_blank"
            rel="noopener noreferrer"
            className={`flex h-12 w-12 items-center justify-center rounded-full ${isDark ? "bg-white/10 hover:bg-white/20" : "bg-black/10 hover:bg-black/20"} transition-colors`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Linkedin className="h-6 w-6 text-white" />
          </motion.a>

          <motion.a
            href="#contact"
            className={`flex h-12 w-12 items-center justify-center rounded-full ${isDark ? "bg-white/10 hover:bg-white/20" : "bg-black/10 hover:bg-black/20"} transition-colors`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Mail className="h-6 w-6 text-white" />
          </motion.a>

        </motion.div>

        {/* Scroll Down Indicator */}
        <motion.button
          onClick={scrollToNext}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 transform"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.5 }}
          whileHover={{ y: 5 }}
          whileTap={{ scale: 0.9 }}
        >
          <ChevronDown
            className={`h-7 w-8 cursor-pointer ${isDark ? "text-cyan-600" : "text-blue-600 "}`}
          />
        </motion.button>
      </motion.div>
    </section>
  );
}
