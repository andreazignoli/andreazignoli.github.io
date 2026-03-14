import Link from 'next/link'
import { SectionWrapper } from '@/components/shared/section-wrapper'
import { GradientText } from '@/components/shared/gradient-text'
import type { Publication } from '@/types'

async function getRecentPublications(): Promise<Publication[]> {
  try {
    const res = await fetch(
      'https://api.openalex.org/works' +
        '?filter=author.orcid:0000-0003-1315-5573,type:article|book-chapter' +
        '&per_page=5&sort=publication_date:desc' +
        '&select=title,publication_year,primary_location,doi',
      {
        headers: { 'User-Agent': 'andreazignoli.github.io (andrea.zignoli@unitn.it)' },
        next: { revalidate: 86400 },
      },
    )
    if (!res.ok) return []
    const data = await res.json()
    return data.results.map((w: any) => ({
      title: w.title ?? 'Untitled',
      year: String(w.publication_year ?? ''),
      journal: w.primary_location?.source?.display_name ?? '',
      url: w.doi
        ? `https://doi.org/${w.doi.replace('https://doi.org/', '')}`
        : `https://scholar.google.com/scholar?q=${encodeURIComponent(w.title ?? '')}`,
    }))
  } catch {
    return []
  }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function FeaturedPublications() {
  const publications = await getRecentPublications()

  return (
    <section className="section-padding border-t border-white/[0.06]">
      <div className="container-max">
        <SectionWrapper>
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="font-mono text-xs text-accent tracking-widest uppercase mb-3">Research</p>
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Recent <GradientText>publications</GradientText>
              </h2>
            </div>
            <Link
              href="/publications"
              className="text-sm text-white/50 hover:text-accent transition-colors font-mono hidden sm:block"
            >
              View all →
            </Link>
          </div>
        </SectionWrapper>

        <SectionWrapper delay={0.1}>
          <div className="space-y-0 divide-y divide-white/[0.06]">
            {publications.length === 0 ? (
              <p className="text-white/40 text-sm py-6">
                Publications loading — visit{' '}
                <Link href="/publications" className="text-accent hover:underline">
                  the publications page
                </Link>{' '}
                for the full list.
              </p>
            ) : (
              publications.map((pub, i) => (
                <div key={i} className="py-4 group">
                  <div className="flex items-start gap-4">
                    <span className="font-mono text-xs text-accent/60 mt-1 w-12 shrink-0">
                      {pub.year}
                    </span>
                    <div className="flex-1 min-w-0">
                      {pub.url ? (
                        <a
                          href={pub.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white/80 text-sm leading-relaxed hover:text-accent transition-colors line-clamp-2"
                        >
                          {pub.title}
                        </a>
                      ) : (
                        <p className="text-white/80 text-sm leading-relaxed line-clamp-2">
                          {pub.title}
                        </p>
                      )}
                      {pub.journal && (
                        <p className="text-white/35 text-xs mt-1 font-mono">{pub.journal}</p>
                      )}
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
          <div className="mt-4 sm:hidden">
            <Link href="/publications" className="text-sm text-accent hover:underline font-mono">
              View all publications →
            </Link>
          </div>
        </SectionWrapper>
      </div>
    </section>
  )
}
