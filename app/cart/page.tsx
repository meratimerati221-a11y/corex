"use client";

import Link from "next/link";
import useCart from "@/context/useCart";

export default function CartPage() {
  const {
    cart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
  } = useCart();

  const total = cart.reduce((sum, item) => {
    const price = Number(item.price.replace(/,/g, ""));
    return sum + price * item.quantity;
  }, 0);

  return (
    <main className="min-h-screen bg-[#050816] text-white">
      <div className="mx-auto max-w-7xl px-8 py-20">

        <h1 className="mb-12 text-5xl font-black">
          سبد خرید
        </h1>

        {cart.length === 0 ? (
          <div className="rounded-2xl bg-[#111827] p-10 text-center text-gray-400">
            سبد خرید شما خالی است.
          </div>
        ) : (
          <>
            <div className="space-y-6">

              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between rounded-2xl bg-[#111827] p-6"
                >
                  <div className="flex items-center gap-6">

                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-28 w-28 rounded-xl object-cover"
                    />

                    <div>
                      <h2 className="text-2xl font-bold">
                        {item.title}
                      </h2>

                      <p className="mt-2 text-cyan-400">
                        {item.price} تومان
                      </p>

                      <div className="mt-5 flex items-center gap-4">

                        <button
                          onClick={() =>
                            decreaseQuantity(item.id)
                          }
                          className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-700 transition hover:bg-gray-600"
                        >
                          -
                        </button>

                        <span className="text-xl font-bold">
                          {item.quantity}
                        </span>

                        <button
                          onClick={() =>
                            increaseQuantity(item.id)
                          }
                          className="flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-500 font-bold text-black transition hover:bg-cyan-400"
                        >
                          +
                        </button>

                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() =>
                      removeFromCart(item.id)
                    }
                    className="rounded-xl bg-red-500 px-6 py-3 font-bold transition hover:bg-red-400"
                  >
                    حذف
                  </button>
                </div>
              ))}

            </div>

            <div className="mt-12 rounded-2xl bg-[#111827] p-8">

              <h2 className="text-3xl font-black">
                مجموع:
              </h2>

              <p className="mt-4 text-4xl font-bold text-cyan-400">
                {total.toLocaleString("fa-IR")} تومان
              </p>

              <Link href="/checkout">
                <button className="mt-8 rounded-xl bg-cyan-500 px-10 py-4 font-bold text-black transition hover:bg-cyan-400">
                  ادامه پرداخت
                </button>
              </Link>

            </div>
          </>
        )}

      </div>
    </main>
  );
}

