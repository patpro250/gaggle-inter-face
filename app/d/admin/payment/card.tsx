import Link from "next/link";

export function PlanAndHistorySection() {
  const history = [
    {
      id: 1,
      date: "2025-04-01",
      amount: "₹999",
      plan: "Institution Premium",
      status: "Paid",
    },
    {
      id: 2,
      date: "2024-04-01",
      amount: "₹999",
      plan: "Institution Premium",
      status: "Paid",
    },
  ];

  return (
    <div className="bg-white shadow rounded-lg p-6 space-y-8  ">
      {/* Plan Card */}
      <div className="border border-gray-200 rounded-lg p-4 grid  grid-cols-1 md:grid-cols-3 gap-3  ">
        <div className=" border-1 border-gray-200 rounded-2xl p-4 ">
          <h2 className="text-xl font-bold mb-2">Your Current Plan</h2>
          <p className="text-gray-600">
            Plan: <strong>Institution Premium</strong>
          </p>
          <p className="text-gray-600">Price: ₹999/year</p>
          <p className="text-gray-600 mb-2">
            Features: Unlimited books, librarian access, support
          </p>
          <Link
            className="mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
            href={"/d/admin/payment/payInfo"}
          >
            Buy 01
          </Link>
        </div>

        <div className=" border-1 border-gray-200 rounded-2xl p-4 ">
          <h2 className="text-xl font-bold mb-2">Your Current Plan</h2>
          <p className="text-gray-600">
            Plan: <strong>Institution Premium</strong>
          </p>
          <p className="text-gray-600">Price: ₹999/year</p>
          <p className="text-gray-600 mb-2">
            Features: Unlimited books, librarian access, support
          </p>
          <Link
            className="mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
            href={"/d/admin/payment/payInfo"}
          >
            Buy 01
          </Link>
        </div>

        <div className=" border-1 border-gray-200 rounded-2xl p-4 ">
          <h2 className="text-xl font-bold mb-2">Your Current Plan</h2>
          <p className="text-gray-600">
            Plan: <strong>Institution Premium</strong>
          </p>
          <p className="text-gray-600">Price: ₹999/year</p>
          <p className="text-gray-600 mb-2">
            Features: Unlimited books, librarian access, support
          </p>
          <Link
            className="mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
            href={"/d/admin/payment/payInfo"}
          >
            Buy 01
          </Link>
        </div>
      </div>

      {/* Payment History Table */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Payment History</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto border border-gray-200 rounded-md">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">
                  Date
                </th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">
                  Plan
                </th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">
                  Amount
                </th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {history.map((item) => (
                <tr key={item.id} className="border-t">
                  <td className="px-4 py-2 text-sm text-gray-600">
                    {item.date}
                  </td>
                  <td className="px-4 py-2 text-sm text-gray-600">
                    {item.plan}
                  </td>
                  <td className="px-4 py-2 text-sm text-gray-600">
                    {item.amount}
                  </td>
                  <td className="px-4 py-2 text-sm text-green-600 font-medium">
                    {item.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
