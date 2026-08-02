"use client";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-black/40 backdrop-blur-xl">

      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-8">

        <h1 className="text-3xl font-black tracking-widest text-cyan-400">
          COREX
        </h1>

        <nav className="hidden gap-8 text-white md:flex">

          <a href="#" className="transition hover:text-cyan-400">
            Home
          </a>

          <a href="#" className="transition hover:text-cyan-400">
            Shop
          </a>

          <a href="#" className="transition hover:text-cyan-400">
            PC Builder
          </a>

          <a href="#" className="transition hover:text-cyan-400">
            About
          </a>

          <a href="#" className="transition hover:text-cyan-400">
            Contact
          </a>

        </nav>

        <div className="flex gap-5 text-2xl text-white">

          <button>🔍</button>

          <button>❤️</button>

          <button>🛒</button>

        </div>

      </div>

    </header>
  );
}