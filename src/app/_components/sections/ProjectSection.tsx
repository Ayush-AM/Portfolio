'use client'

import { useState, type JSX } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from 'next-themes'
import { ExternalLink, Github, Play, X } from 'lucide-react'

interface Project {
  id: number
  title: string
  description: string
  longDescription: string
  technologies: string[]
  image: string
  demoUrl: string
  githubUrl: string
  category: 'web' | '3d' | 'mobile' | 'ai'
  featured: boolean
}

export function ProjectsSection(): JSX.Element {
  const { theme } = useTheme()
  const isDark = theme === 'dark'
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [filter, setFilter] = useState<string>('all')

  const projects: Project[] = [
    {
      id: 1,
      title: '3D Portfolio Website',
      description: 'Interactive 3D portfolio with WebGL animations and scroll-based interactions.',
      longDescription: 'A cutting-edge portfolio website built with Three.js and React. Features immersive 3D scenes, particle systems, and smooth scroll-based animations. Optimized for performance across all devices with responsive design and accessibility features.',
      technologies: ['React', 'Three.js', 'Framer Motion', 'TypeScript'],
      image: '/images/projects/3d-portfolio.svg',
      demoUrl: '#',
      githubUrl: '#',
      category: '3d',
      featured: true,
    },
    {
      id: 2,
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with real-time inventory and payment processing.',
      longDescription: 'A comprehensive e-commerce platform built with Next.js and Node.js. Features include real-time inventory management, secure payment processing, user authentication, and an admin dashboard. Deployed on AWS with CI/CD pipeline.',
      technologies: ['Next.js', 'Node.js', 'PostgreSQL', 'Stripe', 'AWS'],
      image: '/images/projects/ecommerce.svg',
      demoUrl: '#',
      githubUrl: '#',
      category: 'web',
      featured: true,
    },
    {
      id: 3,
      title: 'AI Chat Assistant',
      description: 'Intelligent chatbot with natural language processing and context awareness.',
      longDescription: 'An advanced AI chatbot built with OpenAI GPT-4 and custom training data. Features include context-aware conversations, multi-language support, and integration with various APIs. Built with Python backend and React frontend.',
      technologies: ['Python', 'OpenAI', 'React', 'FastAPI', 'Docker'],
      image: '/images/projects/ai-chat.svg',
      demoUrl: '#',
      githubUrl: '#',
      category: 'ai',
      featured: false,
    },
    {
      id: 4,
      title: 'Mobile Fitness App',
      description: 'Cross-platform fitness tracking app with social features and gamification.',
      longDescription: 'A comprehensive fitness tracking application built with React Native. Features include workout planning, progress tracking, social challenges, and integration with wearable devices. Uses Firebase for real-time data synchronization.',
      technologies: ['React Native', 'Firebase', 'Redux', 'Expo', 'TypeScript'],
      image: '/images/projects/fitness-app.svg',
      demoUrl: '#',
      githubUrl: '#',
      category: 'mobile',
      featured: false,
    },
    {
      id: 5,
      title: 'VR Data Visualization',
      description: 'Immersive VR experience for exploring complex datasets in 3D space.',
      longDescription: 'A virtual reality application for data visualization built with Unity and C#. Allows users to explore complex datasets in an immersive 3D environment with hand tracking and voice commands. Supports multiple VR headsets.',
      technologies: ['Unity', 'C#', 'WebXR', 'Three.js', 'A-Frame'],
      image: '/images/projects/vr-data.svg',
      demoUrl: '#',
      githubUrl: '#',
      category: '3d',
      featured: true,
    },
    {
      id: 6,
      title: 'Blockchain DApp',
      description: 'Decentralized application for NFT marketplace with smart contracts.',
      longDescription: 'A decentralized NFT marketplace built on Ethereum blockchain. Features include minting, buying, selling NFTs, and royalty distribution. Smart contracts written in Solidity with comprehensive testing and security audits.',
      technologies: ['Solidity', 'Web3.js', 'React', 'IPFS', 'Ethereum'],
      image: '/images/projects/blockchain.svg',
      demoUrl: '#',
      githubUrl: '#',
      category: 'web',
      featured: false,
    },
  ]

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web Apps' },
    { id: '3d', label: '3D & VR' },
    { id: 'mobile', label: 'Mobile' },
    { id: 'ai', label: 'AI & ML' },
  ]

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter)

  return (
    <section id="projects" className="relative min-h-screen px-6 py-20">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className={`text-5xl md:text-6xl font-bold mb-6 ${isDark ? 'text-white' : 'text-black'}`}>
            {'My '}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              {'Projects'}
            </span>
          </h2>
          <p className={`text-xl max-w-3xl mx-auto ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
            {'A showcase of my latest work, from immersive 3D experiences to '}
            {'full-stack applications and AI-powered solutions.'}
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setFilter(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                filter === category.id
                  ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg'
                  : isDark
                  ? 'bg-white/10 text-white hover:bg-white/20'
                  : 'bg-black/10 text-black hover:bg-black/20'
              }`}
            >
              {category.label}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          layout
        >
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className={`group cursor-pointer rounded-2xl overflow-hidden backdrop-blur-md border transition-all duration-300 hover:scale-105 ${
                  isDark
                    ? 'bg-white/5 border-white/10 hover:bg-white/10'
                    : 'bg-black/5 border-black/10 hover:bg-black/10'
                } ${project.featured ? 'ring-2 ring-cyan-400/50' : ''}`}
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
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  {project.featured && (
                    <div className="absolute top-4 right-4 px-3 py-1 bg-cyan-500 text-white text-xs font-bold rounded-full">
                      {'Featured'}
                    </div>
                  )}
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <h3 className={`text-xl font-bold mb-2 ${isDark ? 'text-white' : 'text-black'}`}>
                    {project.title}
                  </h3>
                  <p className={`text-sm mb-4 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className={`px-2 py-1 text-xs rounded-full ${
                          isDark
                            ? 'bg-white/10 text-gray-300'
                            : 'bg-black/10 text-gray-700'
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        isDark ? 'bg-white/10 text-gray-300' : 'bg-black/10 text-gray-700'
                      }`}>
                        {`+${project.technologies.length - 3}`}
                      </span>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2">
                    <button
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-300"
                      onClick={(e) => {
                        e.stopPropagation()
                        window.open(project.demoUrl, '_blank')
                      }}
                    >
                      <Play className="w-4 h-4" />
                      {'Demo'}
                    </button>
                    <button
                      className={`px-4 py-2 rounded-lg border transition-all duration-300 ${
                        isDark
                          ? 'border-white/20 text-white hover:bg-white/10'
                          : 'border-black/20 text-black hover:bg-black/10'
                      }`}
                      onClick={(e) => {
                        e.stopPropagation()
                        window.open(project.githubUrl, '_blank')
                      }}
                    >
                      <Github className="w-4 h-4" />
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
                className={`relative max-w-4xl w-full max-h-[90vh] overflow-y-auto rounded-3xl backdrop-blur-md border ${
                  isDark ? 'bg-black/90 border-white/20' : 'bg-white/90 border-black/20'
                }`}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  className={`absolute top-4 right-4 p-2 rounded-full ${
                    isDark ? 'bg-white/10 text-white' : 'bg-black/10 text-black'
                  }`}
                  onClick={() => setSelectedProject(null)}
                >
                  <X className="w-6 h-6" />
                </button>

                <div className="p-8">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-64 object-cover rounded-2xl mb-6"
                  />
                  
                  <h3 className={`text-3xl font-bold mb-4 ${isDark ? 'text-white' : 'text-black'}`}>
                    {selectedProject.title}
                  </h3>
                  
                  <p className={`text-lg mb-6 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    {selectedProject.longDescription}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {selectedProject.technologies.map((tech) => (
                      <span
                        key={tech}
                        className={`px-3 py-1 text-sm rounded-full ${
                          isDark
                            ? 'bg-white/10 text-gray-300'
                            : 'bg-black/10 text-gray-700'
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <button
                      className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-300"
                      onClick={() => window.open(selectedProject.demoUrl, '_blank')}
                    >
                      <ExternalLink className="w-5 h-5" />
                      {'View Live Demo'}
                    </button>
                    <button
                      className={`flex items-center gap-2 px-6 py-3 rounded-lg border transition-all duration-300 ${
                        isDark
                          ? 'border-white/20 text-white hover:bg-white/10'
                          : 'border-black/20 text-black hover:bg-black/10'
                      }`}
                      onClick={() => window.open(selectedProject.githubUrl, '_blank')}
                    >
                      <Github className="w-5 h-5" />
                      {'View Source'}
                    </button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}