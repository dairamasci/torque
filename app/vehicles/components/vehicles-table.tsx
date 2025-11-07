'use client';

import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Input } from '@/components/ui/input';
import { RowActions } from '@/app/customers/components/row-actions';
import { NewVehicle } from './new-vehicle';
import { FolderOpen } from 'lucide-react';
import { Card } from '@/components/ui/card';

type Row = {
  plate: string;
  chasisCode: string;
  motorCode: string | number;
  kmLastVisit: string;
  dateLastVisit?: Date | null;
  clientName: string;
  brand: string;
  model: string;
  manufactureYear: number;
};

const data: Row[] = [
  {
    plate: 'ABC123',
    chasisCode: 'XYZ987654321',
    motorCode: 'MTR456789',
    kmLastVisit: '15000',
    dateLastVisit: new Date('2023-05-10'),
    clientName: 'Meryl',
    brand: 'Renault',
    model: 'Clio',
    manufactureYear: 2019,
  },
  {
    plate: 'DEF456',
    chasisCode: 'UVW123456789',
    motorCode: 'MTR123456',
    kmLastVisit: '30000',
    clientName: 'Leonardo',
    brand: 'Toyota',
    model: 'Corolla',
    manufactureYear: 2018,
  },
  {
    plate: 'GHI789',
    chasisCode: 'RST987654321',
    motorCode: 'MTR789012',
    kmLastVisit: '45000',
    dateLastVisit: new Date('2023-07-20'),
    clientName: 'Sophia',
    brand: 'Ford',
    model: 'Focus',
    manufactureYear: 2020,
  },
];

type VehiclesTableProps = {
  onSelectVehicle?: (plate: string) => void;
};

export const VehiclesTable = ({ onSelectVehicle }: VehiclesTableProps) => {
  return (
    <>
      <div className="flex gap-4 items-center justify-end mb-4">
        <Input
          placeholder="Filtrar por patente, marca, modelo o cliente..."
          value={''}
          onChange={() => {}}
          className="max-w-sm"
        />
        <NewVehicle />
      </div>
      <Card className="relative px-8 shadow-lg ring-1 ring-black/5 dark:bg-neutral-900/30">
        <Table>
          <TableCaption>Aquí ves listados los vehículos registrados en el sistema.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Marca</TableHead>
              <TableHead>Modelo</TableHead>
              <TableHead>Año</TableHead>
              <TableHead>Cliente</TableHead>
              <TableHead>Patente</TableHead>
              <TableHead>Última visita</TableHead>
              <TableHead>Detalle última visita</TableHead>
              <TableHead></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="max-h-[20px]">
            {data.map((row) => (
              <TableRow key={row.plate} className="hover:bg-[var(--torque-accent-hover)]/10">
                <TableCell>{row.brand}</TableCell>
                <TableCell>{row.model}</TableCell>
                <TableCell>{row.manufactureYear}</TableCell>
                <TableCell>{row.clientName}</TableCell>
                <TableCell>{row.plate}</TableCell>
                <TableCell>{row.dateLastVisit?.toLocaleDateString('es-ES') ?? '-'}</TableCell>
                <TableCell>
                  <button
                    className="flex flex-row gap-2 items-center text-primary hover:underline"
                    onClick={() => onSelectVehicle?.(row.plate)}
                  >
                    <FolderOpen className="w-5 h-5" />
                    Ver ficha rápida
                  </button>
                </TableCell>
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
