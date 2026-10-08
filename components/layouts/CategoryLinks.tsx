import { getCategories } from "@/ApiFetch/getCategories";
import CategoryLinksClient from "./CategoryLinksClient";

const CategoryLinks = async () => {
  const links = await getCategories();

  return (
    <div className="bg-white">
      <CategoryLinksClient links={links} />
    </div>
  );
};

export default CategoryLinks;
