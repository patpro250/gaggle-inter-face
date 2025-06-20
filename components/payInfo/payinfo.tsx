"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { z } from "zod";

import { GetPlan } from "./getPlan";
import { InitiPayment } from "@/app/d/admin/payment/InitiPayment";

interface Plan {
  id: string;
  name: string;
  price: string;
  duration: number;
  features: string;
  status: string;
  limitations: Record<string, unknown>;
  discount: unknown;
  freeTrialDays: number;
  createdAt: string;
  updatedAt: string;
}

const schema = z.object({
  phoneNumber: z
    .string({ required_error: "Phone number is required" })
    .regex(/^\d+$/, "Phone number must contain only digits")
    .max(13, "Phone number cannot exceed 13 digits")
    .min(10, "Phone number minimum 10 digits"),

  planId: z.string().uuid("Invalid plan selected"),
  amount: z
    .string({ required_error: "Amount is required" })

    .transform((val) => Number(val)),

  duration: z
    .number({
      required_error: "Duration is required",
      invalid_type_error: "Duration must be a number",
    })
    .min(1, "Duration must be at least 1"),
});

type FormData = z.infer<typeof schema>;

interface Props {
  id: string;
}

const PaymentInfoPage = ({ id }: Props) => {
  const [plan, setPlan] = useState<Plan | null>(null);
  const [loading, setLoading] = useState(true);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      phoneNumber: "",
      planId: "",
      amount: null,
      duration: 1,
    },
  });

  useEffect(() => {
    async function fetchPlan() {
      setLoading(true);
      try {
        const data = await GetPlan(id);
        const selectedPlan = Array.isArray(data)
          ? data.find((p) => p.id === id)
          : data;
        setPlan(selectedPlan);

        if (selectedPlan) {
          setValue("planId", selectedPlan.id);
          setValue("amount", Number(selectedPlan.price));
          setValue("duration", selectedPlan.duration);
        }
      } catch (error) {
        toast.error(error || "Failed to load plan");
      } finally {
        setLoading(false);
      }
    }
    fetchPlan();
  }, [id, setValue]);

  console.log(plan);
  const onSubmit = async (formData) => {
    const response = await InitiPayment(formData);
    if (response.success) {
      toast.success(response.message);
      redirect("/d/admin/payment/approve");
    } else {
      toast.error(response.message);
    }
  };

  return (
    <div className="min-h-1xl bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Payment Form - Left Side */}
          <div className="lg:w-2/3">
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="p-8">
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-800 mb-2">
                    Payment Information
                  </h2>
                  <p className="text-gray-600">
                    Enter your details to complete the payment
                  </p>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  {/* Phone Number */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <svg
                          className="h-5 w-5 text-gray-400"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                          />
                        </svg>
                      </div>
                      <input
                        {...register("phoneNumber")}
                        type="tel"
                        placeholder="Enter phone number"
                        className={`block w-full pl-10 pr-3 py-3 border ${
                          errors.phoneNumber
                            ? "border-red-300"
                            : "border-gray-300"
                        } rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500`}
                        disabled={loading}
                      />
                    </div>
                    {errors.phoneNumber && (
                      <p className="mt-2 text-sm text-red-600">
                        {errors.phoneNumber.message}
                      </p>
                    )}
                  </div>

                  {/* Amount */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Amount
                    </label>
                    <div className="relative rounded-md shadow-sm">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <span className="text-gray-500"> Rwf </span>
                      </div>
                      <input
                        {...register("amount")}
                        type="text"
                        placeholder="0.00"
                        className={`block w-full pl-7 pr-12 py-3 border ${
                          errors.amount ? "border-red-300" : "border-gray-300"
                        } rounded-lg focus:ring-blue-500 focus:border-blue-500`}
                        disabled={loading}
                      />
                    </div>
                    {errors.amount && (
                      <p className="mt-2 text-sm text-red-600">
                        {errors.amount.message}
                      </p>
                    )}
                  </div>

                  {/* Plan Select */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Plan
                    </label>
                    <select
                      {...register("planId")}
                      className={`block w-full py-3 px-4 border ${
                        errors.planId ? "border-red-300" : "border-gray-300"
                      } rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500`}
                      disabled={loading}
                    >
                      {plan && (
                        <option key={plan.id} value={plan.id}>
                          {plan.name}
                        </option>
                      )}
                    </select>
                    {errors.planId && (
                      <p className="mt-2 text-sm text-red-600">
                        {errors.planId.message}
                      </p>
                    )}
                  </div>

                  {/* Duration */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Duration (months)
                    </label>
                    <input
                      {...register("duration", { valueAsNumber: true })}
                      type="number"
                      min={1}
                      className={`block w-full py-3 px-4 border ${
                        errors.duration ? "border-red-300" : "border-gray-300"
                      } rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500`}
                      disabled={loading}
                    />
                    {errors.duration && (
                      <p className="mt-2 text-sm text-red-600">
                        {errors.duration.message}
                      </p>
                    )}
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={loading}
                      className={`w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-lg font-medium text-white ${
                        loading
                          ? "bg-blue-400"
                          : "bg-blue-600 hover:bg-blue-700"
                      } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`}
                    >
                      {loading ? (
                        <>
                          <svg
                            className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          Processing...
                        </>
                      ) : (
                        "Complete Payment"
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          {/* Order Summary - Right Side */}
          <div className="lg:w-1/3">
            <div className="bg-white rounded-xl shadow-md overflow-hidden sticky top-4">
              <div className="p-8">
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    Order Summary
                  </h3>
                  <p className="text-gray-600">
                    Review your subscription details
                  </p>
                </div>

                {loading ? (
                  <div className="space-y-4">
                    <div className="h-4 bg-gray-200 rounded w-3/4 animate-pulse"></div>
                    <div className="h-4 bg-gray-200 rounded w-1/2 animate-pulse"></div>
                    <div className="h-4 bg-gray-200 rounded w-2/3 animate-pulse"></div>
                  </div>
                ) : plan ? (
                  <>
                    <div className="space-y-4">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Plan:</span>
                        <span className="font-medium">{plan.name}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Monthly Price:</span>
                        <span className="font-medium">Rwf {plan.price}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Duration:</span>
                        <span className="font-medium">
                          {plan.duration} months
                        </span>
                      </div>
                    </div>

                    <div className="border-t border-gray-200 my-6"></div>

                    <div className="flex justify-between text-lg font-bold mb-6">
                      <span>Total:</span>
                      <span>Rwf {Number(plan.price) * plan.duration}</span>
                    </div>

                    {plan.features && (
                      <div>
                        <h4 className="font-medium text-gray-800 mb-3">
                          Plan Features:
                        </h4>
                        <ul className="space-y-3">
                          {plan.features.split(",").map((feature, index) => (
                            <li key={index} className="flex items-start">
                              <svg
                                className="flex-shrink-0 h-5 w-5 text-green-500 mr-2"
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
                              <span className="text-gray-600">
                                {feature.trim()}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </>
                ) : (
                  <p className="text-gray-600">No plan information available</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentInfoPage;
