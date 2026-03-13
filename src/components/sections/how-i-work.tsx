import { SectionWrapper } from '@/components/shared/section-wrapper'
import { GradientText } from '@/components/shared/gradient-text'

const techStack = [
  'Python', 'Claude Code', 'FastAPI', 'Flask', 'Docker',
  'AWS Lambda', 'Heroku', 'LLM Pipelines', 'PyTorch/Keras',
  'scikit-learn', 'Pandas', 'FastAPI', 'Git',
]

export function HowIWork() {
  return (
    <section className="section-padding border-t border-white/[0.06]">
      <div className="container-max">
        <SectionWrapper>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <div>
                <p className="font-mono text-xs text-accent tracking-widest uppercase mb-3">Approach</p>
                <h2 className="text-3xl md:text-4xl font-bold text-white">
                  How I <GradientText>work</GradientText>
                </h2>
              </div>
              <div className="space-y-4 text-white/65 leading-relaxed">
                <p>
                  I combine <span className="text-white">first-principles modelling</span> with
                  machine learning. Depending on the problem, I write differential equations by
                  hand, train neural networks, or blend both approaches.
                </p>
                <p>
                  I prototype fast, validate against real data, and iterate until the model
                  delivers business value. Full-stack: from research and model development to
                  Docker containers, Flask/FastAPI services, and production deployment.
                </p>
                <p className="text-white/45 text-sm">
                  Recent work: educational courses, performance models deployed as APIs, web apps
                  connected to CMS via LLM pipelines.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <p className="font-mono text-xs text-accent tracking-widest uppercase">Tech stack</p>
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-full glass text-white/70 text-sm font-mono border-white/[0.08] hover:text-accent transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </SectionWrapper>
      </div>
    </section>
  )
}
