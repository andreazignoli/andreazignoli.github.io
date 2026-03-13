import type { Metadata } from 'next'
import Link from 'next/link'
import { GradientText } from '@/components/shared/gradient-text'
import type { OrcidWork } from '@/types'

export const metadata: Metadata = {
  title: 'Publications — Andrea Zignoli',
  description: 'Peer-reviewed publications by Andrea Zignoli in sports science, AI, and performance modelling.',
}

async function getAllPublications(): Promise<OrcidWork[]> {
  try {
    const res = await fetch(
      'https://pub.orcid.org/v3.0/0000-0003-1315-5573/works',
      {
        headers: { Accept: 'application/json' },
        next: { revalidate: 86400 },
      },
    )
    if (!res.ok) return []
    const data = await res.json()
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const groups: any[] = data.group ?? []
    return groups
      .map((group) => {
        const summary = group['work-summary']?.[0]
        if (!summary) return null
        const title = summary.title?.title?.value ?? 'Untitled'
        const year = summary['publication-date']?.year?.value ?? '0'
        const journal = summary['journal-title']?.value ?? ''
        const externalIds: { 'external-id-type': string; 'external-id-value': string }[] =
          summary['external-ids']?.['external-id'] ?? []
        const doi = externalIds.find((e) => e['external-id-type'] === 'doi')?.['external-id-value']
        return {
          title,
          year,
          journal,
          doi: doi ? `https://doi.org/${doi}` : undefined,
          url: doi
            ? `https://doi.org/${doi}`
            : `https://scholar.google.com/scholar?q=${encodeURIComponent(title)}`,
        }
      })
      .filter(Boolean)
      .sort((a, b) => Number(b!.year) - Number(a!.year)) as OrcidWork[]
  } catch {
    return []
  }
}

export default async function PublicationsPage() {
  const publications = await getAllPublications()

  // Group by year
  const byYear: Record<string, OrcidWork[]> = {}
  for (const pub of publications) {
    const y = pub.year || 'Unknown'
    if (!byYear[y]) byYear[y] = []
    byYear[y].push(pub)
  }
  const years = Object.keys(byYear).sort((a, b) => Number(b) - Number(a))

  return (
    <main className="min-h-screen section-padding pt-28">
      <div className="container-max">
        {/* Header */}
        <div className="mb-12 space-y-2">
          <p className="font-mono text-xs text-accent tracking-widest uppercase">Research</p>
          <h1 className="text-4xl md:text-5xl font-bold">
            <GradientText>Publications</GradientText>
          </h1>
          <p className="text-white/50 text-sm max-w-xl pt-2">
            Peer-reviewed papers in sports science, AI, performance modelling, and endurance physiology.
            Data pulled live from{' '}
            <a
              href="https://orcid.org/0000-0003-1315-5573"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline"
            >
              ORCID
            </a>
            .
          </p>
          <div className="flex gap-4 pt-1 flex-wrap">
            <a
              href="https://scholar.google.com/citations?hl=en&user=LeCCMZ8AAAAJ"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-white/40 hover:text-accent transition-colors font-mono"
            >
              Google Scholar →
            </a>
            <a
              href="https://pubmed.ncbi.nlm.nih.gov/?term=andrea+zignoli"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-white/40 hover:text-accent transition-colors font-mono"
            >
              PubMed →
            </a>
            <a
              href="https://www.researchgate.net/profile/Andrea-Zignoli"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-white/40 hover:text-accent transition-colors font-mono"
            >
              ResearchGate →
            </a>
          </div>
        </div>

        {publications.length === 0 ? (
          <div className="glass rounded-xl p-8 text-center space-y-3">
            <p className="text-white/60">Could not load publications at this time.</p>
            <a
              href="https://scholar.google.com/citations?hl=en&user=LeCCMZ8AAAAJ"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-4 py-2 rounded-lg bg-accent text-black text-sm font-semibold hover:bg-accent/90 transition-colors"
            >
              View on Google Scholar
            </a>
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
                <div className="space-y-0 divide-y divide-white/[0.05]">
                  {byYear[year].map((pub, i) => (
                    <div key={i} className="py-4 group">
                      {pub.url ? (
                        <a
                          href={pub.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white/75 text-sm leading-relaxed hover:text-accent transition-colors block"
                        >
                          {pub.title}
                        </a>
                      ) : (
                        <p className="text-white/75 text-sm leading-relaxed">{pub.title}</p>
                      )}
                      {pub.journal && (
                        <p className="text-white/30 text-xs mt-1 font-mono italic">{pub.journal}</p>
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
