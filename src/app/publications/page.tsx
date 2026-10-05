import type { Metadata } from 'next'
import { GradientText } from '@/components/shared/gradient-text'
import type { Publication } from '@/types'
import { ORCID, getAllPublications, totalCitations } from '@/lib/publications'

export const metadata: Metadata = {
  title: 'Publications | Andrea Zignoli',
  description: 'Peer-reviewed publications by Andrea Zignoli in sports science, AI, and performance modelling.',
}

export default async function PublicationsPage() {
  const publications = await getAllPublications()

  const byYear: Record<string, Publication[]> = {}
  for (const pub of publications) {
    const y = pub.year || 'Unknown'
    if (!byYear[y]) byYear[y] = []
    byYear[y].push(pub)
  }
  const years = Object.keys(byYear).sort((a, b) => Number(b) - Number(a))
  const citationCount = totalCitations(publications)

  return (
    <main className="min-h-screen section-padding pt-28">
      <div className="container-max">
        <div className="mb-12 space-y-2">
          <p className="font-mono text-xs text-accent tracking-widest uppercase">Research</p>
          <h1 className="text-4xl md:text-5xl font-bold">
            <GradientText>Publications</GradientText>
          </h1>
          <p className="text-foreground/50 text-sm max-w-xl pt-2">
            Peer-reviewed papers in sports science, AI, performance modelling, and endurance
            physiology. Auto-synced from{' '}
            <a
              href={`https://openalex.org/authors?filter=orcid:${ORCID}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline"
            >
              OpenAlex
            </a>{' '}
            via ORCID, so the list stays up to date automatically.
          </p>

          {publications.length > 0 && (
            <div className="flex gap-6 pt-3">
              <div>
                <p className="font-mono text-2xl font-bold text-foreground">{publications.length}</p>
                <p className="text-foreground/50 text-xs">publications</p>
              </div>
              <div className="w-px bg-foreground/[0.06]" />
              <div>
                <p className="font-mono text-2xl font-bold text-foreground">{citationCount.toLocaleString()}</p>
                <p className="text-foreground/50 text-xs">citations</p>
              </div>
              <div className="w-px bg-foreground/[0.06]" />
              <div>
                <p className="font-mono text-2xl font-bold text-foreground">{years.length}</p>
                <p className="text-foreground/50 text-xs">active years</p>
              </div>
            </div>
          )}

          <div className="flex gap-4 pt-1 flex-wrap">
            <a href="https://scholar.google.com/citations?hl=en&user=LeCCMZ8AAAAJ" target="_blank" rel="noopener noreferrer" className="text-xs text-foreground/55 hover:text-accent transition-colors font-mono">Google Scholar →</a>
            <a href="https://pubmed.ncbi.nlm.nih.gov/?term=andrea+zignoli" target="_blank" rel="noopener noreferrer" className="text-xs text-foreground/55 hover:text-accent transition-colors font-mono">PubMed →</a>
            <a href="https://www.researchgate.net/profile/Andrea-Zignoli" target="_blank" rel="noopener noreferrer" className="text-xs text-foreground/55 hover:text-accent transition-colors font-mono">ResearchGate →</a>
          </div>
        </div>

        {publications.length === 0 ? (
          <div className="glass rounded-xl p-8 text-center space-y-3">
            <p className="text-foreground/60">Could not load publications at this time.</p>
            <a href="https://scholar.google.com/citations?hl=en&user=LeCCMZ8AAAAJ" target="_blank" rel="noopener noreferrer" className="inline-block px-4 py-2 rounded-lg bg-accent text-accent-foreground text-sm font-semibold hover:bg-accent/90 transition-colors">View on Google Scholar</a>
          </div>
        ) : (
          <div className="space-y-10">
            {years.map((year) => (
              <div key={year}>
                <div className="flex items-center gap-4 mb-4">
                  <span className="font-mono text-accent font-bold text-lg">{year}</span>
                  <div className="flex-1 h-px bg-foreground/[0.06]" />
                  <span className="font-mono text-foreground/50 text-xs">{byYear[year].length}</span>
                </div>
                <div className="divide-y divide-foreground/[0.05]">
                  {byYear[year].map((pub, i) => (
                    <div key={i} className="py-4 flex items-start gap-4">
                      <div className="flex-1 min-w-0">
                        {pub.url ? (
                          <a href={pub.url} target="_blank" rel="noopener noreferrer" className="text-foreground/80 text-sm leading-relaxed hover:text-accent transition-colors block">{pub.title}</a>
                        ) : (
                          <p className="text-foreground/80 text-sm leading-relaxed">{pub.title}</p>
                        )}
                        {pub.journal && (
                          <p className="text-foreground/50 text-xs mt-1 font-mono italic">{pub.journal}</p>
                        )}
                      </div>
                      {(pub.citations ?? 0) > 0 && (
                        <span title={`${pub.citations} citations`} className="shrink-0 font-mono text-xs text-foreground/50 mt-0.5">
                          {pub.citations} ✦
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  )
}
