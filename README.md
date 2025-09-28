This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Requerimientos

Deberá:

Clientes:

- Crear clientes nuevos
- Modificar y eliminar clientes
- Listar clientes
- Tener n autos asignados

Autos:

- Crear auto nuevo
- Modificar y eliminar auto
- Listar autos
- Asignar auto a cliente

Visitas:

- Crear registro nuevo de visita de auto
- Modificar y eliminar registro de visita
- Listar visitas por auto
- Asignar visita a un auto

Citas:

- Crear modificar y eliminar citas
- Agregar breve descripcion a la cita
- Ver listado y calendario con citas proximas y previas

Datos necesarios:

Clientes:
Nombre, Apellido, teléfonos, dirección, email?, N autos

Autos:
Patente, nro de chasis, nro de motor, kilometraje ultima revision, fecha de ultima visita,
cliente asignado, marca, modelo, año de fabricación, cosas del escaner?

Visita:
Fecha, patente, cliente, descripción, cambio de aceite, cambio de filtros, cambio de pastillas,
codigos de error de scanner, kilometraje, fecha aproximada de proxima visita,
precio de mano de obra, precio de repuestos, notas sobre repuesto, notas sobre mano de obra,
mecánico que atendió

Citas:
Fecha, hora, cliente, patente, descripcion del problema, recordatorio s/n, mecánico que hará el trabajo
