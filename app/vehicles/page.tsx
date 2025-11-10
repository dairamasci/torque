'use client';
import { useState } from 'react';
import { VehiclesTable } from './components/vehicles-table';
import { LastVisitCard } from './components/last-visit-card';

export default function VehiclesGlobalPage() {
  const [selectedVehicle, setSelectedVehicle] = useState<string | null>(null);

  return (
    <section className="space-y-4 flex flex-col">
      <h1 className="text-4xl font-semibold">Vehículos</h1>

      <div className="flex flex-row gap-4 w-full overflow-hidden items-stretch">
        <div className="flex-1 transition-all duration-500 ease-in-out">
          <VehiclesTable onSelectVehicle={setSelectedVehicle} />
        </div>
        <div
          className={`
            transition-all duration-500 ease-in-out transform
            ${selectedVehicle ? 'basis-1/3 max-w-[33.333%] translate-x-0 opacity-100 mx-4 mb-6' : 'basis-0 max-w-0 translate-x-full opacity-0'}
          `}
        >
          <LastVisitCard onClose={() => setSelectedVehicle(null)} />
        </div>
      </div>
    </section>
  );
}
