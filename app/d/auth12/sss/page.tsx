"use client";

import { useOnboardingStore } from "@/app/stores/useOnboardingStore";
import { AnimatePresence, motion } from "framer-motion";

import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { z } from "zod";
import { OnboardingContainer } from "../stepHolder";
import { useRouter } from "next/navigation";
import { Createinsititution } from "../../admin/payment/approve/confirm";

const Step3 = () => {
  const router = useRouter();
  const { data, setField } = useOnboardingStore();

  const [formData, setFormData] = useState({
    address: data.address || "",
    phone: data.phone || "",
    type: data.type || "",
    openingHours: data.openingHours || "",
    password: data.password || "",
    showPassword: false,
  });

  useEffect(() => {
    if (!data.email || !data.name) router.push("/d/auth12/s");
  }, [data.email, data.name, router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const passwordSchema = z
      .string()
      .min(8, "Password must be at least 8 characters")
      .regex(/[A-Z]/, "Must contain uppercase letter")
      .regex(/[a-z]/, "Must contain lowercase letter")
      .regex(/[0-9]/, "Must contain number")
      .regex(/[^A-Za-z0-9]/, "Must contain special character");

    const result = z
      .object({
        address: z.string().min(1, "Address required"),
        phone: z
          .string()
          .min(10, "Phone must be 10 digits")
          .regex(/^\d+$/, "Digits only"),
        type: z.string().min(1, "Type required"),
        openingHours: z.string().min(1, "Opening hours required"),
        password: passwordSchema,
      })
      .safeParse(formData);

    if (!result.success) {
      toast.error(result.error.issues[0].message);
      return;
    }

    // Update store
    Object.entries(formData).forEach(([key, value]) => {
      if (key !== "showPassword") setField(key as keyof typeof data, value);
    });

    const response = await Createinsititution(data);

    if (response.success) {
      toast.success(`${response.message}`);
      router.push("../../../d/auth12/ssss");
    } else {
      toast.error(`${response.message}`);
    }
  };

  return (
    <OnboardingContainer currentStep={3}>
      <AnimatePresence mode="wait">
        <motion.div
          key="step3"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 50 }}
          transition={{ duration: 0.3 }}
        >
          <h2 className="text-2xl font-bold text-gray-800 mb-1">
            Complete Your Profile
          </h2>
          <p className="text-gray-600 mb-6">Final details to get started</p>

          <form onSubmit={handleSubmit} className="space-y-4">
            {[
              {
                id: "address",
                label: "Address",
                type: "text",
                value: formData.address,
              },
              {
                id: "openingHours",
                label: "Opening Hours",
                type: "text",
                value: formData.openingHours,
              },
              {
                id: "phone",
                label: "Phone",
                type: "tel",
                value: formData.phone,
              },
            ].map((field) => (
              <div key={field.id}>
                <label
                  htmlFor={field.id}
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  {field.label}
                </label>
                <input
                  id={field.id}
                  type={field.type}
                  value={field.value}
                  onChange={(e) =>
                    setFormData({ ...formData, [field.id]: e.target.value })
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
                />
              </div>
            ))}

            <div>
              <label
                htmlFor="type"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Institution Type
              </label>
              <select
                id="type"
                value={formData.type}
                onChange={(e) =>
                  setFormData({ ...formData, type: e.target.value })
                }
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
              >
                <option value="">Select type</option>
                <option value="UNIVERSITY">University</option>
                <option value="COLLEGE">College</option>
                <option value="SCHOOL">School</option>
                <option value="PUBLIC_LIBRARY">Public Library</option>
                <option value="PRIVATE_LIBRARY">Private Library</option>
                <option value="NON_PROFIT">Non Profit</option>
                <option value="OTHER">Other</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Password
              </label>
              <input
                id="password"
                type={formData.showPassword ? "text" : "password"}
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
              />
              <div className="flex items-center mt-2">
                <input
                  type="checkbox"
                  id="showPassword"
                  checked={formData.showPassword}
                  onChange={() =>
                    setFormData({
                      ...formData,
                      showPassword: !formData.showPassword,
                    })
                  }
                  className="mr-2"
                />
                <label htmlFor="showPassword" className="text-sm text-gray-700">
                  Show password
                </label>
              </div>
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition"
            >
              Complete Registration
            </motion.button>
          </form>
        </motion.div>
      </AnimatePresence>
    </OnboardingContainer>
  );
};

export default Step3;
