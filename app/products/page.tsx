import { notFound, redirect } from "next/navigation";
import { getProductByCategory } from "@/ApiFetch/getProductByCategory";
import ProductByCategory from "@/components/Products/ProductByCategory";
import { getCategories } from "@/ApiFetch/getCategories";

type Props = {
  searchParams: Promise<{ category?: string }>;
};

const ProductPage = async ({ searchParams }: Props) => {
  const { category } = await searchParams;

  if (!category) {
    redirect("/");
  }

  const categories = await getCategories();
  const isValidCategory = categories.some((item) => item.slug === category);
  if (!isValidCategory) {
    notFound();
  }

  const productData = await getProductByCategory(category);

  return <ProductByCategory products={productData} />;
};

export default ProductPage;
