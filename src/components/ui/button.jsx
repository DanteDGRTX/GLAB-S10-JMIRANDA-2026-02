import { cn } from '../../lib/utils'

export function Button({ variant = 'default', size = 'default', className, ...props }) {
  const variants = { default: 'bg-accent text-white shadow-sm hover:bg-[#4357d5]', outline: 'border border-line bg-white text-ink hover:bg-slate-50', ghost: 'text-muted hover:bg-slate-100' }
  const sizes = { default: 'h-11 px-5', icon: 'h-10 w-10' }
  return <button className={cn('inline-flex items-center justify-center gap-2 rounded-xl text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-indigo-100 disabled:pointer-events-none disabled:opacity-50', variants[variant], sizes[size], className)} {...props} />
}
