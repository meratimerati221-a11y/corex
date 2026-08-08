"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { deleteProduct } from "@/lib/adminApi";
import ProductForm from "./productform";

type Product = {
  id: number;
  created_at?: string;
  title: string;
  slug: string;
  price: number;
  image: string;
  category: string;
  cpu: string;
  gpu: string;
  ram: string;
  storage: string;
  description: string;
  stock: number;
  featured: boolean;
};

type ProductTableProps = {
  onProductSaved?: () => void;
};

export default function ProductTable({
  onProductSaved,
}: ProductTableProps) {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [deletingId, setDeletingId] = useState<number | null>(null);

  async function loadProducts() {
    setLoading(true);

    const { data, error } = await supabase
      .from("products")
      .select("*")
      .order("id", { ascending: false });

    if (error) {
      console.error("Error loading products:", error);
      setProducts([]);
    } else {
      setProducts(data || []);
    }

    setLoading(false);
  }

  useEffect(() => {
    loadProducts();
  }, []);

  function handleEdit(product: Product) {
    setEditingProduct(product);
  }

  function handleEditSaved() {
    setEditingProduct(null);
    loadProducts();
    onProductSaved?.();
  }

  function handleCancelEdit() {
    setEditingProduct(null);
  }

  async function handleDelete(product: Product) {
    const confirmed = window.confirm(
      `Are you sure you want to delete "${product.title}"?`
    );

    if (!confirmed) {
      return;
    }

    setDeletingId(product.id);

    try {
      await deleteProduct(product.id);

      setProducts((currentProducts) =>
        currentProducts.filter(
          (currentProduct) => currentProduct.id !== product.id
        )
      );

      if (editingProduct?.id === product.id) {
        setEditingProduct(null);
      }

      onProductSaved?.();
    } catch (error) {
      console.error("Error deleting product:", error);

      alert(
        "Could not delete this product. Please try again."
      );
    } finally {
      setDeletingId(null);
    }
  }

  if (loading) {
    return (
      <div className="rounded-xl border border-cyan-500/20 bg-white/5 p-6 text-gray-400">
        Loading products...
      </div>
    );
  }

  return (
    <div className="space-y-6">

      {/* Edit Form */}
      {editingProduct && (
        <div>
          <ProductForm
            product={editingProduct}
            onSaved={handleEditSaved}
          />

          <button
            type="button"
            onClick={handleCancelEdit}
            className="mt-4 rounded-lg border border-gray-600 px-6 py-3 font-bold text-white transition hover:bg-white/10"
          >
            Cancel Edit
          </button>
        </div>
      )}

      {/* Product Table */}
      <div className="overflow-x-auto rounded-xl border border-cyan-500/20 bg-white/5">

        <table className="w-full min-w-[900px] text-left">

          <thead className="border-b border-cyan-500/20">
            <tr className="text-gray-400">
              <th className="p-4">Title</th>
              <th className="p-4">Category</th>
              <th className="p-4">Price</th>
              <th className="p-4">Stock</th>
              <th className="p-4">Featured</th>
              <th className="p-4">Actions</th>
            </tr>
          </thead>

          <tbody>
            {products.map((product) => (
              <tr
                key={product.id}
                className="border-b border-white/5 text-white"
              >
                <td className="p-4 font-semibold">
                  {product.title}
                </td>

                <td className="p-4 text-gray-300">
                  {product.category || "-"}
                </td>

                <td className="p-4">
                  {product.price}
                </td>

                <td className="p-4">
                  {product.stock}
                </td>

                <td className="p-4">
                  {product.featured ? (
                    <span className="text-cyan-400">
                      Yes
                    </span>
                  ) : (
                    <span className="text-gray-500">
                      No
                    </span>
                  )}
                </td>

                <td className="p-4">
                  <div className="flex gap-2">

                    <button
                      type="button"
                      onClick={() => handleEdit(product)}
                      disabled={deletingId === product.id}
                      className="rounded-lg bg-blue-600 px-4 py-2 font-bold text-white transition hover:bg-blue-500 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      Edit
                    </button>

                    <button
                      type="button"
                      onClick={() => handleDelete(product)}
                      disabled={deletingId === product.id}
                      className="rounded-lg bg-red-600 px-4 py-2 font-bold text-white transition hover:bg-red-500 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      {deletingId === product.id
                        ? "Deleting..."
                        : "Delete"}
                    </button>

                  </div>
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
    </div>
  );
}

