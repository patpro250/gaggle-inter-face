// "use server";
import Link from "next/link";
import { GetPlan } from "./payInfo/getPlan";

export async function PlanAndHistorySection() {
  const plans = await GetPlan();

  return (
    <div className="bg-white shadow rounded-lg p-6 space-y-8  ">
      {/* Plan Card */}
      <div className="border border-gray-200 rounded-lg p-4 grid  grid-cols-1 md:grid-cols-3 gap-3  ">
        {plans.map((data) => (
          <div
            key={data.id}
            className=" border-1 border-gray-200 rounded-2xl p-4 "
          >
            <h2 className="text-xl font-bold mb-2">{data.name}</h2>
            <p className="text-gray-600">
              Discount: <strong>{data.discount}</strong>
            </p>
            <p className="text-gray-600">Price: {data.price} Rwf</p>
            <p className="text-gray-600 mb-2">Features: {data.features}</p>
            <Link href={"/d/admin/payment/payInfo"}>
              <button className="mt-2 px-4 py-1 bg-primary w-full text-white rounded hover:bg-blue-700 transition">
                Buy Now
              </button>
            </Link>
          </div>
        ))}
      </div>

      {/* Payment History Table */}
    </div>
  );
}
