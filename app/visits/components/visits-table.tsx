'use client';
import { RowActions } from '@/app/customers/components/row-actions';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { TableCaption, TableHeader, TableRow, TableHead, TableBody, TableCell, Table } from '@/components/ui/table';
import { TriangleAlert } from 'lucide-react';
import { NewVisit } from './new-visit';
import { Button } from '@/components/ui/button';

const data = [
  {
    date: new Date(),
    plate: 'AB123CD',
    brand: 'Ford',
    model: 'Focus',
    manufactureYear: 2020,
    clientName: 'Dwayne',
    km: 120340,
    description: 'Cambio de aceite y filtros',
    dateNextVisit: new Date(),
    laborPrice: 18000,
    partsPrice: 22000,
    alertComment: 'Recordar revisar frenos la próxima visita',
  },
  {
    date: new Date(),
    plate: 'AC567GH',
    brand: 'Renault',
    model: 'Clio',
    manufactureYear: 2019,
    clientName: 'Meryl',
    km: 88000,
    description: 'Cambio de pastillas y diagnóstico con scanner',
    dateNextVisit: new Date(),
    laborPrice: 15000,
    partsPrice: 10000,
    alertComment: 'Revisión en 5000 km',
  },
];

type VisitsTableProps = {
  onNewVisit: (open: boolean) => void;
};

export const VisitsTable = ({ onNewVisit }: VisitsTableProps) => {
  return (
    <>
      <div className="flex gap-4 items-center justify-end mb-4">
        <Input
          placeholder="Filtrar por patente, marca, modelo o cliente..."
          value={''}
          onChange={() => {}}
          className="max-w-sm"
        />
        <Button variant="outline" onClick={() => onNewVisit(true)}>
          Nueva visita
        </Button>
      </div>
      <Card className="relative px-8">
        <Table>
          <TableCaption>Aquí ves listados los vehículos registrados en el sistema.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Fecha</TableHead>
              <TableHead>Marca/Modelo</TableHead>
              {/* <TableHead>Modelo</TableHead> */}
              <TableHead>Año</TableHead>
              <TableHead>Cliente</TableHead>
              <TableHead>Patente</TableHead>
              <TableHead>Kilometraje</TableHead>
              <TableHead className="max-w-10">Detalle</TableHead>
              {/* <TableHead>Mano de obra</TableHead> */}
              {/* <TableHead>Repuestos</TableHead> */}
              {/* <TableHead>Total</TableHead> */}
              <TableHead>Próx. visita</TableHead>
              <TableHead>Notas</TableHead>
              <TableHead></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="max-h-[20px]">
            {data.map((row) => (
              <TableRow key={row.plate} className="hover:bg-[var(--foreground)]/10">
                <TableCell>{row.date.toLocaleDateString('es-ES')}</TableCell>
                <TableCell>{row.brand + ' / ' + row.model}</TableCell>
                {/* <TableCell>{row.model}</TableCell> */}
                <TableCell>{row.manufactureYear}</TableCell>
                <TableCell>{row.clientName}</TableCell>
                <TableCell>{row.plate}</TableCell>
                <TableCell>{row.km}</TableCell>
                <TableCell className="max-w-40 whitespace-normal break-words">{row.description}</TableCell>

                {/* <TableCell>{row.laborPrice}</TableCell> */}
                {/* <TableCell>{row.partsPrice}</TableCell> */}
                {/* <TableCell>{row.partsPrice + row.laborPrice}</TableCell> */}
                <TableCell>{row.dateNextVisit.toLocaleDateString('es-ES')}</TableCell>
                <TableCell className="max-w-40 whitespace-normal break-words">{row.alertComment}</TableCell>
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
