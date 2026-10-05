import { Activity, Droplet, Gauge, Wind, type LucideIcon } from 'lucide-react'
import { SectionWrapper } from '@/components/shared/section-wrapper'
import { GlassCard } from '@/components/shared/glass-card'

interface Evidence {
  label: string
  href: string
}

interface Paper {
  title: string
  journal: string
  year: string
  doi: string
}

interface Service {
  icon: LucideIcon
  title: string
  description: string
  work: (Evidence & { kind: 'Client' | 'Product' })[]
  papers: Paper[]
}

const services: Service[] = [
  {
    icon: Activity,
    title: 'Training Prescription & Assessment',
    description:
      'Adaptive algorithms that personalise training load based on individual athlete physiology, historical performance data, and real-time feedback signals.',
    work: [
      { kind: 'Client', label: 'Athletica.ai', href: 'https://athletica.ai/' },
      { kind: 'Product', label: 'Workout Reserve', href: 'https://athletica-workout-reserve-vercel.vercel.app/' },
    ],
    papers: [
      {
        title: 'Tracking Performance Limits Using Multi-Timescale Maximal Mean Power Ratios',
        journal: 'European Journal of Sport Science',
        year: '2026',
        doi: '10.1002/ejsc.70179',
      },
      {
        title: 'Real-time assessment of exercising maximal mean power and speed in endurance sports: a Garmin Connect IQ App',
        journal: 'Sports Engineering',
        year: '2025',
        doi: '10.1007/s12283-025-00528-1',
      },
    ],
  },
  {
    icon: Wind,
    title: 'Cardiopulmonary Exercise Testing',
    description:
      'ML models for automated threshold detection and CPET interpretation, from ventilatory thresholds to VO₂ kinetics, deployed at scale.',
    work: [{ kind: 'Product', label: 'Oxynet', href: 'https://oxynet.net' }],
    papers: [
      {
        title: 'AI-Driven Analysis of Cardiopulmonary Exercise Tests to Identify Gas Exchange and Ventilatory Thresholds',
        journal: 'Sports Medicine',
        year: '2026',
        doi: '10.1007/s40279-026-02403-w',
      },
      {
        title: 'Oxynet: A collective intelligence that detects ventilatory thresholds in cardiopulmonary exercise tests',
        journal: 'European Journal of Sport Science',
        year: '2020',
        doi: '10.1080/17461391.2020.1866081',
      },
    ],
  },
  {
    icon: Droplet,
    title: 'Continuous Glucose Monitoring',
    description:
      'Insights extraction from CGM data for metabolic optimisation in endurance athletes: identifying fuelling patterns, glycaemic responses, and actionable recommendations.',
    work: [
      { kind: 'Client', label: 'Supersapiens', href: 'https://www.supersapiens.com/' },
      { kind: 'Client', label: 'Enhance-d', href: 'https://www.enhance-d.com/' },
    ],
    papers: [
      {
        title: 'Real World Interstitial Glucose Profiles of a Large Cohort of Physically Active Men and Women',
        journal: 'Sensors',
        year: '2024',
        doi: '10.3390/s24030744',
      },
      {
        title: 'Continuous Glucose Monitoring Profiles in Elite-Level Professional European Football Players',
        journal: 'Journal of Diabetes Science and Technology',
        year: '2025',
        doi: '10.1177/19322968251388668',
      },
    ],
  },
  {
    icon: Gauge,
    title: 'Pacing & Race Strategy',
    description:
      'Simulation models for optimal pacing, incorporating aerodynamics, terrain, fatigue dynamics, and competitive constraints to maximise performance.',
    work: [],
    papers: [
      {
        title: 'Prediction of pacing and cornering strategies during cycling individual time trials with optimal control',
        journal: 'Sports Engineering',
        year: '2020',
        doi: '10.1007/s12283-020-00326-x',
      },
      {
        title: 'Assessment of bike handling during cycling individual time trials with a novel analytical technique adapted from motorcycle racing',
        journal: 'European Journal of Sport Science',
        year: '2021',
        doi: '10.1080/17461391.2021.1966517',
      },
    ],
  },
]

export function WhatIDo() {
  return (
    <section id="services" className="section-padding border-t border-foreground/[0.06] scroll-mt-16">
      <div className="container-max">
        <SectionWrapper>
          <div className="mb-10 max-w-2xl">
            <p className="font-mono text-xs text-accent tracking-widest uppercase mb-3">Services</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">What I do</h2>
            <p className="text-foreground/60 mt-4 leading-relaxed">
              Four areas where I have shipped work for clients and published peer-reviewed research.
            </p>
          </div>
        </SectionWrapper>

        <div className="grid md:grid-cols-2 gap-4">
          {services.map((item, i) => (
            <SectionWrapper key={item.title} delay={i * 0.1}>
              <GlassCard className="h-full flex flex-col">
                <div className="w-10 h-10 mb-4 rounded-lg flex items-center justify-center bg-accent/10 text-accent ring-1 ring-accent/20">
                  <item.icon size={20} strokeWidth={1.75} aria-hidden />
                </div>
                <h3 className="text-foreground font-semibold mb-2">{item.title}</h3>
                <p className="text-foreground/60 text-sm leading-relaxed">{item.description}</p>

                <div className="mt-auto pt-5">
                  <div className="pt-5 border-t border-foreground/[0.08] space-y-4">
                    {item.work.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {item.work.map((w) => (
                          <a
                            key={w.label}
                            href={w.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-foreground/[0.1] text-xs hover:border-accent/40 hover:text-accent transition-colors"
                          >
                            <span className="font-mono text-foreground/50 uppercase tracking-wider text-[10px]">
                              {w.kind}
                            </span>
                            <span className="text-foreground/80">{w.label}</span>
                          </a>
                        ))}
                      </div>
                    )}
                    <ul className="space-y-3">
                      {item.papers.map((paper) => (
                        <li key={paper.doi}>
                          <a
                            href={`https://doi.org/${paper.doi}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group block"
                          >
                            <p className="text-xs">
                              <span className="text-accent font-medium">{paper.journal}</span>
                              <span className="text-foreground/50 font-mono"> · {paper.year}</span>
                            </p>
                            <p className="text-foreground/65 text-xs leading-relaxed line-clamp-1 group-hover:text-foreground transition-colors">
                              {paper.title}
                            </p>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </GlassCard>
            </SectionWrapper>
          ))}
        </div>
      </div>
    </section>
  )
}
