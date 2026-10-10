import type { Product } from "@/types/Product";
import Link from "next/link";

type Props = {
  product: Product;
};
const HomeProductCard = ({ product }: Props) => {
  const unitBn: Record<string, string> = {
    kg: "কেজি",
    litre: "লিটার",
    dozen: "ডজন",
    piece: "পিস",
  };
  return (
    <Link
      href={`/product/${product.id}`}
      className="bg-white rounded-xl px-5 py-3 hover:-translate-y-1.5 transition-all duration-300"
    >
      <div className="flex items-center gap-3 mb-3">
        <span className="h-12 w-12 flex items-center justify-center bg-gray-200 rounded-xl">
          {product.image}
        </span>
        <div>
          <h3 className="font-semibold text-[16px]">{product.nameBn}</h3>
          <p className="text-muted">প্রতি {unitBn[product.unit]}</p>
        </div>
      </div>
      <p className="text-muted mt-5">আজকের দাম</p>
      <div className="flex items-center justify-between">
        <p>
          <span className="text-[24px] font-bold mr-2">
            {product.today.toLocaleString("bn-BD")}
          </span>
          টাকা
        </p>

        <div
          className={`px-3 py-0.5 rounded ${product.change.dir === "up" ? "bg-error/10 text-error " : product.change.dir === "down" ? "bg-success/10 text-success" : "bg-gray-100 text-gray-600"}`}
        >
          <span
            className={`${product.change.dir === "up" ? "text-red-500" : product.change.dir === "down" ? "text-success" : "text-gray-400"}`}
          >
            {product.change.dir === "up"
              ? "▲"
              : product.change.dir === "down"
                ? "▼"
                : "—"}
          </span>
          <span className="font-bangla">
            {Math.abs(product.change.pct).toLocaleString("bn-BD")}%
          </span>
        </div>
      </div>
    </Link>
  );
};

export default HomeProductCard;
