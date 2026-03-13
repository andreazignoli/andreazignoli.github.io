import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { posts } from '@/content/posts'

interface Props {
  params: { slug: string }
}

export async function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = posts.find((p) => p.slug === params.slug)
  if (!post) return {}
  return {
    title: `${post.title} — Andrea Zignoli`,
    description: post.excerpt,
  }
}

export default function BlogPostPage({ params }: Props) {
  const post = posts.find((p) => p.slug === params.slug)
  if (!post) notFound()

  return (
    <main className="min-h-screen section-padding pt-28">
      <div className="max-w-2xl mx-auto">
        {/* Back */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-1 text-white/40 hover:text-accent transition-colors text-sm font-mono mb-8"
        >
          ← Blog
        </Link>

        {/* Header */}
        <div className="mb-8 space-y-3">
          <time className="font-mono text-xs text-accent/60">
            {new Date(post.date).toLocaleDateString('en-GB', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </time>
          <h1 className="text-3xl md:text-4xl font-bold text-white leading-tight">{post.title}</h1>
          <p className="text-white/55 leading-relaxed">{post.excerpt}</p>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-accent/40 via-secondary/30 to-transparent mb-8" />

        {/* Content */}
        {post.content ? (
          <div className="prose-custom space-y-4 text-white/70 leading-relaxed">
            {post.content.split('\n\n').map((para, i) => {
              if (para.startsWith('## ')) {
                return (
                  <h2 key={i} className="text-white font-bold text-xl mt-8 mb-3">
                    {para.slice(3)}
                  </h2>
                )
              }
              if (para.startsWith('**') && para.endsWith('**')) {
                return (
                  <p key={i} className="text-white font-semibold">
                    {para.slice(2, -2)}
                  </p>
                )
              }
              // Render basic markdown links
              const rendered = para.replace(
                /\[([^\]]+)\]\(([^)]+)\)/g,
                (_, text, href) =>
                  `<a href="${href}" target="_blank" rel="noopener noreferrer" class="text-accent hover:underline">${text}</a>`,
              ).replace(
                /\*([^*]+)\*/g,
                (_, text) => `<em class="text-white/80">${text}</em>`,
              ).replace(
                /\*\*([^*]+)\*\*/g,
                (_, text) => `<strong class="text-white">${text}</strong>`,
              )
              return (
                <p
                  key={i}
                  dangerouslySetInnerHTML={{ __html: rendered }}
                  className="text-white/65 leading-relaxed"
                />
              )
            })}
          </div>
        ) : (
          <p className="text-white/50">No content available.</p>
        )}

        {/* External link */}
        {post.externalLink && (
          <div className="mt-8 pt-6 border-t border-white/[0.06]">
            <a
              href={post.externalLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 glass rounded-lg text-accent text-sm font-mono hover:bg-white/[0.08] transition-colors"
            >
              Read original post ↗
            </a>
          </div>
        )}
      </div>
    </main>
  )
}
