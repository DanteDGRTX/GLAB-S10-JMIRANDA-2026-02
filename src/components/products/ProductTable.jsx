import { PackageSearch } from 'lucide-react'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../ui/table'

export function ProductTable({ products }) {
  return (
    <div className="overflow-x-auto">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Código</TableHead>
            <TableHead>Descripción</TableHead>
            <TableHead>Categoría</TableHead>
            <TableHead className="text-right">Precio</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {products.length ? (
            products.map((product) => (
              <TableRow key={product.codigo}>
                <TableCell className="font-mono text-xs font-semibold text-slate-500">
                  {product.codigo}
                </TableCell>
                <TableCell className="min-w-48 font-semibold text-ink">
                  {product.descripcion}
                </TableCell>
                <TableCell>
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
                    {product.categoria}
                  </span>
                </TableCell>
                <TableCell className="text-right font-semibold tabular-nums text-ink">
                  S/ {Number(product.precio).toFixed(2)}
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan="4" className="py-14 text-center">
                <PackageSearch className="mx-auto mb-3 text-slate-300" size={30} />
                <p className="font-medium text-slate-500">
                  Aún no hay productos registrados.
                </p>
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  )
}
