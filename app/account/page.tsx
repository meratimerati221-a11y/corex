"use client";

import { useAuth } from "@/context/AuthContext";

export default function AccountPage() {
  const { user } = useAuth();

  if (!user) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-[#070B18]">
        <h1 className="text-2xl text-white">
          لطفا ابتدا وارد حساب کاربری شوید.
        </h1>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#070B18] px-8 py-20">
      <div className="mx-auto max-w-5xl rounded-2xl border border-cyan-500/20 bg-white/5 p-10">

        <h1 className="mb-10 text-4xl font-black text-cyan-400">
          My Account
        </h1>

        <div className="space-y-6">

          <div>
            <p className="text-gray-400">
              Email
            </p>

            <h2 className="text-xl text-white">
              {user.email}
            </h2>
          </div>

          <div>
            <p className="text-gray-400">
              User ID
            </p>

            <h2 className="break-all text-sm text-white">
              {user.id}
            </h2>
          </div>

        </div>

      </div>
    </main>
  );
}