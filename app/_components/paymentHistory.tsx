"use client";

import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { getApiClient } from "../g/schools/axios";
import { fetchPayments } from "../d/admin/payment/InitiPayment";

const PaymentHistory = () => {
  const {
    data: payments = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["payments"],
    queryFn: fetchPayments,
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error fetching payments.</p>;

  return (
    <div>
      <div className="bg-white shadow rounded-lg p-6 mt-6">
        <h3 className="text-lg font-semibold mb-4">Payment History</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto border border-gray-200 rounded-md">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">
                  Date
                </th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">
                  Phone
                </th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">
                  Currency
                </th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">
                  Pay Method
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
              {payments.map((payment, index) => (
                <tr key={index}>
                  <td className="px-4 py-2 text-sm text-gray-700">
                    {payment.doneAt}
                  </td>
                  <td className="px-4 py-2 text-sm text-gray-700">
                    {payment.phoneNumber}
                  </td>
                  <td className="px-4 py-2 text-sm text-gray-700">
                    {payment.currency}
                  </td>
                  <td className="px-4 py-2 text-sm text-gray-700">
                    {payment.method}
                  </td>
                  <td className="px-4 py-2 text-sm text-gray-700">
                    {payment.amount}
                  </td>
                  <td
                    className={`px-4 py-2 text-sm font-semibold ${
                      payment.status === "SUCCESS"
                        ? "text-green-600"
                        : payment.status === "PENDING"
                        ? "text-yellow-600"
                        : "text-red-600"
                    }`}
                  >
                    {payment.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PaymentHistory;
