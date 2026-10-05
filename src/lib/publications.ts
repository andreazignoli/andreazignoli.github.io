import type { Publication } from '@/types'

export const ORCID = '0000-0003-1315-5573'

// Preprint servers and non-peer-reviewed repositories to exclude
const EXCLUDED_SOURCES = new Set([
  'ssrn electronic journal',
  'biorxiv',
  'medrxiv',
  'arxiv',
  'research square',
  'chemrxiv',
  'preprints',
])

export async function getAllPublications(): Promise<Publication[]> {
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
        const source: string = w.primary_location?.source?.display_name ?? ''
        if (EXCLUDED_SOURCES.has(source.toLowerCase())) continue
        results.push({
          title: w.title ?? 'Untitled',
          year: String(w.publication_year ?? ''),
          journal: source,
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

export function totalCitations(publications: Publication[]): number {
  return publications.reduce((sum, p) => sum + (p.citations ?? 0), 0)
}
