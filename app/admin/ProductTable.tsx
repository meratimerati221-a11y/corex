"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

export default function ProductTable() {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  async function loadProducts() {
    setLoading(true);

    const { data, error } = await supabase
      .from("products")
      .select("*")
      .order("id", { ascending: false });

    if (error) {
      console.error(error);
      setProducts([]);
    } else {
      setProducts(data || []);
    }

    setLoading(false);
  }

  useEffect(() => {
    loadProducts();
  }, []);

  if (loading) {
    return (
      <div className="rounded-xl border border-cyan-500/20 bg-white/5 p-6 text-gray-400">
        Loading products...
      </div>
    );
  }

  return (
    <div className="overflow-x-auto rounded-xl border border-cyan-500/20 bg-white/5">
      <table className="w-full text-left">
        <thead className="border-b border-cyan-500/20">
          <tr className="text-gray-400">
            <th className="p-4">Title</th>
            <th className="p-4">Category</th>
            <th className="p-4">Price</th>
            <th className="p-4">Stock</th>
            <th className="p-4">Featured</th>
          </tr>
        </thead>

        <tbody>
          {products.map((product) => (
            <tr
              key={product.id}
              className="border-b border-white/5 text-white"
            >
              <td className="p-4">{product.title}</td>
              <td className="p-4">{product.category}</td>
              <td className="p-4">{product.price}</td>
              <td className="p-4">{product.stock}</td>
              <td className="p-4">
                {product.featured ? "Yes" : "No"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {products.length === 0 && (
        <p className="p-6 text-gray-400">
          No products found.
        </p>
      )}
    </div>
  );
}