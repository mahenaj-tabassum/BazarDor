import Link from "next/link";
import Logo from "@/public/logo.png";
import Image from "next/image";
export const metadata = {
  title: "পেজটি পাওয়া যায়নি | বাজার দর",
};

const NotFound = () => {
  return (
    <section className="relative flex md:flex-row flex-col py-10 md:py-4 min-h-[70vh] gap-5 items-center justify-between overflow-hidden md:px-10 px-5 text-center">
      <span
        aria-hidden="true"
        className="pointer-events-none  select-none md:text-[14rem] md:ml-30 text-6xl font-black leading-none text-accent/50 sm:text-[16rem]"
      >
        404
      </span>

      <div className="relative flex flex-col items-center">
        <Image src={Logo} alt="logo" width={90} height={90} />

        <h1 className="mt-8 text-3xl font-bold text-ink sm:text-4xl">
          পেজটি খুঁজে পাওয়া যায়নি
        </h1>
        <p className="mt-3 max-w-md text-muted">
          আপনি যে পেজটি খুঁজছেন সেটি হয়তো সরানো হয়েছে, অথবা লিংকটি ভুল।
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/"
            className="rounded-lg bg-accent px-5 py-3 font-semibold text-white transition hover:bg-accent/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            হোম পেজে ফিরুন
          </Link>
          <Link
            href="#সব-পণ্য"
            className="rounded-lg border border-line bg-white px-5 py-3 font-semibold text-ink transition hover:border-accent hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            সব পণ্য দেখুন
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
