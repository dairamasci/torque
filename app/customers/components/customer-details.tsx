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

export const CustomerDetails = () => {
  return (
    <div className="flex justify-end">
      <Dialog>
        <form>
          <DialogTrigger asChild>
            <Button variant="outline">Nuevo cliente</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[625px]">
            <DialogHeader>
              <DialogTitle className="text-3xl">Crear nuevo cliente</DialogTitle>
              <DialogDescription>Ingresar a continuación los datos del nuevo cliente.</DialogDescription>
            </DialogHeader>

            <div className="grid gap-4">
              <div className="flex flex-row gap-4">
                <div className="grid gap-3">
                  <Label htmlFor="name">Nombre</Label>
                  <Input id="name" name="name" />
                </div>
                <div className="grid gap-3">
                  <Label htmlFor="surname">Apellido</Label>
                  <Input id="surname" name="surname" />
                </div>
                <div className="grid gap-3">
                  <Label htmlFor="telephone">Teléfono</Label>
                  <Input id="telephone" name="telephone" />
                </div>
              </div>

              <div className="grid gap-3">
                <Label htmlFor="email">Email</Label>
                <Input id="email" name="email" />
              </div>

              <div className="grid gap-3">
                <Label htmlFor="adress">Dirección</Label>
                <Input id="adress" name="adress" />
              </div>
            </div>

            <DialogFooter>
              <DialogClose asChild>
                <Button variant="outline">Cancelar</Button>
              </DialogClose>
              <Button type="submit">Guardar</Button>
            </DialogFooter>
          </DialogContent>
        </form>
      </Dialog>
    </div>
  );
};
