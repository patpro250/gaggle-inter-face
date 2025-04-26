"use client";
import React from "react";

const SelectPlan = () => {
  return (
    <div>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-10 px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-10">
          Choose a Plan
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {/* Plan Card */}
          {[
            {
              name: "Free Plan",
              price: "₹0",
              features: ["Basic Access", "Limited Books", "1 Librarian"],
              bg: "bg-white dark:bg-gray-800",
              btnColor: "bg-blue-500 hover:bg-blue-600 text-white",
            },
            {
              name: "Standard Plan",
              price: "₹499/mo",
              features: ["Up to 3 Librarians", "Book Tracking", "Reports"],
              bg: "bg-white dark:bg-gray-800",
              btnColor: "bg-green-500 hover:bg-green-600 text-white",
            },
            {
              name: "Premium Plan",
              price: "₹999/mo",
              features: [
                "Unlimited Librarians",
                "Advanced Reports",
                "Priority Support",
              ],
              bg: "bg-white dark:bg-gray-800",
              btnColor: "bg-purple-500 hover:bg-purple-600 text-white",
            },
          ].map((plan, i) => (
            <div
              key={i}
              className={`rounded-2xl shadow-md p-6 ${plan.bg} transition-all`}
            >
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                {plan.name}
              </h3>
              <p className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                {plan.price}
              </p>
              <ul className="space-y-2 mb-6">
                {plan.features.map((feat, j) => (
                  <li
                    key={j}
                    className="text-gray-700 dark:text-gray-300 flex items-center"
                  >
                    <span className="mr-2">✔️</span> {feat}
                  </li>
                ))}
              </ul>
              <button
                className={`w-full py-2 px-4 rounded-xl font-semibold ${plan.btnColor}`}
                onClick={() => console.log(`Selected ${plan.name}`)}
              >
                Choose Plan
              </button>
            </div>
          ))}
        </div>
      </div>
      ;
    </div>
  );
};

export default SelectPlan;
