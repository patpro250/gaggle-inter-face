"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { z } from "zod";
import { useOnboardingStore } from "@/app/stores/useOnboardingStore";
import toast from "react-hot-toast";
import { useVerifyName } from "@/app/Hooks/getInsititutionName";
import {
  useCreateInstitution,
  Institution,
} from "@/app/Hooks/useCreateInsititution";
import Link from "next/link";

// Onboarding Container Component
export const OnboardingContainer = ({
  children,
  currentStep,
}: {
  children: React.ReactNode;
  currentStep: number;
}) => {
  return (
    <div className="min-h-screen  bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full h-[450px] p-10 overflow-scroll max-w-2xl bg-white rounded-xl shadow-lg "
      >
        {/* Progress Bar */}
        <div className="h-1.5 bg-gray-200">
          <motion.div
            initial={{ width: "0%" }}
            animate={{ width: `${(currentStep / 4) * 100}%` }}
            transition={{ duration: 0.4 }}
            className="h-full bg-primary"
          />
        </div>

        <div className="p-8">
          {/* Step Indicator */}
          <div className="flex justify-between items-center mb-6">
            {[1, 2, 3, 4].map((step) => (
              <div key={step} className="flex flex-col items-center">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    step <= currentStep
                      ? "bg-primary text-white"
                      : "bg-gray-200 text-gray-600"
                  } font-medium text-sm transition-colors`}
                >
                  {step}
                </div>
                <span className="text-xs mt-1 text-gray-500">Step {step}</span>
              </div>
            ))}
          </div>

          {children}
        </div>
      </motion.div>
    </div>
  );
};

// Step 1: Email
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
            Let &apos s get started with your email address
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

// Step 2: Institution Name
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

// Step 3: Institution Details
const Step3 = () => {
  const router = useRouter();
  const { data, setField } = useOnboardingStore();
  const { createInstitution, loading } = useCreateInstitution();

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

  const handleSubmit = (e: React.FormEvent) => {
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

    createInstitution({
      ...data,
      ...formData,
      showPassword: undefined,
    } as Institution);
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
              disabled={loading}
            >
              {loading ? "Creating account..." : "Complete Registration"}
            </motion.button>
          </form>
        </motion.div>
      </AnimatePresence>
    </OnboardingContainer>
  );
};

// Step 4: Success
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

export { Step1, Step2, Step3, Step4 };
