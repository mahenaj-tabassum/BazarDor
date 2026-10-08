import Image from "next/image";
import Logo from "@/public/logo.png";
import CategoryLinks from "./CategoryLinks";
import Link from "next/link";
import Marquee from "./Marquee";

const Header = () => {
  const date = new Date().toLocaleDateString("bn-BD", { dateStyle: "full" });

  return (
    <>
      <nav className={`sticky top-0 z-50 border-b border-line  bg-white`}>
        <div className="max-w-6xl mx-auto h-20">
          <div className="flex justify-between py-3 px-6 md:px-8">
            <Link href="/" className="flex items-center gap-3">
              <Image src={Logo} alt="Logo" width={40} height={40} />
              <div>
                <h2 className="text-xl font-bold">বাজার দর</h2>
                <p className="text-[14px] text-muted">{date}</p>
              </div>
            </Link>
            <div className="flex items-center gap-5">
              <Link
                href="/signin"
                className="cursor-pointer px-4 py-2 rounded-xl hover:bg-gray-100 bg-white text-ink duration-300 transition-colors md:flex hidden"
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
          </div>
        </div>
      </nav>
      <CategoryLinks />
      <Marquee />
    </>
  );
};

export default Header;
