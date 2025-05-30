"use client";

import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchPayments } from "../d/admin/payment/InitiPayment";
import { CheckCircle, Clock, Forward } from "lucide-react";

const ITEMS_PER_PAGE = 5;

const PaymentHistory = () => {
  const [currentPage, setCurrentPage] = useState(1);

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

  const totalPages = Math.ceil(payments.length / ITEMS_PER_PAGE);
  const paginatedPayments = payments.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

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
                  Payment Method
                </th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">
                  Amount
                </th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">
                  Status
                </th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {paginatedPayments.map((payment, index) => (
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
                  <td className="px-4 py-2 text-sm text-gray-700">
                    <Forward />
                  </td>
                  <td className="px-6 py-4">
                    {payment.status === "SUCCESS" ? (
                      <span className="inline-flex text-sm items-center gap-1 text-green-600 dark:text-green-400 font-medium">
                        <CheckCircle size={12} /> {payment.status}
                      </span>
                    ) : payment.status === "APPROVED" ? (
                      <span className="inline-flex text-sm items-center gap-1 text-primary dark:text-primary font-medium">
                        <CheckCircle size={16} /> {payment.status}
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 text-orange-500 font-medium">
                        <Clock size={16} /> {payment.status}
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination Controls */}
        <div className="mt-4 flex justify-center gap-2 text-sm text-gray-700">
          <button
            onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
            disabled={currentPage === 1}
            className="px-3  py-0 text-sm border-2 border-primary rounded  disabled:opacity-10 disabled:bg-primary disabled:text-white "
          >
            Prev
          </button>
          <span className="px-3 py-1">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="px-3  py-0 text-sm border-2 border-primary rounded  disabled:opacity-10 disabled:bg-primary disabled:text-white "
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentHistory;
