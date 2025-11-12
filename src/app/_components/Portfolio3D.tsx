'use client'

import { useRef, useEffect, useState, type JSX } from 'react'
import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import { HeroSection } from './sections/HeroSection'
import { AboutSection } from './sections/AboutSection'
import { ProjectsSection } from './sections/ProjectSection'
import { SkillsSection } from './sections/SkillSection'
import { ContactSection } from './sections/ContactSection'
import { Scene3D } from './3d/Scene3D'
import { ParticleField } from './3d/ParticleField'
import { FloatingElements } from './3d/FloatingElements'
import { ScrollProgress } from './ui/ScrollProgress'
import { Navigation } from './ui/Navigation'
import { BackgroundMusic } from './ui/BackgroundMusic'

export function Portfolio3D(): JSX.Element {
  const containerRef = useRef<HTMLDivElement>(null)
  const [scrollY, setScrollY] = useState<number>(0)
  const [currentSection, setCurrentSection] = useState<number>(0)

  useEffect(() => {
    const handleScroll = (): void => {
      if (containerRef.current) {
        const scrollTop = containerRef.current.scrollTop
        const scrollHeight = containerRef.current.scrollHeight - containerRef.current.clientHeight
        const progress = scrollTop / scrollHeight
        setScrollY(progress)

        // Calculate current section based on actual section positions
        const sections = ['hero', 'about', 'projects', 'skills', 'contact']
        let currentSectionIndex = 0
        const viewportHeight = containerRef.current.clientHeight
        const threshold = viewportHeight * 0.3 // 30% of viewport

        for (let i = 0; i < sections.length; i++) {
          const sectionId = sections[i]
          if (!sectionId) continue
          const element = document.getElementById(sectionId)
          if (element) {
            const rect = element.getBoundingClientRect()
            const containerRect = containerRef.current.getBoundingClientRect()
            const elementTop = rect.top - containerRect.top
            
            // Section is active if it's within the threshold from the top
            if (elementTop <= threshold && elementTop + rect.height > threshold) {
              currentSectionIndex = i
              break
            } else if (elementTop <= threshold) {
              currentSectionIndex = i
            }
          }
        }
        
        setCurrentSection(currentSectionIndex)
      }
    }

    const container = containerRef.current
    if (container) {
      container.addEventListener('scroll', handleScroll)
      handleScroll() // Initial call
      return () => container.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Fixed 3D Background */}
      <div className="fixed inset-0 z-0">
        <Canvas
          camera={{ position: [0, 0, 10], fov: 75 }}
          className="w-full h-full"
        >
          <Suspense fallback={null}>
            <Scene3D scrollProgress={scrollY} currentSection={currentSection} />
            <ParticleField count={200} />
            <FloatingElements />
          </Suspense>
        </Canvas>
      </div>

      {/* Navigation */}
      <Navigation currentSection={currentSection} setCurrentSection={setCurrentSection} />

      {/* Scroll Progress */}
      <ScrollProgress progress={scrollY} />

      {/* Background Music */}
      <BackgroundMusic />

      {/* Scrollable Content */}
      <div
        ref={containerRef}
        className="relative z-10 h-full overflow-y-auto scroll-smooth"
        style={{ scrollBehavior: 'smooth' }}
      >
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
      </div>
    </div>
  )
}