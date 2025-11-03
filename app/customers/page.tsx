'use client';
import { CustomersTable } from './components/customers-table';
import { NewCustomer } from './components/new-customer';
// - Crear clientes nuevos
// - Modificar y eliminar clientes
// - Listar clientes

export default function CustomersPage() {
  return (
    <section className="space-y-4 flex flex-col">
      <h1 className="text-3xl font-semibold">Clientes</h1>
      <div className="flex flex-col gap-3">
        <NewCustomer />
        <CustomersTable />
      </div>
    </section>
  );
}
