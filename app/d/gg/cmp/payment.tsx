// "use client";

// import React, { useState } from "react";
// import {
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   ResponsiveContainer,
// } from "recharts";
// import { CheckCircle, Clock, Loader2, Send } from "lucide-react";
// import { useQuery } from "@tanstack/react-query";
// import { getApiClient } from "@/app/g/schools/axios";
// import { fetchPayments } from "./gitData";

// export default function AdminPaymentPage() {
//   const {
//     data: payments = [],
//     isLoading,
//     isError,
//   } = useQuery({
//     queryKey: ["payments"],
//     queryFn: fetchPayments,
//   });

//   if (isLoading) return <p>Loading...</p>;
//   if (isError) return <p>Error fetching payments.</p>;

//   // const [loadingId, setLoadingId] = useState<number | null>(null);
//   // const [requests, setRequests] = useState([
//   //   {
//   //     id: 1,
//   //     name: "Jane Doe",
//   //     plan: "Pro",
//   //     phone: "08012345678",
//   //     status: "pending",
//   //   },
//   //   {
//   //     id: 2,
//   //     name: "John Smith",
//   //     plan: "Basic",
//   //     phone: "09098765432",
//   //     status: "pending",
//   //   },
//   //   {
//   //     id: 3,
//   //     name: "Emily Stone",
//   //     plan: "Pro",
//   //     phone: "08099998888",
//   //     status: "completed",
//   //   },
//   // ]);

//   // const handleGenerateCode = async (id: number) => {
//   //   try {
//   //     setLoadingId(id);
//   //     // Simulate API request (replace with actual fetch/axios call)
//   //     await new Promise((res) => setTimeout(res, 1000));

//   //     setRequests((prev) =>
//   //       prev.map((req) =>
//   //         req.id === id ? { ...req, status: "completed" } : req
//   //       )
//   //     );
//   //     alert(`Payment code sent for user ID ${id}`);
//   //   } catch (err) {
//   //     alert("Failed to send code. Try again.");
//   //   } finally {
//   //     setLoadingId(null);
//   //   }
//   // };

//   // const stats = [
//   //   {
//   //     name: "Payments",
//   //     Pending: requests.filter((r) => r.status === "pending").length,
//   //     Completed: requests.filter((r) => r.status === "completed").length,
//   //   },
//   // ];

//   return (
//     <div className="min-h-screen bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-white p-6">
//       <h1 className="text-3xl font-bold mb-6">Admin Payment Dashboard</h1>

//       {/* Payment Table */}
//       <div className="overflow-x-auto bg-white dark:bg-gray-800 rounded-xl shadow-lg">
//         <table className="min-w-full divide-y divide-gray-300 dark:divide-gray-700">
//           <thead className="bg-gray-100 dark:bg-gray-700">
//             <tr>
//               <th className="px-6 py-3 text-left text-sm font-medium uppercase tracking-wide">
//                 Name
//               </th>
//               <th className="px-6 py-3 text-left text-sm font-medium uppercase tracking-wide">
//                 Plan
//               </th>
//               <th className="px-6 py-3 text-left text-sm font-medium uppercase tracking-wide">
//                 Phone
//               </th>
//               <th className="px-6 py-3 text-left text-sm font-medium uppercase tracking-wide">
//                 Status
//               </th>
//               <th className="px-6 py-3 text-left text-sm font-medium uppercase tracking-wide">
//                 Action
//               </th>
//             </tr>
//           </thead>
//           <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
//             {payments.map((payment, index) => (
//               <tr
//                 key={payment.id}
//                 className="hover:bg-gray-50 dark:hover:bg-gray-700 transition"
//               >
//                 <td className="px-6 py-4">{payment.name}</td>
//                 <td className="px-6 py-4">{payment.amount}</td>
//                 <td className="px-6 py-4">{payment.phoneNumber}</td>
//                 <td className="px-6 py-4">
//                   {payment.status === "SUCCESS" ? (
//                     <span className="inline-flex items-center gap-1 text-green-600 dark:text-green-400 font-medium">
//                       <CheckCircle size={16} /> {payment.status}
//                     </span>
//                   ) : payment.status === "APPROVED" ? (
//                     <span className="inline-flex items-center gap-1 text-orange-500 font-medium">
//                       <CheckCircle
//                         size={16}
//                         className="text-green-600 dark:text-green-400"
//                       />{" "}
//                       {payment.status}
//                     </span>
//                   ) : (
//                     <span className="inline-flex items-center gap-1 text-orange-500 font-medium">
//                       <Clock size={16} /> {payment.status}
//                     </span>
//                   )}
//                 </td>
//                 <td className="px-6 py-4">
//                   {payment.status === "PENDING" ? (
//                     <button
//                       // onClick={() => handleGenerateCode(payment.id)}

