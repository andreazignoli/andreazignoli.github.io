import Link from 'next/link'

const socialLinks = [
  {
    label: 'Email',
    href: 'mailto:andrea.zignoli@unitn.it',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/andrea-zignoli-8080a438',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    label: 'GitHub',
    href: 'https://github.com/andreazignoli',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
      </svg>
    ),
  },
  {
    label: 'Google Scholar',
    href: 'https://scholar.google.com/citations?hl=en&user=LeCCMZ8AAAAJ',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 24a7 7 0 1 1 0-14 7 7 0 0 1 0 14zm0-24L0 9.5l4.838 3.94A8 8 0 0 1 12 10a8 8 0 0 1 7.162 3.44L24 9.5z" />
      </svg>
    ),
  },
  {
    label: 'ResearchGate',
    href: 'https://www.researchgate.net/profile/Andrea-Zignoli',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19.586 0c-.818 0-1.508.19-2.073.565-.563.377-.97.936-1.213 1.68a12.56 12.56 0 0 0-.32 2.818v.314h-7.68v2.567h2.396v7.583c0 1.04.234 1.877.7 2.511.468.636 1.105.954 1.913.954.867 0 1.615-.312 2.245-.937.628-.623.94-1.375.94-2.255 0-.82-.286-1.523-.858-2.106-.574-.584-1.26-.876-2.056-.876-.558 0-1.07.17-1.538.512v-5.386h6.558a17.66 17.66 0 0 1-.19 2.59c-.154 1.176-.413 2.017-.778 2.527-.37.512-.85.769-1.44.769-.442 0-.844-.14-1.205-.42-.36-.283-.578-.63-.65-1.045h-2.61c.107.976.527 1.766 1.262 2.37.734.604 1.656.906 2.766.906 1.393 0 2.518-.483 3.378-1.449.858-.966 1.287-2.27 1.287-3.91V5.29h1.98V2.725h-1.98V1.96c0-.564.1-.99.303-1.278.2-.286.512-.43.938-.43h.86V0h-.716zm-12.6 1.07C3.12 1.07 1.07 3.12 1.07 5.886c0 2.766 2.05 4.816 5.916 4.816h.586V8.235h-.586c-2.258 0-3.35-.78-3.35-2.35 0-1.565 1.092-2.348 3.35-2.348 2.26 0 3.353.783 3.353 2.348v.21h2.566v-.21c0-2.766-2.052-4.816-5.92-4.816z" />
      </svg>
    ),
  },
  {
    label: 'ORCID',
    href: 'https://orcid.org/0000-0003-1315-5573',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zM7.369 4.378c.525 0 .947.431.947.947s-.422.947-.947.947a.95.95 0 0 1-.947-.947c0-.525.422-.947.947-.947zm-.722 3.038h1.444v10.041H6.647V7.416zm3.562 0h3.9c3.712 0 5.344 2.653 5.344 5.025 0 2.578-2.016 5.016-5.325 5.016h-3.919V7.416zm1.444 1.303v7.444h2.297c3.272 0 3.872-2.412 3.872-3.722 0-2.016-1.284-3.722-3.588-3.722h-2.581z" />
      </svg>
    ),
  },
  {
    label: 'PubMed',
    href: 'https://pubmed.ncbi.nlm.nih.gov/?term=andrea+zignoli',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15H9V8h2v9zm4 0h-2V8h2v9z" />
      </svg>
    ),
  },
  {
    label: 'Twitter',
    href: 'https://twitter.com/andrea_zignoli',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
]

export function Footer() {
  return (
    <footer className="border-t border-white/[0.06] py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-6">
        <div className="flex flex-wrap justify-center gap-4">
          {socialLinks.map(({ label, href, icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('mailto') ? undefined : '_blank'}
              rel="noopener noreferrer"
              aria-label={label}
              className="flex items-center gap-2 text-white/40 hover:text-accent transition-colors text-sm"
            >
              {icon}
              <span className="hidden sm:inline">{label}</span>
            </a>
          ))}
        </div>
        <p className="text-white/25 text-xs text-center">
          © {new Date().getFullYear()} Andrea Zignoli · AI Sport Tech Consultant · Verona, Italy
        </p>
      </div>
    </footer>
  )
}
