"use client";

import Link from "next/link";
import { useRef } from "react";
import AddToCartButton from "./AddToCartButton";

type CardProductProps = {
  id: number;
  title: string;
  price: string;
  image: string;
};

export default function CardProduct({
  id,
  title,
  price,
  image,
}: CardProductProps) {

  return (
    <div className="group overflow-hidden rounded-3xl border border-cyan-500/20 bg-[#111827] transition duration-500 hover:-translate-y-2 hover:border-cyan-400 hover:shadow-[0_0_35px_rgba(34,211,238,0.25)]">

      <Link href={`/products/${id}`}>
        <div className="cursor-pointer overflow-hidden">
          <img          
            src={image}
            alt={title}
            className="h-64 w-full object-cover transition duration-500 group-hover:scale-110"
          />
        </div>
      </Link>

      <div className="p-6">
        <Link href={`/products/${id}`}>
          <h3 className="cursor-pointer text-2xl font-bold text-white">
            {title}
          </h3>
        </Link>

        <p className="mt-3 text-xl font-bold text-cyan-400">
          قیمت: {price} تومان
        </p>

        <AddToCartButton
        id={id}
        title={title}
        price={price}
        image={image}
        
            />
        
      </div>
    </div>
  );
}