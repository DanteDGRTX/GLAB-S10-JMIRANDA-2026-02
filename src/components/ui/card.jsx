export function Card({ className = '', ...props }) { return <section className={`rounded-2xl border border-line bg-white shadow-soft ${className}`} {...props} /> }
export function CardHeader({ className = '', ...props }) { return <div className={`p-6 pb-4 ${className}`} {...props} /> }
export function CardContent({ className = '', ...props }) { return <div className={`p-6 pt-2 ${className}`} {...props} /> }
