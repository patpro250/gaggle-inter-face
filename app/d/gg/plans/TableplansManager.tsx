"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  BadgeDollarSign,
  Info,
  Pencil,
  Trash2,
  PlusCircle,
} from "lucide-react";
import { useModalStoreAdmin } from "@/app/stores/useModalAdmin";

type Plan = {
  id: string;
  name: string;
  description: string;
  amount: number;
  status: "active" | "inactive";
  features: string[];
};

export default function PlansManager() {
  const { openModal } = useModalStoreAdmin();

  const [plans] = useState<Plan[]>([
    {
      id: "1",
      name: "Basic Plan",
      description: "Basic features for starters",
      amount: 9.99,
      status: "active",
      features: ["Feature A", "Feature B"],
    },
    {
      id: "2",
      name: "Pro Plan",
      description: "For professionals",
      amount: 29.99,
      status: "inactive",
      features: ["Feature A", "Feature B", "Feature C"],
    },
  ]);

  return (
    <section className="p-4 ">
      <div className="flex justify-between items-center  mb-6">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
          All Plans
        </h2>
        <button
          onClick={openModal}
          className="inline-flex items-center gap-2 rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition"
        >
          <PlusCircle className="w-5 h-5" />
          Add New Plan
        </button>
      </div>

      <div className="overflow-x-auto rounded-lg shadow border border-gray-300 dark:border-gray-600">
        <table className="min-w-full text-sm text-gray-900 dark:text-gray-200">
          <thead className="bg-gray-100 dark:bg-gray-800 text-left">
            <tr>
              <th className="p-3">Name</th>
              <th className="p-3">Description</th>
              <th className="p-3">Amount</th>
              <th className="p-3">Status</th>
              {/* <th className="p-3">Features</th> */}
              <th className="p-3">Action</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
            {plans.length > 0 ? (
              plans.map((plan) => (
                <tr
                  key={plan.id}
                  className="hover:bg-gray-50 dark:hover:bg-gray-700"
                >
                  <td className="p-3 flex items-center gap-2">
                    <BadgeDollarSign className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                    {plan.name}
                  </td>

                  <td className="p-3">
                    <Info className="inline w-4 h-4 mr-1 text-gray-500 dark:text-gray-400" />
                    {plan.description}
                  </td>

                  <td className="p-3">${plan.amount.toFixed(2)}</td>

                  <td className="p-3">
                    <span
                      className={`text-xs px-2 py-1 rounded-full font-medium uppercase tracking-wide ${
                        plan.status === "active"
                          ? "bg-green-200 text-green-800 dark:bg-green-700 dark:text-green-300"
                          : "bg-red-200 text-red-800 dark:bg-red-700 dark:text-red-300"
                      }`}
                    >
                      {plan.status}
                    </span>
                  </td>

                  {/* <td className="p-3">
                    <ul className="list-disc list-inside space-y-1 text-gray-800 dark:text-gray-300">
                      {plan.features.map((f, idx) => (
                        <li key={idx}>{f}</li>
                      ))}
                    </ul>
                  </td> */}

                  <td className="p-3 flex justify-center items-center text-right space-x-2">
                    <Link
                      href={`/admin/plans/edit/${plan.id}`}
                      className="inline-flex items-center text-blue-600 justify-center p-1 rounded hover:bg-blue-100 dark:bg-primary dark:text-white dark:hover:bg-blue-700 transition-colors"
                      title="Edit"
                      aria-label="Edit Plan"
                    >
                      <Pencil className="w-5 h-5" />
                    </Link>

                    <Link
                      href={`/admin/plans/delete/${plan.id}`}
                      className="inline-flex items-center justify-center p-1 rounded hover:bg-red-100 dark:hover:bg-red-700 text-red-600 dark:text-red-400 transition-colors"
                      title="Delete"
                      aria-label="Delete Plan"
                    >
                      <Trash2 className="w-5 h-5" />
                    </Link>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={6}
                  className="text-center p-4 text-gray-500 dark:text-gray-400"
                >
                  No plans available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
}
