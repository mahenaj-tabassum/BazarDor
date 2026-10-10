// components/skeletons/CategoryPageLoaderSkeleton.tsx
// Skeleton for a category page (e.g. "চাল"): header card, count + sort row,
// and a grid of product price cards.

function Bar({ className = "" }: { className?: string }) {
  return <div className={`rounded-md bg-slate-200/80 ${className}`} />;
}

function ProductCardSkeleton() {
  return (
    <div className="rounded-xl bg-white p-5 shadow-sm">
      {/* icon + name + unit */}
      <div className="flex items-center gap-3">
        <div className="size-11 shrink-0 rounded-xl bg-slate-200/80" />
        <div className="flex-1 space-y-2">
          <Bar className="h-4 w-28" />
          <Bar className="h-3 w-16" />
        </div>
      </div>

      {/* label */}
      <Bar className="mt-6 h-3 w-20" />

      {/* price + change badge */}
      <div className="mt-2 flex items-center justify-between">
        <Bar className="h-5 w-24" />
        <div className="h-7 w-[70px] rounded-md bg-slate-200/80" />
      </div>
    </div>
  );
}

export default function CategorySkeleton({ count = 6 }: { count?: number }) {
  return (
    <div
      role="status"
      aria-busy="true"
      aria-live="polite"
      className="min-h-screen bg-[#f1f6f1] px-4 py-10 motion-safe:animate-pulse"
    >
      <span className="sr-only">Loading category prices…</span>

      <div className="mx-auto max-w-6xl">
        {/* Category header card */}
        <div className="flex items-center gap-5 rounded-2xl bg-white px-6 py-7 shadow-sm">
          <div className="size-12 shrink-0 rounded-2xl bg-slate-200/80" />
          <div className="flex-1 space-y-2.5">
            <Bar className="h-7 w-24" />
            <Bar className="h-3 w-48" />
          </div>
        </div>

        {/* Count + sort row */}
        <div className="mt-14 flex items-center justify-between gap-4">
          <Bar className="h-3 w-36" />
          <div className="flex items-center gap-3">
            <Bar className="h-3 w-10" />
            <div className="h-10 w-56 rounded-lg border border-slate-100 bg-white" />
          </div>
        </div>

        {/* Product grid */}
        <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: count }).map((_, i) => (
            <ProductCardSkeleton key={i} />
          ))}
        </div>
      </div>
    </div>
  );
}
