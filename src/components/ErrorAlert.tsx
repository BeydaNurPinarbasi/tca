import { AlertCircle } from "lucide-react";

interface ErrorAlertProps {
  message: string;
}

export default function ErrorAlert({ message }: ErrorAlertProps) {
  if (!message) return null;

  return (
    <div
      className="flex items-start gap-3 text-red-700 bg-red-100 border border-red-200 rounded-xl p-4 shadow-sm animate-fade-in"
      role="alert"
      aria-live="assertive"
    >
      {/* İkon */}
      <AlertCircle className="w-5 h-5 mt-0.5 flex-shrink-0 text-red-500" aria-hidden="true" />

      {/* Mesaj */}
      <p className="text-sm font-medium leading-snug">
        {message}
      </p>
    </div>
  );
}
