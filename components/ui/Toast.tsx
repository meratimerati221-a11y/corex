"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { CheckCircle } from "lucide-react";

type ToastData = {
  id: number;
  message: string;
};

type ToastContextType = {
  success: (message: string) => void;
};

const ToastContext = createContext<ToastContextType | null>(null);

export function ToastProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [toasts, setToasts] = useState<ToastData[]>([]);

  const success = (message: string) => {
    const id = Date.now();

    setToasts((prev) => [...prev, { id, message }]);

    setTimeout(() => {
      setToasts((prev) =>
        prev.filter((toast) => toast.id !== id)
      );
    }, 3000);
  };

  return (
    <ToastContext.Provider value={{ success }}>
      {children}

      <div className="fixed top-6 right-6 z-[9999] space-y-4">
        {toasts.map((toast) => (
          <div
            key={toast.id}
            className="flex items-center gap-3 rounded-2xl border border-cyan-400/30 bg-[#0b1120]/95 px-5 py-4 text-white shadow-[0_0_35px_rgba(34,211,238,0.35)] backdrop-blur-xl animate-[toastIn_.35s_ease]"
          >
            <CheckCircle className="text-cyan-400" size={24} />

            <span className="font-medium">
              {toast.message}
            </span>
          </div>
        ))}
      </div>

      <style jsx global>{`
        @keyframes toastIn {
          from {
            opacity: 0;
            transform: translateX(80px);
          }

          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </ToastContext.Provider>
  );
}

export function useToast() {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error(
      "useToast must be used inside ToastProvider"
    );
  }

  return context;
}