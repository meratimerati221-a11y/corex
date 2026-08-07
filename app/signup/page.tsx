"use client";

import { useState } from "react";
import { signUp } from "@/lib/auth";

export default function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  async function handleSignup(e: React.FormEvent) {
    e.preventDefault();

    try {
      await signUp(email, password);
      setMessage("Account created successfully!");
    } catch (error: any) {
      setMessage(error.message);
    }
  }

  return (
    <main className="min-h-screen bg-[#070B18] flex items-center justify-center px-6">
      <div className="w-full max-w-md rounded-2xl bg-white/10 p-8">
        <h1 className="mb-6 text-3xl font-bold text-white">
          Create Account
        </h1>

        <form onSubmit={handleSignup} className="space-y-4">

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-lg p-3 text-black"
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full rounded-lg p-3 text-black"
            required
          />

          <button
            type="submit"
            className="w-full rounded-lg bg-blue-600 py-3 font-bold text-white"
          >
            Sign Up
          </button>

        </form>

        {message && (
          <p className="mt-4 text-white">
            {message}
          </p>
        )}

      </div>
    </main>
  );
}