'use client'

import { useState, useEffect, useCallback, type JSX } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from 'next-themes'
import { ChevronLeft, ChevronRight, Award, Calendar, ExternalLink } from 'lucide-react'

interface Skill {
  name: string
  icon: string
  level: number
  category: 'frontend' | 'backend' | 'design' | 'tools' | '3d' | 'language'
}

export function SkillsSection(): JSX.Element {
  const { theme } = useTheme()
  const isDark = theme === 'dark'
  const [activeCategory, setActiveCategory] = useState<string>('all')
  const [isInView, setIsInView] = useState(false)

  const skills: Skill[] = [

    // Frontend
    { name: 'React', icon: '⚛️', level: 50, category: 'frontend' },
    { name: 'TypeScript', icon: '🔷', level: 65, category: 'frontend' },
    { name: 'Next.js', icon: '▲', level: 30, category: 'frontend' },
    { name: 'Tailwind CSS', icon: '🌊', level: 80, category: 'frontend' },
    { name: 'Framer Motion', icon: '🔄', level: 70, category: 'frontend' },
    { name: 'HTML/CSS', icon: '🌐', level: 90, category: 'frontend' },
    
    // Backend
    { name: 'Node.js', icon: '🟢', level: 50, category: 'backend' },
    { name: 'Express', icon: '🚂', level: 50, category: 'backend' },
    { name: 'MongoDB', icon: '🍃', level: 50, category: 'backend' },
    { name: 'REST API', icon: '🔁', level: 60, category: 'backend' },
    // { name: 'PostgreSQL', icon: '🐘', level: 70, category: 'backend' },
    { name: 'SQL', icon: '🗄️', level: 70, category: 'backend' },
    { name: 'GraphQL', icon: '🔍', level: 40, category: 'backend' },
    { name: 'Django', icon: '🌿', level: 60, category: 'backend' },

        //languages
    { name: 'JavaScript', icon: '🟡', level: 65, category: 'language' },
    { name: 'C++', icon: '🟣', level: 80, category: 'language' },
    { name: 'Python', icon: '🐍', level: 75, category: 'language' },
    { name: 'Java', icon: '🟤', level: 75, category: 'language' },
    
    // 3D & Graphics
    { name: 'Three.js', icon: '🧊', level: 40, category: '3d' },
    { name: 'WebGL', icon: '🌈', level: 65, category: '3d' },
    // { name: 'Blender', icon: '🎭', level: 60, category: '3d' },
    { name: 'React Three Fiber', icon: '🔮', level: 40, category: '3d' },
    // { name: 'GLSL Shaders', icon: '✨', level: 65, category: '3d' },
    
    // Design
    { name: 'Figma', icon: '🎨', level: 70, category: 'design' },
    // { name: 'Adobe XD', icon: '📱', level: 75, category: 'design' },
    // { name: 'Photoshop', icon: '🖼️', level: 70, category: 'design' },
    { name: 'UI/UX Design', icon: '🎯', level: 70, category: 'design' },
    
    // Tools & Others
    { name: 'Git', icon: '🔄', level: 70, category: 'tools' },
    { name: 'Docker', icon: '🐳', level: 50, category: 'tools' },
    // { name: 'AWS', icon: '☁️', level: 60, category: 'tools' },
    // { name: 'Jest', icon: '🃏', level: 80, category: 'tools' },
    // { name: 'Webpack', icon: '📦', level: 75, category: 'tools' },
  ]

  const categories = [
    { id: 'all', label: 'All Skills' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: '3d', label: '3D & Graphics' },
    { id: 'design', label: 'Design' },
    { id: 'tools', label: 'Tools & DevOps' },
    { id: 'language', label: 'Programming Languages' },
  ]

  const filteredSkills = activeCategory === 'all'
    ? skills
    : skills.filter(skill => skill.category === activeCategory)

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }
  
  // Animation for when items are removed/added
  const skillCardAnimation = {
    initial: { scale: 0.8, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    exit: { scale: 0.8, opacity: 0 },
    transition: { duration: 0.3 }
  }

  return (
    <section id="skills" className="relative min-h-screen px-6 py-20">
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
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              {'Skills'}
            </span>
          </h2>
          <p className={`text-xl max-w-3xl mx-auto ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
            {'A comprehensive overview of my technical expertise and proficiency '}
            {'across various technologies and tools.'}
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
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-lg'
                  : isDark
                  ? 'bg-white/10 text-white hover:bg-white/20'
                  : 'bg-black/10 text-black hover:bg-black/20'
              }`}
            >
              {category.label}
            </button>
            ))}
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          layout
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          onViewportEnter={() => setIsInView(true)}
        >
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill) => (
              <motion.div
                key={skill.name}
                className={`relative overflow-hidden rounded-2xl backdrop-blur-md border p-6 transition-all duration-300 hover:scale-105 ${
                  isDark
                    ? 'bg-white/5 border-white/10 hover:bg-white/10'
                    : 'bg-black/5 border-black/10 hover:bg-black/10'
                }`}
                layout
                initial="initial"
                animate="animate"
                exit="exit"
                variants={skillCardAnimation}
                whileHover={{ scale: 1.05 }}
              >
              <div className="flex items-center gap-4 mb-4">
                <div className="text-4xl">{skill.icon}</div>
                <div>
                  <h3 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-black'}`}>
                    {skill.name}
                  </h3>
                  <span className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    {getCategoryLabel(skill.category)}
                  </span>
                </div>
              </div>

              <div className="w-full h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                <motion.div
                  key={`${skill.name}-${activeCategory}`}
                  className="h-full bg-gradient-to-r from-primary to-secondary"
                  initial={{ width: 0 }}
                  animate={{ width: isInView ? `${skill.level}%` : 0 }}
                  transition={{ duration: 1.5, delay: 0.3 }}
                />
              </div>
              <div className="mt-2 flex justify-between">
                <span className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Beginner</span>
                <span className={`text-xs font-medium ${isDark ? 'text-white' : 'text-black'}`}>
                  {skill.level}%
                </span>
                <span className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Expert</span>
              </div>
            </motion.div>
          ))}
          </AnimatePresence>
        </motion.div>

        {/* Skill Stats */}
        <motion.div
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <StatCard 
            title="Years Experience" 
            value="2+" 
            icon="🚀" 
            isDark={isDark} 
          />
          <StatCard 
            title="Projects Completed" 
            value="20+" 
            icon="✅" 
            isDark={isDark} 
          />
          <StatCard 
            title="Technologies" 
            value="15+" 
            icon="💻" 
            isDark={isDark} 
          />
          <StatCard 
            title="Hackathons Participated" 
            value="3" 
            icon="🚀" 
            isDark={isDark} 
          />
        </motion.div>

        {/* Certifications Section */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className={`text-3xl md:text-4xl font-bold text-center mb-12 ${isDark ? 'text-white' : 'text-black'}`}>
            {'Certifications & '}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              {'Achievements'}
            </span>
          </h3>
          
          <CertificationSlider isDark={isDark} />
        </motion.div>
      </div>
    </section>
  )
}

