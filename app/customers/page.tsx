'use client';

import { EmptyState } from '@/components/empty-state';

export default function CustomersPage() {
  return (
    <section className="space-y-4">
      <h1 className="text-2xl font-semibold">Clientes</h1>
      <EmptyState />
    </section>
  );
}
