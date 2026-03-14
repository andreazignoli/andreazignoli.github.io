import Image from 'next/image'
import Link from 'next/link'
import { GradientText } from '@/components/shared/gradient-text'

export function Hero() {
  return (
    <section className="min-h-screen flex items-center section-padding pt-32">
      <div className="container-max w-full">
        <div className="grid md:grid-cols-[1fr_auto] gap-12 items-center">
          {/* Text */}
          <div className="space-y-6">
            <div className="space-y-1">
              <p className="font-mono text-sm text-accent tracking-widest uppercase">
                AI Sport Tech Consultant
              </p>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.05]">
                <GradientText>Andrea</GradientText>
                <br />
                <span className="text-white">Zignoli</span>
              </h1>
            </div>

            <p className="text-lg md:text-xl text-white/70 max-w-xl leading-relaxed">
              I help sport tech startups turn physiology and performance data into{' '}
              <span className="text-white">production-ready AI solutions</span> that drive
              subscriptions, enhance UX, and deliver new features.
            </p>

            <p className="text-white/50 text-sm max-w-lg leading-relaxed">
              I bridge the gap between sports science research and deployed code — whiteboarding
              with exercise physiologists in the morning, shipping containerised APIs by evening.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <Link
                href="https://www.linkedin.com/in/andrea-zignoli-8080a438"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-lg bg-accent text-black text-sm font-semibold hover:bg-accent/90 transition-colors"
              >
                Work with me
              </Link>
              <Link
                href="/publications"
                className="px-5 py-2.5 rounded-lg glass text-white/80 text-sm font-medium hover:text-white hover:bg-white/[0.08] transition-colors"
              >
                View publications
              </Link>
            </div>
          </div>

          {/* Profile photo */}
          <div className="hidden md:block">
            <div className="relative w-56 h-56">
              <Image
                src="/images/profile_pic.jpg"
                alt="Andrea Zignoli"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
