'use client';

export function GlobalKeyframes() {
  return (
    <style>{`
      @keyframes floatSlow {
        0% { transform: translate(0, 0) scale(1); }
        50% { transform: translate(20px, -30px) scale(1.05); }
        100% { transform: translate(0, 0) scale(1); }
      }
      @keyframes floatMedium {
        0% { transform: translate(0, 0) scale(1); }
        50% { transform: translate(-25px, 20px) scale(0.98); }
        100% { transform: translate(0, 0) scale(1); }
      }
      @keyframes floatFast {
        0% { transform: translate(0, 0) rotate(0deg); }
        50% { transform: translate(15px, -10px) rotate(2deg); }
        100% { transform: translate(0, 0) rotate(0deg); }
      }
    `}</style>
  );
}
