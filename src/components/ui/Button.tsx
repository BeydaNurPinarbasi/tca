import { cn } from "../../lib/utils";
import type { ButtonHTMLAttributes } from "react";
import { Slot } from "@radix-ui/react-slot";

type Variant = "primary" | "outline" | "ghost";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
  asChild?: boolean;
};

export default function Button({
  children,
  variant = "primary",
  className,
  asChild = false,
  ...props
}: Props) {
  const baseStyles = "px-6 py-2 rounded-full font-medium transition text-sm";

  const variants: Record<Variant, string> = {
    primary: "bg-black text-white hover:bg-neutral-800",
    outline: "border border-black text-black hover:bg-black hover:text-white",
    ghost: "text-black hover:underline",
  };
  const Comp = asChild ? Slot : "button";

  return (
    <Comp className={cn(baseStyles, variants[variant], className)} {...props}>
      {children}
    </Comp>
  );
}
