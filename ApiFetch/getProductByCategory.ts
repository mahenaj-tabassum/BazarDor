import { Product } from "@/types/Product";

const BASE_URL = "https://openapi.programming-hero.com/api/bazardor";
export const getProductByCategory = async (
  category: string,
): Promise<Product[]> => {
  const response = await fetch(`${BASE_URL}/products?category=${category}`);

  if (!response.ok) {
    throw new Error("Failed to fetch products by category");
  }
  return response.json();
};
