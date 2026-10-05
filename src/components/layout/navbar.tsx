'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { ThemeToggle } from './theme-toggle'

const navLinks = [
  { href: '/publications', label: 'Publications' },
  { href: '/blog', label: 'Blog' },
  { href: '/cv', label: 'CV' },
]

export function Navbar() {
  const pathname = usePathname()

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass border-b border-foreground/[0.06]">
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="font-mono text-sm font-semibold tracking-tight text-foreground hover:text-accent transition-colors">
          andrea<span className="gradient-text">zignoli</span>
        </Link>
        <div className="flex items-center gap-3 md:gap-1">
          <ul className="hidden md:flex items-center gap-1">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className={cn(
                    'px-3 py-1.5 rounded-md text-sm transition-colors',
                    pathname === href
                      ? 'text-accent bg-accent/10'
                      : 'text-foreground/60 hover:text-foreground hover:bg-foreground/[0.06]',
                  )}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
          {/* Mobile: show initials + hamburger concept — simplified to just links */}
          <div className="flex md:hidden gap-3">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={cn(
                  'text-xs transition-colors',
                  pathname === href ? 'text-accent' : 'text-foreground/50 hover:text-foreground',
                )}
              >
                {label}
              </Link>
            ))}
          </div>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  )
}
