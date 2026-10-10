function Bar({ className = "" }: { className?: string }) {
  return <div className={`rounded-md bg-slate-200/80 ${className}`} />;
}

function PriceCardSkeleton() {
  return (
    <div className="rounded-xl border border-slate-100 bg-white p-3 shadow-sm">
      {/* icon + name + unit */}
      <div className="flex items-center gap-2.5">
        <div className="size-9 shrink-0 rounded-lg bg-slate-200/80" />
        <div className="flex-1 space-y-1.5">
          <Bar className="h-3.5 w-16" />
          <Bar className="h-2.5 w-12" />
        </div>
      </div>

      {/* label */}
      <Bar className="mt-4 h-2.5 w-20" />

      {/* price + change badge */}
      <div className="mt-2 flex items-center justify-between">
        <Bar className="h-4 w-16" />
        <div className="h-5 w-14 rounded-full bg-slate-200/80" />
      </div>
    </div>
  );
}

function PriceSectionSkeleton() {
  return (
    <section className="mt-8">
      {/* section heading with marker */}
      <div className="mb-3 flex items-center gap-2">
        <div className="size-2.5 rounded-sm bg-slate-200/80" />
        <Bar className="h-4 w-32" />
      </div>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <PriceCardSkeleton key={i} />
        ))}
      </div>
    </section>
  );
}

export default function HomePageLoaderSkeleton() {
  return (
    <div
      role="status"
      aria-busy="true"
      aria-live="polite"
      className="min-h-screen bg-[#f1f6f1] px-6 py-6 motion-safe:animate-pulse"
    >
      <span className="sr-only">Loading today&apos;s market prices…</span>

      <div className="mx-auto max-w-6xl">
        {/* Hero */}
        <div className="flex items-center justify-between gap-6 rounded-2xl  bg-white p-6 shadow-sm">
          <div className="flex-1 space-y-4">
            {/* date pill */}
            <div className="h-5 w-32 rounded-full bg-slate-200/80" />
            {/* title */}
            <Bar className="h-8 w-3/4 max-w-sm" />
            {/* description */}
            <div className="space-y-2">
              <Bar className="h-3 w-full max-w-md" />
              <Bar className="h-3 w-2/3 max-w-xs" />
            </div>
            {/* button */}
            <div className="h-8 w-28 rounded-md bg-slate-300/80" />
          </div>

          {/* basket illustration */}
          <div className="hidden h-32 w-48 shrink-0 rounded-2xl bg-slate-200/70 sm:block" />
        </div>

        {/* Price up / price down */}
        <PriceSectionSkeleton />
        <PriceSectionSkeleton />

        {/* All products heading + first rows */}
        <section className="mt-8">
          <Bar className="mb-3 h-4 w-20" />
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 3 }).map((_, i) => (
              <PriceCardSkeleton key={i} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
