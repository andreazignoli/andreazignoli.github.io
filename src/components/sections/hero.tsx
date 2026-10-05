import Image from 'next/image'
import Link from 'next/link'
import { Briefcase, FileText, GraduationCap, PenLine, type LucideIcon } from 'lucide-react'
import { GradientText } from '@/components/shared/gradient-text'
import { BackgroundRippleEffect } from '@/components/ui/background-ripple-effect'
import { CometCard } from '@/components/ui/comet-card'
import { clients } from '@/content/clients'
import { getAllPublications, totalCitations } from '@/lib/publications'

export async function Hero() {
  const publications = await getAllPublications()
  const citationCount = totalCitations(publications)

  const credentials: { icon: LucideIcon; label: string; primary: string; secondary: string }[] = [
    { icon: GraduationCap, label: 'Education', primary: 'PhD Sports Science', secondary: 'M.Eng. Mechatronics' },
    { icon: PenLine, label: 'Editorial', primary: 'Associate Editor', secondary: 'Sports Engineering (Springer)' },
    publications.length > 0
      ? {
          icon: FileText,
          label: 'Research',
          primary: `${publications.length} peer-reviewed papers`,
          secondary: `${citationCount.toLocaleString()} citations`,
        }
      : { icon: FileText, label: 'Research', primary: 'Peer-reviewed papers', secondary: 'Sports science and AI' },
  ]

  return (
    <section className="relative section-padding pt-32 md:pt-40 pb-16 md:pb-20 overflow-hidden">
      <BackgroundRippleEffect />
      <div className="relative z-10 container-max w-full">
        <div className="grid md:grid-cols-[1fr_auto] gap-10 md:gap-16 items-center">
          {/* Text */}
          <div className="space-y-6 max-w-2xl">
            {/* Mobile: a static avatar instead of the tilting card */}
            <div className="flex items-center gap-4 md:hidden">
              <div className="relative w-16 h-16 rounded-full overflow-hidden ring-1 ring-foreground/10 shrink-0">
                <Image
                  src="/images/profile_pic.jpg"
                  alt="Andrea Zignoli"
                  fill
                  sizes="64px"
                  className="object-cover"
                  priority
                />
              </div>
              <Link
                href="https://www.linkedin.com/in/andrea-zignoli-8080a438"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs text-foreground/55 hover:text-accent transition-colors font-mono"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                Let&apos;s connect
              </Link>
            </div>

            <div className="space-y-2">
              <p className="font-mono text-sm text-accent tracking-widest uppercase">
                AI Sport Tech Consultant
              </p>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.05]">
                <span className="text-foreground">Andrea</span>{' '}
                <GradientText>Zignoli</GradientText>
              </h1>
            </div>

            <p className="text-lg md:text-xl text-foreground/70 leading-relaxed">
              I help sport tech startups turn physiology and performance data into{' '}
              <span className="text-foreground">production-ready AI solutions</span> that drive
              subscriptions, enhance UX, and deliver new features.
            </p>

            <p className="text-foreground/55 text-sm max-w-xl leading-relaxed">
              I bridge the gap between sports science research and deployed code: whiteboarding
              with exercise physiologists in the morning, shipping containerised APIs by evening.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <Link
                href="mailto:andrea.zignoli@unitn.it"
                className="px-5 py-2.5 rounded-lg bg-accent text-accent-foreground text-sm font-semibold hover:bg-accent/90 transition-colors"
              >
                Get in touch
              </Link>
              <Link
                href="#services"
                className="px-5 py-2.5 rounded-lg glass text-foreground/80 text-sm font-medium hover:text-foreground hover:bg-foreground/[0.08] transition-colors"
              >
                See what I do
              </Link>
            </div>
          </div>

          {/* Profile photo card (desktop only) */}
          <div className="hidden md:block">
            <CometCard rotateDepth={12} translateDepth={14} className="w-fit">
              <div className="flex flex-col items-center gap-4 rounded-2xl bg-[var(--photo-card)] border border-foreground/[0.08] p-5">
                <div className="relative w-40 h-40 rounded-full overflow-hidden">
                  <Image
                    src="/images/profile_pic.jpg"
                    alt="Andrea Zignoli"
                    fill
                    // Match the rendered size (w-40 = 160px): without this the browser fetches a ~3000px
                    // image, and once the comet card's 3D tilt moves it to the GPU, the heavy
                    // downscale there turns fine detail into stray white pixels
                    sizes="160px"
                    className="object-cover"
                    priority
                  />
                </div>
                <Link
                  href="https://www.linkedin.com/in/andrea-zignoli-8080a438"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-xs text-foreground/55 hover:text-accent transition-colors font-mono"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  Let&apos;s connect
                </Link>
              </div>
            </CometCard>
          </div>
        </div>

        {/* Credentials and clients: the 1px gaps over a border-coloured backdrop draw the dividers */}
        <div className="mt-14 md:mt-20 grid gap-px sm:grid-cols-2 lg:grid-cols-4 rounded-2xl overflow-hidden border border-foreground/[0.08] bg-foreground/[0.08]">
          {credentials.map((c) => (
            <div key={c.label} className="bg-background p-5 space-y-3">
              <div className="flex items-center gap-2 text-accent">
                <c.icon size={16} strokeWidth={1.75} aria-hidden />
                <p className="font-mono text-xs uppercase tracking-widest">{c.label}</p>
              </div>
              <div>
                <p className="text-foreground font-medium text-sm">{c.primary}</p>
                <p className="text-foreground/60 text-sm">{c.secondary}</p>
              </div>
            </div>
          ))}
          <div className="bg-background p-5 space-y-3">
            <div className="flex items-center gap-2 text-accent">
              <Briefcase size={16} strokeWidth={1.75} aria-hidden />
              <p className="font-mono text-xs uppercase tracking-widest">Clients</p>
            </div>
            <ul className="grid grid-cols-2 gap-x-3 gap-y-1 text-sm">
              {clients.map((client) => (
                <li key={client.name}>
                  <a
                    href={client.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground font-medium hover:text-accent transition-colors"
                  >
                    {client.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
