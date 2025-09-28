'use client';

import { EmptyState } from '@/components/empty-state';

export default function AppointmentsCalendarPage() {
  return (
    <section className="space-y-4">
      <h1 className="text-2xl font-semibold">Calendario de citas</h1>
      <EmptyState />
    </section>
  );
}
