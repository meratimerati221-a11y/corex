"use client";

import Link from "next/link";

export default function AdminPage() {
  return (
    <main className="min-h-screen bg-[#070B18] px-8 py-20">
      <div className="mx-auto max-w-6xl">

        <h1 className="mb-12 text-5xl font-black text-cyan-400">
          Admin Dashboard
        </h1>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          <Link
            href="/admin/products"
            className="rounded-2xl border border-cyan-500/20 bg-white/5 p-8 transition hover:border-cyan-400 hover:bg-cyan-500/10"
          >
            <h2 className="mb-3 text-2xl font-bold text-white">
              Products
            </h2>

            <p className="text-gray-400">
              Manage all products.
            </p>
          </Link>

          <Link
            href="/admin/orders"
            className="rounded-2xl border border-cyan-500/20 bg-white/5 p-8 transition hover:border-cyan-400 hover:bg-cyan-500/10"
          >
            <h2 className="mb-3 text-2xl font-bold text-white">
              Orders
            </h2>

            <p className="text-gray-400">
              View customer orders.
            </p>
          </Link>

          <Link
            href="/admin/users"
            className="rounded-2xl border border-cyan-500/20 bg-white/5 p-8 transition hover:border-cyan-400 hover:bg-cyan-500/10"
          >
            <h2 className="mb-3 text-2xl font-bold text-white">
              Users
            </h2>

            <p className="text-gray-400">
              Manage users.
            </p>
          </Link>

        </div>

      </div>
    </main>
  );
}