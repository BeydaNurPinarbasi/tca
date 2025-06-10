import type { ReactNode } from "react";

type Props = {
  icon: ReactNode;
  label: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  color?: string; 
};

export default function AnimatedButton({
  icon,
  label,
  onClick,
  color = "bg-gray-800",
}: Props) {
  return (
    <button
      onClick={onClick}
      className={`group relative overflow-hidden flex items-center ${color} hover:brightness-110 text-white rounded-full shadow-xl transition-all duration-300 pl-4 pr-4 py-3`}
    >
      <span className="text-lg">{icon}</span>
      <span
        className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 ml-2 text-sm whitespace-nowrap"
      >
        {label}
      </span>
    </button>
  );
}
