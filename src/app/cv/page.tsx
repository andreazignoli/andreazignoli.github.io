import type { Metadata } from 'next'
import { GlassCard } from '@/components/shared/glass-card'
import { GradientText } from '@/components/shared/gradient-text'

export const metadata: Metadata = {
  title: 'CV — Andrea Zignoli',
  description: 'Curriculum vitae of Andrea Zignoli, AI Sport Tech Consultant.',
}

const currentClients = [
  {
    name: 'Athletica.ai',
    href: 'https://athletica.ai/',
    period: 'Apr 2024 – Present',
    description: 'AI-driven training platform',
    role: 'Modelling, feature design, backend development',
  },
  {
    name: 'Tyme Wear',
    href: 'https://www.tymewear.com/',
    period: 'Dec 2024 – Present',
    description: 'Wearable tech',
    role: 'Deep learning models, backend solutions',
  },
]

const previousClients = [
  {
    name: 'Enhance-d',
    href: 'https://www.enhance-d.com/',
    period: 'Jan 2025 – Jun 2025',
    description: 'T1D training & CGM platform',
    role: 'Agentic frameworks, backend systems',
  },
  {
    name: 'Supersapiens',
    href: 'https://www.supersapiens.com/',
    period: '2021 – 2024',
    description: 'CGM for athletes',
    role: 'Data analysis, algorithm development, scientific writing',
  },
]

const researchRoles = [
  {
    title: 'Post-doctoral Researcher',
    org: 'University of Trento',
    period: '2017 – 2021',
    description: 'Sport performance modelling with Prof. F. Biral and Prof. P. Bosetti',
  },
  {
    title: 'Post-doctoral Researcher',
    org: 'Yokohama National University, Japan',
    period: '2016 – 2017',
    description: 'Rehabilitation robotics with Prof. T. Shimono',
  },
  {
    title: 'Doctoral Researcher',
    org: 'University of Verona',
    period: '2012 – 2016',
    description: 'Exercise physiology and performance analysis with Dr. B. Pellegrini',
  },
]

const education = [
  { degree: 'Ph.D. Sports Science', institution: 'University of Verona', year: '2016' },
  { degree: 'M.Eng. Mechatronics', institution: 'University of Trento', year: '2011' },
  { degree: 'B.Eng. Industrial Engineering', institution: 'University of Trento', year: '2009' },
]

const techStack = {
  'Languages & Frameworks': [
    'Python (10+ yrs) — Pandas, scikit-learn, TensorFlow/Keras, FastAPI, Flask',
    'R — dplyr, ggplot for statistical analysis',
    'Matlab/Maple — numerical simulations, symbolic computation',
  ],
  'AI & ML': [
    'Deep Learning — LSTM, CNN, time-series models',
    'LLM Pipelines — Claude Code, agentic frameworks, RAG',
    'First-principles modelling — differential equations, optimal control',
  ],
  'Deployment & DevOps': [
    'Docker, AWS Lambda, Heroku, Lightsail',
    'API development — FastAPI, Flask, Tornado',
    'Git workflows — GitHub, GitLab, Bitbucket',
  ],
  'Signal Processing': [
    'Time- and frequency-domain analysis',
    'Filter design, power spectrum analysis',
    'Physiological data: CPET, EMG, power meters, CGM',
  ],
}

