'use client';

import { EmptyState } from '@/components/empty-state';
import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { CircleEllipsis } from 'lucide-react';
import { RowActions } from './components/row-actions';
// - Crear clientes nuevos
// - Modificar y eliminar clientes
// - Listar clientes
// - Tener n autos asignados

type Row = {
  name: string;
  surname: string;
  telephone: string | number;
  address: string;
  email?: string;
  vehiclesBrands: string[];
  createdAt: Date;
};

const rows: Row[] = [
  {
    name: 'Dwayne',
    surname: 'Johnson',
    telephone: '600-956-092',
    address: 'False st. 123',
    email: 'djhns@gmail.com',
    vehiclesBrands: ['Toyota', 'Ford'],
    createdAt: new Date(),
  },
  {
    name: 'Meryl',
    surname: 'Streep',
    telephone: '600-111-222',
    address: 'Prada st. 3323',
    email: 'meryl@gmail.com',
    vehiclesBrands: ['Renault', 'Volkswagen'],
    createdAt: new Date(),
  },
  {
    name: 'Richard',
    surname: 'Gere',
    telephone: '600-847-243',
    address: 'Ricardone av. 5443',
    // email: 'rich.gere@hotmail.com',
    vehiclesBrands: ['Audi', 'Ford'],
    createdAt: new Date(),
  },
  {
    name: 'Angelina',
    surname: 'Jolie',
    telephone: '600-134-876',
    address: 'Kirg av. 1345',
    email: 'angie.j@gmail.com',
    vehiclesBrands: ['Toyota', 'Bentley'],
    createdAt: new Date(),
  },
];

export default function CustomersPage() {
  return (
    <section className="space-y-4 flex flex-col gap-6">
      <h1 className="text-2xl font-semibold">Clientes</h1>
      <Table className="w-1/2">
        <TableCaption>
          Aquí ves listados los clientes registrados en el sistema.
        </TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Nombre y apellido</TableHead>
            <TableHead>Teléfono</TableHead>
            <TableHead>Dirección</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Vehículos asignados</TableHead>
            <TableHead>Fecha de alta</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="max-h-[20px]">
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell>
                {row.name} {row.surname}
              </TableCell>
              <TableCell>{row.telephone}</TableCell>
              <TableCell>{row.address}</TableCell>
              <TableCell>{row.email ?? '-'}</TableCell>
              <TableCell>{row.vehiclesBrands.join(', ')}</TableCell>
              <TableCell>{row.createdAt.toLocaleDateString('es-ES')}</TableCell>
              <TableCell>
                <RowActions />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </section>
  );
}
