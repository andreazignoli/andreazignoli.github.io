import { SectionWrapper } from '@/components/shared/section-wrapper'
import { GradientText } from '@/components/shared/gradient-text'

export function WorkTogether() {
  return (
    <section className="section-padding border-t border-white/[0.06]">
      <div className="container-max">
        <SectionWrapper>
          <div className="max-w-2xl">
            <p className="font-mono text-xs text-accent tracking-widest uppercase mb-3">Contact</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Work <GradientText>together?</GradientText>
            </h2>
            <p className="text-white/65 leading-relaxed mb-8">
              Is there a project idea you want to discuss? Whether it's a research collaboration,
              a custom model, or a tool you'd like to build — I'm always happy to explore new ideas.
              Send me a message and let's talk.
            </p>
            <a
              href="mailto:andrea.zignoli@unitn.it"
              className="inline-flex items-center gap-3 px-6 py-3 rounded-xl glass border-white/[0.08] hover:border-accent/30 hover:bg-white/[0.07] transition-all duration-300 group"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-accent/70 group-hover:text-accent transition-colors shrink-0">
                <rect width="20" height="16" x="2" y="4" rx="2"/>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
              </svg>
              <span className="text-white/70 group-hover:text-white transition-colors font-mono text-sm">
                andrea.zignoli@unitn.it
              </span>
            </a>
          </div>
        </SectionWrapper>
      </div>
    </section>
  )
}
