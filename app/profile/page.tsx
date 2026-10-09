"use client";

import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import toast from "react-hot-toast";

const ProfilePage = () => {
  const { data: session } = authClient.useSession();
  const user = session?.user;
  const [name, setName] = useState("");
  const [updating, setUpdating] = useState(false);
  const router = useRouter();

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!user) {
      console.log("Error");
      return;
    }

    const updatedName = name.trim();

    // Validate the name.
    if (!updatedName) {
      toast.error("নাম খালি রাখা যাবে না।");
      return;
    }

    // Avoid an unnecessary API request.
    if (updatedName === user.name.trim()) {
      toast.error("নামে কোনো পরিবর্তন করা হয়নি।");
      return;
    }

    try {
      setUpdating(true);

      const { error } = await authClient.updateUser({
        name: updatedName,
      });

      if (error) {
        toast.error(error.message || "নাম আপডেট করা যায়নি।");
        return;
      }

      setName(updatedName);
      toast.success("আপনার নাম সফলভাবে আপডেট হয়েছে!");
    } catch (error) {
      console.error("Profile update failed:", error);
      toast.error("কিছু একটা সমস্যা হয়েছে। আবার চেষ্টা করুন।");
    } finally {
      setUpdating(false);
    }
  };
  const handleSignOut = async () => {
    try {
      const { error } = await authClient.signOut();

      if (error) {
        toast.error(error.message || "সাইন আউট করা যায়নি।");
      }

      toast.success("সফলভাবে সাইন আউট করা হয়েছে!");
      router.push("/");
    } catch (error) {
      console.error("Sign-out failed:", error);
      toast.error("সাইন আউট করতে সমস্যা হয়েছে।");
    }
  };

  const inputClass =
    "mt-2 w-full rounded border border-ink/30 bg-transparent px-4 py-2.5 text-ink outline-none transition-colors placeholder:text-muted/70 focus:border-accent disabled:cursor-not-allowed disabled:opacity-60";

  const initial = user?.name?.trim().charAt(0).toUpperCase() || "U";

  return (
    <div className="mx-6 my-10 lg:mx-0">
      <div className="mx-auto md:w-3xl">
        <h2 className="text-2xl font-bold md:text-3xl">আমার প্রোফাইল</h2>

        <p className="text-[14px] text-muted">
          আপনার অ্যাকাউন্টের তথ্য এখানে দেখুন।
        </p>

        <div className="mt-5 flex items-center justify-between gap-4 rounded-2xl bg-white px-5 py-4">
          <div className="flex min-w-0 items-center gap-3">
            <div className="flex h-15 w-15 shrink-0 items-center justify-center rounded-xl bg-gray-100">
              <h3 className="text-3xl font-bold">{initial}</h3>
            </div>

            <div className="min-w-0">
              <h2 className="truncate text-xl font-semibold md:text-2xl">
                {user?.name}
              </h2>

              <p className="truncate text-muted">{user?.email}</p>
            </div>
          </div>

          <button
            type="button"
            onClick={handleSignOut}
            className="shrink-0 cursor-pointer rounded border border-error px-3 py-2 text-error transition-colors duration-300 hover:bg-error/10 disabled:cursor-not-allowed disabled:opacity-50 sm:px-4"
          >
            ↩ সাইন আউট
          </button>
        </div>

        {/* Profile form */}
        <div className="mt-5 rounded-2xl bg-white px-5 py-4 md:mt-18">
          <h3 className="text-2xl font-semibold">তথ্য</h3>

          <form onSubmit={handleFormSubmit} className="mx-auto my-5 md:w-2xl">
            <label htmlFor="profile-name">
              নাম
              <input
                id="profile-name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={inputClass}
                placeholder="আপনার নাম আপডেট করুন"
                disabled={updating}
              />
            </label>

            <button
              type="submit"
              disabled={updating || name.trim() === user?.name.trim()}
              className="mt-6 cursor-pointer w-full rounded-lg bg-accent px-4 py-3 font-medium text-white transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {updating ? "আপডেট হচ্ছে..." : "আপডেট"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
