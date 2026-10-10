"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { toast } from "react-hot-toast";

const AuthRedirectToast = () => {
  const searchParams = useSearchParams();

  useEffect(() => {
    const reason = searchParams.get("reason");

    if (reason === "auth-required") {
      toast.error("এই পেজটি দেখতে আগে লগইন করুন।", {
        id: "auth-required",
      });
    }
  }, [searchParams]);

  return null;
};

export default AuthRedirectToast;
