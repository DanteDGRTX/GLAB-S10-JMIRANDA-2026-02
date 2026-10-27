export function Table({ className = '', ...props }) { return <table className={`w-full caption-bottom text-sm ${className}`} {...props} /> }
export function TableHeader({ className = '', ...props }) { return <thead className={`[&_tr]:border-b [&_tr]:border-line ${className}`} {...props} /> }
export function TableBody({ className = '', ...props }) { return <tbody className={`[&_tr:last-child]:border-0 ${className}`} {...props} /> }
export function TableRow({ className = '', ...props }) { return <tr className={`border-b border-line transition-colors hover:bg-slate-50/70 ${className}`} {...props} /> }
export function TableHead({ className = '', ...props }) { return <th className={`h-12 px-5 text-left align-middle text-[11px] font-bold uppercase tracking-[.12em] text-slate-500 ${className}`} {...props} /> }
export function TableCell({ className = '', ...props }) { return <td className={`px-5 py-4 align-middle ${className}`} {...props} /> }
