import { SectionWrapper } from '@/components/shared/section-wrapper'
import { GlassCard } from '@/components/shared/glass-card'
import { GradientText } from '@/components/shared/gradient-text'

const specialties = [
  {
    icon: '⚡',
    title: 'Training Prescription & Assessment',
    description:
      'Adaptive algorithms that personalise training load based on individual athlete physiology, historical performance data, and real-time feedback signals.',
  },
  {
    icon: '🫁',
    title: 'Cardiopulmonary Exercise Testing',
    description:
      'ML models for automated threshold detection and CPET interpretation — from ventilatory thresholds to VO₂ kinetics — deployed at scale.',
  },
  {
    icon: '📈',
    title: 'Continuous Glucose Monitoring',
    description:
      'Insights extraction from CGM data for metabolic optimisation in endurance athletes — identifying fuelling patterns, glycaemic responses, and actionable recommendations.',
  },
  {
    icon: '🏁',
    title: 'Pacing & Race Strategy',
    description:
      'Simulation models for optimal pacing, incorporating aerodynamics, terrain, fatigue dynamics, and competitive constraints to maximise performance.',
  },
]

export function WhatIDo() {
  return (
    <section className="section-padding border-t border-white/[0.06]">
      <div className="container-max">
        <SectionWrapper>
          <div className="mb-10">
            <p className="font-mono text-xs text-accent tracking-widest uppercase mb-3">Services</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              What I <GradientText>do</GradientText>
            </h2>
          </div>
        </SectionWrapper>

        <div className="grid sm:grid-cols-2 gap-4">
          {specialties.map((item, i) => (
            <SectionWrapper key={item.title} delay={i * 0.1}>
              <GlassCard className="h-full">
                <div className="text-2xl mb-4">{item.icon}</div>
                <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                <p className="text-white/55 text-sm leading-relaxed">{item.description}</p>
              </GlassCard>
            </SectionWrapper>
          ))}
        </div>
      </div>
    </section>
  )
}
