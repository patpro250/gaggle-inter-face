import { PlanAndHistorySection } from "./card";

export default function ManualPaymentForm() {
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
  ]; // ✅ Correct: semicolon ends the `const` — not the function

  return (
    <>
      <div className="p-3 py-10 pb-50">
        <PlanAndHistorySection />
        <div className="bg-white shadow rounded-lg p-6 mt-6">
          <h2 className="text-xl font-bold mb-4">Complete Your Payment</h2>
          <p className="text-sm text-gray-600 mb-4">
            To activate your plan, pay ₹999 to the admin via UPI/Bank. Contact
            admin at <strong>+91-9876543210</strong> to receive payment
            instructions. After payment, enter the confirmation code below.
          </p>

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
      </div>
    </>
  );
}
