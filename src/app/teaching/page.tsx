import type { Metadata } from 'next'
import { GlassCard } from '@/components/shared/glass-card'
import { GradientText } from '@/components/shared/gradient-text'
import { teaching } from '@/content/teaching'

export const metadata: Metadata = {
  title: 'Teaching — Andrea Zignoli',
  description: 'Teaching experience by Andrea Zignoli in sports science and technology.',
}

export default function TeachingPage() {
  return (
    <main className="min-h-screen section-padding pt-28">
      <div className="container-max">
        <div className="mb-12 space-y-2">
          <p className="font-mono text-xs text-accent tracking-widest uppercase">Education</p>
          <h1 className="text-4xl md:text-5xl font-bold">
            <GradientText>Teaching</GradientText>
          </h1>
          <p className="text-white/50 text-sm max-w-xl pt-2">
            Academic teaching in sports science, mathematical modelling, and technology innovation.
          </p>
        </div>

        <div className="space-y-4">
          {teaching.map((item) => (
            <GlassCard key={item.title} hover={false}>
              <div className="flex flex-col md:flex-row md:items-start gap-4">
                <div className="shrink-0 font-mono text-xs text-accent/60 mt-1 w-20">
                  {item.date.slice(0, 4)}
                </div>
                <div className="flex-1 space-y-1">
                  <h3 className="text-white font-semibold text-sm leading-snug">{item.title}</h3>
                  <p className="text-accent/70 text-xs font-mono">{item.type}</p>
                  <p className="text-white/40 text-xs">
                    {item.venue} · {item.location}
                  </p>
                  {item.description && (
                    <p className="text-white/55 text-sm leading-relaxed pt-1">{item.description}</p>
                  )}
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </main>
  )
}
