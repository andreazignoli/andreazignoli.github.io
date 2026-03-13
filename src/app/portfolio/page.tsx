import type { Metadata } from 'next'
import Image from 'next/image'
import { GlassCard } from '@/components/shared/glass-card'
import { GradientText } from '@/components/shared/gradient-text'
import { portfolio } from '@/content/portfolio'

export const metadata: Metadata = {
  title: 'Portfolio — Andrea Zignoli',
  description: 'Research projects and portfolio by Andrea Zignoli.',
}

export default function PortfolioPage() {
  return (
    <main className="min-h-screen section-padding pt-28">
      <div className="container-max">
        <div className="mb-12 space-y-2">
          <p className="font-mono text-xs text-accent tracking-widest uppercase">Projects</p>
          <h1 className="text-4xl md:text-5xl font-bold">
            <GradientText>Portfolio</GradientText>
          </h1>
          <p className="text-white/50 text-sm max-w-xl pt-2">
            Selected research projects spanning AI coaching, CPET analysis, vehicle dynamics, and
            performance modelling.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {portfolio.map((item) => (
            <GlassCard key={item.title} className="flex flex-col gap-4">
              {item.image && (
                <div className="relative w-full h-48 rounded-lg overflow-hidden bg-white/[0.03]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover object-center opacity-80"
                  />
                </div>
              )}
              <div className="flex-1 space-y-2">
                <h3 className="text-white font-semibold leading-snug">{item.title}</h3>
                <p className="text-accent/70 text-xs leading-relaxed">{item.excerpt}</p>
                {item.description && (
                  <p className="text-white/50 text-sm leading-relaxed">{item.description}</p>
                )}
              </div>
              {item.link && (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent text-xs font-mono hover:underline"
                >
                  Read paper →
                </a>
              )}
            </GlassCard>
          ))}
        </div>
      </div>
    </main>
  )
}
