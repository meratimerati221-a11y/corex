"use client";

import { useState } from "react";
import useCart from "@/context/useCart";

export default function CheckoutPage() {
  const { cart } = useCart();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const [errors, setErrors] = useState({
    name: "",
    phone: "",
    address: "",
  });

  const totalItems = cart.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  const total = cart.reduce((sum, item) => {
    const price = Number(item.price.replace(/,/g, ""));
    return sum + price * item.quantity;
  }, 0);

  return (
    <main className="min-h-screen bg-[#050816] text-white">
      <div className="mx-auto max-w-7xl px-8 py-20">

        <h1 className="mb-14 text-5xl font-black">
          پرداخت سفارش
        </h1>

        <div className="grid gap-10 lg:grid-cols-3">

          {/* فرم اطلاعات */}
          <div className="space-y-6 rounded-3xl border border-cyan-500/20 bg-[#111827] p-8 lg:col-span-2">

            <h2 className="text-3xl font-bold">
              اطلاعات مشتری
            </h2>

            <input
            {errors.name && (
            <p className="text-red-400 text-sm">
            {errors.name}
            </p>
)}
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="نام و نام خانوادگی"
              className="w-full rounded-xl bg-[#1b2435] p-4 outline-none focus:ring-2 focus:ring-cyan-400"
            />

            <input
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              type="text"
              placeholder="شماره موبایل"
              className="w-full rounded-xl bg-[#1b2435] p-4 outline-none focus:ring-2 focus:ring-cyan-400"
            />

            <textarea
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              rows={5}
              placeholder="آدرس کامل"
              className="w-full rounded-xl bg-[#1b2435] p-4 outline-none focus:ring-2 focus:ring-cyan-400"
            />

            <h2 className="pt-6 text-3xl font-bold">
              روش پرداخت
            </h2>

            <div className="space-y-4">

              <label className="flex items-center gap-3 rounded-xl bg-[#1b2435] p-4">
                <input
                  type="radio"
                  name="payment"
                  defaultChecked
                />
                پرداخت آنلاین
              </label>

              <label className="flex items-center gap-3 rounded-xl bg-[#1b2435] p-4">
                <input
                  type="radio"
                  name="payment"
                />
                پرداخت در محل
              </label>

            </div>

          </div>

          {/* خلاصه سفارش */}
          <div className="rounded-3xl border border-cyan-500/20 bg-[#111827] p-8">

            <h2 className="text-3xl font-bold">
              خلاصه سفارش
            </h2>

            <div className="mt-8 mb-8 space-y-4">

              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between border-b border-cyan-500/10 pb-4"
                >
                  <div className="flex items-center gap-3">

                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-16 w-16 rounded-lg object-cover"
                    />

                    <div>

                      <h3 className="font-bold">
                        {item.title}
                      </h3>

                      <p className="text-sm text-gray-400">
                        تعداد: {item.quantity}
                      </p>

                    </div>

                  </div>

                  <span className="text-cyan-400">
                    {item.price}
                  </span>

                </div>
              ))}

            </div>

            <div className="space-y-4 text-lg">

              <div className="flex justify-between">
                <span>تعداد کالا</span>
                <span>{totalItems}</span>
              </div>

              <div className="flex justify-between">
                <span>هزینه ارسال</span>
                <span>رایگان</span>
              </div>

              <hr className="border-cyan-500/20" />

              <div className="flex justify-between text-2xl font-black text-cyan-400">
                <span>مبلغ نهایی</span>

                <span>
                  {total.toLocaleString("fa-IR")} تومان
                </span>

              </div>

            </div>

            <button
              className="mt-10 w-full rounded-xl bg-cyan-500 py-4 text-xl font-bold text-black transition hover:bg-cyan-400"
            >
              پرداخت
            </button>

          </div>

        </div>

      </div>
    </main>
  );
}

