'use client';

import { EmptyState } from '@/components/empty-state';

export default function VisitsGlobalPage() {
  return (
    <section className="space-y-4">
      <h1 className="text-2xl font-semibold">Visitas</h1>
      <EmptyState />
    </section>
  );
}
