"use client";

import { useState } from "react";
import { createProduct, updateProduct } from "@/lib/adminApi";

type Product = {
  id?: number;
  title: string;
  slug: string;
  price: number | string;
  image: string;
  category: string;
  cpu: string;
  gpu: string;
  ram: string;
  storage: string;
  description: string;
  stock: number | string;
  featured: boolean;
};

type ProductFormProps = {
  product?: Product | null;
  onSaved?: () => void;
};

export default function ProductForm({
  product = null,
  onSaved,
}: ProductFormProps) {
  const [title, setTitle] = useState(product?.title ?? "");
  const [slug, setSlug] = useState(product?.slug ?? "");
  const [price, setPrice] = useState(String(product?.price ?? ""));
  const [image, setImage] = useState(product?.image ?? "");
  const [category, setCategory] = useState(product?.category ?? "");
  const [cpu, setCpu] = useState(product?.cpu ?? "");
  const [gpu, setGpu] = useState(product?.gpu ?? "");
  const [ram, setRam] = useState(product?.ram ?? "");
  const [storage, setStorage] = useState(product?.storage ?? "");
  const [description, setDescription] = useState(
    product?.description ?? ""
  );
  const [stock, setStock] = useState(String(product?.stock ?? ""));
  const [featured, setFeatured] = useState(product?.featured ?? false);

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  async function handleSave(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (loading) return;

    setLoading(true);
    setMessage("");

    const productData = {
      title: title.trim(),
      slug: slug.trim(),
      price: Number(price),
      image: image.trim(),
      category: category.trim(),
      cpu: cpu.trim(),
      gpu: gpu.trim(),
      ram: ram.trim(),
      storage: storage.trim(),
      description: description.trim(),
      stock: Number(stock),
      featured,
    };

    try {
      if (product?.id) {
        await updateProduct(product.id, productData);
        setMessage("Product updated successfully!");
      } else {
        await createProduct(productData);
        setMessage("Product created successfully!");

        setTitle("");
        setSlug("");
        setPrice("");
        setImage("");
        setCategory("");
        setCpu("");
        setGpu("");
        setRam("");
        setStorage("");
        setDescription("");
        setStock("");
        setFeatured(false);
      }

      onSaved?.();
    } catch (error: any) {
      console.error(error);
      setMessage(
        error?.message || "Something went wrong while saving the product."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="rounded-2xl border border-cyan-500/20 bg-white/5 p-8">

      <h2 className="mb-8 text-3xl font-bold text-cyan-400">
        {product?.id ? "Edit Product" : "Add Product"}
      </h2>

      <form onSubmit={handleSave}>

        <div className="grid gap-5 md:grid-cols-2">

          <input
            placeholder="Title"
            className="rounded-lg p-3 text-black"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />

          <input
            placeholder="Slug"
            className="rounded-lg p-3 text-black"
            value={slug}
            onChange={(e) => setSlug(e.target.value)}
            required
          />

          <input
            type="number"
            placeholder="Price"
            className="rounded-lg p-3 text-black"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />

          <input
            placeholder="Image URL"
            className="rounded-lg p-3 text-black"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />

          <input
            placeholder="Category"
            className="rounded-lg p-3 text-black"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />

          <input
            placeholder="CPU"
            className="rounded-lg p-3 text-black"
            value={cpu}
            onChange={(e) => setCpu(e.target.value)}
          />

          <input
            placeholder="GPU"
            className="rounded-lg p-3 text-black"
            value={gpu}
            onChange={(e) => setGpu(e.target.value)}
          />

          <input
            placeholder="RAM"
            className="rounded-lg p-3 text-black"
            value={ram}
            onChange={(e) => setRam(e.target.value)}
          />

          <input
            placeholder="Storage"
            className="rounded-lg p-3 text-black"
            value={storage}
            onChange={(e) => setStorage(e.target.value)}
          />

          <input
            type="number"
            placeholder="Stock"
            className="rounded-lg p-3 text-black"
            value={stock}
            onChange={(e) => setStock(e.target.value)}
          />

        </div>

        <textarea
          placeholder="Description"
          className="mt-5 h-40 w-full rounded-lg p-3 text-black"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <div className="mt-5 flex items-center gap-3">
          <input
            type="checkbox"
            checked={featured}
            onChange={(e) => setFeatured(e.target.checked)}
          />

          <span className="text-white">
            Featured Product
          </span>
        </div>

        {message && (
          <p className="mt-5 text-sm text-white">
            {message}
          </p>
        )}

        <button
          type="submit"
          disabled={loading}
          className="mt-8 rounded-lg bg-cyan-500 px-8 py-3 font-bold text-black transition hover:bg-cyan-400 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {loading
            ? "Saving..."
            : product?.id
              ? "Update Product"
              : "Save Product"}
        </button>

      </form>
    </div>
  );
}

