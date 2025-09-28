'use client';

export default function Home() {
  const links = [
    { href: '/customers', label: 'Clientes' },
    { href: '/vehicles', label: 'Vehículos' },
    { href: '/visits', label: 'Visitas' },
    { href: '/appointments', label: 'Citas' },
    { href: '/appointments/calendar', label: 'Calendario' },
  ];
  return (
    <section className="space-y-6">
      <header className="rounded-3xl border p-8">
        <h1 className="text-3xl font-semibold">Bienvenido a Torque</h1>
        <p className="mt-2 text-sm opacity-80">
          Pantalla provisoria hasta definir el dashboard.
        </p>
      </header>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {links.map((l) => (
          <a
            key={l.href}
            href={l.href}
            className="rounded-xl border p-4 hover:underline"
          >
            <div className="text-lg font-semibold">{l.label}</div>
            <div className="text-sm opacity-80">Ir a {l.label}</div>
          </a>
        ))}
      </div>
    </section>
  );
}
