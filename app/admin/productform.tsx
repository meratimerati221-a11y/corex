"use client";

import { createProduct } from "@/lib/adminApi";
import { useState } from "react";

export default function ProductForm() {

  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [category, setCategory] = useState("");
  const [cpu, setCpu] = useState("");
  const [gpu, setGpu] = useState("");
  const [ram, setRam] = useState("");
  const [storage, setStorage] = useState("");
  const [description, setDescription] = useState("");
  const [stock, setStock] = useState("");
  const [featured, setFeatured] = useState(false);

  async function handleSave() {
  try {
    await createProduct({
      title,
      slug,
      price: Number(price),
      image,
      category,
      cpu,
      gpu,
      ram,
      storage,
      description,
      stock: Number(stock),
      featured,
    });

    alert("✅ Product added successfully!");

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

  } catch (error) {
    console.error(error);
    alert("❌ Error adding product");
  }
}
  return (
    <div className="rounded-2xl border border-cyan-500/20 bg-white/5 p-8">

      <h2 className="mb-8 text-3xl font-bold text-cyan-400">
        Add Product
      </h2>

      <div className="grid gap-5 md:grid-cols-2">

        <input
          placeholder="Title"
          className="rounded-lg p-3 text-black"
          value={title}
          onChange={(e)=>setTitle(e.target.value)}
        />

        <input
          placeholder="Slug"
          className="rounded-lg p-3 text-black"
          value={slug}
          onChange={(e)=>setSlug(e.target.value)}
        />

        <input
          placeholder="Price"
          className="rounded-lg p-3 text-black"
          value={price}
          onChange={(e)=>setPrice(e.target.value)}
        />

        <input
          placeholder="Image URL"
          className="rounded-lg p-3 text-black"
          value={image}
          onChange={(e)=>setImage(e.target.value)}
        />

        <input
          placeholder="Category"
          className="rounded-lg p-3 text-black"
          value={category}
          onChange={(e)=>setCategory(e.target.value)}
        />

        <input
          placeholder="CPU"
          className="rounded-lg p-3 text-black"
          value={cpu}
          onChange={(e)=>setCpu(e.target.value)}
        />

        <input
          placeholder="GPU"
          className="rounded-lg p-3 text-black"
          value={gpu}
          onChange={(e)=>setGpu(e.target.value)}
        />

        <input
          placeholder="RAM"
          className="rounded-lg p-3 text-black"
          value={ram}
          onChange={(e)=>setRam(e.target.value)}
        />

        <input
          placeholder="Storage"
          className="rounded-lg p-3 text-black"
          value={storage}
          onChange={(e)=>setStorage(e.target.value)}
        />

        <input
          placeholder="Stock"
          className="rounded-lg p-3 text-black"
          value={stock}
          onChange={(e)=>setStock(e.target.value)}
        />

      </div>

      <textarea
        placeholder="Description"
        className="mt-5 h-40 w-full rounded-lg p-3 text-black"
        value={description}
        onChange={(e)=>setDescription(e.target.value)}
      />

      <div className="mt-5 flex items-center gap-3">
        <input
          type="checkbox"
          checked={featured}
          onChange={(e)=>setFeatured(e.target.checked)}
        />

        <span className="text-white">
          Featured Product
        </span>
      </div>

      <button
        className="mt-8 rounded-lg bg-cyan-500 px-8 py-3 font-bold text-black hover:bg-cyan-400"
      >
        Save Product
      </button>

    </div>
  );

}

