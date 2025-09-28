'use client';

export function AnimatedBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div
        className="absolute left-[-10%] top-[-10%] h-[45vmax] w-[45vmax] rounded-full bg-gradient-to-br from-indigo-400 to-fuchsia-300 opacity-20 blur-3xl"
        style={{ animation: 'floatSlow 14s ease-in-out infinite' }}
      />
      <div
        className="absolute right-[-15%] top-[10%] h-[35vmax] w-[35vmax] rounded-full bg-gradient-to-br from-emerald-300 to-cyan-300 opacity-20 blur-3xl"
        style={{ animation: 'floatMedium 18s ease-in-out infinite' }}
      />
      <div
        className="absolute bottom-[-10%] left-[30%] h-[40vmax] w-[40vmax] rounded-full bg-gradient-to-br from-sky-300 to-violet-300 opacity-20 blur-3xl"
        style={{ animation: 'floatFast 22s ease-in-out infinite' }}
      />
    </div>
  );
}
