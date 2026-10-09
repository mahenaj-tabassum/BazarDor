import { getProductByCategory } from "@/ApiFetch/getProductByCategory";
import ProductByCategory from "@/components/Products/ProductByCategory";

type Props = {
  searchParams: Promise<{ category: string }>;
};
const ProductPage = async ({ searchParams }: Props) => {
  const { category } = await searchParams;
  const productData = await getProductByCategory(category);

  return (
    <div>
      <ProductByCategory products={productData} />
    </div>
  );
};

export default ProductPage;
