"use client";

export default function AdminProductsPage() {
  return (
    <main className="min-h-screen bg-[#070B18] p-10">
      <h1 className="mb-8 text-4xl font-black text-cyan-400">
        Product Manager
      </h1>

      <button className="mb-8 rounded-lg bg-cyan-500 px-6 py-3 font-bold text-black hover:bg-cyan-400">
        + Add Product
      </button>

      <div className="rounded-xl border border-cyan-500/20 bg-white/5 p-6">
        <p className="text-gray-400">
          Products will be displayed here...
        </p>
      </div>
    </main>
  );
}