import { getProducts } from "@/ApiFetch/getProducts";
import HomeProductCard from "./HomeProductCard";
import { Product } from "@/types/Product";

const ProductSections = async () => {
  const productData: Product[] = await getProducts();

  const priceUp = productData.filter((item) => item.change.dir === "up");
  const priceDown = productData.filter((item) => item.change.dir === "down");
  return (
    <section className="mb-10">
      <div className="mt-15">
        <h2 className="font-bold text-xl">
          <span className="text-red-500 mr-3">▲</span>
          আজ দাম বেড়েছে
        </h2>
        <div className="mt-5 grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">
          {priceUp
            .sort((a, b) => b.change.pct - a.change.pct)
            .slice(0, 6)
            .map((product) => (
              <HomeProductCard key={product.id} product={product} />
            ))}
        </div>
      </div>
      <div className="my-15">
        <h2 className="font-bold text-xl">
          <span className="text-green-500 mr-3">▼</span>
          আজ দাম কমেছে
        </h2>
        <div className="mt-5 grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">
          {priceDown
            .sort((a, b) => Math.abs(b.change.pct) - Math.abs(a.change.pct))
            .slice(0, 6)
            .map((product) => (
              <HomeProductCard key={product.id} product={product} />
            ))}
        </div>
      </div>
      <div id="সব-পণ্য" className="scroll-mt-24">
        <h2 className="font-bold text-xl">সব পণ্য</h2>
        <p className="text-muted">
          মোট {productData.length.toLocaleString("bn-BD")}টি পণ্য দেখানো হচ্ছে
        </p>
        <div className="mt-5 grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">
          {productData.map((product) => (
            <HomeProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSections;
