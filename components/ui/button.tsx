import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

// Padrão shadcn/ui: cva() define variantes de estilo como uma "tabela" de classes.
// Cada variante mapeia para um comportamento visual do briefing (CTA coral,
// contorno para uso sobre fotos, WhatsApp verde, etc).
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-brand text-sm font-body font-semibold tracking-wide transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral focus-visible:ring-offset-2 focus-visible:ring-offset-cream disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98]",
  {
    variants: {
      variant: {
        // Botão principal: fundo Coral Blaze, usado nos CTAs de conversão.
        default:
          "bg-coral text-white shadow-soft hover:bg-coral-dark hover:scale-[1.03]",
        // Contorno claro, para usar sobre fotos/vídeo escuros (ex: Hero).
        outline:
          "border border-white/70 text-white backdrop-blur-sm hover:bg-white hover:text-ink hover:scale-[1.03]",
        // Contorno escuro, para usar sobre fundo claro (creme/branco).
        "outline-dark":
          "border border-ink/30 text-ink hover:border-coral hover:text-coral hover:scale-[1.03]",
        ghost: "text-ink hover:text-coral",
        whatsapp:
          "bg-whatsapp text-white shadow-soft hover:brightness-105 hover:scale-[1.03]",
      },
      size: {
        default: "h-12 px-6 py-3",
        lg: "h-14 px-8 py-4 text-base",
        icon: "h-14 w-14",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

// asChild + Slot (Radix) permite renderizar o Button "como" um <a>, mantendo
// os estilos mas trocando a tag HTML final — útil para CTAs que são links.
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
