'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { SectionWrapper } from '@/components/shared/section-wrapper'
import { GradientText } from '@/components/shared/gradient-text'
import { cn } from '@/lib/utils'

const projects = [
  {
    title: 'Oxynet',
    description:
      'Deep learning applied to Cardiopulmonary Exercise Testing. Automated detection of ventilatory thresholds and VO₂ kinetics from breath-by-breath data — making CPET interpretation fast and objective.',
    link: 'https://oxynet.net',
    tag: 'Deep Learning · CPET',
  },
  {
    title: 'Workout Reserve',
    description:
      'A physiologically-grounded performance capacity model built into the Athletica training platform. Tracks how much "fuel in the tank" an athlete has left in real time during hard efforts.',
    link: 'https://athletica-workout-reserve-vercel.vercel.app/',
    tag: 'Performance Modelling · Athletica',
  },
  {
    title: 'TIS Course',
    description:
      'An open course on Technology and Innovation in Sports. Covers wearables, data analytics, AI tools, and practical applications for coaches, athletes, and sport scientists.',
    link: 'https://tiscourse.vercel.app/',
    tag: 'Education · Sport Science',
  },
]

function ProjectCard({
  project,
  isHovered,
  onMouseEnter,
  onMouseLeave,
}: {
  project: (typeof projects)[number]
  isHovered: boolean
  onMouseEnter: () => void
  onMouseLeave: () => void
}) {
  return (
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className="relative group block p-1.5 h-full w-full"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <AnimatePresence>
        {isHovered && (
          <motion.span
            className="absolute inset-0 h-full w-full rounded-2xl"
            style={{ background: 'rgba(0, 220, 130, 0.06)' }}
            layoutId="projectHoverBackground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.15 } }}
            exit={{ opacity: 0, transition: { duration: 0.15, delay: 0.2 } }}
          />
        )}
      </AnimatePresence>
      <div
        className={cn(
          'rounded-2xl h-full w-full p-6 overflow-hidden glass relative z-20 transition-all duration-300',
          isHovered ? 'border-accent/30' : 'border-white/[0.08]',
        )}
      >
        <div className="relative z-50 h-full flex flex-col">
          <span className="font-mono text-xs text-accent/70 tracking-widest uppercase mb-4">
            {project.tag}
          </span>
          <h3 className="text-white font-bold text-lg tracking-wide mb-3">
            {project.title}
          </h3>
          <p className="text-white/55 text-sm leading-relaxed flex-1">
            {project.description}
          </p>
          <div className="mt-6 flex items-center gap-1.5 text-accent/70 text-xs font-mono group-hover:text-accent transition-colors">
            <span>Visit project</span>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
              <path d="M7 17L17 7M17 7H7M17 7v10"/>
            </svg>
          </div>
        </div>
      </div>
    </a>
  )
}

export function PersonalProjects() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section className="section-padding border-t border-white/[0.06]">
      <div className="container-max">
        <SectionWrapper>
          <div className="mb-10">
            <p className="font-mono text-xs text-accent tracking-widest uppercase mb-3">Side work</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Personal <GradientText>projects</GradientText>
            </h2>
          </div>
        </SectionWrapper>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2">
          {projects.map((project, idx) => (
            <SectionWrapper key={project.title} delay={idx * 0.1}>
              <ProjectCard
                project={project}
                isHovered={hoveredIndex === idx}
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
              />
            </SectionWrapper>
          ))}
        </div>
      </div>
    </section>
  )
}
