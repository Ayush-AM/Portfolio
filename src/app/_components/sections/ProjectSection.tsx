"use client";

import { useState, type JSX } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";
import { ExternalLink, Github, Play, X } from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  image: string;
  demoUrl: string;
  githubUrl: string;
  category: "web" | "3d" | "mobile" | "ai" | "iot";
  featured: boolean;
}

export function ProjectsSection(): JSX.Element {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filter, setFilter] = useState<string>("all");

  const projects: Project[] = [
    // --- Original Projects ---
    {
      id: 1,
      title: "3D Portfolio Website",
      description:
        "Interactive 3D portfolio with WebGL animations and scroll-based interactions.",
      longDescription:
        "A cutting-edge portfolio website built with Three.js and React. Features immersive 3D scenes, particle systems, and smooth scroll-based animations. Optimized for performance across all devices with responsive design and accessibility features.",
      technologies: ["React", "Three.js", "Framer Motion", "TypeScript"],
      image: "/images/projects/3d-portfolio.svg",
      demoUrl: "#",
      githubUrl: "#",
      category: "3d",
      featured: true,
    },
    {
      id: 2,
      title: "AI Reply for WhatsApp",
      description:
        "A WhatsApp automation tool that leverages Google’s Gemini AI for contextual replies.",
      longDescription:
        "This project creates an AI WhatsApp assistant that automatically responds to messages using Google Gemini API. The bot monitors chats in real-time with PyAutoGUI and generates natural replies in Hinglish (Hindi-English mix). It intelligently detects specific contacts and maintains conversational context for human-like interactions.",
      technologies: [
        "Python",
        "PyAutoGUI",
        "Google Gemini API",
        "Requests + JSON",
        "Pyperclip",
      ],
      image: "/images/projects/ai-chat.svg",
      demoUrl: "https://github.com/Ayush-AM/Gemini-Whatsapp-Chatbot",
      githubUrl: "https://github.com/Ayush-AM/Gemini-Whatsapp-Chatbot",
      category: "ai",
      featured: false,
    },
    {
      id: 3,
      title: "ESP32 RF Drone",
      description: "Manual RC drone with custom ESP32-based RF control system.",
      longDescription:
        "A hand-built quadcopter using ESP32 for RF communication between transmitter and receiver. Features low-latency control, failsafe protocols, and PWM-based motor control. Designed for responsive manual flight.",
      technologies: [
        "ESP32",
        "RF24 (nRF24L01)",
        "C++ (Arduino)",
        "PWM ESC",
        "LiPo Power Mgmt",
        "PID Stabilization",
      ],
      image: "/images/projects/Drone.jpg",
      demoUrl: "#",
      githubUrl: "#",
      category: "iot",
      featured: false,
    },

    // --- New Projects from GitHub ---
    {
      id: 4,
      title: "Zenith X 3D Website",
      description: "Immersive 3D headphone showcase with scroll animations.",
      longDescription:
        "A high-performance 3D landing page for Zenith headphones. Features smooth scroll-linked animations, interactive 3D models using React Three Fiber, and a modern dark aesthetic. Designed to provide a premium user experience.",
      technologies: ["Next.js", "React Three Fiber", "GSAP", "Tailwind CSS"],
      image: "/images/projects/zenith.png",
      demoUrl: "https://zenith-3d.vercel.app",
      githubUrl: "https://github.com/Ayush-AM/Zenith-3d",
      category: "3d",
      featured: true,
    },
    {
      id: 6,
      title: "Stationary-X",
      description: "Mobile app for ordering stationery with instant printing.",
      longDescription:
        "A comprehensive React Native mobile application that streamlines stationery shopping. Users can order items, upload documents for instant printing, and schedule deliveries. Features a user-friendly interface and real-time order tracking.",
      technologies: ["React Native", "Expo", "TypeScript", "React Navigation"],
      image: "/images/projects/stationary-x.png",
      demoUrl: "",
      githubUrl: "https://github.com/Ayush-AM/Stationary-X",
      category: "mobile",
      featured: false,
    },
    {
      id: 7,
      title: "Used Car Price Predictor",
      description: "ML model to estimate used car prices in the Indian market.",
      longDescription:
        "A machine learning application that predicts the market value of used cars based on depreciation factors like fuel type, transmission, and owner history. Powered by a Random Forest Regressor for high accuracy.",
      technologies: ["Python", "Flask", "Scikit-learn", "HTML/CSS"],
      image: "/images/projects/car-price.png",
      demoUrl: "",
      githubUrl: "https://github.com/Ayush-AM/Car-Prediction-Model-",
      category: "ai",
      featured: false,
    },
    {
      id: 8,
      title: "YT Transcripter AI",
      description: "Chat with YouTube videos using Gemini AI.",
      longDescription:
        "An intelligent tool that extracts transcripts from YouTube videos and enables users to have a conversational Q&A about the content. Leverages Google's Gemini AI to summarize and explain video details.",
      technologies: ["Python", "Flask", "Google Gemini AI", "YouTube API"],
      image: "/images/projects/yt-transcripter.png",
      demoUrl: "",
      githubUrl: "https://github.com/Ayush-AM/YT-Transcripter",
      category: "ai",
      featured: false,
    },
    {
      id: 9,
      title: "MovieView Platform",
      description: "Movie discovery and recommendation web application.",
      longDescription:
        "A dynamic movie database interface where users can search for titles, browse trending movies, and view detailed information. Built with React for a responsive and fast user experience.",
      technologies: ["React", "React Router", "CSS", "TMDB API"],
      image: "/images/projects/movie-view.png",
      demoUrl: "",
      githubUrl: "https://github.com/Ayush-AM/MovieView",
      category: "web",
      featured: false,
    },
  ];

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "web", label: "Web Apps" },
    { id: "3d", label: "3D & VR" },
    { id: "mobile", label: "Mobile" },
    { id: "ai", label: "AI & ML" },
  ];

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <section id="projects" className="relative min-h-screen px-6 py-20">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2
            className={`mb-6 text-5xl font-bold md:text-6xl ${isDark ? "text-white" : "text-black"}`}
          >
            {"My "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              {"Projects"}
            </span>
          </h2>
          <p
            className={`mx-auto max-w-3xl text-xl ${isDark ? "text-gray-300" : "text-gray-700"}`}
          >
            {"A showcase of my latest work, from immersive 3D experiences to "}
            {"full-stack applications and AI-powered solutions."}
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          className="mb-12 flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setFilter(category.id)}
              className={`rounded-full px-6 py-3 font-medium transition-all duration-300 ${
                filter === category.id
                  ? "bg-gradient-to-r from-primary to-secondary text-white shadow-lg"
                  : isDark
                    ? "bg-white/10 text-white hover:bg-white/20"
                    : "bg-black/10 text-black hover:bg-black/20"
              }`}
            >
              {category.label}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
          layout
        >
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className={`group cursor-pointer overflow-hidden rounded-2xl border backdrop-blur-md transition-all duration-300 hover:scale-105 ${
                  isDark
                    ? "border-white/10 bg-white/5 hover:bg-white/10"
                    : "border-black/10 bg-black/5 hover:bg-black/10"
                } ${project.featured ? "ring-2 ring-cyan-400/50" : ""}`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onClick={() => setSelectedProject(project)}
                whileHover={{ scale: 1.05 }}
                layout
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  {project.featured && (
                    <div className="absolute top-4 right-4 rounded-full bg-primary px-3 py-1 text-xs font-bold text-white">
                      {"Featured"}
                    </div>
                  )}
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <h3
                    className={`mb-2 text-xl font-bold ${isDark ? "text-white" : "text-black"}`}
                  >
                    {project.title}
                  </h3>
                  <p
                    className={`mb-4 text-sm ${isDark ? "text-gray-400" : "text-gray-600"}`}
                  >
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="mb-4 flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className={`rounded-full px-2 py-1 text-xs ${
                          isDark
                            ? "bg-white/10 text-gray-300"
                            : "bg-black/10 text-gray-700"
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span
                        className={`rounded-full px-2 py-1 text-xs ${
                          isDark
                            ? "bg-white/10 text-gray-300"
                            : "bg-black/10 text-gray-700"
                        }`}
                      >
                        {`+${project.technologies.length - 3}`}
                      </span>
                    )}
                  </div>

                  <div className="flex gap-2">
                    <button
                      className={`cursor-pointer flex flex-1 items-center justify-center gap-2 rounded-lg border px-4 py-2 transition-all duration-300 ${
                        isDark
                          ? "border-white/20 text-white hover:bg-white/10"
                          : "border-black/20 text-black hover:bg-black/10"
                      }`}
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(project.githubUrl, "_blank");
                      }}
                    >
                      <Github className="h-4 w-4" />
                      {"GitHub"}
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
            >
              <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
              <motion.div
                className={`relative max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-3xl border backdrop-blur-md ${
                  isDark
                    ? "border-white/20 bg-black/90"
                    : "border-black/20 bg-white/90"
                }`}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  className={`absolute top-4 right-4 rounded-full p-2 ${
                    isDark ? "bg-white/10 text-white" : "bg-black/10 text-black"
                  }`}
                  onClick={() => setSelectedProject(null)}
                >
                  <X className="h-6 w-6" />
                </button>

                <div className="p-8">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="mb-6 h-64 w-full rounded-2xl object-cover"
                  />

                  <h3
                    className={`mb-4 text-3xl font-bold ${isDark ? "text-white" : "text-black"}`}
                  >
                    {selectedProject.title}
                  </h3>

                  <p
                    className={`mb-6 text-lg ${isDark ? "text-gray-300" : "text-gray-700"}`}
                  >
                    {selectedProject.longDescription}
                  </p>

                  <div className="mb-6 flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech) => (
                      <span
                        key={tech}
                        className={`rounded-full px-3 py-1 text-sm ${
                          isDark
                            ? "bg-white/10 text-gray-300"
                            : "bg-black/10 text-gray-700"
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <button
                      className={`cursor-pointer flex items-center gap-2 rounded-lg border px-6 py-3 transition-all duration-300 ${
                        isDark
                          ? "border-white/20 text-white hover:bg-white/10"
                          : "border-black/20 text-black hover:bg-black/10"
                      }`}
                      onClick={() =>
                        window.open(selectedProject.githubUrl, "_blank")
                      }
                    >
                      <Github className="h-5 w-5" />
                      {"View Source"}
                    </button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
