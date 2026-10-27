# Gestión de productos

Prototipo académico para consultar y registrar productos en memoria. Está construido con React, Vite y Tailwind CSS; los controles reutilizables de `src/components/ui` siguen el enfoque de componentes locales de shadcn/ui.

## Requisitos

- Node.js 20.19+ o 22.12+
- npm

## Iniciar en desarrollo

```bash
npm install
npm run dev
```

Vite mostrará la dirección local para abrir en el navegador.

## Compilar

```bash
npm run build
npm run preview
```

## Estructura principal

- `src/App.jsx`: estado, productos iniciales, validación, generación de códigos y eventos.
- `src/components/products/ProductForm.jsx`: formulario de registro.
- `src/components/products/ProductTable.jsx`: listado accesible del catálogo.
- `src/components/ui/`: Button, Input, Label, Card y Table reutilizables.

Los cambios se guardan solo en el estado de React durante la sesión y se pierden al recargar. Esta versión no consume el backend Django del otro ejercicio.
