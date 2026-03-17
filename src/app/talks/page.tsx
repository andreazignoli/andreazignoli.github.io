import type { Metadata } from 'next'
import { GlassCard } from '@/components/shared/glass-card'
import { GradientText } from '@/components/shared/gradient-text'
import { talks } from '@/content/talks'

export const metadata: Metadata = {
  title: 'Talks — Andrea Zignoli',
  description: 'Talks, tutorials, and podcast appearances by Andrea Zignoli.',
}

const typeColors: Record<string, string> = {
  'Training Science Podcast': 'text-accent border-accent/30 bg-accent/10',
  'Podcast': 'text-[#155799] border-[#155799]/30 bg-[#155799]/10',
  'Video': 'text-red-400 border-red-400/30 bg-red-400/10',
  'Talk': 'text-white/50 border-white/10 bg-white/[0.04]',
  'Tutorial': 'text-white/50 border-white/10 bg-white/[0.04]',
}

export default function TalksPage() {
  const grouped = talks.reduce<Record<string, typeof talks>>((acc, talk) => {
    const year = talk.date.slice(0, 4)
    if (!acc[year]) acc[year] = []
    acc[year].push(talk)
    return acc
  }, {})
  const years = Object.keys(grouped).sort((a, b) => Number(b) - Number(a))

  return (
    <main className="min-h-screen section-padding pt-28">
      <div className="container-max">
        <div className="mb-12 space-y-2">
          <p className="font-mono text-xs text-accent tracking-widest uppercase">Speaking</p>
          <h1 className="text-4xl md:text-5xl font-bold">
            Talks & <GradientText>Podcasts</GradientText>
          </h1>
          <p className="text-white/50 text-sm max-w-xl pt-2">
            Conference presentations, tutorials, and podcast appearances on AI, sports science, and
            performance modelling.
          </p>
        </div>

        <div className="space-y-10">
          {years.map((year) => (
            <div key={year}>
              <div className="flex items-center gap-4 mb-4">
                <span className="font-mono text-accent font-bold text-lg">{year}</span>
                <div className="flex-1 h-px bg-white/[0.06]" />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                {grouped[year].map((talk) => (
                  <GlassCard key={talk.title} className="flex flex-col gap-3">
                    <div className="flex items-start justify-between gap-2">
                      <span
                        className={`font-mono text-xs uppercase tracking-wider px-2 py-0.5 rounded-full border ${typeColors[talk.type] ?? 'text-white/40 border-white/10'}`}
                      >
                        {talk.type}
                      </span>
                    </div>
                    <h3 className="text-white text-sm font-semibold leading-snug">{talk.title}</h3>
                    {talk.venue && (
                      <p className="text-white/35 text-xs font-mono">
                        {talk.venue}
                        {talk.location ? ` · ${talk.location}` : ''}
                      </p>
                    )}
                    <p className="text-white/55 text-xs leading-relaxed flex-1">{talk.description}</p>
                    {talk.link && (
                      <a
                        href={talk.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-accent text-xs font-mono hover:underline mt-auto"
                      >
                        {talk.linkLabel ?? 'Listen / Watch'} →
                      </a>
                    )}
                  </GlassCard>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
