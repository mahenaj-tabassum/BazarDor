"use client";
import Image from "next/image";
import Logo from "@/public/logo.png";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import { ChevronDown, UserRound } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const Header = () => {
  const date = new Date().toLocaleDateString("bn-BD", {
    dateStyle: "full",
    timeZone: "Asia/Dhaka",
  });
  const { data: session } = authClient.useSession();
  const user = session?.user;
  const firstName = user?.name.split(" ")[0];
  const email = user?.email;
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const handleSignOut = async () => {
    try {
      await authClient.signOut();
      setIsOpen(false);
      toast.success("সফলভাবে সাইন আউট করা হয়েছে!");
      router.push("/");
    } catch {
      toast.error("সাইন আউট করা যায়নি, আবার চেষ্টা করুন।");
    }
  };
  return (
    <>
      <nav className={`sticky top-0 z-50 border-b border-line  bg-white`}>
        <div className="max-w-6xl mx-auto h-20">
          <div className="flex justify-between py-3 px-6 lg:px-0">
            <Link href="/" className="flex items-center gap-3">
              <Image src={Logo} alt="Logo" width={40} height={40} />
              <div>
                <h2 className="text-xl font-bold">বাজার দর</h2>
                <p suppressHydrationWarning className="text-[14px] text-muted">
                  {date}
                </p>
              </div>
            </Link>
            {user ? (
              <>
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 bg-accent flex items-center justify-center text-white rounded-full">
                    <h3 className="text-xl font-semibold">
                      {firstName?.charAt(0)}
                    </h3>
                  </div>
                  <div className="relative">
                    <button
                      onClick={() => setIsOpen(!isOpen)}
                      className="font-semibold cursor-pointer flex items-center gap-2"
                    >
                      {user.name?.charAt(0).toUpperCase() + user.name?.slice(1)}
                      <ChevronDown size={15} />
                    </button>

                    {isOpen && (
                      <div className="absolute right-0 top-full mt-2 w-64 rounded-xl border border-line bg-white px-4 py-5 shadow-lg z-50">
                        <p className="text-lg font-semibold ml-3">
                          {user?.name}
                        </p>
                        <p className="text-muted text-xs mb-3 ml-3">{email}</p>
                        <hr />
                        <Link
                          href="/profile"
                          onClick={() => setIsOpen(false)}
                          className="flex gap-2 mt-3 items-center hover:bg-gray-100 w-full px-3 cursor-pointer py-2 rounded"
                        >
                          <UserRound size={16} /> আমার প্রোফাইল
                        </Link>
                        <button
                          onClick={handleSignOut}
                          className="mt-3 flex items-center gap-3 text-error hover:bg-error/10 cursor-pointer w-full px-3 py-2 rounded"
                        >
                          <span> ↩</span> সাইন আউট
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </>
            ) : (
              <div className="flex items-center gap-5">
                <Link
                  href="/signin"
                  className="hidden sm:flex px-3 sm:px-4 py-2 text-sm sm:text-base rounded-xl hover:bg-gray-100 bg-white text-ink transition-colors duration-300"
                >
                  সাইন ইন
                </Link>
                <Link
                  href="/signup"
                  className="cursor-pointer px-4 py-2 rounded-xl bg-accent text-white"
                >
                  সাইন আপ
                </Link>
              </div>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
