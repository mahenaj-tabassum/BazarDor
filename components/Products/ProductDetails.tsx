import { Product } from "@/types/Product";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

type Props = {
  productData: Product;
};
const unitLabels: Record<string, string> = {
  kg: "কেজি",
  gram: "গ্রাম",
  litre: "লিটার",
  ml: "মিলিলিটার",
  piece: "পিস",
  dozen: "ডজন",
};

const ProductDetailsComponent = ({ productData }: Props) => {
  const markets = productData.markets ?? [];
  const lowestMarket = markets.reduce((lowest, market) =>
    market.min < lowest.min ? market : lowest,
  );
  const highestMarket = markets.reduce((highest, market) =>
    market.max > highest.max ? market : highest,
  );
  const average = Math.round(
    markets.reduce((total, market) => total + market.min + market.max, 0) /
      (markets.length * 2),
  );

  return (
    <div className="mx-6 lg:mx-0 py-5 md:py-8 md:mb-20 mb-10">
      {/* Bread Crumbs */}
      <ul className="flex items-center gap-2 py-2">
        {/* Home */}
        <li className="hover:text-accent/80">
          <Link href="/">হোম</Link>
        </li>
        <li>
          <ChevronRight size={15} className="text-gray-400" />
        </li>

        {/* Category */}
        <li className="hover:text-accent/80">
          <Link href={`/product?category=${productData.category}`}>
            {productData.categoryNameBn}
          </Link>
        </li>

        <li>
          <ChevronRight size={15} className="text-gray-400" />
        </li>

        {/* Product */}
        <li>
          <Link href={`/product/${productData.id}`} className="text-accent">
            {productData.nameBn}
          </Link>
        </li>
      </ul>

      {/* Main Card */}
      <div className="my-6 p-4 md:p-8 sm:p-5 bg-white flex flex-col sm:flex-row sm:items-center justify-between gap-5 rounded-xl">
        {/* Left Side */}
        <div className="flex items-center gap-3 min-w-0 flex-1">
          <div className="h-14 w-14 sm:h-20 sm:w-20 shrink-0 rounded flex items-center justify-center bg-gray-100">
            <span className="text-2xl sm:text-3xl">{productData.image}</span>
          </div>
          <div>
            <h2 className="font-bold text-xl sm:text-2xl md:text-3xl wrap-break-word">
              {productData.nameBn}
            </h2>
            <span className="text-muted">
              প্রতি {unitLabels[productData.unit] ?? productData.unit} ·{" "}
              {productData.categoryNameBn}
            </span>
            <p className="hidden sm:block">
              গতকালের তুলনায় আজ দাম{" "}
              {productData.change.dir === "up" ? (
                <>
                  <span className="font-bold">বেড়েছে</span>
                  {" · "}
                  {(productData.today - productData.yesterday).toLocaleString(
                    "bn-BD",
                  )}{" "}
                  টাকা
                </>
              ) : productData.change.dir === "down" ? (
                <>
                  <span className="font-bold">কমেছে</span>
                  {" · "}
                  {(productData.yesterday - productData.today).toLocaleString(
                    "bn-BD",
                  )}{" "}
                  টাকা
                </>
              ) : (
                <span className="font-bold">অপরিবর্তিত</span>
              )}
            </p>
          </div>
        </div>

        {/* Right Side */}
        <div className="w-full sm:w-36 md:w-40 shrink-0 min-h-32 px-4 py-3 bg-gray-100 flex flex-col items-center justify-center rounded">
          <div className="text-center">
            <p className="text-[14px] text-muted">আজকের দাম</p>
            <p className="text-3xl sm:text-4xl font-bold">
              {productData.today.toLocaleString("bn-BD")}
            </p>
            <span className="text-muted text-[14px]">
              টাকা / {unitLabels[productData.unit] ?? productData.unit}
            </span>

            {productData.change.dir === "up" ? (
              <span className="text-error text-[14px] flex justify-center font-bold">
                ▲ {Math.abs(productData.change.pct).toLocaleString("bn-BD")}%
              </span>
            ) : productData.change.dir === "down" ? (
              <span className="text-success text-[14px] flex justify-center font-bold">
                ▼ {Math.abs(productData.change.pct).toLocaleString("bn-BD")}%
              </span>
            ) : (
              "— ০%"
            )}
          </div>
        </div>
      </div>

      {/* List Container */}
      <div className="bg-white rounded-2xl px-5 py-5">
        {/* 3 cards */}
        <h3 className="text-xl font-semibold">দামের সারসংক্ষেপ</h3>
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5 mb-6 mt-4">
          <div className="border border-line py-4 px-7 rounded-xl">
            <p className="text-[12px] text-muted">সর্বনিম্ন দাম</p>
            <p className="text-accent">
              <span className="font-bold text-2xl">
                {lowestMarket.min.toLocaleString("bn-BD")}
              </span>{" "}
              টাকা
            </p>
            <p>সবচেয়ে কম দামের বাজার</p>
          </div>
          <div className="border border-line py-4 px-7 rounded-xl">
            <p className="text-[12px] text-muted">সর্বাধিক দাম</p>
            <p className="text-error">
              <span className="font-bold text-2xl">
                {highestMarket.max.toLocaleString("bn-BD")}
              </span>{" "}
              টাকা
            </p>
            <p>সবচেয়ে বেশি দামের বাজার</p>
          </div>
          <div className="border border-line py-4 px-7 rounded-xl">
            <p className="text-[12px] text-muted">গড় দাম</p>
            <p className="text-accent">
              <span className="font-bold text-2xl">
                {average.toLocaleString("bn-BD")}
              </span>{" "}
              টাকা
            </p>
            <p>প্রতি {unitLabels[productData.unit]}-এর হিসাবে</p>
          </div>
        </div>

        {/* Lists */}
        <div>
          <h3 className="text-lg sm:text-2xl font-semibold mb-6">
            বাজারভিত্তিক আজকের দাম
          </h3>
          <div className="border border-line rounded-2xl overflow-x-auto">
            <div>
              <ul className="grid min-w-175 grid-cols-[1.5fr_2fr_1fr_1fr_1fr] border-b border-line px-4 py-3">
                <li className="text-muted/70 font-bold">বাজার</li>
                <li className="text-muted/70 font-bold">বিভাগ</li>
                <li className="text-muted/70 font-bold">সর্বনিম্ন</li>
                <li className="text-muted/70 font-bold">সর্বাধিক</li>
                <li className="text-right text-muted/70 font-bold">গড়</li>
              </ul>
              {markets.map((market, idx) => {
                return (
                  <ul
                    key={idx}
                    className="odd:bg-gray-100 min-w-175 grid grid-cols-[1.5fr_2fr_1fr_1fr_1fr] border-b last:border-b-0 border-black px-4 py-3"
                  >
                    <li>{market.market}</li>
                    <li>{market.division}</li>
                    <li>{market.min.toLocaleString("bn-BD")} টাকা</li>
                    <li>{market.max.toLocaleString("bn-BD")} টাকা</li>
                    <li className="text-right">
                      {((market.max + market.min) / 2).toLocaleString("bn-BD")}{" "}
                      টাকা
                    </li>
                  </ul>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsComponent;
