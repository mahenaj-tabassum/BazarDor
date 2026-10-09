import { ChevronDown } from "lucide-react";

type Props = {
  sort: string;
  setSort: (value: string) => void;
};

const ProductSorting = ({ sort, setSort }: Props) => {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <span className="text-sm text-muted">সাজান</span>

      <div className="relative w-56">
        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="appearance-none w-full rounded-lg border border-line bg-white w- px-4 py-2 text-sm outline-none focus:border-accent cursor-pointer"
        >
          <option value="default">ডিফল্ট</option>
          <option value="min">দাম: কম থেকে বেশি</option>
          <option value="max">দাম: বেশি থেকে কম</option>
        </select>

        <ChevronDown
          size={16}
          className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2"
        />
      </div>
    </div>
  );
};

export default ProductSorting;
