import Link from 'next/link'
import { SectionWrapper } from '@/components/shared/section-wrapper'
import { GradientText } from '@/components/shared/gradient-text'
import { talks } from '@/content/talks'

const typeColors: Record<string, string> = {
  'Training Science Podcast': 'text-accent',
  'Podcast': 'text-accent',
  'Video': 'text-red-400',
  'Talk': 'text-white/40',
  'Tutorial': 'text-white/40',
}

export function FeaturedTalks() {
  const featured = talks.slice(0, 5)

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

        <SectionWrapper delay={0.1}>
          <div className="space-y-0 divide-y divide-white/[0.06]">
            {featured.map((talk, i) => (
              <div key={i} className="py-4 group">
                <div className="flex items-start gap-4">
                  <span className={`font-mono text-xs uppercase tracking-wider mt-0.5 w-20 shrink-0 ${typeColors[talk.type] ?? 'text-white/35'}`}>
                    {talk.type}
                  </span>
                  <div className="flex-1 min-w-0">
                    {talk.link ? (
                      <a
                        href={talk.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white/80 text-sm leading-snug hover:text-accent transition-colors"
                      >
                        {talk.title}
                      </a>
                    ) : (
                      <p className="text-white/80 text-sm leading-snug">{talk.title}</p>
                    )}
                    {talk.description && (
                      <p className="text-white/35 text-xs mt-1 leading-relaxed line-clamp-1">{talk.description}</p>
                    )}
                  </div>
                  <span className="text-white/25 text-xs font-mono shrink-0">{talk.date.slice(0, 4)}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 sm:hidden">
            <Link href="/talks" className="text-sm text-accent hover:underline font-mono">
              View all talks →
            </Link>
          </div>
        </SectionWrapper>
      </div>
    </section>
  )
}
