import ProductDetailsComponent from "@/components/Products/ProductDetails";
import { notFound } from "next/navigation";

const ProductDetails = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  const response = await fetch(
    `https://api.abcz.workers.dev/api/bazardor/products/${id}`,
  );
  if (response.status === 404) {
    notFound();
  }
  if (!response.ok) {
    throw new Error("Failed to fetch product");
  }

  const productData = await response.json();

  if (!productData || !productData.id) {
    notFound();
  }

  return (
    <div>
      <ProductDetailsComponent productData={productData} />
    </div>
  );
};

export default ProductDetails;
