"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

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
  const searchParams = useSearchParams();
  const activeCategory = searchParams.get("category");
  return (
    <div className=" max-w-6xl mx-auto py-3 px-6 md:px-8 flex md:gap-8 gap-1">
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
  );
};

export default CategoryLinksClient;
