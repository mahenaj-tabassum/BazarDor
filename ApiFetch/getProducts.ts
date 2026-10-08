import { Product } from "@/types/Product";

export const getProducts = async (): Promise<Product[]> => {
  const res = await fetch("https://api.abcz.workers.dev/api/bazardor/products");
  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }
  const data = res.json();
  return data;
};
