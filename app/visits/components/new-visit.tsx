'use client';

import * as React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';
import { Combobox } from '@/components/combobox';
import { DatePicker } from '@/components/date-picker';
import { CloseButton } from '@/components/close-button';

type NewVisitProps = {
  onClose: () => void;
};

type OptionsType = {
  value: string;
  label: string;
};

const clientes: OptionsType[] = [
  { value: 'Dwayne Johnson', label: 'Dwayne Johnson' },
  { value: 'Meryl Streep', label: 'Meryl Streep' },
  { value: 'Richard Gere', label: 'Richard Gere' },
  { value: 'Angelina Jolie', label: 'Angelina Jolie' },
];

export const NewVisit = ({ onClose }: NewVisitProps) => {

const [laborPrice, setLaborPrice] = React.useState('');
const [partsPrice, setPartsPrice] = React.useState('');


  return (
    <Card className="relative h-full w-full shadow-lg ring-1 ring-black/5 dark:bg-neutral-900/30">
      <CloseButton 
        onClick={onClose}
        className="absolute right-4 top-4"
      />
      <div className="flex flex-col h-full px-10 space-y-4">
        <header className="flex flex-col gap-2 pr-10">
          <h1 className="flex items-center gap-2 text-2xl font-semibold tracking-tight">
            Crear nueva visita
          </h1>
          <p className="w-full text-sm text-muted-foreground">
            Completa los datos del cliente, del vehículo y de la visita. Esta información
            te ayudará a hacer seguimiento de trabajos y próximas revisiones.
          </p>
        </header>

        <form className="flex flex-1 flex-col gap-6">
          {/* Datos generales */}
          <section className="space-y-3">
            <h2 className="text-sm font-semibold text-muted-foreground">Datos generales</h2>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <div className="grid gap-1.5">
                <Label htmlFor="date">Fecha</Label>
                <DatePicker placeholder="Elige una fecha" />
              </div>

              <div className="grid gap-1.5">
                <Combobox
                  options={clientes}
                  label="Cliente"
                  placeholder="Elige un cliente"
                />
              </div>

              <div className="grid gap-1.5">
                <Label htmlFor="plate">Patente</Label>
                <Input id="plate" name="plate" placeholder="ABC 123" />
              </div>

              <div className="grid gap-1.5">
                <Label htmlFor="manufactureYear">Año</Label>
                <Input id="manufactureYear" name="manufactureYear" placeholder="2015" />
              </div>
            </div>
          </section>

          {/* Datos del vehículo */}
          <section className="space-y-3">
            <h2 className="text-sm font-semibold text-muted-foreground">Datos del vehículo</h2>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <div className="grid gap-1.5">
                <Label htmlFor="brand">Marca</Label>
                <Input id="brand" name="brand" placeholder="Volkswagen" />
              </div>
              <div className="grid gap-1.5">
                <Label htmlFor="model">Modelo</Label>
                <Input id="model" name="model" placeholder="Golf VII" />
              </div>
              <div className="grid gap-1.5">
                <Label htmlFor="chasisCode">Número de chasis</Label>
                <Input id="chasisCode" name="chasisCode" placeholder="WVWZZZ..." />
              </div>
              <div className="grid gap-1.5">
                <Label htmlFor="motorCode">Número de motor</Label>
                <Input id="motorCode" name="motorCode" placeholder="CXX123456" />
              </div>
            </div>
          </section>

          {/* Visita */}
          <section className="space-y-3">
            <h2 className="text-sm font-semibold text-muted-foreground">Visita</h2>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="grid gap-1.5">
                <Label htmlFor="kmLastVisit">Kilometraje</Label>
                <Input
                  id="kmLastVisit"
                  name="kmLastVisit"
                  placeholder="Ej: 145.300"
                />
              </div>
              <div className="grid gap-1.5">
                <Label htmlFor="dateNextVisit">Próxima visita</Label>
                <Input
                  id="dateNextVisit"
                  name="dateNextVisit"
                  placeholder="Ej: 6 meses / 10.000 km"
                />
              </div>
            </div>

            <div className="grid gap-1.5">
              <Label htmlFor="description">Descripción del trabajo</Label>
              <Textarea
                id="description"
                name="description"
                placeholder="Describe brevemente la intervención, ruidos, fallos reportados por el cliente, etc."
                className="min-h-[96px] resize-y"
              />
            </div>
          </section>

          {/* Costes */}
          <section className="space-y-3">
            <h2 className="text-sm font-semibold text-muted-foreground">Costes</h2>
            <div className="grid gap-4 md:grid-cols-3">
              <div className="grid gap-1.5">
                <Label htmlFor="laborPrice">Precio mano de obra</Label>
                <Input id="laborPrice" name="laborPrice" placeholder="$ 0,00"  value={laborPrice ? `$ ${laborPrice}` : ""}
  onChange={(e) => {
    // Quitamos todo lo que no sea número o coma/punto
    const raw = e.target.value.replace(/[^0-9.,]/g, "");

    // Guardamos solo el número en el estado
    setLaborPrice(raw);
  }} />
              </div>
              <div className="grid gap-1.5">
                <Label htmlFor="partsPrice">Precio repuestos</Label>
                <Input id="partsPrice" name="partsPrice" placeholder="$ 0,00"  value={partsPrice ? `$ ${partsPrice}` : ""}
  onChange={(e) => {
    const raw = e.target.value.replace(/[^0-9.,]/g, "");
    setPartsPrice(raw);
  }} />
              </div>
              <div className="grid gap-1.5">
                <Label htmlFor="total">Total</Label>
                <Input id="total" name="total" disabled placeholder="Se calculará"
  value={
    `$ ${
      (parseFloat(laborPrice.replace(",", ".")) || 0) +
      (parseFloat(partsPrice.replace(",", ".")) || 0)
    }`
  
                }/>
              </div>
            </div>
          </section>

          {/* Comentario destacado */}
          <section className="space-y-3">
            <h2 className="text-sm font-semibold text-muted-foreground">Comentario a destacar</h2>
            <div className="grid gap-1.5">
              <Label htmlFor="alertComment">Comentario</Label>
              <Input
                id="alertComment"
                name="alertComment"
                placeholder="Ej: Revisar correa distribución en próxima visita"
              />
            </div>
          </section>

          {/* Footer botones */}
          <div className="mt-2 flex items-center justify-end gap-3 border-t pt-4">
            <Button variant="outline" type="button" onClick={onClose}>
              Cancelar
            </Button>
            <Button type="submit" onClick={onClose}>
              Guardar visita
            </Button>
          </div>
        </form>
      </div>
    </Card>
  );
};
