import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combina classes condicionalmente (clsx) e resolve conflitos do Tailwind
 * (tailwind-merge). Padrão usado por todos os componentes shadcn/ui.
 * Ex: cn("px-2", condicao && "px-4") -> "px-4" (o último px vence)
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
