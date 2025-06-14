"use client";
import { useOnboardingStore } from "@/app/stores/useOnboardingStore";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { OnboardingContainer } from "../stepHolder";

const Step4 = () => {
  const router = useRouter();
  const { data } = useOnboardingStore();

  useEffect(() => {
    if (!data.name || !data.email || !data.password) {
      toast.error("Please complete all steps");
      router.push("/d/auth12/s");
    }
  }, [data, router]);

  return (
    <OnboardingContainer currentStep={4}>
      <AnimatePresence mode="wait">
        <motion.div
          key="step4"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          className="text-center"
        >
          <div className="mb-6">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2 }}
              className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 text-green-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </motion.div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              Account Created Successfully!
            </h2>
            <p className="text-gray-600">Welcome to NitiBook, {data.name}!</p>
          </div>

          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <p className="text-sm text-gray-500">Email: {data.email}</p>
              <p className="text-sm text-gray-500">Institution: {data.name}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="pt-4"
            >
              <Link
                href="/login"
                className="inline-flex items-center justify-center w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition"
              >
                Go to Login
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>
    </OnboardingContainer>
  );
};

export default Step4;
