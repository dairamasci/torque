'use client';

import { EmptyState } from '@/components/empty-state';
import Link from 'next/link';

export default function AppointmentsPage() {
  return (
    <section className="space-y-4">
      <h1 className="text-2xl font-semibold">Citas</h1>
      <div className="flex gap-3">
        <Link href="/appointments/calendar" className="underline">
          Calendario
        </Link>
      </div>
      <EmptyState />
    </section>
  );
}
