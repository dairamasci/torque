'use client';

import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { RowActions } from './row-actions';
import { Input } from '@/components/ui/input';
import { NewCustomer } from './new-customer';

type Row = {
  name: string;
  surname: string;
  telephone: string | number;
  address: string;
  email?: string;
  vehiclesBrands: string[];
  createdAt: Date;
};

const data: Row[] = [
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

export const CustomersTable = () => {
  return (
    <>
      <div className="flex gap-4 items-center justify-end mb-4">
        <Input placeholder="Filtrar por nombre..." value={''} onChange={() => {}} className="max-w-sm" />
        <NewCustomer />
      </div>
      <Card className="relative px-8 shadow-lg ring-1 ring-black/5 dark:bg-neutral-900/30">
        <Table>
          <TableCaption>Aquí ves listados los clientes registrados en el sistema.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Nombre y apellido</TableHead>
              <TableHead>Teléfono</TableHead>
              <TableHead>Dirección</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Vehículos asignados</TableHead>
              <TableHead>Fecha de alta</TableHead>
              <TableHead></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="max-h-[20px]">
            {data.map((row) => (
              <TableRow key={row.name} className="hover:bg-[var(--foreground)]/10">
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
      </Card>
    </>
  );
};
