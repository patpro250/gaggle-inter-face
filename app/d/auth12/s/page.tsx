"use client";
import { useOnboardingStore } from "@/app/stores/useOnboardingStore";
import { AnimatePresence, motion } from "framer-motion";

import { useState } from "react";
import toast from "react-hot-toast";
import { z } from "zod";
import { OnboardingContainer } from "../stepHolder";
import { useRouter } from "next/navigation";

const Step1 = () => {
  const router = useRouter();
  const { data, setField } = useOnboardingStore();
  const [email, setEmail] = useState(data.email || "");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = z
      .object({
        email: z.string().email("Invalid email").min(1, "Email is required"),
      })
      .safeParse({ email });

    if (!result.success) {
      setError(result.error.issues[0].message);
      toast.error(result.error.issues[0].message);
      return;
    }

    setField("email", email);
    toast.success("Email verified! Next step");
    router.push("../../../d/auth12/ss/");
  };

  return (
    <OnboardingContainer currentStep={1}>
      <AnimatePresence mode="wait">
        <motion.div
          key="step1"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 50 }}
          transition={{ duration: 0.3 }}
        >
          <h2 className="text-2xl font-bold text-gray-800 mb-1">
            Create Your Account
          </h2>
          <p className="text-gray-600 mb-6">
            Let `&apos` s get started with your email address
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email Address
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
              />
              {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition"
            >
              Continue
            </motion.button>
          </form>
        </motion.div>
      </AnimatePresence>
    </OnboardingContainer>
  );
};

export default Step1;
