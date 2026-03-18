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
  const imageUrl = post.image
    ? `https://andreazignoli.github.io${post.image}`
    : undefined
  return {
    title: `${post.title} — Andrea Zignoli`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://andreazignoli.github.io/blog/${post.slug}`,
      images: imageUrl ? [{ url: imageUrl, width: 1200, alt: post.title }] : [],
    },
    twitter: {
      card: 'summary_large_image',
      creator: '@andrea_zignoli',
      title: post.title,
      description: post.excerpt,
      images: imageUrl ? [imageUrl] : [],
    },
  }
}

const contentMap: Record<string, () => Promise<{ default: React.ComponentType }>> = {
  'down-the-poggio-milano-sanremo': () => import('@/content/post-content/down-the-poggio-milano-sanremo'),
  'oxynet-collective-intelligence': () => import('@/content/post-content/oxynet-collective-intelligence'),
  'bike-handling-road-cycling': () => import('@/content/post-content/bike-handling-road-cycling'),
  'ai-cpet-data': () => import('@/content/post-content/ai-cpet-data'),
  'eagles-sunflowers-cycling-trajectories': () => import('@/content/post-content/eagles-sunflowers-cycling-trajectories'),
  'workout-reserve-maximal-mean-power': () => import('@/content/post-content/workout-reserve-maximal-mean-power'),
}

export default async function BlogPostPage({ params }: Props) {
  const post = posts.find((p) => p.slug === params.slug)
  if (!post) notFound()

  let PostContent: React.ComponentType | null = null
  if (post.hasContent && contentMap[post.slug]) {
    const mod = await contentMap[post.slug]()
    PostContent = mod.default
  }

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
        <div className="h-px bg-gradient-to-r from-accent/40 via-secondary/30 to-transparent mb-10" />

        {/* Content */}
        {PostContent && (
          <div className="blog-content">
            <PostContent />
          </div>
        )}

        {/* External link */}
        {post.externalLink && (
          <div className="mt-10 pt-6 border-t border-white/[0.06]">
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

        {/* Bottom nav */}
        <div className="mt-12 pt-6 border-t border-white/[0.06]">
          <Link
            href="/blog"
            className="text-white/35 hover:text-accent transition-colors text-sm font-mono"
          >
            ← All posts
          </Link>
        </div>
      </div>
    </main>
  )
}
