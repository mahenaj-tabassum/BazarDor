"use client";
import { Product } from "@/types/Product";
import HomeProductCard from "./HomeProductCard";
import ProductSorting from "./ProductSorting";
import { useState } from "react";
import CategorySkeleton from "../Loader/CategorySkeleton";
import Loader from "@/app/products/loading";

type Props = {
  products: Product[];
};
const ProductByCategory = ({ products }: Props) => {
  const [sort, setSort] = useState("default");

  const sortedProducts = [...products].sort((a, b) => {
    if (sort === "min") return a.today - b.today;
    if (sort === "max") return b.today - a.today;

    // don't prefer either product over the other in this comparison
    return 0;
  });
  return (
    <div className="mx-6 md:my-10 my-5 lg:mx-6">
      {/* Main Card */}
      <div className="bg-white px-5 py-5 md:rounded-2xl rounded md:mb-15 mb-7">
        <div className="flex items-center gap-4">
          <span className="text-3xl">{products[0]?.categoryIcon}</span>
          <div>
            <h2 className="text-2xl font-bold md:text-3xl">
              {products[0]?.categoryNameBn}
            </h2>
            <p className="text-muted text-[14px]">
              {products.length.toLocaleString("bn-BD")}টি পণ্যের আজকের দাম ও
              পরিবর্তন
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between my-5">
        <p className="text-muted text-[14px]">
          মোট {products.length.toLocaleString("bn-BD")}টি পণ্য দেখানো হচ্ছে
        </p>

        <ProductSorting sort={sort} setSort={setSort} />
      </div>

      <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">
        {sortedProducts.map((product) => (
          <HomeProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductByCategory;
