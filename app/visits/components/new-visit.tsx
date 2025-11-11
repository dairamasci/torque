'use client';

import * as React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';
import { X } from 'lucide-react';
import { Combobox } from '@/components/combobox';

type NewVisitProps = {
  onClose: () => void;
};

export const NewVisit = ({ onClose }: NewVisitProps) => {
  return (
    // <div className="flex justify-end">
    <Card className="relative h-full w-full shadow-lg ring-1 ring-black/5 dark:bg-neutral-900/30">
      <div className="relative flex flex-col h-full px-4 space-y-4">
        <Button variant="ghost" size="icon" className="absolute right-3" onClick={onClose}>
          <X className="h-5 w-5" />
        </Button>
        <form>
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl font-semibold flex items-center gap-2">Crear nueva visita</h1>
            <p className="text-sm text-muted-foreground">
              Ingresar a continuación los datos del vehículo y el detalle de la visita.
            </p>
          </div>

          <div className="grid gap-4">
            <div className="flex flex-row gap-4">
              <div className="grid gap-1">
                <Label htmlFor="date">Fecha</Label>
                <Input id="date" name="date" />
              </div>
              <Combobox />
              {/* dropdown de selección de cliente */}
              <div className="grid gap-1">
                <Label htmlFor="client">Cliente</Label>
                <Input id="client" name="client" />
              </div>
              <div className="grid gap-1">
                <Label htmlFor="plate">Patente</Label>
                <Input id="plate" name="plate" />
              </div>
            </div>

            <div className="flex flex-row gap-4">
              <div className="grid gap-1">
                <Label htmlFor="manufactureYear">Año</Label>
                <Input id="manufactureYear" name="manufactureYear" />
              </div>
              <div className="grid gap-1">
                <Label htmlFor="brand">Marca</Label>
                <Input id="brand" name="brand" />
              </div>
              <div className="grid gap-1">
                <Label htmlFor="model">Modelo</Label>
                <Input id="model" name="model" />
              </div>
              <div className="grid gap-1">
                <Label htmlFor="chasisCode">Número de chásis</Label>
                <Input id="chasisCode" name="chasisCode" />
              </div>
              <div className="grid gap-1">
                <Label htmlFor="motorCode">Número de motor</Label>
                <Input id="motorCode" name="motorCode" />
              </div>
            </div>

            <div className="flex flex-row gap-4">
              <div className="grid gap-1">
                <Label htmlFor="kmLastVisit">Kilometraje</Label>
                <Input id="kmLastVisit" name="kmLastVisit" />
              </div>
              <div className="grid gap-1">
                <Label htmlFor="dateNextVisit">Próxima visita</Label>
                <Input id="dateNextVisit" name="dateNextVisit" />
              </div>
            </div>

            <div className="flex flex-row gap-4">
              <div className="grid gap-1">
                <Label htmlFor="description">Descripción</Label>
                <Textarea id="description" name="description" />
              </div>
            </div>

            <div className="flex flex-row gap-4">
              <div className="grid gap-1">
                <Label htmlFor="laborPrice">Precio mano de obra</Label>
                <Input id="laborPrice" name="laborPrice" />
              </div>
              <div className="grid gap-1">
                <Label htmlFor="partsPrice">Precio repuestos</Label>
                <Input id="partsPrice" name="partsPrice" />
              </div>
              <div className="grid gap-1">
                <Label htmlFor="total">Total</Label>
                <Input id="total" name="total" disabled />
              </div>
            </div>

            <div className="flex flex-row gap-4">
              <div className="grid gap-1">
                <Label htmlFor="alertComment">Comentario a destacar</Label>
                <Input id="alertComment" name="alertComment" />
              </div>
            </div>
          </div>
          <div>
            <Button variant="outline" onClick={onClose}>
              Cancelar
            </Button>

            <Button type="submit" onClick={onClose}>
              Guardar
            </Button>
          </div>
        </form>
      </div>
    </Card>
  );
};
