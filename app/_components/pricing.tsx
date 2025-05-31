"use client";

import { Button } from "@radix-ui/themes";
import { redirect } from "next/navigation";
import React from "react";
import toast from "react-hot-toast";

export interface PricingPlan {
  id: string;
  name: string;
  price: number; // convert string price to number when parsing data
  duration: number;
  features: string; // keep as string for now (maybe CSV or description)
  description?: string; // optional, since your data has it separately
  buttonData?: string; // new optional field from your data
  status: "ACTIVE" | "INACTIVE" | "COMING_SOON";
  limitations: {
    maxLibraries?: number | string;
    maxLibrarians?: number | string;
    [key: string]: any; // for any extra limitation fields
  };
  discount: number | null; // can be null
  freeTrialDays: number;
  createdAt: string; // ISO date string
  updatedAt: string; // ISO date string
}

export type PricingCardsProps = {
  pricingPlans: PricingPlan[];
  onSelectPlan?: (planId: string) => void;
};

export default function PricingCards({
  pricingPlans,
  onSelectPlan,
}: PricingCardsProps) {
  return (
    <div className="flex flex-wrap justify-center gap-3 p-2">
      {pricingPlans.map((plan, idx) => {
        // Disable if price is 0 OR status is NOT ACTIVE
        const isDisabled = !(plan.price > 0 && plan.status == "ACTIVE");

        const handleClick = () => {
          if (!isDisabled) {
            redirect(`/d/admin/payment/${plan.id}`);
          }
        };

        return (
          <div
            key={plan.id || idx}
            className={`flex border-2 ${
              plan.price > 0 && plan.status == "ACTIVE" ? "border-primary" : ""
            }  flex-col p-6 w-80 border-gray-200 text-center text-gray-900 bg-white rounded-lg shadow`}
          >
            <h2 className="mb-4 text-1xl font-light ">{plan.description}</h2>
            <h3 className="mb-4 text-2xl font-semibold">{plan.name}</h3>
            <div className="flex text-primary  justify-center items-baseline my-8">
              <span className="mr-2 text-3xl font-extrabold">
                Rwf {plan.price}
              </span>
              <span className="text-gray-500">/month</span>
            </div>
            <ul role="list" className="mb-8 space-y-4 text-left">
              {plan.features.split(",").map((feature, i) => (
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
                  <span>{feature.trim()}</span>
                </li>
              ))}
            </ul>
            <Button
              disabled={isDisabled}
              onClick={handleClick}
              className={`text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center ${
                isDisabled
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-primary hover:bg-primary-700 focus:ring-4 focus:ring-primary-200"
              }`}
            >
              {plan.buttonData}
            </Button>
          </div>
        );
      })}
    </div>
  );
}
