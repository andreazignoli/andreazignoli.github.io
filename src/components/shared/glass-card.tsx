import { cn } from '@/lib/utils'

interface GlassCardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
}

export function GlassCard({ children, className, hover = true }: GlassCardProps) {
  return (
    <div
      className={cn(
        'glass rounded-xl p-6',
        hover && 'transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.07] hover:border-white/[0.14]',
        className,
      )}
    >
      {children}
    </div>
  )
}
