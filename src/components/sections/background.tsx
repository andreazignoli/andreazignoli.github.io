import { SectionWrapper } from '@/components/shared/section-wrapper'
import { GlassCard } from '@/components/shared/glass-card'
import { GradientText } from '@/components/shared/gradient-text'

const clients = [
  {
    name: 'Athletica.ai',
    href: 'https://athletica.ai/',
    period: 'Apr 2024 – Present',
    role: 'Modelling, feature design, backend development',
    description: 'AI-driven training platform',
  },
  {
    name: 'Enhance-d',
    href: 'https://www.enhance-d.com/',
    period: 'Jan 2025 – Present',
    role: 'Agentic frameworks, backend systems',
    description: 'Sports nutrition platform',
  },
  {
    name: 'Tyme Wear',
    href: 'https://www.tymewear.com/',
    period: 'Dec 2024 – Present',
    role: 'Deep learning models, backend solutions',
    description: 'Wearable tech',
  },
  {
    name: 'Supersapiens',
    href: 'https://www.supersapiens.com/',
    period: '2021 – 2024',
    role: 'Data analysis, algorithm development, scientific writing',
    description: 'CGM for athletes',
  },
]

export function Background() {
  return (
    <section className="section-padding border-t border-white/[0.06]">
      <div className="container-max">
        <SectionWrapper>
          <div className="mb-10">
            <p className="font-mono text-xs text-accent tracking-widest uppercase mb-3">Background</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Who I <GradientText>am</GradientText>
            </h2>
          </div>
        </SectionWrapper>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Bio */}
          <SectionWrapper delay={0.05}>
            <GlassCard className="h-full space-y-4">
              <h3 className="text-white font-semibold text-lg">Research & Education</h3>
              <p className="text-white/60 text-sm leading-relaxed">
                <span className="text-accent font-medium">M.Eng. Mechatronics</span> +{' '}
                <span className="text-accent font-medium">PhD Sports Science</span> — I enrolled to
                study robotics and ended up studying the most wonderfully made machine: the human body.
              </p>
              <p className="text-white/60 text-sm leading-relaxed">
                Post-doctoral research at the University of Trento (sport performance modelling),
                Yokohama National University (rehabilitation robotics), and the University of Verona
                (exercise physiology).
              </p>
              <p className="text-white/60 text-sm leading-relaxed">
                I maintain active research collaborations and publish in peer-reviewed journals.
                Associate Editor at{' '}
                <a
                  href="https://www.springer.com/journal/12283"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-accent transition-colors underline underline-offset-2"
                >
                  Sports Engineering
                </a>{' '}
                (Springer) and peer reviewer for several top sports science journals.
              </p>
            </GlassCard>
          </SectionWrapper>

          {/* Clients */}
          <SectionWrapper delay={0.1}>
            <GlassCard className="h-full">
              <h3 className="text-white font-semibold text-lg mb-4">Clients & Collaborations</h3>
              <div className="space-y-4">
                {clients.map((client) => (
                  <div key={client.name} className="flex items-start gap-3">
                    <div className="w-1 h-full min-h-[2.5rem] bg-gradient-to-b from-accent to-secondary rounded-full mt-1 shrink-0" />
                    <div>
                      <div className="flex items-baseline gap-2 flex-wrap">
                        <a
                          href={client.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white text-sm font-medium hover:text-accent transition-colors"
                        >
                          {client.name}
                        </a>
                        <span className="text-white/35 text-xs">{client.period}</span>
                      </div>
                      <p className="text-white/40 text-xs">{client.description}</p>
                      <p className="text-white/55 text-xs mt-0.5">{client.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </GlassCard>
          </SectionWrapper>
        </div>
      </div>
    </section>
  )
}
