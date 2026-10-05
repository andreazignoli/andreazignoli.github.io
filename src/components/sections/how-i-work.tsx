import { SectionWrapper } from '@/components/shared/section-wrapper'

const techStack = [
  'Python', 'Claude Code', 'FastAPI', 'Flask', 'Docker',
  'AWS Lambda', 'Heroku', 'LLM Pipelines', 'PyTorch/Keras',
  'scikit-learn', 'Pandas', 'Git',
]

const steps = [
  {
    title: 'Model',
    description: 'First-principles equations, machine learning, or a blend of both, chosen for the problem.',
  },
  {
    title: 'Validate',
    description: 'Tested against real athlete data and iterated until it delivers business value.',
  },
  {
    title: 'Deploy',
    description: 'Shipped as Docker containers and Flask/FastAPI services, ready for production.',
  },
]

export function HowIWork() {
  return (
    <section id="how-i-work" className="section-padding border-t border-foreground/[0.06]">
      <div className="container-max">
        <SectionWrapper>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <div>
                <p className="font-mono text-xs text-accent tracking-widest uppercase mb-3">Approach</p>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">How I work</h2>
              </div>
              <div className="space-y-4 text-foreground/65 leading-relaxed">
                <p>
                  I combine <span className="text-foreground">first-principles modelling</span> with
                  machine learning. Depending on the problem, I write differential equations by
                  hand, train neural networks, or blend both approaches.
                </p>
                <p>
                  I prototype fast, validate against real data, and iterate until the model
                  delivers business value. Full-stack: from research and model development to
                  Docker containers, Flask/FastAPI services, and production deployment.
                </p>
                <p className="text-foreground/55 text-sm">
                  Recent work: educational courses, performance models deployed as APIs, web apps
                  connected to CMS via LLM pipelines.
                </p>
              </div>
            </div>

            <div className="space-y-8">
              <ol className="space-y-5">
                {steps.map((step, i) => (
                  <li key={step.title} className="flex gap-4">
                    <span className="shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-mono text-xs text-accent ring-1 ring-accent/30 bg-accent/10">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <div>
                      <p className="text-foreground font-semibold">{step.title}</p>
                      <p className="text-foreground/60 text-sm leading-relaxed">{step.description}</p>
                    </div>
                  </li>
                ))}
              </ol>

              <div className="space-y-3">
                <p className="font-mono text-xs text-accent tracking-widest uppercase">Tech stack</p>
                <div className="flex flex-wrap gap-2">
                  {techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full glass text-foreground/70 text-sm font-mono border-foreground/[0.08]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </SectionWrapper>
      </div>
    </section>
  )
}
