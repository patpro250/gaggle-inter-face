// components/InvoiceSkeleton.tsx
export default function InvoiceSkeleton() {
  return (
    <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center animate-pulse">
      <div className="w-full max-w-3xl bg-white p-6 rounded-lg shadow">
        <div className="flex justify-between mb-4">
          <div className="h-6 w-40 bg-gray-300 rounded"></div>
          <div className="h-10 w-32 bg-gray-300 rounded"></div>
        </div>

        <div className="bg-white text-sm pt-4 pb-4 px-6">
          <div className="flex items-center justify-between border-b pb-4 mb-4">
            <div>
              <div className="h-4 w-48 bg-gray-300 mb-2 rounded"></div>
              <div className="h-4 w-32 bg-gray-300 rounded"></div>
            </div>
            <div className="h-20 w-20 bg-gray-300 rounded-full"></div>
          </div>

          <div className="flex justify-between mb-6">
            <div>
              <div className="h-4 w-24 bg-gray-300 mb-1 rounded"></div>
              <div className="h-4 w-36 bg-gray-300 rounded"></div>
            </div>
            <div className="text-right">
              <div className="h-4 w-24 bg-gray-300 mb-1 rounded"></div>
              <div className="h-4 w-32 bg-gray-300 mb-1 rounded"></div>
              <div className="h-4 w-28 bg-gray-300 rounded"></div>
            </div>
          </div>

          <div className="w-full border border-gray-200 rounded mb-6">
            <div className="grid grid-cols-3 bg-gray-100 p-2 text-gray-700">
              <div className="h-4 w-24 bg-gray-300 rounded"></div>
              <div className="h-4 w-16 bg-gray-300 rounded"></div>
              <div className="h-4 w-16 bg-gray-300 rounded"></div>
            </div>
            <div className="grid grid-cols-3 p-2">
              <div className="h-4 w-24 bg-gray-200 rounded"></div>
              <div className="h-4 w-16 bg-gray-200 rounded"></div>
              <div className="h-4 w-16 bg-gray-200 rounded"></div>
            </div>
          </div>

          <div className="flex justify-end">
            <div className="w-64 space-y-2">
              <div className="flex justify-between">
                <div className="h-4 w-20 bg-gray-300 rounded"></div>
                <div className="h-4 w-24 bg-gray-300 rounded"></div>
              </div>
              <div className="flex justify-between">
                <div className="h-4 w-20 bg-gray-300 rounded"></div>
                <div className="h-4 w-20 bg-gray-300 rounded"></div>
              </div>
              <div className="flex justify-between">
                <div className="h-4 w-32 bg-gray-300 rounded"></div>
                <div className="h-4 w-16 bg-gray-300 rounded"></div>
              </div>
            </div>
          </div>

          <div className="mt-8 h-4 w-72 bg-gray-200 rounded mx-auto"></div>
        </div>
      </div>
    </div>
  );
}
