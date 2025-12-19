"use client";

import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function CloseButton({
  onClick,
  className,
}: {
  onClick: () => void;
  className?: string;
}) {
  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={onClick}
      className={cn(
        "rounded-full group relative transition-all",
        // borde/ring verde solo en hover/focus (nada de fondo)
        "hover:border-ring hover:ring-ring/40 hover:ring-[2px]",
        "focus-visible:border-ring focus-visible:ring-ring/40 focus-visible:ring-[2px]",
        className
      )}
    >
      <X
        className={cn(
          "h-4 w-4 stroke-[1.5] text-foreground transition-all duration-200 ease-out",
          "group-hover:stroke-[2.0] group-hover:text-primary",
          "group-hover:rotate-90 group-hover:scale-110"
        )}
      />
    </Button>
  );
}
