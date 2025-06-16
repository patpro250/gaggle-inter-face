"use client";

import { Lock, Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { useMutation } from "@tanstack/react-query";
import { PostReset } from "@/app/Hooks/geting";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

// Define validation schema
const passwordSchema = z
  .object({
    newPassword: z
      .string()
      .min(8, "Password must be at least 8 characters")
      .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
      .regex(/[a-z]/, "Password must contain at least one lowercase letter")
      .regex(/[0-9]/, "Password must contain at least one number")
      .regex(
        /[^A-Za-z0-9]/,
        "Password must contain at least one special character"
      ),
    retypePassword: z.string(),
  })
  .refine((data) => data.newPassword === data.retypePassword, {
    message: "Passwords don't match",
    path: ["retypePassword"],
  });

type PasswordFormData = z.infer<typeof passwordSchema>;

interface Props {
  basetoken: string;
}

export default function PasswordResetForm({ basetoken }: Props) {
  const router = useRouter();

  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showRetypePassword, setShowRetypePassword] = useState(false);

  const {
    register,
    handleSubmit,

    formState: { errors, isSubmitting },
  } = useForm<PasswordFormData>({
    resolver: zodResolver(passwordSchema),
  });

  //   const {
  //     register,
  //     handleSubmit,
  //     watch,
  //     formState: { errors },
  //   } = useForm<FormValues>();

  const mutation = useMutation({
    mutationFn: PostReset,
    onSuccess: () => {
      toast.success("🎉 Password reset successful!");
      router.push("/login");
    },
    onError: (error) => {
      // Use type assertion to access response if it exists
      const err = error as {
        response?: { data?: { message?: string; error?: string } };
      };
      const message =
        err?.response?.data?.message || // Custom server error
        err?.response?.data?.error || // Alternative error key
        "Something went wrong. Please try again.";
      toast.error(`${message}`);
    },
  });

  const onSubmit = async (data: PasswordFormData) => {
    const dataobj = {
      token: basetoken,
      newPassword: data.newPassword,
    };

    mutation.mutate(dataobj);

    console.log(dataobj);
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white dark:bg-gray-900 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-900 dark:text-white">
        Reset Password
      </h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* New Password Field */}
        <div>
          <label
            htmlFor="newPassword"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
          >
            New Password
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Lock className="h-5 w-5 text-gray-400 dark:text-gray-500" />
            </div>
            <input
              id="newPassword"
              type={showNewPassword ? "text" : "password"}
              {...register("newPassword")}
              className="block w-full pl-10 pr-10 py-2 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Enter new password"
            />
            <button
              type="button"
              className="absolute inset-y-0 right-0 pr-3 flex items-center"
              onClick={() => setShowNewPassword(!showNewPassword)}
            >
              {showNewPassword ? (
                <EyeOff className="h-5 w-5 text-gray-400 dark:text-gray-500 hover:text-gray-500" />
              ) : (
                <Eye className="h-5 w-5 text-gray-400 dark:text-gray-500 hover:text-gray-500" />
              )}
            </button>
          </div>
          {errors.newPassword && (
            <p className="mt-1 text-sm text-red-600 dark:text-red-500">
              {errors.newPassword.message}
            </p>
          )}
        </div>

        {/* Retype Password Field */}
        <div>
          <label
            htmlFor="retypePassword"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
          >
            Retype Password
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Lock className="h-5 w-5 text-gray-400 dark:text-gray-500" />
            </div>
            <input
              id="retypePassword"
              type={showRetypePassword ? "text" : "password"}
              {...register("retypePassword")}
              className="block w-full pl-10 pr-10 py-2 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Retype your password"
            />
            <button
              type="button"
              className="absolute inset-y-0 right-0 pr-3 flex items-center"
              onClick={() => setShowRetypePassword(!showRetypePassword)}
            >
              {showRetypePassword ? (
                <EyeOff className="h-5 w-5 text-gray-400 dark:text-gray-500 hover:text-gray-500" />
              ) : (
                <Eye className="h-5 w-5 text-gray-400 dark:text-gray-500 hover:text-gray-500" />
              )}
            </button>
          </div>
          {errors.retypePassword && (
            <p className="mt-1 text-sm text-red-600 dark:text-red-500">
              {errors.retypePassword.message}
            </p>
          )}
        </div>

        <div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-sub-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Processing..." : "Reset Password"}
          </button>
        </div>
      </form>
    </div>
  );
}
