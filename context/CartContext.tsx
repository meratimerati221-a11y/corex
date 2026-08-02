"use client";

import { createContext } from "react";

export type CartItem = {
  id: number;
  title: string;
  price: string;
  image: string;
  quantity: number;
};

export type CartContextType = {
  cart: CartItem[];

  addToCart: (
    item: Omit<CartItem, "quantity">
  ) => void;

  removeFromCart: (id: number) => void;

  increaseQuantity: (id: number) => void;

  decreaseQuantity: (id: number) => void;

  clearCart: () => void;

  cartCount: number;
};

export const CartContext =
  createContext<CartContextType | null>(null);
