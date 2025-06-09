"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { ResetInstitution, sendResetEmail } from "@/app/Hooks/resetFunc";
import { ForgotPasswordFormData } from "@/app/_components/form";
import { Spinner } from "@radix-ui/themes";

const schema = z.object({
  email: z.string().email("Invalid email address"),
  role: z.string().min(1, "Please select a role"),
});

type FormValues = z.infer<typeof schema>;

export default function ForgotPasswordForm() {
  const [selectedRole, setSelectedRole] = useState("");

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    reset,
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
  });

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
      // setSuccessMessage(data.message);
    },
    onError: (error: any) => {
      toast.error(error.message || "Something went wrong");
    },
  });

  const onSubmit = async (dataform) => {
    // const response = await ResetInstitution(dataform);
    // if (response.Success) {
    //   const email = await sendResetEmail(response.message);

    //   if (email.success) {
    //     toast.success("A password reset link has been sent to your email");
    //   } else {
    //     toast.error(email.message);
    //   }
    // } else {
    //   toast.error(response.message);
    // }

    mutation.mutate(dataform);
  };

  const handleRoleSelect = (role: string) => {
    setSelectedRole(role);
    setValue("role", role);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-md mx-auto mt-10 p-6 bg-white dark:bg-gray-900 shadow-md rounded-md space-y-4"
    >
      <h2 className="text-xl font-semibold text-center text-indigo-600 dark:text-indigo-400">
        Forgot Password
      </h2>

      {/* Email Field */}
      <div>
        <label className="block text-sm mb-1 text-gray-700 dark:text-gray-300">
          Email address
        </label>
        <input
          type="email"
          {...register("email")}
          className="w-full px-3 py-2 border rounded-md bg-white dark:bg-gray-800 dark:text-white dark:border-gray-700"
          placeholder="you@example.com"
        />
        {errors.email && (
          <p className="text-red-500 text-sm">{errors.email.message}</p>
        )}
      </div>

      {/* Role Dropdown */}
      <div>
        <label className="block text-sm mb-1 text-gray-700 dark:text-gray-300">
          Select Role
        </label>
        <DropdownMenu.Root>
          <DropdownMenu.Trigger asChild>
            <button
              type="button"
              className="w-full px-3 py-2 border rounded-md text-left bg-white dark:bg-gray-800 dark:text-white dark:border-gray-700"
            >
              {selectedRole || "Select role"}
            </button>
          </DropdownMenu.Trigger>
          <DropdownMenu.Content
            className="min-w-[200px] bg-white dark:bg-gray-800 border dark:border-gray-700 rounded-md shadow-md z-50"
            sideOffset={5}
          >
            {["Librarian", "Member", "Institution", "SystemAdmin"].map(
              (role) => (
                <DropdownMenu.Item
                  key={role}
                  onSelect={() => handleRoleSelect(role)}
                  className="px-4 py-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-800 dark:text-white"
                >
                  {role}
                </DropdownMenu.Item>
              )
            )}
          </DropdownMenu.Content>
        </DropdownMenu.Root>
        {errors.role && (
          <p className="text-red-500 text-sm">{errors.role.message}</p>
        )}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition disabled:opacity-50"
      >
        {mutation.isPending ? (
          <>
            <Spinner></Spinner> is loading
          </>
        ) : (
          "Send Reset Link"
        )}
      </button>
    </form>
  );
}
