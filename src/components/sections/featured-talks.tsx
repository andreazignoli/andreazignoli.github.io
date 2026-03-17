import Link from 'next/link'
import { SectionWrapper } from '@/components/shared/section-wrapper'
import { GlassCard } from '@/components/shared/glass-card'
import { GradientText } from '@/components/shared/gradient-text'
import { talks } from '@/content/talks'

const typeColors: Record<string, string> = {
  'Training Science Podcast': 'text-accent',
  'Podcast': 'text-secondary',
  'Video': 'text-red-400',
  'Talk': 'text-white/50',
  'Tutorial': 'text-white/50',
}

export function FeaturedTalks() {
  const featured = talks.slice(0, 4)

  return (
    <section className="section-padding border-t border-white/[0.06]">
      <div className="container-max">
        <SectionWrapper>
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="font-mono text-xs text-accent tracking-widest uppercase mb-3">Speaking</p>
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Talks & <GradientText>podcasts</GradientText>
              </h2>
            </div>
            <Link
              href="/talks"
              className="text-sm text-white/50 hover:text-accent transition-colors font-mono hidden sm:block"
            >
              View all →
            </Link>
          </div>
        </SectionWrapper>

        <div className="grid sm:grid-cols-2 gap-4">
          {featured.map((talk, i) => (
            <SectionWrapper key={talk.title} delay={i * 0.08}>
              <GlassCard className="h-full flex flex-col gap-3">
                <div className="flex items-start justify-between gap-2">
                  <span
                    className={`font-mono text-xs uppercase tracking-wider ${typeColors[talk.type] ?? 'text-white/40'}`}
                  >
                    {talk.type}
                  </span>
                  <span className="text-white/30 text-xs font-mono shrink-0">
                    {talk.date.slice(0, 4)}
                  </span>
                </div>
                <h3 className="text-white text-sm font-semibold leading-snug">{talk.title}</h3>
                <p className="text-white/50 text-xs leading-relaxed flex-1">{talk.description}</p>
                {talk.link && (
                  <a
                    href={talk.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent text-xs font-mono hover:underline mt-auto"
                  >
                    {talk.linkLabel ?? 'Listen'} →
                  </a>
                )}
              </GlassCard>
            </SectionWrapper>
          ))}
        </div>

        <div className="mt-4 sm:hidden">
          <Link href="/talks" className="text-sm text-accent hover:underline font-mono">
            View all talks →
          </Link>
        </div>
      </div>
    </section>
  )
}
