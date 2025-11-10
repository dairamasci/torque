import { Car, User, Wrench, Calendar, Gauge, FileText, Phone, MapPin, AlertCircle, X, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

type LastVisitCardProps = {
  onClose: () => void;
};

export const LastVisitCard = ({ onClose }: LastVisitCardProps) => {
  return (
    <Card className="relative h-full shadow-lg ring-1 ring-black/5 dark:bg-neutral-900/30">
      <div className="relative flex flex-col h-full px-4 space-y-4">
        <Button variant="ghost" size="icon" className="absolute right-3" onClick={onClose}>
          <X className="h-5 w-5" />
        </Button>

        <div>
          <h2 className="text-lg font-semibold flex items-center gap-2">
            <Car className="h-5 w-5 text-primary" /> Renault Clio
          </h2>
          <p className="text-sm text-muted-foreground">ABC-123 · 25.000 km</p>
        </div>

        <div className="rounded-lg border p-3 bg-card/50 text-sm space-y-1">
          <div className="flex items-center gap-2">
            <User className="h-4 w-4 text-muted-foreground" /> Juan Pérez
          </div>
          <div className="flex items-center gap-2">
            <Phone className="h-4 w-4 text-muted-foreground" /> +34 600 123 456
          </div>
        </div>

        <div className="rounded-lg border p-3 bg-card/50 text-sm gap-2">
          <p>Detalles de última revisión:</p>
          <ul>
            <li className="flex flex-row gap-2 items-center">
              <Check className="w-4 h-4" />
              <span className="font-medium">Se cambió el líquido de frenos</span>
            </li>
            <li className="flex flex-row gap-2 items-center">
              <Check className="w-4 h-4" />
              <span className="font-medium">Se rotaron los neumáticos</span>
            </li>
            <li className="flex flex-row gap-2 items-center">
              <Check className="w-4 h-4" />
              <span className="font-medium">Se revisaron los frenos</span>
            </li>
          </ul>
        </div>

        <div className="flex items-start gap-2 rounded-lg border p-3 bg-amber-50 dark:bg-amber-900/10">
          <AlertCircle className="h-4 w-4 text-amber-600 mt-0.5" />
          <p className="text-sm">
            Revisar correas a los <span className="font-medium">30.000 km</span>.
          </p>
        </div>

        <div className="mt-auto flex flex-col sm:flex-row gap-2">
          <button className="w-full inline-flex items-center justify-center gap-2 rounded-md border px-3 py-2 text-sm hover:bg-accent">
            <FileText className="h-4 w-4" /> Ver historial de visitas
          </button>
        </div>
      </div>
    </Card>
  );
};
