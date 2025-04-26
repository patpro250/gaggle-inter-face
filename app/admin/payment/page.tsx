import { Button } from "@radix-ui/themes";
import { BookmarkCheck, ChartGantt, CircleDollarSign } from "lucide-react";
import React from "react";

const Payment = () => {
  return (
    <div className=" p-4 pb-30 ">
      <h1 className="mt-5 mb-5 text-xl">Plan & History</h1>
      <div className="border-1 border-gray-200 rounded-md  p-3 flex flex-col md:flex-row ">
        {/* reft */}
        <div className="flex-1/2 bg-amber-0 min-h-60 p-3 border-0  md:!border-r-1 border-gray-200 ">
          <h1 className="text-xl uppercase flex gap-3 items-center font-normal border-b-1 border-gray-200 pb-2 text-gray-700 mb-2  ">
            <div className="bg-gray-200  text-indigo-300 p-2 rounded-full ">
              <ChartGantt size={16} />
            </div>{" "}
            Current Plan
          </h1>
          <div>
            <h1 className="text-base uppercase  font-light text-green-700 ">
              Basic Plan
            </h1>
            <div>
              <ul className="bg-amber-0 h-60 py-7  px-4 overflow-y-auto max-w-md space-y-1 text-gray-500 list-inside ">
                <h2 className="mb-2 text-lg uppercase  font-normal text-gray-700 ">
                  features for a Basic Plan
                </h2>

                <li className="flex items-center text-sm ">
                  <svg
                    className="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 shrink-0"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                  </svg>
                  Up to 200 books allowed
                </li>
                <li className="flex items-center text-sm">
                  <svg
                    className="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 shrink-0"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                  </svg>
                  1 Librarian account
                </li>
                <li className="flex items-center text-sm">
                  <svg
                    className="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 shrink-0"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                  </svg>
                  Basic book tracking (issue/return)
                </li>
                <li className="flex items-center text-sm">
                  <svg
                    className="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 shrink-0"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                  </svg>
                  Basic reporting (book issued, returned)
                </li>
                <li className="flex items-center text-sm">
                  <svg
                    className="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 shrink-0"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                  </svg>
                  Email support only
                </li>
                <li className="flex items-center text-sm">
                  <svg
                    className="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 shrink-0"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                  </svg>
                  Up to 100 users (students/teachers)
                </li>
                <li className="flex items-center text-sm">
                  <svg
                    className="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 shrink-0"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                  </svg>
                  Community knowledge base access
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* right */}
        <div className="flex-1/2 bg-amber-0 p-3  border-t-1 md:border-t-0 border-gray-200 ">
          <div className="text-xl  uppercase flex gap-5 items-center font-normal border-b-1 border-gray-200 pb-2 text-gray-700 mb-2  ">
            <button className="py-1 px-4 capitalize border-1 border-gray-200 rounded-sm hover:bg-indigo-400 overflow-hidden transition-all ease-in-out hover:text-white text-sm">
              downgrade Plan
            </button>
            <button className="py-1 px-4 border-1 capitalize border-gray-200 rounded-sm hover:bg-indigo-400 overflow-hidden transition-all ease-in-out hover:text-white text-sm">
              Upgrade Plan
            </button>
          </div>
          <div className="bg-white p-2">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-gray-800 ">
                Invoice History
              </h2>
              <button className="text-sm text-blue-600  hover:underline">
                View All
              </button>
            </div>

            <div className="overflow-y-auto h-60">
              <table className="min-w-full text-sm text-left text-gray-600 ">
                <thead className="text-sm capitalized bg-gray-50  text-gray-700 ">
                  <tr className="text-sm font-normal ">
                    <th className="px-2 py-2">Invoice </th>
                    <th className="px-2 py-2">Date</th>
                    <th className="px-2 py-2">Amount</th>
                    <th className="px-2 py-2">Status</th>
                    <th className="px-2 py-2">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      id: "INV-1001",
                      date: "2025-03-01",
                      amount: "$19.99",
                      status: "Paid",
                    },
                    {
                      id: "INV-1000",
                      date: "2025-02-01",
                      amount: "$19.99",
                      status: "Paid",
                    },
                    {
                      id: "INV-0999",
                      date: "2025-01-01",
                      amount: "$19.99",
                      status: "Failed",
                    },
                  ].map((invoice) => (
                    <tr
                      key={invoice.id}
                      className="border-b-1 border-gray-200 text-[12px] font-normal"
                    >
                      <td className="px-2 py-1 ">{invoice.id}</td>
                      <td className="px-2 py-1">{invoice.date}</td>
                      <td className="px-2 py-1">{invoice.amount}</td>
                      <td className="px-2 py-1">
                        <span
                          className={`px-2 py-1 text-[10px] rounded-sm  font-medium ${
                            invoice.status === "Paid"
                              ? "bg-green-100 text-green-600"
                              : "bg-red-100 text-red-600"
                          }`}
                        >
                          {invoice.status}
                        </span>
                      </td>
                      <td className="px-4 py-1">
                        <button className="text-blue-500 hover:underline text-xs">
                          Download
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
