"use client";

import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import useCart from "@/context/useCart";

export default function CartBadge() {
  const { cartCount } = useCart();

  return (
    <Link
    id="cart-icon"
      href="/cart"
      className="relative flex items-center justify-center"
    >
      <ShoppingCart
        className="text-cyan-400 transition hover:scale-110"
        size={28}
      />

      {cartCount > 0 && (
        <span className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-red-500 text-xs font-bold text-white animate-bounce">
          {cartCount}
        </span>
      )}
    </Link>
  );
}