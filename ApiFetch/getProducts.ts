import { Product } from "@/types/Product";

const BASE_URL = "https://openapi.programming-hero.com/api/bazardor";
export const getProducts = async (): Promise<Product[]> => {
  const res = await fetch(`${BASE_URL}/products`);
  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }
  const data = res.json();
  return data;
};
