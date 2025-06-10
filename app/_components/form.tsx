"use client";

import { useForm, Controller } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import * as Select from "@radix-ui/react-select";
import {
  CheckIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";
import { ResetInstitution, sendResetEmail } from "../Hooks/resetFunc";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

export type ForgotPasswordFormData = {
  email: string;
  role: string;
};

const userTypes = [
  { value: "Institution", label: "Institution" },
  { value: "Librarian", label: "Librarian" },
  { value: "Member", label: "Member" },
  { value: "SystemAdmin", label: "System Admin" },
];

const ForgotPasswordForm = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<ForgotPasswordFormData>({
    defaultValues: {
      role: "Institution",
    },
  });

  const [successMessage, setSuccessMessage] = useState("");

  const mutation = useMutation({
    mutationFn: async (data: ForgotPasswordFormData) => {
      const response = await ResetInstitution(data);
      if (!response.Success) {
        throw new Error(response.message);
      }

      const email = await sendResetEmail(response.message); // token

      if (!email.success) {
        throw new Error(email.message);
      }
      return { message: "A password reset link has been sent to your email." };
    },
    onSuccess: (data) => {
      toast.success(data.message);
      setSuccessMessage(data.message);
      router.push("/login/s");
    },
    onError: (error) => {
      toast.error(error.message || "Something went wrong");
      setSuccessMessage("");
    },
  });

  const onSubmit = (data: ForgotPasswordFormData) => {
    mutation.mutate(data);
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 rounded-xl shadow-md bg-white dark:bg-zinc-900 transition-colors">
      <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6">
        Forgot Password
      </h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Email Address
          </label>
          <div className="relative">
            <EnvelopeIcon className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            <input
              type="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+\.\S+$/,
                  message: "Please enter a valid email address",
                },
              })}
              className={`w-full pl-10 pr-4 py-2 rounded-lg border ${
                errors.email ? "border-red-500" : "border-gray-300"
              } focus:outline-none focus:ring-2 focus:ring-blue-500/50 dark:bg-zinc-800 dark:border-zinc-700 dark:text-white`}
              placeholder="you@example.com"
            />
          </div>
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        {/* Role Select */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            User Type
          </label>
          <Controller
            control={control}
            name="role"
            rules={{ required: "Please select a user type" }}
            render={({ field }) => (
              <Select.Root value={field.value} onValueChange={field.onChange}>
                <Select.Trigger className="w-full flex items-center justify-between rounded-lg border border-gray-300 dark:border-zinc-700 px-4 py-2 bg-white dark:bg-zinc-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <Select.Value placeholder="Select user type" />
                  <Select.Icon>
                    <ChevronDownIcon className="h-4 w-4 text-gray-500 dark:text-gray-300" />
                  </Select.Icon>
                </Select.Trigger>

                <Select.Portal>
                  <Select.Content className="z-50 bg-white dark:bg-zinc-800 rounded-md shadow-lg border border-gray-200 dark:border-zinc-700">
                    <Select.ScrollUpButton className="flex justify-center items-center p-1">
                      <ChevronUpIcon className="h-4 w-4 text-gray-500" />
                    </Select.ScrollUpButton>
                    <Select.Viewport className="p-1">
                      {userTypes.map((type) => (
                        <Select.Item
                          key={type.value}
                          value={type.value}
                          className="flex items-center px-4 py-2 text-sm text-gray-700 dark:text-gray-100 hover:bg-blue-100 dark:hover:bg-zinc-700 rounded-md cursor-pointer"
                        >
                          <Select.ItemText>{type.label}</Select.ItemText>
                          <Select.ItemIndicator className="ml-auto text-blue-500">
                            <CheckIcon className="h-4 w-4" />
                          </Select.ItemIndicator>
                        </Select.Item>
                      ))}
                    </Select.Viewport>
                    <Select.ScrollDownButton className="flex justify-center items-center p-1">
                      <ChevronDownIcon className="h-4 w-4 text-gray-500" />
                    </Select.ScrollDownButton>
                  </Select.Content>
                </Select.Portal>
              </Select.Root>
            )}
          />
          {errors.role && (
            <p className="text-red-500 text-sm mt-1">{errors.role.message}</p>
          )}
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={mutation.isPending}
          className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50"
        >
          {mutation.isPending ? "Sending..." : "Send Reset Link"}
        </button>

        {/* Feedback */}
        {successMessage && (
          <p className="text-green-600 dark:text-green-400 text-sm text-center">
            {successMessage}
          </p>
        )}
        {mutation.isError && (
          <p className="text-red-600 dark:text-red-400 text-sm text-center">
            {(mutation.error as Error).message}
          </p>
        )}
      </form>
    </div>
  );
};

export default ForgotPasswordForm;
