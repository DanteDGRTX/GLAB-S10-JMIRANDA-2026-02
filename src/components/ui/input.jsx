import { cn } from '../../lib/utils'
export function Input({ className, ...props }) { return <input className={cn('flex h-11 w-full rounded-xl border border-line bg-white px-3.5 text-sm text-ink placeholder:text-slate-400 shadow-sm outline-none transition focus:border-accent focus:ring-4 focus:ring-indigo-100 disabled:cursor-not-allowed disabled:opacity-50', className)} {...props} /> }
