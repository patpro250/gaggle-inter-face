"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { z } from "zod";
import { InitiPayment } from "../InitiPayment";
import { GetPlan } from "./getPlan";

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
    .regex(/^\d+$/, "Amount must contain only digits")
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
        // If data is an array, find the plan with the matching id
        const selectedPlan = Array.isArray(data)
          ? data.find((p) => p.id === id)
          : data;
        setPlan(selectedPlan);

        // Set default form values from fetched plan
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
              className="input-style"
            />
            {errors.phoneNumber && (
              <p className="text-red-500 text-sm">
                {errors.phoneNumber.message}
              </p>
            )}
          </div>

          {/* Amount */}
          <div>
            <label className="block text-sm font-medium mb-1">Amount</label>
            <input
              {...register("amount")}
              type="tel"
              placeholder="Enter amount"
              className="input-style"
            />
            {errors.amount && (
              <p className="text-red-500 text-sm">{errors.amount.message}</p>
            )}
          </div>

          {/* Plan Select */}
          <div>
            <label className="block text-sm font-medium mb-1">Plan</label>
            <select
              {...register("planId", { required: "Please select a plan" })}
              className="input-style"
              disabled={loading}
            >
              {/* <option value="" disabled>
                {loading ? "Loading plans..." : "Select a plan"}
              </option> */}
              {plan && (
                <option key={plan.id} value={plan.id}>
                  {plan.name}
                </option>
              )}
            </select>
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
              className="input-style"
            />
            {errors.duration && (
              <p className="text-red-500 text-sm">{errors.duration.message}</p>
            )}
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            disabled={loading}
          >
            Submit Payment
          </button>
        </form>
      </main>

      {/* Plan Summary */}
      <aside className="w-full lg:w-1/3 bg-gray-50 p-6 border rounded-lg shadow">
        <h3 className="text-xl font-semibold mb-4">Plan Summary</h3>
        {loading ? (
          <p>Loading plan summary...</p>
        ) : plan ? (
          <>
            <p>
              <strong>Plan:</strong> {plan.name}
            </p>
            <p>
              <strong>Monthly Price:</strong> ${plan.price}
            </p>
            <p>
              <strong>Duration:</strong> {plan.duration} month(s)
            </p>
            <p className="mt-2 font-bold">
              Total: ${Number(plan.price) * plan.duration}
            </p>
          </>
        ) : (
          <p>No plan found.</p>
        )}
      </aside>
    </div>
  );
};

export default PaymentInfoPage;
