const ProductDetailsSkeleton = () => {
  return (
    <div className="mx-6 lg:mx-0 py-5 md:py-8 md:mb-20 mb-10 animate-pulse">
      {/* Breadcrumb skeleton */}
      <div className="flex items-center gap-3 py-2">
        <div className="h-4 w-12 rounded bg-gray-200" />
        <div className="h-3 w-3 rounded bg-gray-200" />
        <div className="h-4 w-20 rounded bg-gray-200" />
        <div className="h-3 w-3 rounded bg-gray-200" />
        <div className="h-4 w-24 rounded bg-gray-200" />
      </div>

      {/* Main product card */}
      <div className="my-6 rounded-xl bg-white p-4 sm:p-5 md:p-8">
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
          <div className="flex min-w-0 flex-1 items-center gap-3">
            <div className="h-14 w-14 shrink-0 rounded bg-gray-200 sm:h-20 sm:w-20" />

            <div className="min-w-0 flex-1 space-y-3">
              <div className="h-6 w-40 max-w-full rounded bg-gray-200 sm:h-8" />
              <div className="h-4 w-36 max-w-full rounded bg-gray-200" />
              <div className="hidden h-4 w-52 max-w-full rounded bg-gray-200 sm:block" />
            </div>
          </div>

          {/* Today's price */}
          <div className="flex min-h-32 w-full flex-col items-center justify-center rounded bg-gray-100 px-4 py-3 sm:w-36 md:w-40">
            <div className="mb-3 h-4 w-20 rounded bg-gray-200" />
            <div className="mb-3 h-9 w-24 max-w-full rounded bg-gray-200" />
            <div className="h-4 w-24 rounded bg-gray-200" />
            <div className="mt-2 h-4 w-14 rounded bg-gray-200" />
          </div>
        </div>
      </div>

      {/* Price summary */}
      <div className="rounded-2xl bg-white px-5 py-5">
        <div className="mb-5 h-7 w-44 max-w-full rounded bg-gray-200" />

        <div className="mb-6 mt-4 grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">
          {Array.from({ length: 3 }).map((_, index) => (
            <div
              key={index}
              className="space-y-3 rounded-xl border border-line px-7 py-4"
            >
              <div className="h-4 w-24 rounded bg-gray-200" />
              <div className="h-8 w-32 max-w-full rounded bg-gray-200" />
              <div className="h-4 w-36 max-w-full rounded bg-gray-200" />
            </div>
          ))}
        </div>

        {/* Market table */}
        <div className="mb-4 h-7 w-56 max-w-full rounded bg-gray-200" />

        <div className="overflow-hidden rounded-2xl border border-line">
          {/* Table header */}
          <div className="grid grid-cols-5 gap-4 border-b border-line px-4 py-4">
            {Array.from({ length: 5 }).map((_, index) => (
              <div key={index} className="h-4 rounded bg-gray-200" />
            ))}
          </div>

          {/* Table rows */}
          {Array.from({ length: 5 }).map((_, index) => (
            <div
              key={index}
              className="grid grid-cols-5 gap-4 border-b border-line px-4 py-4 last:border-b-0"
            >
              {Array.from({ length: 5 }).map((_, cellIndex) => (
                <div key={cellIndex} className="h-4 rounded bg-gray-200" />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsSkeleton;
