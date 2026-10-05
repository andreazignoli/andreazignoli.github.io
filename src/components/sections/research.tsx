import Link from 'next/link'
import { SectionWrapper } from '@/components/shared/section-wrapper'
import { talks } from '@/content/talks'
import { getAllPublications } from '@/lib/publications'

// Hand-picked AI and data papers (not already cited on the service cards); citation counts come live from OpenAlex
const SELECTED_DOIS = [
  '10.1371/journal.pone.0229466',
  '10.1080/17461391.2019.1587523',
  '10.3390/s23020826',
]

const TALK_LABELS: Record<string, string> = {
  'Training Science Podcast': 'Podcast',
}

export async function Research() {
  const publications = await getAllPublications()
  const selected = SELECTED_DOIS.map((doi) =>
    publications.find((p) => p.doi?.toLowerCase() === `https://doi.org/${doi}`),
  ).filter((p) => p !== undefined)
  const recentTalks = talks.slice(0, 3)

  return (
    <section className="section-padding border-t border-foreground/[0.06]">
      <div className="container-max">
        <SectionWrapper>
          <div className="mb-10">
            <p className="font-mono text-xs text-accent tracking-widest uppercase mb-3">Research & speaking</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Published and on the record</h2>
          </div>
        </SectionWrapper>

        <div className="grid lg:grid-cols-2 gap-12">
          <SectionWrapper delay={0.05}>
            <div className="flex items-baseline justify-between mb-4">
              <h3 className="text-foreground font-semibold">Selected AI & data papers</h3>
              <Link href="/publications" className="text-xs text-foreground/55 hover:text-accent transition-colors font-mono">
                All {publications.length > 0 ? publications.length : ''} papers →
              </Link>
            </div>
            {selected.length === 0 ? (
              <p className="text-foreground/55 text-sm py-4">
                See{' '}
                <Link href="/publications" className="text-accent hover:underline">
                  the publications page
                </Link>{' '}
                for the full list.
              </p>
            ) : (
              <ul className="divide-y divide-foreground/[0.08]">
                {selected.map((pub) => (
                  <li key={pub.url ?? pub.title} className="py-4 flex items-start gap-4">
                    <div className="flex-1 min-w-0">
                      <a
                        href={pub.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground/85 text-sm leading-relaxed hover:text-accent transition-colors line-clamp-2"
                      >
                        {pub.title}
                      </a>
                      <p className="text-foreground/55 text-xs mt-1 font-mono">
                        {pub.journal} · {pub.year}
                      </p>
                    </div>
                    <div className="shrink-0 text-right">
                      <p className="font-mono text-sm text-foreground">{pub.citations}</p>
                      <p className="text-foreground/50 text-[10px] uppercase tracking-wider">citations</p>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </SectionWrapper>

          <SectionWrapper delay={0.1}>
            <div className="flex items-baseline justify-between mb-4">
              <h3 className="text-foreground font-semibold">Recent talks & podcasts</h3>
              <Link href="/talks" className="text-xs text-foreground/55 hover:text-accent transition-colors font-mono">
                All talks →
              </Link>
            </div>
            <ul className="divide-y divide-foreground/[0.08]">
              {recentTalks.map((talk) => (
                <li key={talk.title} className="py-4">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-mono text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full text-accent bg-accent/10">
                      {TALK_LABELS[talk.type] ?? talk.type}
                    </span>
                    <span className="text-foreground/50 text-xs font-mono">{talk.date.slice(0, 4)}</span>
                  </div>
                  {talk.link ? (
                    <a
                      href={talk.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/85 text-sm leading-snug hover:text-accent transition-colors"
                    >
                      {talk.title}
                    </a>
                  ) : (
                    <p className="text-foreground/85 text-sm leading-snug">{talk.title}</p>
                  )}
                </li>
              ))}
            </ul>
          </SectionWrapper>
        </div>
      </div>
    </section>
  )
}
