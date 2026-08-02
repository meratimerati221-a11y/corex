"use client";

import Link from "next/link";
import CartBadge from "./CartBadge";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-cyan-500/20 bg-[#050816]/80 backdrop-blur-xl">

      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-8">

        {/* Logo */}
        <Link
          href="/"
          className="text-3xl font-black tracking-widest text-cyan-400 transition hover:scale-105"
        >
          CoreX
        </Link>

        {/* Navigation */}
        <nav className="hidden items-center gap-10 md:flex">

          <Link
            href="/"
            className="text-gray-300 transition hover:text-cyan-400"
          >
            Home
          </Link>

          <Link
            href="/products"
            className="text-gray-300 transition hover:text-cyan-400"
          >
            Products
          </Link>

          <Link
            href="/builder"
            className="text-gray-300 transition hover:text-cyan-400"
          >
            Builder
          </Link>

        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-6">

          <CartBadge />

        </div>

      </div>

    </header>
  );
}