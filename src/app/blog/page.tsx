import type { Metadata } from 'next'
import Link from 'next/link'
import { GlassCard } from '@/components/shared/glass-card'
import { GradientText } from '@/components/shared/gradient-text'
import { posts } from '@/content/posts'

export const metadata: Metadata = {
  title: 'Blog — Andrea Zignoli',
  description: 'Blog posts by Andrea Zignoli on AI, sports science, and performance modelling.',
}

export default function BlogPage() {
  const sorted = [...posts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

  return (
    <main className="min-h-screen section-padding pt-28">
      <div className="container-max">
        <div className="mb-12 space-y-2">
          <p className="font-mono text-xs text-accent tracking-widest uppercase">Writing</p>
          <h1 className="text-4xl md:text-5xl font-bold">
            <GradientText>Blog</GradientText>
          </h1>
          <p className="text-white/50 text-sm max-w-xl pt-2">
            Thoughts on AI, sports science, performance modelling, and the intersection of research
            and engineering.
          </p>
        </div>

        <div className="space-y-4">
          {sorted.map((post) => (
            <GlassCard key={post.slug} hover>
              <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                <span className="font-mono text-xs text-accent/60 shrink-0 mt-0.5 w-24">
                  {new Date(post.date).toLocaleDateString('en-GB', {
                    year: 'numeric',
                    month: 'short',
                  })}
                </span>
                <div className="flex-1 space-y-1">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-white font-semibold text-sm hover:text-accent transition-colors leading-snug"
                  >
                    {post.title}
                  </Link>
                  <p className="text-white/50 text-xs leading-relaxed">{post.excerpt}</p>
                  <div className="flex items-center gap-3 pt-1">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-xs text-accent font-mono hover:underline"
                    >
                      Read →
                    </Link>
                    {post.externalLink && (
                      <a
                        href={post.externalLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-white/30 font-mono hover:text-white/60 transition-colors"
                      >
                        Original ↗
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </main>
  )
}
