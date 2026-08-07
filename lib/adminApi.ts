import { supabase } from "./supabase";

export async function createProduct(product: {
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
}) {
  const { data, error } = await supabase
    .from("products")
    .insert([product])
    .select();

  if (error) {
    throw error;
  }

  return data;
}

export async function updateProduct(id: number, product: any) {
  const { data, error } = await supabase
    .from("products")
    .update(product)
    .eq("id", id)
    .select();

  if (error) {
    throw error;
  }

  return data;
}

export async function deleteProduct(id: number) {
  const { error } = await supabase
    .from("products")
    .delete()
    .eq("id", id);

  if (error) {
    throw error;
  }

  return true;
}

