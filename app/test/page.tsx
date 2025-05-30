// components/PricingCards.jsx
"use client";

import React from "react";

const pricingPlans = [
  {
    title: "Basic Plan",
    description: "Ideal for individuals getting started with basic needs.",
    price: 19,
    priceSuffix: "/month",
    features: [
      "Access to core features",
      "Email support",
      "Single user license",
      "Monthly updates",
      "Community forum access",
    ],
    buttonText: "Choose Basic",
    buttonHref: "#basic",
  },
  {
    title: "Pro Plan",
    description: "Perfect for small teams requiring more collaboration.",
    price: 49,
    priceSuffix: "/month",
    features: [
      "All Basic features",
      "Priority email support",
      "Up to 5 users",
      "Weekly updates",
      "Advanced analytics",
    ],
    buttonText: "Choose Pro",
    buttonHref: "#pro",
  },
  {
    title: "Enterprise Plan",
    description: "For large organizations needing advanced features.",
    price: 149,
    priceSuffix: "/month",
    features: [
      "All Pro features",
      "Dedicated support",
      "Unlimited users",
      "Daily updates",
      "Custom integrations",
    ],
    buttonText: "Contact Sales",
    buttonHref: "#enterprise",
  },
];

export default function PricingCards() {
  return (
    <div className="flex flex-wrap justify-center gap-8 p-6">
      {pricingPlans.map((plan, idx) => (
        <div
          key={idx}
          className="flex flex-col p-6 max-w-sm text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow"
        >
          <h3 className="mb-4 text-2xl font-semibold">{plan.title}</h3>
          <p className="font-light text-gray-500 sm:text-lg">
            {plan.description}
          </p>
          <div className="flex justify-center items-baseline my-8">
            <span className="mr-2 text-5xl font-extrabold">${plan.price}</span>
            <span className="text-gray-500">{plan.priceSuffix}</span>
          </div>
          <ul role="list" className="mb-8 space-y-4 text-left">
            {plan.features.map((feature, i) => (
              <li key={i} className="flex items-center space-x-3">
                <svg
                  className="flex-shrink-0 w-5 h-5 text-green-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
          <a
            href={plan.buttonHref}
            className="text-white bg-primary hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            {plan.buttonText}
          </a>
        </div>
      ))}
    </div>
  );
}
