"use client";

import { useVerifyName } from "@/app/Hooks/getInsititutionName";
import { useOnboardingStore } from "@/app/stores/useOnboardingStore";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { z } from "zod";
import { OnboardingContainer } from "../stepHolder";

const Step2 = () => {
  const router = useRouter();
  const { loading, valid, verify, errorN } = useVerifyName();
  const { data, setField } = useOnboardingStore();
  const [name, setName] = useState(data.name || "");
  const [error, setError] = useState("");

  useEffect(() => {
    if (!data.email) router.push("/d/auth12/s");
  }, [data.email, router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = z
      .object({
        name: z.string().min(1, "Name is required"),
      })
      .safeParse({ name });

    if (!result.success) {
      setError(result.error.issues[0].message);
      toast.error(result.error.issues[0].message);
      return;
    }

    await verify(name);
    if (errorN) return toast.error(errorN);
    if (valid) return toast.error("Name is taken!");

    toast.success(`${name} is available!`);
    setField("name", name);
    router.push("../../../d/auth12/sss/");
  };

  return (
    <OnboardingContainer currentStep={2}>
      <AnimatePresence mode="wait">
        <motion.div
          key="step2"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 50 }}
          transition={{ duration: 0.3 }}
        >
          <h2 className="text-2xl font-bold text-gray-800 mb-1">
            Institution Details
          </h2>
          <p className="text-gray-600 mb-6">Tell us about your institution</p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Institution Name
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Institution name"
                className={`w-full px-4 py-2 border ${
                  name && !valid && !errorN
                    ? "border-green-400"
                    : "border-gray-300"
                } rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition`}
              />
              {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email (from previous step)
              </label>
              <input
                type="email"
                id="email"
                disabled
                value={data.email || ""}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-100"
              />
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition"
              disabled={loading}
            >
              {loading ? "Checking availability..." : "Continue"}
            </motion.button>
          </form>
        </motion.div>
      </AnimatePresence>
    </OnboardingContainer>
  );
};

export default Step2;
