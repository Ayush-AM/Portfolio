'use client'

import { motion } from 'framer-motion'
import { useTheme } from 'next-themes'
import { Home, User, Briefcase, Code, Mail } from 'lucide-react'
import type { JSX } from 'react'

interface NavigationProps {
  currentSection: number
  setCurrentSection: (section: number) => void
}

export function Navigation({ currentSection, setCurrentSection }: NavigationProps): JSX.Element {
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  const navItems = [
    { icon: Home, label: 'Home', href: '#hero', section: 0 },
    { icon: User, label: 'About', href: '#about', section: 1 },
    { icon: Briefcase, label: 'Projects', href: '#projects', section: 2 },
    { icon: Code, label: 'Skills', href: '#skills', section: 3 },
    { icon: Mail, label: 'Contact', href: '#contact', section: 4 },
  ]

  const scrollToSection = (href: string, sectionIndex: number): void => {
    const element = document.querySelector(href)
    if (element) {
      // Find the scrollable container
      const container = document.querySelector('.overflow-y-auto')
      if (container) {
        const containerRect = container.getBoundingClientRect()
        const elementRect = element.getBoundingClientRect()
        const scrollTop = container.scrollTop + elementRect.top - containerRect.top
        
        container.scrollTo({
          top: scrollTop,
          behavior: 'smooth'
        })
      }
      setCurrentSection(sectionIndex)
    }
  }

  return (
    <motion.nav
      className={`fixed right-6 top-1/2 transform -translate-y-1/2 z-50 p-4 rounded-2xl backdrop-blur-md border ${
        isDark
          ? 'bg-black/50 border-white/20'
          : 'bg-white/50 border-black/20'
      }`}
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 1 }}
    >
      <div className="flex flex-col gap-3">
        {navItems.map((item, index) => {
          const isActive = currentSection === item.section
          
          return (
            <motion.button
              key={item.label}
              onClick={() => {
                scrollToSection(item.href, item.section)
              }}
              className={`relative w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 group ${
                isActive
                  ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg'
                  : isDark
                  ? 'bg-white/10 text-white hover:bg-white/20'
                  : 'bg-black/10 text-black hover:bg-black/20'
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
            >
              <item.icon className="w-5 h-5" />
              
              {/* Tooltip */}
              <div className={`absolute right-full mr-3 px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none ${
                isDark
                  ? 'bg-black/80 text-white border border-white/20'
                  : 'bg-white/80 text-black border border-black/20'
              }`}>
                {item.label}
                <div className={`absolute left-full top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-4 border-r-0 border-t-4 border-b-4 border-transparent ${
                  isDark ? 'border-l-black/80' : 'border-l-white/80'
                }`} />
              </div>
            </motion.button>
          )
        })}
      </div>

      {/* Active Section Indicator */}
      <div className="mt-4 pt-3 border-t border-white/20">
        <div className="flex justify-center">
          <div className={`w-2 h-2 rounded-full ${
            isDark ? 'bg-cyan-400' : 'bg-blue-500'
          }`} />
        </div>
        <div className={`text-xs text-center mt-1 ${
          isDark ? 'text-gray-400' : 'text-gray-600'
        }`}>
          {`${currentSection + 1}/5`}
        </div>
      </div>
    </motion.nav>
  )
}