function StatCard({ title, value, icon, isDark }: { title: string; value: string; icon: string; isDark: boolean }) {
  return (
    <motion.div
      className={`rounded-2xl backdrop-blur-md border p-6 transition-all duration-300 ${
        isDark ? 'bg-white/5 border-white/10' : 'bg-black/5 border-black/10'
      }`}
      whileHover={{ scale: 1.05 }}
    >
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className={`text-3xl font-bold mb-2 ${isDark ? 'text-white' : 'text-black'}`}>
        {value}
      </h3>
      <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
        {title}
      </p>
    </motion.div>
  )
}

function getCategoryLabel(category: string): string {
  switch (category) {
    case 'frontend':
      return 'Frontend Development'
    case 'backend':
      return 'Backend Development'
    case '3d':
      return '3D & Graphics'
    case 'design':
      return 'Design'
    case 'tools':
      return 'Tools & DevOps'
    default:
      return category
  }
}

interface Certification {
  id: number
  title: string
  issuer: string
  date: string
  description: string
  credentialUrl?: string
  icon: string
  color: string
}

function CertificationSlider({ isDark }: { isDark: boolean }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [isHovered, setIsHovered] = useState(false)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)
  const [mouseStart, setMouseStart] = useState(0)
  const [mouseEnd, setMouseEnd] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const [expandedCard, setExpandedCard] = useState<number | null>(null)

  const certifications: Certification[] = [
    {
      id: 10,
      title: "Introduction to Generative AI Studio",
      issuer: "Simplilearn",
      date: "2026",
      description: "Comprehensive course on Generative AI Studio, covering fundamental concepts and practical applications powered by Google Cloud.",
      credentialUrl: "/images/certifications/intro-generative-ai.png",
      icon: "🤖",
      color: "from-blue-500 to-cyan-400"
    },
    {
      id: 1,
      title: "Oracle Certified AI Professional",
      issuer: "Oracle",
      date: "2025",
      description: "Oracle Cloud Infrastructure 2025 Certified Generative AI Professional! ",
      credentialUrl: "/images/certifications/oracle-ai-certification.jpg",
      icon: "🤖",
      color: "from-red-600 to-orange-500"
    },
    {
      id: 4,
      title: "Generative AI Professional Badge",
      issuer: "Oracle",
      date: "2025",
      description: "Professional badge in Oracle Cloud Infrastructure Generative AI.",
      credentialUrl: "/images/certifications/generative-ai-badge.jpg",
      icon: "✨",
      color: "from-violet-600 to-purple-500"
    },
    {
      id: 2,
      title: "Full Stack Open - GraphQL",
      issuer: "University of Helsinki",
      date: "2025",
      description: "Advanced GraphQL development including queries, mutations, subscriptions, and Apollo Client integration.",
      credentialUrl: "/images/certifications/fullstack-graphql.jpg",
      icon: "🔍",
      color: "from-pink-500 to-rose-500"
    },
    {
      id: 5,
      title: "Full Stack Open - TypeScript",
      issuer: "University of Helsinki",
      date: "2025",
      description: "TypeScript for full-stack development, type safety, and advanced TypeScript patterns.",
      credentialUrl: "/images/certifications/fullstack-typescript.jpg",
      icon: "🔷",
      color: "from-blue-600 to-indigo-500"
    },
    {
      id: 6,
      title: "Full Stack Open - 7 ECTS Credits",
      issuer: "University of Helsinki",
      date: "2025",
      description: "Completed 7 ECTS credits covering React, Node.js, Express, MongoDB, and modern web development practices.",
      credentialUrl: "/images/certifications/fullstack-7ects.jpg",
      icon: "🎓",
      color: "from-green-500 to-emerald-500"
    },
    {
      id: 7,
      title: "Full Stack Open - React Native",
      issuer: "University of Helsinki",
      date: "2025",
      description: "Mobile app development with React Native, Expo, and cross-platform development techniques.",
      credentialUrl: "/images/certifications/fullstack-react-native.jpg",
      icon: "📱",
      color: "from-cyan-500 to-teal-500"
    },
    {
      id: 3,
      title: "Ethical Hacking Workshop",
      issuer: "Physics Wallah",
      date: "2024",
      description: "Comprehensive workshop on ethical hacking techniques, penetration testing, and cybersecurity fundamentals.",
      credentialUrl: "/images/certifications/ethical-hacking-certificate.jpg",
      icon: "🛡️",
      color: "from-purple-600 to-pink-500"
    },
    {
      id: 8,
      title: "Conversational AI Ensuring Compliance and Mitigating Risks (LFS120)",
      issuer: "Linux Foundation",
      date: "2025",
      description: "Comprehensive training on conversational AI systems, compliance frameworks, and risk mitigation strategies.",
      credentialUrl: "/images/certifications/linux-foundation-ai.jpg",
      icon: "🤖",
      color: "from-yellow-500 to-orange-500"
    },
    {
      id: 9,
      title: "Software Engineering Job Simulation",
      issuer: "JP Morgan",
      date: "2025",
      description: "Hands-on software engineering simulation covering financial technology, system design, and enterprise development practices.",
      credentialUrl: "/images/certifications/jpmorgan-simulation.jpg",
      icon: "💼",
      color: "from-blue-700 to-indigo-600"
    },
    // {
    //   id: 4,
    //   title: "AWS Cloud Practitioner",
    //   issuer: "Amazon Web Services",
    //   date: "2023",
    //   description: "Foundational understanding of AWS Cloud services, architecture, and best practices.",
    //   credentialUrl: "#",
    //   icon: "☁️",
    //   color: "from-orange-500 to-yellow-500"
    // },
    // {
    //   id: 5,
    //   title: "Google Data Analytics Certificate",
    //   issuer: "Google",
    //   date: "2023",
    //   description: "Professional certificate in data analysis, visualization, and business intelligence.",
    //   credentialUrl: "#",
    //   icon: "📊",
    //   color: "from-green-500 to-teal-500"
    // }
  ]

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % certifications.length)
  }, [certifications.length])

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + certifications.length) % certifications.length)
  }

  useEffect(() => {
    if (!isAutoPlaying || isHovered) return
    
    const interval = setInterval(nextSlide, 2000)
    return () => clearInterval(interval)
  }, [isAutoPlaying, isHovered, nextSlide])

  const visibleCertifications = (): Certification[] => {
    const result: Certification[] = []
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % certifications.length
      const cert = certifications[index]
      if (cert) {
        result.push(cert)
      }
    }
    return result
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0]?.clientX ?? 0)
    setIsAutoPlaying(false)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0]?.clientX ?? 0)
  }

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > 50
    const isRightSwipe = distance < -50

    if (isLeftSwipe) {
      nextSlide()
    }
    if (isRightSwipe) {
      prevSlide()
    }
    setIsAutoPlaying(true)
  }

  const handleMouseDown = (e: React.MouseEvent) => {
    setMouseStart(e.clientX)
    setIsDragging(true)
    setIsAutoPlaying(false)
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return
    setMouseEnd(e.clientX)
  }

  const handleMouseUp = () => {
    if (!isDragging) {
      setIsAutoPlaying(true)
      return
    }
    
    // Only navigate if there was actual dragging movement
    if (mouseStart && mouseEnd) {
      const distance = mouseStart - mouseEnd
      const isLeftDrag = distance > 50
      const isRightDrag = distance < -50

      if (isLeftDrag) {
        nextSlide()
      }
      if (isRightDrag) {
        prevSlide()
      }
    }
    
    setIsDragging(false)
    setIsAutoPlaying(true)
  }

  const handleMouseEnter = () => {
    setIsHovered(true)
    setIsAutoPlaying(false)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    setIsAutoPlaying(true)
    setIsDragging(false)
  }
 
  const truncateDescription = (text: string, maxLength = 80) => {
    if (text.length <= maxLength) return text
    return text.substring(0, maxLength).trim() + '...'
  }

  const handleCardClick = (certId: number, index: number, hasMoreContent: boolean, e: React.MouseEvent) => {
    e.stopPropagation()
    // Only expand if it's the center card (index 1) and has more content
    if (index === 1 && hasMoreContent) {
      setExpandedCard(expandedCard === certId ? null : certId)
    }
  }

  return (
    <div 
      className="relative select-none"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      
      <div className="flex items-center justify-center gap-6 overflow-hidden">
        {/* Previous Button */}
        <button
          onClick={prevSlide}
          className={`p-3 rounded-full transition-all duration-300 hover:scale-110 ${
            isDark ? 'bg-white/10 hover:bg-white/20 text-white' : 'bg-black/10 hover:bg-black/20 text-black'
          }`}
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* Certifications */}
        <div 
          className="flex gap-6 min-h-[300px] cursor-grab active:cursor-grabbing"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {visibleCertifications().map((cert, index) => (
            <motion.div
              key={cert.id}
              className={`w-80 h-80 rounded-2xl backdrop-blur-md border p-6 transition-all duration-300 cursor-pointer flex flex-col ${
                isDark ? 'bg-white/5 border-white/10' : 'bg-black/5 border-black/10'
              } ${index === 1 ? 'scale-105 shadow-2xl z-20' : 'scale-95 opacity-75 z-10'} ${
                expandedCard === cert.id ? 'h-auto' : 'h-80'
              }`}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: index === 1 ? 1 : 0.75, x: 0 }}
              transition={{ duration: 0.5 }}
              onClick={(e) => handleCardClick(cert.id, index, cert.description.length > 80, e)}
              onMouseDown={index === 1 ? (e) => e.stopPropagation() : undefined}
              onTouchStart={index === 1 ? (e) => e.stopPropagation() : undefined}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className={`text-4xl p-3 rounded-xl bg-gradient-to-r ${cert.color}`}>
                  {cert.icon}
                </div>
                <div className="flex-1">
                  <h4 className={`text-lg font-bold mb-1 ${isDark ? 'text-white' : 'text-black'}`}>
                    {cert.title}
                  </h4>
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`text-sm font-medium ${isDark ? 'text-cyan-400' : 'text-blue-600'}`}>
                      {cert.issuer}
                    </span>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      <span className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                        {cert.date}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex-1 mb-4">
                <p className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  {expandedCard === cert.id ? cert.description : truncateDescription(cert.description)}
                  {cert.description.length > 80 && expandedCard !== cert.id && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        setExpandedCard(cert.id)
                      }}
                      className={`ml-1 font-medium ${isDark ? 'text-cyan-400 hover:text-cyan-300' : 'text-blue-600 hover:text-blue-500'}`}
                    >
                      more
                    </button>
                  )}
                </p>
              </div>
              
              {cert.credentialUrl && (
                <div className="mt-auto">
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      if (cert.credentialUrl) {
                        window.open(cert.credentialUrl, '_blank')
                      }
                    }}
                    className={`flex items-center gap-2 text-sm font-medium transition-colors ${
                      isDark ? 'text-cyan-400 hover:text-cyan-300' : 'text-blue-600 hover:text-blue-500'
                    }`}
                  >
                    <Award className="w-4 h-4" />
                    View
                    <ExternalLink className="w-3 h-3" />
                  </button>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Next Button */}
        <button
          onClick={nextSlide}
          className={`p-3 rounded-full transition-all duration-300 hover:scale-110 ${
            isDark ? 'bg-white/10 hover:bg-white/20 text-white' : 'bg-black/10 hover:bg-black/20 text-black'
          }`}
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center gap-2 mt-6">
        {certifications.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? 'bg-gradient-to-r from-primary to-secondary w-8'
                : isDark ? 'bg-white/30' : 'bg-black/30'
            }`}
          />
        ))}
      </div>
    </div>
  )
}