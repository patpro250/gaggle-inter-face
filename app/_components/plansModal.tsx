"use client";

import { useModalStoreAdmin } from "@/app/stores/useModalAdmin";
import * as Dialog from "@radix-ui/react-dialog";
import { X, PlusCircle } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, UseMutationResult } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { InitPlan } from "../d/gg/plans/addPlan"; // your API call

// 1. Zod schema and TypeScript form type
const planSchema = z.object({
  name: z.string().min(1, "Plan name is required"),
  description: z.string().min(5, "Description must be at least 5 characters"),
  buttonData: z.string().max(100, "Button data max 100 chars"),
  price: z.coerce.number().min(0, "Price must be greater than 0"),
  duration: z.coerce.number().int().min(1, "Duration must be at least 1"),
  features: z.string().min(1, "Please add at least one feature"),
  discount: z.coerce.number().min(0).max(0.9).optional(),
  tokens: z.coerce.number().min(5, "Tokens must be at least 5"),
  status: z.enum(["ACTIVE", "INACTIVE", "COMING_SOON"]),
});

type PlanFormData = z.infer<typeof planSchema>;

// 2. CSS class for inputs
const inputClass =
  "border dark:border-gray-600 border-gray-300 bg-white dark:bg-gray-700 text-gray-800 dark:text-white rounded-md p-2 w-full placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400";

export default function CreatePlanModal() {
  const { isOpen, closeModal } = useModalStoreAdmin();

  // 3. Setup React Hook Form
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid, isSubmitting },
  } = useForm<PlanFormData>({
    resolver: zodResolver(planSchema),
    mode: "onChange",
  });

  // 4. Typed useMutation with React Query v5
  const mutation: UseMutationResult<
    any, // return type of InitPlan (adjust if you know the exact return)
    Error,
    PlanFormData,
    unknown
  > = useMutation({
    mutationFn: InitPlan,
    onSuccess: () => {
      toast.success("Plan created successfully!");
      reset();
      closeModal();
    },
    onError: (error) => {
      toast.error(`Error creating plan: ${error.message}`);
      console.error(error);
    },
  });

  // 5. Submit handler
  const onSubmit = (data: PlanFormData) => {
    mutation.mutate(data);
  };

  return (
    <Dialog.Root open={isOpen} onOpenChange={(open) => !open && closeModal()}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40" />
        <Dialog.Content className="fixed h-[550px] overflow-scroll top-1/2 left-1/2 max-w-2xl w-full -translate-x-1/2 -translate-y-1/2 bg-white dark:bg-gray-900 text-gray-900 dark:text-white rounded-xl p-6 shadow-xl z-50">
          <div className="flex justify-between items-start mb-4">
            <div>
              <Dialog.Title className="text-2xl font-bold">
                Create New Plan
              </Dialog.Title>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                Fill out the form below to add a new subscription plan.
              </p>
            </div>
            <Dialog.Close asChild>
              <button
                onClick={closeModal}
                className="text-gray-500 hover:text-gray-800 dark:hover:text-white transition"
              >
                <X className="w-6 h-6" />
              </button>
            </Dialog.Close>
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            <div>
              <input
                className={inputClass}
                placeholder="Plan Name"
                {...register("name")}
              />
              {errors.name && (
                <p className="text-sm text-red-500 mt-1">
                  {errors.name.message}
                </p>
              )}
            </div>

            <div>
              <input
                className={inputClass}
                placeholder="Description"
                {...register("description")}
              />
              {errors.description && (
                <p className="text-sm text-red-500 mt-1">
                  {errors.description.message}
                </p>
              )}
            </div>

            <div>
              <input
                className={inputClass}
                placeholder="Button Data"
                {...register("buttonData")}
              />
              {errors.buttonData && (
                <p className="text-sm text-red-500 mt-1">
                  {errors.buttonData.message}
                </p>
              )}
            </div>

            <div>
              <input
                type="number"
                step="0.01"
                className={inputClass}
                placeholder="Price"
                {...register("price")}
              />
              {errors.price && (
                <p className="text-sm text-red-500 mt-1">
                  {errors.price.message}
                </p>
              )}
            </div>

            <div>
              <input
                type="number"
                className={inputClass}
                placeholder="Duration (days)"
                {...register("duration")}
              />
              {errors.duration && (
                <p className="text-sm text-red-500 mt-1">
                  {errors.duration.message}
                </p>
              )}
            </div>

            <div>
              <input
                type="number"
                step="0.01"
                className={inputClass}
                placeholder="Discount (0 to 0.9)"
                {...register("discount")}
              />
              {errors.discount && (
                <p className="text-sm text-red-500 mt-1">
                  {errors.discount.message}
                </p>
              )}
            </div>

            <div>
              <input
                type="number"
                className={inputClass}
                placeholder="Tokens"
                {...register("tokens")}
              />
              {errors.tokens && (
                <p className="text-sm text-red-500 mt-1">
                  {errors.tokens.message}
                </p>
              )}
            </div>

            <div className="md:col-span-2">
              <textarea
                rows={4}
                className={inputClass}
                placeholder="Features (comma-separated)"
                {...register("features")}
              />
              {errors.features && (
                <p className="text-sm text-red-500 mt-1">
                  {errors.features.message}
                </p>
              )}
            </div>

            <div>
              <select className={inputClass} {...register("status")}>
                <option value="ACTIVE">Active</option>
                <option value="INACTIVE">Inactive</option>
                <option value="COMING_SOON">Coming Soon</option>
              </select>
              {errors.status && (
                <p className="text-sm text-red-500 mt-1">
                  {errors.status.message}
                </p>
              )}
            </div>

            <div className="md:col-span-2">
              <button
                type="submit"
                disabled={!isValid || isSubmitting || mutation.isPending}
                className={`mt-4 w-full py-2 px-2 rounded-md flex items-center justify-center gap-2 transition font-semibold
                ${
                  isValid
                    ? "bg-primary dark:bg-primary hover:opacity-80 dark:hover:opacity-80 text-white"
                    : "bg-gray-400 dark:bg-gray-600 cursor-not-allowed text-white opacity-70"
                }`}
              >
                <PlusCircle className="w-5 h-5" />
                {mutation.isPending ? "Sending..." : "Submit"}
              </button>
            </div>
          </form>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
