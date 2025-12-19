// combobox.tsx
'use client';

import * as React from 'react';
import { Check, ChevronsUpDown } from 'lucide-react';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Label } from './ui/label';

export type OptionsType = {
  value: string;
  label: string;
};

type ComboboxProps = {
  options: OptionsType[];
  placeholder?: string;
  label?: string;
  value?: string;                        // 👈 nuevo
  onChange?: (value?: string) => void;   // 👈 nuevo
};

export function Combobox({
  options,
  placeholder = 'Elige un item de la lista',
  label = 'Selecciona de la lista',
  value,
  onChange,
}: ComboboxProps) {
  const [open, setOpen] = React.useState(false);
  const [internalValue, setInternalValue] = React.useState('');

  const selectedValue = value ?? internalValue;
  const selectedLabel = options.find((o) => o.value === selectedValue)?.label;

  const handleSelect = (currentValue: string) => {
    const isSame = currentValue === selectedValue;
    const nextValue = isSame ? '' : currentValue;

    setInternalValue(nextValue);
    onChange?.(nextValue || undefined);
    setOpen(false);
  };

  return (
    <div className="flex flex-col gap-1.5">
      <Label>{label}</Label>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild className="m-1">
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className={cn(
              'file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent',
              'px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
              'focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]',
              'aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive',
              'justify-between',
              open && 'border-ring ring-ring/50 ring-[3px] bg-accent/40 dark:bg-input/50'
            )}
          >
            {selectedLabel ? (
              <span className="truncate">{selectedLabel}</span>
            ) : (
              <span className="text-muted-foreground truncate">{placeholder}</span>
            )}
            <ChevronsUpDown className="ml-2 h-4 w-4 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[260px] p-0" align="start">
          <Command>
            <CommandInput placeholder={placeholder} className="h-9" />
            <CommandList>
              <CommandEmpty>No se encontraron resultados.</CommandEmpty>
              <CommandGroup>
                {options.map((option) => (
                  <CommandItem
                    key={option.value}
                    value={option.value}
                    onSelect={handleSelect}
                  >
                    {option.label}
                    <Check
                      className={cn(
                        'ml-auto h-4 w-4',
                        selectedValue === option.value ? 'opacity-100' : 'opacity-0'
                      )}
                    />
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  );
}
