import Banner from "@/components/Home/Banner";
import ProductSections from "@/components/Products/ProductSections";
export default function Home() {
  return (
    <div className="mx-5 lg:mx-6">
      <Banner />
      <ProductSections />
    </div>
  );
}
