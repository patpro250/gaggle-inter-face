"use client";

import { CopyIcon } from "@radix-ui/react-icons";
import { IconButton } from "@radix-ui/themes";
import { useQuery } from "@tanstack/react-query";
import { CheckCircle, Clock } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";
import { fetchApproved } from "../cmp/gitData";

export default function AdminPaymentPage() {
  const {
    data: payments = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["payments"],
    queryFn: fetchApproved,
  });

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error fetching payments.</p>;

  // Pagination calculation
  const totalItems = payments.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentPayments = payments.slice(startIndex, startIndex + itemsPerPage);

  const handlePageChange = (newPage: number) => {
    if (newPage < 1 || newPage > totalPages) return;
    setCurrentPage(newPage);
  };

  return (
    <div className="min-h-screen  bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-white p-6">
      <h1 className="text-xl font-bold mb-6">Approved payment</h1>

      {/* Payment Table */}
      <div className="overflow-x-auto bg-white dark:bg-gray-800 rounded-xl shadow-lg">
        <table className="min-w-full divide-y divide-gray-300 dark:divide-gray-700">
          <thead className="bg-gray-100 dark:bg-gray-700">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-medium uppercase tracking-wide">
                Done On
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium uppercase tracking-wide">
                Plan
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium uppercase tracking-wide">
                Phone
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium uppercase tracking-wide">
                Status
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium uppercase tracking-wide">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
            {(Array.isArray(currentPayments) ? currentPayments : []).map(
              (payment, index) => (
                <tr
                  key={payment.id ?? index} // fallback key to avoid missing keys
                  className="hover:bg-gray-50 dark:hover:bg-gray-700 transition"
                >
                  <td className="px-6 py-4">
                  {payment.doneAt &&
                    new Date(payment.doneAt).toLocaleString("en-GB", {
                      day: "2-digit",
                      month: "short",
                      year: "numeric",
                      hour: "2-digit",
                      minute: "2-digit",
                      second: "2-digit",
                      hour12: false,
                    })}
                </td>

                  <td className="px-6 py-4">{payment.amount}</td>
                  <td className="px-6 py-4">{payment.phoneNumber}</td>
                  <td className="px-6 py-4">
                    {payment.status === "SUCCESS" ||
                    payment.status === "APPROVED" ? (
                      <span className="inline-flex items-center gap-1 text-green-600 dark:text-green-400 font-medium">
                        <CheckCircle size={16} /> {payment.status}
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 text-orange-500 font-medium">
                        <Clock size={16} /> {payment.status}
                      </span>
                    )}
                  </td>
                  <td className="px-6 py-4">
                    <span className="inline-flex gap-2 items-center text-green-600 dark:text-green-400 font-medium">
                      {payment.confirmationCode}
                      <IconButton
                        size="1"
                        aria-label="Copy value"
                        color="green"
                        variant="ghost"
                        onClick={() => {
                          navigator.clipboard.writeText(
                            payment.confirmationCode
                          );
                          toast.success("Confirmation code copied!");
                        }}
                      >
                        <CopyIcon />
                      </IconButton>
                    </span>
                  </td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center mt-4 space-x-2">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-3 py-1 rounded-md bg-gray-300 dark:bg-gray-700 disabled:opacity-50"
        >
          Previous
        </button>

        {[...Array(totalPages)].map((_, i) => (
          <button
            key={i}
            onClick={() => handlePageChange(i + 1)}
            className={`px-3 py-1 rounded-md ${
              currentPage === i + 1
                ? "bg-blue-600 text-white"
                : "bg-gray-200 dark:bg-gray-700"
            }`}
          >
            {i + 1}
          </button>
        ))}

        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-3 py-1 rounded-md bg-gray-300 dark:bg-gray-700 disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
}
