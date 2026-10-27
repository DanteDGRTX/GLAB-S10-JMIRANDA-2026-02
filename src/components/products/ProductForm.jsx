import { Plus, RotateCcw } from 'lucide-react'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { Label } from '../ui/label'

export function ProductForm({ values, errors, onChange, onSubmit, onClear }) {
  return <form onSubmit={onSubmit} noValidate className="space-y-5">
    <div className="space-y-2"><Label htmlFor="descripcion">Descripción del producto</Label><Input id="descripcion" name="descripcion" placeholder="Ej. Teclado mecánico" value={values.descripcion} onChange={onChange} aria-invalid={Boolean(errors.descripcion)} aria-describedby={errors.descripcion ? 'error-descripcion' : undefined} />{errors.descripcion && <p id="error-descripcion" className="text-xs font-medium text-rose-600">{errors.descripcion}</p>}</div>
    <div className="grid gap-5 sm:grid-cols-2">
      <div className="space-y-2"><Label htmlFor="precio">Precio de venta</Label><div className="relative"><span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-sm text-slate-400">S/</span><Input className="pl-10" id="precio" name="precio" type="number" min="0.01" step="0.01" placeholder="0.00" value={values.precio} onChange={onChange} aria-invalid={Boolean(errors.precio)} aria-describedby={errors.precio ? 'error-precio' : undefined} /></div>{errors.precio && <p id="error-precio" className="text-xs font-medium text-rose-600">{errors.precio}</p>}</div>
      <div className="space-y-2"><Label htmlFor="categoria">Categoría</Label><Input id="categoria" name="categoria" placeholder="Ej. Accesorios" value={values.categoria} onChange={onChange} aria-invalid={Boolean(errors.categoria)} aria-describedby={errors.categoria ? 'error-categoria' : undefined} />{errors.categoria && <p id="error-categoria" className="text-xs font-medium text-rose-600">{errors.categoria}</p>}</div>
    </div>
    <div className="flex flex-col gap-3 border-t border-line pt-5 sm:flex-row"><Button type="submit" className="sm:flex-1"><Plus size={17} strokeWidth={2.5} />Registrar producto</Button><Button type="button" variant="outline" onClick={onClear}><RotateCcw size={16} />Limpiar</Button></div>
  </form>
}
