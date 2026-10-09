import { getCategories } from "@/ApiFetch/getCategories";
import CategoryLinksClient from "./CategoryLinksClient";
import { Suspense } from "react";

const CategoryLinks = async () => {
  const links = await getCategories();

  return (
    <Suspense fallback={"Loading"}>
      <div className="bg-white">
        <CategoryLinksClient links={links} />
      </div>
    </Suspense>
  );
};

export default CategoryLinks;
