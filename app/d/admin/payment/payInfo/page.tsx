"use client";

import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// Mock DB call (replace this with actual API)
async function getMyPlan() {
  return {
    name: "Pro Plan",
    price: 25,
    duration: 3,
  };
}

const schema = z.object({
  phoneNumber: z.string().min(1, "Phone number is required"),
  planId: z.string().uuid("Invalid plan selected"),
  duration: z.number().min(1, "Duration must be at least 1"),
});

type FormData = z.infer<typeof schema>;

const PaymentInfoPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      phoneNumber: "",
      planId: "",
      duration: 1,
    },
  });

  const [planSummary, setPlanSummary] = useState<{
    name: string;
    price: number;
    duration: number;
  } | null>(null);

  useEffect(() => {
    getMyPlan().then(setPlanSummary);
  }, []);

  const onSubmit = (data: FormData) => {
    console.log("Form Data:", data);
  };

  return (
    <div className="flex flex-col lg:flex-row max-w-6xl mx-auto p-6 gap-8">
      {/* Form */}
      <main className="flex-1">
        <h2 className="text-2xl font-bold mb-4">Payment Info</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Phone Number */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Phone Number
            </label>
            <input
              {...register("phoneNumber")}
              type="tel"
              placeholder="Enter your phone number"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring"
            />
            {errors.phoneNumber && (
              <p className="text-red-500 text-sm">
                {errors.phoneNumber.message}
              </p>
            )}
          </div>

          {/* Plan ID */}
          <div>
            <label className="block text-sm font-medium mb-1">Plan ID</label>
            <input
              {...register("planId")}
              type="text"
              placeholder="Paste plan UUID"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring"
            />
            {errors.planId && (
              <p className="text-red-500 text-sm">{errors.planId.message}</p>
            )}
          </div>

          {/* Duration */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Duration (months)
            </label>
            <input
              {...register("duration", { valueAsNumber: true })}
              type="number"
              min={1}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring"
            />
            {errors.duration && (
              <p className="text-red-500 text-sm">{errors.duration.message}</p>
            )}
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Submit
          </button>
        </form>
      </main>

      {/* Static Summary Aside */}
      <aside className="w-full lg:w-1/3 bg-gray-50 p-6 border rounded-lg shadow">
        <h3 className="text-xl font-semibold mb-4">My Plan Summary</h3>
        {planSummary ? (
          <>
            <p>
              <strong>Plan:</strong> {planSummary.name}
            </p>
            <p>
              <strong>Monthly Price:</strong> ${planSummary.price}
            </p>
            <p>
              <strong>Duration:</strong> {planSummary.duration} month(s)
            </p>
            <p className="mt-2 font-bold">
              Total: ${planSummary.price * planSummary.duration}
            </p>
          </>
        ) : (
          <p>Loading your plan info...</p>
        )}
      </aside>
    </div>
  );
};

export default PaymentInfoPage;
