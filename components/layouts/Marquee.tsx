import { getProducts } from "@/ApiFetch/getProducts";
import Link from "next/link";

const Marquee = async () => {
  const productData = await getProducts();

  const group = (hidden: boolean) => (
    <div aria-hidden={hidden} className="flex items-center shrink-0">
      {productData.map((item) => (
        <span
          key={item.id}
          className="flex border-r items-center gap-2 px-5 whitespace-nowrap"
        >
          {item.image}
          <Link
            href={`/products/${item.id}`}
            className="hover:underline cursor-pointer"
          >
            {item.nameBn}
          </Link>

          <span>
            {item.today} টাকা/{item.unit}
          </span>

          <span
            className={
              item.change.dir === "up"
                ? "text-red-500"
                : item.change.dir === "down"
                  ? "text-green-500"
                  : "text-gray-500"
            }
          >
            {item.change.dir === "up"
              ? "▲"
              : item.change.dir === "down"
                ? "▼"
                : ""}
            {item.change.pct}%
          </span>
        </span>
      ))}
    </div>
  );

  return (
    <div className="border-y border-line bg-white text-ink">
      <div className="mx-auto max-w-6xl lg:px-0 px-5 py-2 flex items-center">
        <div className="marquee-viewport min-w-0 flex-1 overflow-hidden">
          <div className="marquee flex w-max">
            {group(false)}
            {group(true)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Marquee;
