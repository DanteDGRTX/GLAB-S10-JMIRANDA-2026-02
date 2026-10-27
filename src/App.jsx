import { useState } from 'react'
import { Boxes, CheckCircle2, ClipboardList, PackagePlus, Sparkles } from 'lucide-react'
import { Card, CardContent, CardHeader } from './components/ui/card'
import { ProductForm } from './components/products/ProductForm'
import { ProductTable } from './components/products/ProductTable'

const INITIAL_PRODUCTS = [
  { codigo: 'PRD-001', descripcion: 'Café molido premium', precio: 28.9, categoria: 'Alimentos' },
  { codigo: 'PRD-002', descripcion: 'Botella térmica 750 ml', precio: 42.5, categoria: 'Hogar' },
  { codigo: 'PRD-003', descripcion: 'Audífonos inalámbricos', precio: 119.9, categoria: 'Tecnología' },
  { codigo: 'PRD-004', descripcion: 'Cuaderno de tapa dura', precio: 16.0, categoria: 'Papelería' },
  { codigo: 'PRD-005', descripcion: 'Lámpara de escritorio LED', precio: 64.9, categoria: 'Hogar' },
]
const EMPTY_FORM = { descripcion: '', precio: '', categoria: '' }

function nextCode(products) {
  const used = new Set(products.map((product) => product.codigo))
  let number = products.length + 1
  while (used.has(`PRD-${String(number).padStart(3, '0')}`)) {
    number += 1
  }
  return `PRD-${String(number).padStart(3, '0')}`
}

export default function App() {
  const [products, setProducts] = useState(INITIAL_PRODUCTS)
  const [values, setValues] = useState(EMPTY_FORM)
  const [errors, setErrors] = useState({})
  const [notice, setNotice] = useState('')

  function handleChange(event) {
    const { name, value } = event.target
    setValues((current) => ({ ...current, [name]: value }))
    setErrors((current) => ({ ...current, [name]: '' }))
    setNotice('')
  }

  function handleClear() {
    setValues(EMPTY_FORM)
    setErrors({})
    setNotice('')
  }

  function handleSubmit(event) {
    event.preventDefault()
    const nextErrors = {}
    const descripcion = values.descripcion.trim()
    const categoria = values.categoria.trim()
    const precio = Number(values.precio)
    if (!descripcion) {
      nextErrors.descripcion = 'Ingresa la descripción del producto.'
    } else if (descripcion.length < 3) {
      nextErrors.descripcion = 'La descripción debe tener al menos 3 caracteres.'
    }

    if (values.precio === '') {
      nextErrors.precio = 'Ingresa el precio de venta.'
    } else if (!Number.isFinite(precio) || precio <= 0) {
      nextErrors.precio = 'El precio debe ser un número mayor que cero.'
    }

    if (!categoria) {
      nextErrors.categoria = 'Ingresa la categoría del producto.'
    }

    setErrors(nextErrors)
    if (Object.keys(nextErrors).length) {
      setNotice('')
      return
    }

    const product = {
      codigo: nextCode(products),
      descripcion,
      precio,
      categoria,
    }
    setProducts((current) => [...current, product])
    setValues(EMPTY_FORM)
    setNotice(`Producto ${product.codigo} registrado correctamente.`)
  }

  return <main className="min-h-screen px-4 py-8 sm:px-8 sm:py-12">
    <div className="mx-auto max-w-6xl">
      <header className="mb-9 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
        <div><div className="mb-3 inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-white px-3 py-1.5 text-xs font-semibold text-indigo-700 shadow-sm"><Sparkles size={14} />Panel de inventario</div><h1 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">Gestión de productos</h1><p className="mt-2 max-w-xl text-sm leading-6 text-muted sm:text-base">Administra el catálogo y registra productos en un solo lugar.</p></div>
        <div className="flex w-fit items-center gap-2 rounded-xl border border-line bg-white px-3.5 py-2.5 text-xs font-medium text-slate-500 shadow-sm"><span className="h-2 w-2 rounded-full bg-emerald-500" />Modo demostración · datos temporales</div>
      </header>

      <div className="mb-6 grid gap-4 sm:grid-cols-3">
        <div className="flex items-center gap-4 rounded-2xl border border-line bg-white p-5 shadow-soft"><div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600"><Boxes size={21} /></div><div><p className="text-xs font-medium text-muted">Productos en catálogo</p><p className="mt-0.5 text-2xl font-bold text-ink">{products.length}</p></div></div>
        <div className="flex items-center gap-4 rounded-2xl border border-line bg-white p-5 shadow-soft"><div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600"><ClipboardList size={21} /></div><div><p className="text-xs font-medium text-muted">Categorías</p><p className="mt-0.5 text-2xl font-bold text-ink">{new Set(products.map((item) => item.categoria)).size}</p></div></div>
        <div className="flex items-center gap-4 rounded-2xl border border-line bg-white p-5 shadow-soft"><div className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-50 text-amber-600"><PackagePlus size={21} /></div><div><p className="text-xs font-medium text-muted">Tipo de almacenamiento</p><p className="mt-1 text-sm font-bold text-ink">Solo durante esta sesión</p></div></div>
      </div>

      <div className="grid items-start gap-6 lg:grid-cols-[.88fr_1.55fr]">
        <Card><CardHeader><div className="flex items-start gap-3"><div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-accent"><PackagePlus size={19} /></div><div><h2 className="text-lg font-bold text-ink">Registrar producto</h2><p className="mt-1 text-sm text-muted">Completa los datos para añadirlo al catálogo.</p></div></div></CardHeader><CardContent>
          {notice && <div role="status" className="mb-5 flex items-center gap-2 rounded-xl border border-emerald-200 bg-emerald-50 px-3.5 py-3 text-sm font-medium text-emerald-800"><CheckCircle2 size={17} />{notice}</div>}
          {Object.keys(errors).length > 0 && <div role="alert" className="mb-5 rounded-xl border border-rose-200 bg-rose-50 px-3.5 py-3 text-sm font-medium text-rose-700">Revisa los campos señalados antes de continuar.</div>}
          <ProductForm values={values} errors={errors} onChange={handleChange} onSubmit={handleSubmit} onClear={handleClear} />
        </CardContent></Card>

        <Card><CardHeader><div className="flex flex-wrap items-center justify-between gap-3"><div><h2 className="text-lg font-bold text-ink">Catálogo de productos</h2><p className="mt-1 text-sm text-muted">Listado actualizado automáticamente al registrar.</p></div><span className="rounded-full bg-indigo-50 px-3 py-1.5 text-xs font-bold text-indigo-700">{products.length} registros</span></div></CardHeader><CardContent className="px-0 pt-0"><ProductTable products={products} /></CardContent></Card>
      </div>
      <footer className="mt-8 text-center text-xs text-slate-400">Prototipo académico · Los cambios se mantienen solo mientras la página está abierta.</footer>
    </div>
  </main>
}
