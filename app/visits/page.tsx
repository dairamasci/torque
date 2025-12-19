'use client';
import { useRef, useState } from 'react';
import { VisitsTable } from './components/visits-table';
import { NewVisit } from './components/new-visit';

export default function VisitsPage() {
  const [newVisitOpen, setNewVisitOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);

  const handleNewVisit = (open: boolean) => {
    setNewVisitOpen(open);

    if (!open) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleTransitionEnd = (e: React.TransitionEvent<HTMLDivElement>) => {
    if (e.propertyName === 'max-height' && newVisitOpen && panelRef.current) {
      const navbarHeight = 120;
      const panelTop = panelRef.current.getBoundingClientRect().top + window.scrollY - navbarHeight;

      window.scrollTo({
        top: panelTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="space-y-4 flex flex-col ">
      <h1 className="text-4xl font-semibold">Visitas</h1>

      <VisitsTable onNewVisit={handleNewVisit} />
      <div
        ref={panelRef}
        onTransitionEnd={handleTransitionEnd}
        className={`overflow-hidden border-t border-border shadow-xl rounded-t-2xl
                    transition-[max-height,opacity] duration-700 ease-in-out
                    ${newVisitOpen ? 'max-h-[100%] opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <NewVisit onClose={() => handleNewVisit(false)} />
      </div>
    </section>
  );
}
