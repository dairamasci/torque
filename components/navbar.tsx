'use client';

import { Button } from '@/components/ui/button';
import { ModeToggle } from '@/components/mode-toggle';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function Navbar() {
  const pathname = usePathname();

  const links = [
    { href: '/customers', label: 'Clientes' },
    { href: '/vehicles', label: 'Vehículos' },
    { href: '/visits', label: 'Visitas' },
    { href: '/appointments', label: 'Citas' },
    { href: '/appointments/calendar', label: 'Calendario' },
  ];

  return (
    <div className="sticky top-0 z-20 w-full backdrop-blur-xl">
      <nav className="mx-auto mt-3 max-w-6xl rounded-2xl border border-border bg-white/10 px-4 py-3 shadow-lg ring-1 ring-black/5 dark:bg-neutral-900/30">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link href="/" className="font-semibold" aria-label="Ir al inicio">
              <img
                src="/logoOscuro.png"
                alt="Torque"
                className="block h-20 dark:hidden"
              />
              <img
                src="/logoClaro.png"
                alt="Torque"
                className="hidden h-20 dark:block"
              />
            </Link>
          </div>

          {/* <div className="hidden gap-6 text-sm md:flex ">
            <Link href="/customers">Clientes</Link>
            <Link href="/vehicles">Vehículos</Link>
            <Link href="/visits">Visitas</Link>
            <Link href="/appointments">Citas</Link>
            <Link href="/appointments/calendar">Calendario</Link>
          </div> */}

          <div className="hidden gap-6 text-sm md:flex">
            {links.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`transition-colors hover:text-primary ${
                    isActive
                      ? 'font-bold text-foreground'
                      : 'font-normal text-muted-foreground'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          <div className="flex items-center gap-2">
            <Button
              asChild
              className="rounded-xl border border-white/20 bg-white/20 text-foreground shadow-lg backdrop-blur hover:bg-white/30 dark:bg-white/10 dark:hover:bg-white/15"
            >
              <Link href="/appointments/new">Nueva cita</Link>
            </Button>
            <ModeToggle />
          </div>
        </div>
      </nav>
    </div>
  );
}
