export function PricingCardSkeleton() {
  return (
    <div className="flex flex-wrap justify-center gap-3 p-2">
      {Array.from({ length: 3 }).map((_, idx) => (
        <div
          key={idx}
          className="animate-pulse flex flex-col p-6 w-80 border-2 border-gray-200 text-center text-gray-900 bg-white rounded-lg shadow"
        >
          <div className="h-4 bg-gray-200 rounded w-1/2 mx-auto mb-4" />
          <div className="h-6 bg-gray-300 rounded w-2/3 mx-auto mb-4" />
          <div className="h-8 bg-gray-300 rounded w-3/4 mx-auto my-8" />
          <ul role="list" className="mb-8 space-y-4 text-left">
            {[...Array(5)].map((_, i) => (
              <li key={i} className="flex items-center space-x-3">
                <div className="w-5 h-5 bg-gray-300 rounded-full" />
                <div className="h-4 bg-gray-200 rounded w-3/4" />
              </li>
            ))}
          </ul>
          <div className="h-10 bg-gray-300 rounded w-full" />
        </div>
      ))}
    </div>
  );
}
