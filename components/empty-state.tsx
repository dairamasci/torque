'use client';

export function EmptyState({ message }: { message?: string }) {
  return (
    <div className="flex flex-col items-center justify-center gap-2 rounded-2xl border border-dashed border-border bg-white/5 p-10 text-center shadow-sm backdrop-blur-sm dark:bg-neutral-900/20">
      <p className="text-sm text-muted-foreground">
        {message ?? 'No hay contenido en este momento.'}
      </p>
    </div>
  );
}
