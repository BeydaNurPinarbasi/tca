import { cn } from "../../lib/utils";
import type { ButtonHTMLAttributes } from "react";

type Variant = "primary" | "outline" | "ghost";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
};

export default function Button({
  children,
  variant = "primary",
  className,
  ...props
}: Props) {
  const baseStyles =
    "px-6 py-2 rounded-full font-medium transition text-sm";

  const variants: Record<Variant, string> = {
    primary: "bg-black text-white hover:bg-neutral-800",
    outline: "border border-black text-black hover:bg-black hover:text-white",
    ghost: "text-black hover:underline",
  };

  return (
    <button
      className={cn(baseStyles, variants[variant], className)}
      {...props}
    >
      {children}
    </button>
  );
}
