'use client';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from '@/components/ui/dropdown-menu';
import { Eye, MoreHorizontal, Pencil, Trash2 } from 'lucide-react';

export function RowActions() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <MoreHorizontal className="h-4 w-4" />
          <span className="sr-only">Open menu</span>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        side="right"
        align="start"
        sideOffset={4}
        className="
            w-auto min-w-0 max-w-max 
            bg-card text-card-foreground
            border border-border 
            rounded-md shadow-md p-2"
      >
        <DropdownMenuItem
          className="
              w-auto flex flex-row items-center 
              rounded-sm px-2 py-1.5 cursor-pointer 
              hover:bg-[var(--torque-accent-hover)]/10 hover:text-accent-foreground 
              transition-colors"
          onClick={() => console.log('View Details')}
        >
          <Eye className="mr-2 h-4 w-4" />
          Ver detalles
        </DropdownMenuItem>
        <DropdownMenuItem
          className="
              w-auto flex flex-row items-center 
              rounded-sm px-2 py-1.5 cursor-pointer 
              hover:bg-[var(--torque-accent-hover)]/10 hover:text-accent-foreground 
              transition-colors"
          onClick={() => console.log('Edit')}
        >
          <Pencil className="mr-2 h-4 w-4" />
          Editar
        </DropdownMenuItem>
        <DropdownMenuItem
          className="
            w-auto flex flex-row items-center 
            rounded-sm px-2 py-1.5 text-destructive 
            focus:bg-destructive/10 focus:text-destructive 
            cursor-pointer"
          onClick={() => console.log('Delete')}
        >
          <Trash2 className="mr-2 h-4 w-4" />
          Eliminar
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
