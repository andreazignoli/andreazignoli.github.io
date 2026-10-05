'use client'

import { useEffect, useState } from 'react'
import { Moon, Sun } from 'lucide-react'
import { cn } from '@/lib/utils'

type Theme = 'light' | 'dark'

export const THEME_STORAGE_KEY = 'theme'

// Runs in <head> before paint so a stored or OS-preferred theme never flashes the wrong palette
export const themeInitScript = `(function(){try{var t=localStorage.getItem('${THEME_STORAGE_KEY}');if(t!=='light'&&t!=='dark'){t=window.matchMedia('(prefers-color-scheme: light)').matches?'light':'dark'}document.documentElement.setAttribute('data-theme',t)}catch(e){}})()`

export function ThemeToggle({ className }: { className?: string }) {
  const [theme, setTheme] = useState<Theme | null>(null)

  useEffect(() => {
    const current = document.documentElement.getAttribute('data-theme')
    setTheme(current === 'light' ? 'light' : 'dark')
  }, [])

  const toggle = () => {
    const next: Theme = theme === 'light' ? 'dark' : 'light'
    document.documentElement.setAttribute('data-theme', next)
    try {
      localStorage.setItem(THEME_STORAGE_KEY, next)
    } catch {}
    setTheme(next)
  }

  const label = theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={label}
      title={label}
      className={cn(
        'w-8 h-8 flex items-center justify-center rounded-md text-foreground/60 hover:text-foreground hover:bg-foreground/[0.06] transition-colors',
        className,
      )}
    >
      {/* Render nothing until mounted: the server can't know the visitor's theme */}
      {theme === 'light' ? <Moon size={16} /> : theme === 'dark' ? <Sun size={16} /> : null}
    </button>
  )
}
