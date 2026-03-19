import Image from 'next/image'
import Link from 'next/link'
import { GradientText } from '@/components/shared/gradient-text'
import { BackgroundRippleEffect } from '@/components/ui/background-ripple-effect'
import { CometCard } from '@/components/ui/comet-card'

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center section-padding pt-32 overflow-hidden">
      <BackgroundRippleEffect />
      <div className="relative z-10 container-max w-full">
        <div className="grid md:grid-cols-[auto_1fr] gap-12 items-center">
          {/* Profile photo card */}
          <div className="hidden md:block">
            <CometCard rotateDepth={12} translateDepth={14}>
              <div className="flex flex-col items-center gap-4 rounded-2xl bg-white/[0.03] border border-white/[0.08] p-5">
                <div className="relative w-36 h-36 rounded-full overflow-hidden">
                  <Image
                    src="/images/profile_pic.jpg"
                    alt="Andrea Zignoli"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <Link
                  href="https://www.linkedin.com/in/andrea-zignoli-8080a438"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-xs text-white/50 hover:text-accent transition-colors font-mono"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  Let&apos;s connect
                </Link>
              </div>
            </CometCard>
          </div>

          {/* Text */}
          <div className="space-y-6 text-right">
            <div className="space-y-1">
              <p className="font-mono text-sm text-accent tracking-widest uppercase">
                AI Sport Tech Consultant
              </p>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.05]">
                <span className="text-white">Andrea</span>
                <br />
                <GradientText>Zignoli</GradientText>
              </h1>
            </div>

            <p className="text-lg md:text-xl text-white/70 max-w-xl leading-relaxed ml-auto">
              I help sport tech startups turn physiology and performance data into{' '}
              <span className="text-white">production-ready AI solutions</span> that drive
              subscriptions, enhance UX, and deliver new features.
            </p>

            <p className="text-white/50 text-sm max-w-lg leading-relaxed ml-auto">
              I bridge the gap between sports science research and deployed code — whiteboarding
              with exercise physiologists in the morning, shipping containerised APIs by evening.
            </p>

            <div className="flex flex-wrap gap-3 pt-2 justify-end">
              <Link
                href="mailto:andrea.zignoli@unitn.it"
                className="px-5 py-2.5 rounded-lg bg-accent text-black text-sm font-semibold hover:bg-accent/90 transition-colors"
              >
                Get in touch
              </Link>
              <Link
                href="/publications"
                className="px-5 py-2.5 rounded-lg glass text-white/80 text-sm font-medium hover:text-white hover:bg-white/[0.08] transition-colors"
              >
                View publications
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