//                       className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-2 rounded-md disabled:opacity-50"
//                     >
//                       {/* {loadingId === payment.id ? (
//                         <>
//                           <Loader2 size={16} className="animate-spin" />{" "}
//                           Sending...
//                         </>
//                       ) : (
//                         <> */}
//                       <Send size={16} /> Send Code
//                       {/* </>
//                       )} */}
//                     </button>
//                   ) : (
//                     <span className="text-sm  text-green-700 ">— Paid_</span>
//                   )}
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {/* Chart
//       <div className="mt-10 bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
//         <h2 className="text-xl font-semibold mb-4">Payment Summary</h2>
//         <ResponsiveContainer width="100%" height={300}>
//           <BarChart data={stats}>
//             <CartesianGrid strokeDasharray="3 3" />
//             <XAxis dataKey="name" stroke="currentColor" />
//             <YAxis stroke="currentColor" />
//             <Tooltip
//               contentStyle={{
//                 backgroundColor: "#111827",
//                 border: "none",
//                 color: "#fff",
//               }}
//             />
//             <Bar dataKey="Pending" fill="#f97316" />
//             <Bar dataKey="Completed" fill="#10b981" />
//           </BarChart>
//         </ResponsiveContainer>
//       </div> */}
//     </div>
//   );
// }

"use client";

import React, { useState } from "react";
import { CheckCircle, Clock, Send } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { Approved, fetchPayments } from "./gitData";
import toast from "react-hot-toast";

export default function AdminPaymentPage() {
  const {
    data: payments = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["payments"],
    queryFn: fetchPayments,
  });

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5; // adjust as needed

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error fetching payments.</p>;

  // Calculate pagination values
  const totalItems = payments.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentPayments = payments.slice(startIndex, startIndex + itemsPerPage);

  const handlePageChange = (newPage: number) => {
    if (newPage < 1 || newPage > totalPages) return;
    setCurrentPage(newPage);
  };

  const generateCode = async (id: string) => {
    const res = await Approved(id);
    if (res.success) {
      toast.success(`${res.message}`);
    } else {
      toast.success(`${res.message}`);
    }
  };
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-white p-6">
      <h1 className="text-3xl font-bold mb-6">Admin Payment Dashboard</h1>

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
            {currentPayments.map((payment) => (
              <tr
                key={payment.id}
                className="hover:bg-gray-50 dark:hover:bg-gray-700 transition"
              >
                <td className="px-6 py-4">{payment.doneAt}</td>
                <td className="px-6 py-4">{payment.amount}</td>
                <td className="px-6 py-4">{payment.phoneNumber}</td>
                <td className="px-6 py-4">
                  {payment.status === "SUCCESS" ? (
                    <span className="inline-flex items-center gap-1 text-green-600 dark:text-green-400 font-medium">
                      <CheckCircle size={16} /> {payment.status}
                    </span>
                  ) : payment.status === "APPROVED" ? (
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
                  {payment.status === "PENDING" ? (
                    <button
                      onClick={() => generateCode(payment.id)}
                      className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-2 rounded-md disabled:opacity-50"
                    >
                      <Send size={16} /> Send Code
                    </button>
                  ) : (
                    <span className="text-sm text-green-700">— Paid_</span>
                  )}
                </td>
              </tr>
            ))}
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
