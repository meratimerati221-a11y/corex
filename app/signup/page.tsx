"use client";

import { useState } from "react";
import { signUp } from "@/lib/auth";

export default function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSignup(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (loading) return;

    setLoading(true);
    setMessage("");

    try {
      const data = await signUp(email.trim(), password);

      if (data.session) {
        setMessage("Account created and logged in successfully!");
      } else {
        setMessage(
          "Account created. Please check your email to verify your account before logging in."
        );
      }
    } catch (error: any) {
      console.error("Signup error:", error);

      setMessage(
        error?.message || "Could not create your account."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#070B18] px-6">
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
            disabled={loading}
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full rounded-lg p-3 text-black"
            required
            disabled={loading}
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-lg bg-blue-600 py-3 font-bold text-white transition hover:bg-blue-500 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {loading ? "Creating account..." : "Sign Up"}
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