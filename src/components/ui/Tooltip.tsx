// src/components/ui/Tooltip.tsx
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import type { ReactNode } from "react";

export default function Tooltip({ children, content }: { children: ReactNode; content: string }) {
  return (
    <TooltipPrimitive.Provider>
      <TooltipPrimitive.Root>
        <TooltipPrimitive.Trigger asChild>
          {children}
        </TooltipPrimitive.Trigger>
        <TooltipPrimitive.Portal>
          <TooltipPrimitive.Content
            className="bg-neutral-800 text-white text-xs rounded px-2 py-1 shadow-md z-50"
            sideOffset={5}
          >
            {content}
            <TooltipPrimitive.Arrow className="fill-neutral-800" />
          </TooltipPrimitive.Content>
        </TooltipPrimitive.Portal>
      </TooltipPrimitive.Root>
    </TooltipPrimitive.Provider>
  );
}
