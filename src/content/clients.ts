export interface Client {
  name: string
  href: string
  period: string
  role: string
  description: string
}

export const clients: Client[] = [
  {
    name: 'Athletica.ai',
    href: 'https://athletica.ai/',
    period: 'Apr 2024 – Present',
    role: 'Modelling, feature design, backend development',
    description: 'AI-driven training platform',
  },
  {
    name: 'Enhance-d',
    href: 'https://www.enhance-d.com/',
    period: 'Jan 2025 – Jun 2025',
    role: 'Agentic frameworks, backend systems',
    description: 'T1D training & CGM platform',
  },
  {
    name: 'Tyme Wear',
    href: 'https://www.tymewear.com/',
    period: 'Dec 2024 – Present',
    role: 'Deep learning models, backend solutions',
    description: 'Wearable tech',
  },
  {
    name: 'Supersapiens',
    href: 'https://www.supersapiens.com/',
    period: '2021 – 2024',
    role: 'Data analysis, algorithm development, scientific writing',
    description: 'CGM for athletes',
  },
]
