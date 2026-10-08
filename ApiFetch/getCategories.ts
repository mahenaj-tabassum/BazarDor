type Category = {
  id: string;
  slug: string;
  nameBn: string;
  icon: string;
};
export const getCategories = async (): Promise<Category[]> => {
  const res = await fetch(
    "https://api.api-store.workers.dev/api/bazardor/categories",
  );

  if (!res.ok) {
    throw new Error("Failed to fetch categories");
  }

  return res.json();
};
