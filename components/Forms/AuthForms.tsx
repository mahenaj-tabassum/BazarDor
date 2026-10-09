"use client";

import Link from "next/link";
import { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const AuthForms = ({ mode }: { mode: "in" | "up" }) => {
  const signUp = mode === "up";

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const inputClass =
    "mt-2 w-full rounded border border-ink/30 bg-transparent px-4 py-2.5 text-ink outline-none transition-colors placeholder:text-muted/70 focus:border-accent";

  return (
    <div className="flex w-full justify-center px-4">
      <div className="mt-5 md:mt-10 w-full max-w-lg">
        <div className="mb-6 text-center">
          <h2 className="text-2xl font-bold">
            {signUp ? "অ্যাকাউন্ট তৈরি করুন" : "সাইন ইন"}
          </h2>

          <p className="mt-2 text-sm text-muted">
            {signUp
              ? "বিনা খরচে সাইন আপ করে সব বিস্তারিত দাম দেখুন।"
              : "বিস্তারিত দাম, বাজার তুলনা ও প্রোফাইল দেখতে অ্যাকাউন্টে ঢুকুন।"}
          </p>
        </div>

        <div className="w-full my-10 rounded-2xl bg-white px-5 py-6 sm:px-7">
          <form>
            <div className="space-y-5">
              {signUp && (
                <label className="block text-sm text-ink">
                  Full name
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className={inputClass}
                    placeholder="আপনার পুরো নাম লিখুন"
                    autoComplete="name"
                    required
                  />
                </label>
              )}

              <label className="block text-sm text-ink">
                Email address
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={inputClass}
                  placeholder="আপনার ইমেইল লিখুন"
                  autoComplete="email"
                  required
                />
              </label>

              <label className="block text-sm text-ink">
                Password
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className={inputClass}
                  placeholder="পাসওয়ার্ড লিখুন"
                  autoComplete={signUp ? "new-password" : "current-password"}
                  required
                />
              </label>

              {signUp && (
                <label className="block text-sm text-ink">
                  Confirm Password
                  <input
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className={inputClass}
                    placeholder="পাসওয়ার্ড নিশ্চিত করুন"
                    autoComplete="new-password"
                    required
                  />
                </label>
              )}
            </div>

            <button
              type="submit"
              className="mt-6 cursor-pointer w-full rounded-lg bg-accent px-4 py-3 font-medium text-white transition-opacity hover:opacity-90"
            >
              {signUp ? "অ্যাকাউন্ট তৈরি করুন" : "সাইন ইন করুন"}
            </button>
          </form>

          {/* Divider */}
          <div className="mt-8 flex items-center gap-4 text-xs font-semibold text-muted">
            <span className="h-px flex-1 bg-line" />
            অথবা
            <span className="h-px flex-1 bg-line" />
          </div>

          {/* Social Links */}
          <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
            <button
              type="button"
              className="flex w-full items-center justify-center gap-3 rounded-lg border border-line bg-white px-4 py-3 text-sm font-medium text-ink transition-colors hover:bg-gray-50 cursor-pointer"
            >
              <FcGoogle size={21} />
              <span>Google দিয়ে চালিয়ে যান</span>
            </button>

            <button
              type="button"
              className="flex w-full items-center justify-center gap-3 rounded-lg border border-line bg-white px-4 py-3 text-sm font-medium text-ink transition-colors hover:bg-gray-50 cursor-pointer"
            >
              <FaGithub size={21} className="text-[#24292f]" />
              <span>GitHub দিয়ে চালিয়ে যান</span>
            </button>
          </div>

          <p className="mt-8 text-center text-sm text-muted">
            {signUp ? "অ্যাকাউন্ট আছে?" : "অ্যাকাউন্ট নেই?"}{" "}
            <Link
              href={signUp ? "/signin" : "/signup"}
              className="font-medium text-accent"
            >
              {signUp ? "সাইন ইন করুন" : "সাইন আপ করুন"}
            </Link>
          </p>
        </div>

        <Link href="/" className="flex  justify-center text-muted">
          ← হোম পেজে ফিরে যান
        </Link>
      </div>
    </div>
  );
};

export default AuthForms;
