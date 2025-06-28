"use client";

import { Button } from "@radix-ui/themes";
import { redirect } from "next/navigation";
import { motion } from "framer-motion";

export interface PricingPlan {
  id: string;
  name: string;
  price: number;
  duration: number;
  features: string;
  description?: string;
  buttonData?: string;
  status: "ACTIVE" | "INACTIVE" | "COMING_SOON";
  limitations: {
    maxLibraries?: number | string;
    maxLibrarians?: number | string;
    [key: string]: unknown;
  };
  discount: number | null;
  freeTrialDays: number;
  createdAt: string;
  updatedAt: string;
}

export type PricingCardsProps = {
  pricingPlans: PricingPlan[];
  onSelectPlan?: (planId: string) => void;
};

export default function PricingCards({ pricingPlans }: PricingCardsProps) {
  return (
    <div className="flex flex-wrap justify-center gap-6 p-2">
      {pricingPlans.map((plan, idx) => {
        const isDisabled = !(plan.price > 0 && plan.status == "ACTIVE");

        const handleClick = () => {
          if (!isDisabled) {
            redirect(`/d/admin/payment/${plan.id}`);
          }
        };

        return (
          <motion.div
            key={plan.id || idx}
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
              duration: 0.5,
              delay: idx * 0.1,
              ease: [0.16, 1, 0.3, 1],
            }}
            whileHover={{
              y: -5,
              boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
            }}
            className={`flex border-2 ${
              plan.price > 0 && plan.status == "ACTIVE"
                ? "border-primary shadow-lg"
                : "border-gray-200"
            } flex-col p-6 w-80 text-center text-gray-900 bg-white rounded-lg shadow-md transition-all`}
          >
            <motion.h2
              className="mb-4 text-xl font-light"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: idx * 0.1 + 0.2 }}
            >
              {plan.description}
            </motion.h2>

            <motion.h3
              className="mb-4 text-2xl font-semibold"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: idx * 0.1 + 0.3 }}
            >
              {plan.name}
            </motion.h3>

            <motion.div
              className="flex text-primary justify-center items-baseline my-8"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 + 0.4 }}
            >
              <span className="mr-2 text-3xl font-extrabold">
                Rwf {plan.price}
              </span>
              <span className="text-gray-500">/month</span>
            </motion.div>

            <motion.ul
              role="list"
              className="mb-8 space-y-4 text-left"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: idx * 0.1 + 0.5 }}
            >
              {plan.features.split(",").map((feature, i) => (
                <motion.li
                  key={i}
                  className="flex items-center space-x-3"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 + 0.6 + i * 0.05 }}
                >
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
                </motion.li>
              ))}
            </motion.ul>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: idx * 0.1 + 0.8 }}
            >
              <Button
                disabled={isDisabled}
                onClick={handleClick}
                className={`text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center w-full ${
                  isDisabled
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-primary hover:bg-primary-700 focus:ring-4 focus:ring-primary-200"
                }`}
              >
                {plan.buttonData}
              </Button>
            </motion.div>
          </motion.div>
        );
      })}
    </div>
  );
}
