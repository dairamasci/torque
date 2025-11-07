import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export const NewVehicle = () => {
  return (
    <div className="flex justify-end">
      <Dialog>
        <form>
          <DialogTrigger asChild>
            <Button variant="outline">Nuevo vehículo</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[625px]">
            <DialogHeader>
              <DialogTitle className="text-3xl">Crear nuevo vehículo</DialogTitle>
              <DialogDescription>Ingresar a continuación los datos del nuevo vehículo.</DialogDescription>
            </DialogHeader>

            <div className="grid gap-4">
              <div className="flex flex-row gap-4">
                <div className="grid gap-3">
                  <Label htmlFor="plate">Patente</Label>
                  <Input id="plate" name="plate" />
                </div>
                <div className="grid gap-3">
                  <Label htmlFor="brand">Marca</Label>
                  <Input id="brand" name="brand" />
                </div>
                <div className="grid gap-3">
                  <Label htmlFor="model">Modelo</Label>
                  <Input id="model" name="model" />
                </div>
              </div>

              <div className="flex flex-row gap-4">
                <div className="grid gap-3">
                  <Label htmlFor="manufactureYear">Año</Label>
                  <Input id="manufactureYear" name="manufactureYear" />
                </div>
                {/* dropdown de selección de cliente */}
                <div className="grid gap-3">
                  <Label htmlFor="client">Cliente</Label>
                  <Input id="client" name="client" />
                </div>
                <div className="grid gap-3">
                  <Label htmlFor="kmLastVisit">Kilometraje</Label>
                  <Input id="kmLastVisit" name="kmLastVisit" />
                </div>
              </div>

              <div className="flex flex-row gap-4">
                <div className="grid gap-3">
                  <Label htmlFor="chasisCode">Número de chásis</Label>
                  <Input id="chasisCode" name="chasisCode" />
                </div>
                <div className="grid gap-3">
                  <Label htmlFor="motorCode">Número de motor</Label>
                  <Input id="motorCode" name="motorCode" />
                </div>
              </div>
            </div>
            <DialogFooter>
              <DialogClose asChild>
                <Button variant="outline">Cancelar</Button>
              </DialogClose>
              <DialogClose asChild>
                <Button type="submit">Guardar</Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </form>
      </Dialog>
    </div>
  );
};
