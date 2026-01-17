'use client'

import { useState, type JSX } from 'react'
import { motion } from 'framer-motion'
import { useTheme } from 'next-themes'
import { Code, Cpu, Globe, Layers, Lightbulb, Smartphone, Award } from 'lucide-react'

export function AboutSection(): JSX.Element {
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  const stats = [
    { label: 'Years Experience', value: '2+' },
    { label: 'Projects Completed', value: '20+' },
    // { label: 'Happy Clients', value: '20+' },
    // { label: 'Awards', value: '5' },
  ]

  const features = [
    {
      icon: Globe,
      title: 'Web Development',
      description: 'Creating responsive and performant web applications with modern frameworks.',
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      description: 'Building cross-platform mobile apps with React Native and native technologies.',
    },
    {
      icon: Code,
      title: 'Clean Code',
      description: 'Writing maintainable, well-tested, and documented code following best practices.',
    },
    {
      icon: Lightbulb,
      title: 'Creative Solutions',
      description: 'Solving complex problems with innovative and efficient approaches.',
    },
    {
      icon: Cpu,
      title: 'Performance Optimization',
      description: 'Optimizing applications for speed, efficiency, and smooth user experience.',
    },
    {
      icon: Award,
      title: 'Certified From',
      description: 'Oracle AI Professional • Linux Foundation AI • University of Helsinki Full Stack • JP Morgan Simulation • Ethical Hacking',
    },
  ]

  return (
    <section id="about" className="relative min-h-screen px-6 py-20">
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
            {'About '}  
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              {'Me'}
            </span>
          </h2>
          <p className={`text-xl max-w-3xl mx-auto ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
            {'I\'m a passionate developer with expertise in web, mobile, and 3D technologies. '}
            {'I love creating beautiful, functional, and user-friendly digital experiences.'}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* About Content */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className={`text-lg ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              <p className="mb-4">
                {'Hello! I\'m a full-stack developer with a passion for creating immersive digital experiences. '}
                {'With over 2 years of experience, I\'ve worked on a wide range of projects '}
                {'from responsive websites to complex web applications.'}
              </p>
              <p className="mb-4">
                {'My journey in development started with a fascination for how things work on the web. '}
                {'This curiosity led me to explore various technologies and frameworks, constantly '}
                {'expanding my skillset to stay at the forefront of the industry.'}
              </p>
              <p>
                {'I believe in writing clean, maintainable code and creating intuitive user experiences. '}
                {'When I\'m not coding, you can find me exploring new technologies, contributing to '}
                {'open-source projects.'}
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className={`p-4 rounded-2xl backdrop-blur-md border text-center ${isDark ? 'bg-white/5 border-white/10' : 'bg-black/5 border-black/10'}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="text-3xl font-bold mb-1 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                className={`p-6 rounded-2xl backdrop-blur-md border ${isDark ? 'bg-white/5 border-white/10 hover:bg-white/10' : 'bg-black/5 border-black/10 hover:bg-black/10'} transition-all duration-300`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-primary to-secondary flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className={`text-xl font-bold mb-2 ${isDark ? 'text-white' : 'text-black'}`}>
                  {feature.title}
                </h3>
                <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}