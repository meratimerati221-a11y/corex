"use client";

import { useState } from "react";
import ProductForm from "@/app/admin/productform";
import ProductTable from "@/app/admin/ProductTable";

export default function AdminProductsPage() {
  const [showForm, setShowForm] = useState(false);

  return (
    <main className="min-h-screen bg-[#070B18] p-10">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="mb-10 flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-4xl font-black text-cyan-400">
              Product Manager
            </h1>

            <p className="mt-2 text-gray-400">
              Manage your CoreX products
            </p>
          </div>

          <button
            onClick={() => setShowForm((current) => !current)}
            className="rounded-lg bg-cyan-500 px-6 py-3 font-bold text-black transition hover:bg-cyan-400"
          >
            {showForm ? "Close Form" : "+ Add Product"}
          </button>
        </div>

        {/* Add Product Form */}
        {showForm && (
          <div className="mb-10">
            <ProductForm />
          </div>
        )}

        {/* Product List */}
        <section>
          <h2 className="mb-4 text-2xl font-bold text-white">
            Products
          </h2>

          <ProductTable />
        </section>

      </div>
    </main>
  );
}

