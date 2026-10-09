import ProductDetailsComponent from "@/components/Products/ProductDetails";

const ProductDetails = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  const response = await fetch(
    `https://api.abcz.workers.dev/api/bazardor/products/${id}`,
  );
  const productData = await response.json();
  console.log(productData);
  return (
    <div>
      <ProductDetailsComponent productData={productData} />
    </div>
  );
};

export default ProductDetails;
