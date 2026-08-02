"use client";

import { RefObject } from "react";
import useCart from "@/context/useCart";
import { useToast } from "@/components/ui/Toast";
import { flyToCart } from "@/lib/flyToCart";

type Props = {
  id: number;
  title: string;
  price: string;
  image: string;
  imageRef: RefObject<HTMLImageElement | null>;
};

export default function AddToCartButton({
  id,
  title,
  price,
  image,
  imageRef,
}: Props) {
  const { addToCart } = useCart();
  const toast = useToast();

  const handleClick = () => {
    addToCart({
      id,
      title,
      price,
      image,
    });

    toast.success("محصول به سبد خرید اضافه شد.");

    if (!imageRef.current) return;

    const cart =
      document.getElementById("cart-icon");

    if (!cart) return;

    flyToCart(
      imageRef.current,
      cart
    );
  };

  return (
    <button
      onClick={handleClick}
      className="mt-6 w-full rounded-xl bg-cyan-500 py-3 font-bold text-black transition hover:bg-cyan-400 hover:scale-105"
    >
      افزودن به سبد خرید
    </button>
  );
}