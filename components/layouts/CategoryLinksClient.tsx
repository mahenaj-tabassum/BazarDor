"use client";
import Logo from "@/public/logo.png";
import { Menu, XIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

type Category = {
  id: string;
  slug: string;
  nameBn: string;
  icon: string;
};

type Props = {
  links: Category[];
};
const CategoryLinksClient = ({ links }: Props) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const searchParams = useSearchParams();
  const activeCategory = searchParams.get("category");
  const closeMenu = () => setMenuOpen(false);
  return (
    <>
      <div className=" max-w-6xl mx-auto py-2 px-6 md:px-8 md:flex md:gap-8 gap-1 hidden">
        {links.map((item) => {
          const isActive = activeCategory === item.slug;
          return (
            <Link
              className={`px-3 py-1 rounded transition-colors ${
                isActive
                  ? "bg-accent text-white"
                  : "hover:bg-accent hover:text-white"
              }`}
              key={item.id}
              href={`/products?category=${item.slug}`}
            >
              <span>
                {item.icon}
                {item.nameBn}
              </span>
            </Link>
          );
        })}
      </div>
      {/* Mobile Menu*/}
      <div>
        <div className="flex justify-end pr-7 md:hidden">
          <button
            aria-label="Open menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(true)}
            className="p-2.5 cursor-pointer"
          >
            <Menu />
          </button>
        </div>

        <div
          aria-hidden={!menuOpen}
          className={`
            fixed inset-0 z-60 bg-white flex flex-col px-5
            transition-all duration-300 md:hidden
        ${
          menuOpen
            ? "visible translate-y-0 opacity-100"
            : "invisible pointer-events-none -translate-y-3 opacity-0"
        }
      `}
        >
          {/* Header */}
          <div className="flex items-center justify-between border-b border-line py-3.5">
            <Image width={35} height={30} src={Logo} alt="Logo" />

            <button
              type="button"
              aria-label="Close menu"
              onClick={closeMenu}
              className="cursor-pointer p-2.5 text-ink transition-colors hover:text-red-600"
            >
              <XIcon size={26} />
            </button>
          </div>

          {/* Navigation */}
          <ul className="flex-1 overflow-y-auto py-2">
            {links.map((item, index) => {
              const isActive = activeCategory === item.slug;

              return (
                <li
                  key={item.id}
                  style={{
                    transitionDelay: menuOpen ? `${60 + index * 25}ms` : "0ms",
                  }}
                  className={`pb-[max(1.5rem,env(safe-area-inset-bottom))] pt-5 transition-all duration-300 ${
                    menuOpen
                      ? "translate-y-0 opacity-100"
                      : "translate-y-2 opacity-0"
                  }`}
                >
                  <Link
                    href={`/products?category=${item.slug}`}
                    onClick={closeMenu}
                    className={`
                        flex items-center justify-between
                        py-4 font-newsReader text-[32px] font-medium
                        uppercase tracking-[0.01em]
                        transition-colors pr-6
                        ${isActive ? "text-accent" : "text-ink hover:text-accent"}
                     `}
                  >
                    <span>{item.nameBn}</span>

                    <span className="font-sans text-base text-muted">→</span>
                  </Link>
                </li>
              );
            })}

            {/* Authentication */}
          </ul>
        </div>
      </div>
    </>
  );
};

export default CategoryLinksClient;
