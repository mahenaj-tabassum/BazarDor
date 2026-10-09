type Category = {
  id: string;
  slug: string;
  nameBn: string;
  icon: string;
};
const BASE_URL = "https://api.abcz.workers.dev/api/bazardor";

export const getCategories = async (): Promise<Category[]> => {
  const res = await fetch(`${BASE_URL}/categories`);

  if (!res.ok) {
    throw new Error("Failed to fetch categories");
  }

  return res.json();
};