export default function CVPage() {
  return (
    <main className="min-h-screen section-padding pt-28">
      <div className="container-max">
        {/* Header */}
        <div className="mb-12 space-y-2">
          <p className="font-mono text-xs text-accent tracking-widest uppercase">Curriculum Vitae</p>
          <h1 className="text-4xl md:text-5xl font-bold">
            Andrea <GradientText>Zignoli</GradientText>
          </h1>
          <p className="text-white/50 text-sm pt-1">AI Sport Tech Consultant · Verona, Italy</p>
          <div className="flex gap-3 pt-1 flex-wrap">
            <a
              href="/images/Andrea_CV_feb_2026.pdf"
              download
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-accent text-black text-sm font-semibold hover:bg-accent/90 transition-colors"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
              Full CV
            </a>
            <a
              href="/images/Andrea_Resume_fall_25.pdf"
              download
              className="inline-flex items-center gap-2 px-4 py-2 glass rounded-lg text-white/70 text-sm font-medium hover:text-white hover:bg-white/[0.08] transition-colors"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
              2-page résumé
            </a>
          </div>
        </div>

        <div className="space-y-12">
          {/* Current Clients */}
          <section>
            <h2 className="text-white font-bold text-xl mb-4 flex items-center gap-3">
              <span className="w-6 h-px bg-accent" />
              Current Clients
            </h2>
            <div className="space-y-3">
              {currentClients.map((c) => (
                <GlassCard key={c.name} hover={false}>
                  <div className="flex flex-col sm:flex-row sm:items-start gap-3">
                    <div className="shrink-0 w-32 font-mono text-xs text-accent/60">{c.period}</div>
                    <div>
                      <a
                        href={c.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white font-semibold hover:text-accent transition-colors"
                      >
                        {c.name}
                      </a>
                      <p className="text-white/40 text-xs">{c.description}</p>
                      <p className="text-white/60 text-sm mt-0.5">{c.role}</p>
                    </div>
                  </div>
                </GlassCard>
              ))}
            </div>
          </section>

          {/* Previous Clients */}
          <section>
            <h2 className="text-white font-bold text-xl mb-4 flex items-center gap-3">
              <span className="w-6 h-px bg-accent/40" />
              Previous Clients
            </h2>
            <div className="space-y-3">
              {previousClients.map((c) => (
                <GlassCard key={c.name} hover={false}>
                  <div className="flex flex-col sm:flex-row sm:items-start gap-3">
                    <div className="shrink-0 w-32 font-mono text-xs text-white/30">{c.period}</div>
                    <div>
                      <a
                        href={c.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white font-semibold hover:text-accent transition-colors"
                      >
                        {c.name}
                      </a>
                      <p className="text-white/40 text-xs">{c.description}</p>
                      <p className="text-white/60 text-sm mt-0.5">{c.role}</p>
                    </div>
                  </div>
                </GlassCard>
              ))}
            </div>
          </section>

          {/* Technical Stack */}
          <section>
            <h2 className="text-white font-bold text-xl mb-4 flex items-center gap-3">
              <span className="w-6 h-px bg-accent" />
              Technical Stack
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {Object.entries(techStack).map(([category, items]) => (
                <GlassCard key={category} hover={false}>
                  <h3 className="text-accent text-xs font-mono uppercase tracking-wider mb-3">
                    {category}
                  </h3>
                  <ul className="space-y-1">
                    {items.map((item) => (
                      <li key={item} className="text-white/60 text-sm flex items-start gap-2">
                        <span className="text-accent/40 mt-1">·</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </GlassCard>
              ))}
            </div>
          </section>

          {/* Research */}
          <section>
            <h2 className="text-white font-bold text-xl mb-4 flex items-center gap-3">
              <span className="w-6 h-px bg-accent" />
              Research Background
            </h2>
            <div className="space-y-3">
              {researchRoles.map((r) => (
                <GlassCard key={r.title + r.org} hover={false}>
                  <div className="flex flex-col sm:flex-row sm:items-start gap-3">
                    <div className="shrink-0 w-32 font-mono text-xs text-accent/60">{r.period}</div>
                    <div>
                      <p className="text-white font-semibold text-sm">{r.title}</p>
                      <p className="text-accent/70 text-xs font-mono">{r.org}</p>
                      <p className="text-white/55 text-sm mt-0.5">{r.description}</p>
                    </div>
                  </div>
                </GlassCard>
              ))}
            </div>
          </section>

          {/* Education */}
          <section>
            <h2 className="text-white font-bold text-xl mb-4 flex items-center gap-3">
              <span className="w-6 h-px bg-accent" />
              Education
            </h2>
            <div className="space-y-2">
              {education.map((e) => (
                <div key={e.degree} className="flex items-start gap-4 py-3 border-b border-white/[0.05]">
                  <span className="font-mono text-xs text-accent/60 w-12 shrink-0">{e.year}</span>
                  <div>
                    <p className="text-white font-semibold text-sm">{e.degree}</p>
                    <p className="text-white/40 text-xs">{e.institution}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Service */}
          <section>
            <h2 className="text-white font-bold text-xl mb-4 flex items-center gap-3">
              <span className="w-6 h-px bg-accent" />
              Service
            </h2>
            <GlassCard hover={false} className="space-y-2">
              <div className="flex items-start gap-3">
                <span className="text-accent/40 mt-1">·</span>
                <p className="text-white/70 text-sm">
                  <span className="text-white font-semibold">Associate Editor</span> —{' '}
                  <a
                    href="https://www.springer.com/journal/12283"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:underline"
                  >
                    Sports Engineering
                  </a>{' '}
                  (Springer)
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-accent/40 mt-1">·</span>
                <p className="text-white/70 text-sm">
                  <span className="text-white font-semibold">Peer Reviewer</span> — Multiple
                  top-50 sports science journals
                </p>
              </div>
            </GlassCard>
          </section>
        </div>
      </div>
    </main>
  )
}
