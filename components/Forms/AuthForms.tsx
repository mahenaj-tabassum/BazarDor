"use client";

import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

type Provider = "google" | "github";

const AuthForms = ({ mode }: { mode: "in" | "up" }) => {
  const signUp = mode === "up";
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [socialLoading, setSocialLoading] = useState<Provider | null>(null);

  const inputClass =
    "mt-2 w-full rounded border border-ink/30 bg-transparent px-4 py-2.5 text-ink outline-none transition-colors placeholder:text-muted/70 focus:border-accent";

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    // Confirm Password validation
    if (signUp && password !== confirmPassword) {
      toast.error("দুটি পাসওয়ার্ড মিলছে না!");
      return;
    }
    try {
      // SIGN UP
      if (signUp) {
        const { error } = await authClient.signUp.email({
          name: name,
          email: email,
          password: password,
          callbackURL: "/",
        });
        if (error) {
          toast.error(error.message || "অ্যাকাউন্ট তৈরি করা যায়নি।");
          return;
        }
        toast.success("Account created successfully! 🎉");
        router.push("/");
        router.refresh();
      } else {
        // SIGN IN
        const { error } = await authClient.signIn.email({
          email,
          password,
          callbackURL: "/",
        });
        if (error) {
          toast.error(error.message || "ইমেইল অথবা পাসওয়ার্ড ভুল!");
          return;
        }
        toast.success("সফলভাবে সাইন ইন হয়েছে! 👋");
        router.push("/");
        router.refresh();
      }
    } catch (error) {
      console.log(error);
      toast.error("কিছু একটা সমস্যা হয়েছে। আবার চেষ্টা করুন।");
    } finally {
      setLoading(false);
    }
  };

  const handleSocial = async (provider: Provider) => {
    try {
      setSocialLoading(provider);
      const { error } = await authClient.signIn.social({
        provider,
        callbackURL: "/",
        errorCallbackURL: "/signin",
      });
      if (error) {
        toast.error(error.message || "Social sign-in failed.");
      }
    } catch (error) {
      console.error(error);
      toast.error("কিছু একটা সমস্যা হয়েছে!");
    } finally {
      setSocialLoading(null);
    }
  };

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
          <form onSubmit={handleSubmit}>
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
              {loading
                ? signUp
                  ? "অ্যাকাউন্ট তৈরি হচ্ছে....."
                  : "সাইন ইন হচ্ছে....."
                : signUp
                  ? "অ্যাকাউন্ট তৈরি করুন"
                  : "সাইন ইন করুন"}
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
              onClick={() => handleSocial("google")}
              disabled={socialLoading !== null}
              type="button"
              className="flex w-full items-center justify-center gap-3 rounded-lg border border-line bg-white px-4 py-3 text-sm font-medium text-ink transition-colors hover:bg-gray-200 cursor-pointer"
            >
              {socialLoading === "google" ? (
                <>
                  <FcGoogle size={21} />
                  <span>Redirecting...</span>
                </>
              ) : (
                <>
                  <FcGoogle size={21} />
                  <span>Google দিয়ে চালিয়ে যান</span>
                </>
              )}
            </button>

            <button
              onClick={() => handleSocial("github")}
              disabled={socialLoading !== null}
              type="button"
              className="flex w-full items-center justify-center gap-3 rounded-lg border border-line bg-white px-4 py-3 text-sm font-medium text-ink transition-colors hover:bg-gray-200 cursor-pointer"
            >
              {socialLoading === "github" ? (
                <>
                  <FaGithub size={21} />
                  <span>Redirecting...</span>
                </>
              ) : (
                <>
                  <FaGithub size={21} className="text-[#24292f]" />
                  <span>GitHub দিয়ে চালিয়ে যান</span>
                </>
              )}
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
