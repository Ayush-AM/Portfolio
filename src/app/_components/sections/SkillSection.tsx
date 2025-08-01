'use client'

import { useState, type JSX } from 'react'
import { motion } from 'framer-motion'
import { useTheme } from 'next-themes'

interface Skill {
  name: string
  icon: string
  level: number
  category: 'frontend' | 'backend' | 'design' | 'tools' | '3d'
}

export function SkillsSection(): JSX.Element {
  const { theme } = useTheme()
  const isDark = theme === 'dark'
  const [activeCategory, setActiveCategory] = useState<string>('all')

  const skills: Skill[] = [
    // Frontend
    { name: 'React', icon: '⚛️', level: 95, category: 'frontend' },
    { name: 'TypeScript', icon: '🔷', level: 90, category: 'frontend' },
    { name: 'Next.js', icon: '▲', level: 85, category: 'frontend' },
    { name: 'Tailwind CSS', icon: '🌊', level: 90, category: 'frontend' },
    { name: 'Framer Motion', icon: '🔄', level: 80, category: 'frontend' },
    { name: 'HTML/CSS', icon: '🌐', level: 95, category: 'frontend' },
    
    // Backend
    { name: 'Node.js', icon: '🟢', level: 85, category: 'backend' },
    { name: 'Express', icon: '🚂', level: 80, category: 'backend' },
    { name: 'MongoDB', icon: '🍃', level: 75, category: 'backend' },
    { name: 'REST API', icon: '🔁', level: 60, category: 'backend' },
    // { name: 'PostgreSQL', icon: '🐘', level: 70, category: 'backend' },
    { name: 'SQL', icon: '🗄️', level: 50, category: 'backend' },
    { name: 'Firebase', icon: '🔥', level: 80, category: 'backend' },
    
    // 3D & Graphics
    { name: 'Three.js', icon: '🧊', level: 85, category: '3d' },
    // { name: 'WebGL', icon: '🌈', level: 75, category: '3d' },
    // { name: 'Blender', icon: '🎭', level: 60, category: '3d' },
    { name: 'React Three Fiber', icon: '🔮', level: 80, category: '3d' },
    // { name: 'GLSL Shaders', icon: '✨', level: 65, category: '3d' },
    
    // Design
    { name: 'Figma', icon: '🎨', level: 85, category: 'design' },
    // { name: 'Adobe XD', icon: '📱', level: 75, category: 'design' },
    // { name: 'Photoshop', icon: '🖼️', level: 70, category: 'design' },
    { name: 'UI/UX Design', icon: '🎯', level: 80, category: 'design' },
    
    // Tools & Others
    { name: 'Git', icon: '🔄', level: 90, category: 'tools' },
    { name: 'Docker', icon: '🐳', level: 75, category: 'tools' },
    { name: 'AWS', icon: '☁️', level: 70, category: 'tools' },
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
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
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

        {/* Skills Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {filteredSkills.map((skill) => (
            <motion.div
              key={skill.name}
              className={`relative overflow-hidden rounded-2xl backdrop-blur-md border p-6 transition-all duration-300 hover:scale-105 ${
                isDark
                  ? 'bg-white/5 border-white/10 hover:bg-white/10'
                  : 'bg-black/5 border-black/10 hover:bg-black/10'
              }`}
              variants={item}
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
                  className="h-full bg-gradient-to-r from-cyan-500 to-purple-600"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: 0.2 }}
                  viewport={{ once: true }}
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