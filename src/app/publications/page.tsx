import type { Metadata } from 'next'
import { GradientText } from '@/components/shared/gradient-text'
import type { Publication } from '@/types'

export const metadata: Metadata = {
  title: 'Publications — Andrea Zignoli',
  description: 'Peer-reviewed publications by Andrea Zignoli in sports science, AI, and performance modelling.',
}

const ORCID = '0000-0003-1315-5573'

async function getAllPublications(): Promise<Publication[]> {
  const results: Publication[] = []
  let cursor = '*'

  try {
    while (cursor) {
      const url =
        `https://api.openalex.org/works` +
        `?filter=author.orcid:${ORCID},type:article|book-chapter` +
        `&per_page=200` +
        `&cursor=${cursor}` +
        `&sort=publication_date:desc` +
        `&select=title,publication_year,primary_location,doi,cited_by_count`

      const res = await fetch(url, {
        headers: { 'User-Agent': 'andreazignoli.github.io (andrea.zignoli@unitn.it)' },
        next: { revalidate: 86400 },
      })
      if (!res.ok) break

      const data = await res.json()
      for (const w of data.results) {
        results.push({
          title: w.title ?? 'Untitled',
          year: String(w.publication_year ?? ''),
          journal: w.primary_location?.source?.display_name ?? '',
          doi: w.doi ? `https://doi.org/${w.doi.replace('https://doi.org/', '')}` : undefined,
          url: w.doi
            ? `https://doi.org/${w.doi.replace('https://doi.org/', '')}`
            : `https://scholar.google.com/scholar?q=${encodeURIComponent(w.title ?? '')}`,
          citations: w.cited_by_count ?? 0,
        })
      }

      cursor = data.meta?.next_cursor ?? null
    }
  } catch (_) {
    // return whatever was collected
  }

  return results
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
  const totalCitations = publications.reduce((sum, p) => sum + (p.citations ?? 0), 0)

  return (
    <main className="min-h-screen section-padding pt-28">
      <div className="container-max">
        <div className="mb-12 space-y-2">
          <p className="font-mono text-xs text-accent tracking-widest uppercase">Research</p>
          <h1 className="text-4xl md:text-5xl font-bold">
            <GradientText>Publications</GradientText>
          </h1>
          <p className="text-white/50 text-sm max-w-xl pt-2">
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
            via ORCID — no manual updates needed.
          </p>

          {publications.length > 0 && (
            <div className="flex gap-6 pt-3">
              <div>
                <p className="font-mono text-2xl font-bold text-white">{publications.length}</p>
                <p className="text-white/35 text-xs">publications</p>
              </div>
              <div className="w-px bg-white/[0.06]" />
              <div>
                <p className="font-mono text-2xl font-bold text-white">{totalCitations.toLocaleString()}</p>
                <p className="text-white/35 text-xs">citations</p>
              </div>
              <div className="w-px bg-white/[0.06]" />
              <div>
                <p className="font-mono text-2xl font-bold text-white">{years.length}</p>
                <p className="text-white/35 text-xs">active years</p>
              </div>
            </div>
          )}

          <div className="flex gap-4 pt-1 flex-wrap">
            <a href="https://scholar.google.com/citations?hl=en&user=LeCCMZ8AAAAJ" target="_blank" rel="noopener noreferrer" className="text-xs text-white/40 hover:text-accent transition-colors font-mono">Google Scholar →</a>
            <a href="https://pubmed.ncbi.nlm.nih.gov/?term=andrea+zignoli" target="_blank" rel="noopener noreferrer" className="text-xs text-white/40 hover:text-accent transition-colors font-mono">PubMed →</a>
            <a href="https://www.researchgate.net/profile/Andrea-Zignoli" target="_blank" rel="noopener noreferrer" className="text-xs text-white/40 hover:text-accent transition-colors font-mono">ResearchGate →</a>
          </div>
        </div>

        {publications.length === 0 ? (
          <div className="glass rounded-xl p-8 text-center space-y-3">
            <p className="text-white/60">Could not load publications at this time.</p>
            <a href="https://scholar.google.com/citations?hl=en&user=LeCCMZ8AAAAJ" target="_blank" rel="noopener noreferrer" className="inline-block px-4 py-2 rounded-lg bg-accent text-black text-sm font-semibold hover:bg-accent/90 transition-colors">View on Google Scholar</a>
          </div>
        ) : (
          <div className="space-y-10">
            {years.map((year) => (
              <div key={year}>
                <div className="flex items-center gap-4 mb-4">
                  <span className="font-mono text-accent font-bold text-lg">{year}</span>
                  <div className="flex-1 h-px bg-white/[0.06]" />
                  <span className="font-mono text-white/25 text-xs">{byYear[year].length}</span>
                </div>
                <div className="divide-y divide-white/[0.05]">
                  {byYear[year].map((pub, i) => (
                    <div key={i} className="py-4 flex items-start gap-4">
                      <div className="flex-1 min-w-0">
                        {pub.url ? (
                          <a href={pub.url} target="_blank" rel="noopener noreferrer" className="text-white/80 text-sm leading-relaxed hover:text-accent transition-colors block">{pub.title}</a>
                        ) : (
                          <p className="text-white/80 text-sm leading-relaxed">{pub.title}</p>
                        )}
                        {pub.journal && (
                          <p className="text-white/30 text-xs mt-1 font-mono italic">{pub.journal}</p>
                        )}
                      </div>
                      {(pub.citations ?? 0) > 0 && (
                        <span title={`${pub.citations} citations`} className="shrink-0 font-mono text-xs text-white/25 mt-0.5">
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
