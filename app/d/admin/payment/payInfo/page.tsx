"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { GetPlan } from "./getPlan";
import { InitiPayment, PlanData } from "../InitiPayment";
import toast from "react-hot-toast";
import { redirect } from "next/navigation";
import { Spinner } from "@radix-ui/themes";
import { PricingPlan } from "@/app/_components/pricing";

async function getMyPlan() {
  return {
    name: "Pro Plan",
    price: 25,
    duration: 3,
  };
}

const schema = z.object({
  phoneNumber: z
    .string({ required_error: "Phone number is required" })
    .regex(/^\d+$/, "Phone number must contain only digits")
    .max(13, "Phone number cannot exceed 13 digits")
    .min(10, "Phone number minimum 10 digits"),

  planId: z.string().uuid("Invalid plan selected"),
  amount: z
    .string({ required_error: "amount number is required" })
    .regex(/^\d+$/, "amount number must contain only digits")
    .transform((val) => Number(val)),
  duration: z
    .number({
      required_error: "Duration is required",
      invalid_type_error: "Duration must be a number",
    })
    .min(1, "Duration must be at least 1"),
});

type FormData = z.infer<typeof schema>;

const PaymentInfoPage = (Data: any) => {
  console.log(Data);
  const [plans, setPlans] = useState([]);

  const {
    register,
    handleSubmit,
    watch,
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

  const [planSummary, setPlanSummary] = useState<{
    name: string;
    price: number;
    duration: number;
  } | null>(null);

  useEffect(() => {
    getMyPlan().then(setPlanSummary);
  }, []);

  useEffect(() => {
    console.log("Setting form values with Data:", Data);

    if (Data.planId != null) {
      setValue("planId", Data.planId);
    }
    if (Data.duration != null) {
      setValue("duration", Data.duration);
    }
    if (Data.phoneNumber != null) {
      setValue("phoneNumber", Data.phoneNumber);
    }
  }, [Data]);

  const onSubmit = async (Data) => {
    const response = await InitiPayment(Data);
    if (response.success) {
      toast.success(`${response.message}`);
      redirect("/d/admin/payment/approve");
      return;
    } else {
      console.log(response);
      toast.error(`${response.message}`);
      return;
    }
    console.log("Form Data:", Data);
  };

  useEffect(() => {
    async function fetchPlans() {
      const Data = await GetPlan();
      setPlans(Data);
    }
    fetchPlans();
  }, []);

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
              className="input-style "
            />
            {errors.phoneNumber && (
              <p className="text-red-500 text-sm">
                {errors.phoneNumber.message}
              </p>
            )}
          </div>

          {/* Phone Number */}
          <div>
            <label className="block text-sm font-medium mb-1">Amount</label>
            <input
              {...register("amount")}
              type="tel"
              placeholder="Enter amount"
              className="input-style "
            />
            {errors.amount && (
              <p className="text-red-500 text-sm">{errors.amount.message}</p>
            )}
          </div>

          {/* Plan ID */}

          <label className="block text-sm font-medium mb-1">Plan</label>
          <select
            {...register("planId", { required: "Please select a plan" })}
            className="input-style"
          >
            <option value="" disabled>
              Select a plan
            </option>
            {!plans && (
              <option value="" disabled>
                <Spinner></Spinner>
              </option>
            )}
            {plans.map((plan) => (
              <option key={plan.id} value={plan.id}>
                {plan.name}
              </option>
            ))}
          </select>
          {errors.planId && (
            <p className="text-red-500 text-sm">{errors.planId.message}</p>
          )}
          {/* Duration */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Duration (months)
            </label>
            <input
              {...register("duration", { valueAsNumber: true })}
              type="number"
              min={1}
              className="input-style"
            />
            {errors.duration && (
              <p className="text-red-500 text-sm">{errors.duration.message}</p>
            )}
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >SUCCESS

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
