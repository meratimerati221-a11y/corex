"use client";

import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [hide, setHide] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHide(true);
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  if (hide) return null;

  return (
    <div className="fixed inset-0 z-[99999] flex items-center justify-center bg-black">
      <div className="flex flex-col items-center">

        {/* Logo */}
        <div className="relative h-40 w-40 flex items-center justify-center">

          {/* Rotating Ring */}
          <div className="absolute h-40 w-40 rounded-full border-4 border-cyan-500 border-t-transparent animate-spin"></div>

          {/* CX */}
          <h1 className="text-6xl font-black tracking-tight">
            <span className="text-white">C</span>
            <span className="text-cyan-400">X</span>
          </h1>

        </div>

        {/* Text */}
        <h2 className="mt-8 text-3xl font-bold tracking-[10px] text-white animate-pulse">
          COREX
        </h2>

      </div>
    </div>
  );
}