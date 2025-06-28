"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import * as Select from "@radix-ui/react-select";
import { Spinner, Text } from "@radix-ui/themes";
import { ChevronDown, Eye, EyeOff, LockKeyholeOpen, Mail } from "lucide-react";
import Link from "next/link";
import { Controller, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { z } from "zod";
import FormError from "../_components/FormError";
import login from "./login";
import { redirector } from "./redirect";
import { useState } from "react";

// ✅ Schema and Type
const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters long"),
  userType: z.enum(["Librarian", "Member", "Institution", "System Admin"], {
    required_error: "Please select a user type",
  }),
});

export type LibrarianCredentials = z.infer<typeof loginSchema>;

// ✅ Form Component
const LoginForm = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isValid, isSubmitting },
  } = useForm<LibrarianCredentials>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      userType: "Institution",
    },
  });

  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = async (data) => {
    const response = await login(data);
    if (response.success) {
      toast.success(
        typeof response.message === "string"
          ? response.message
          : "Login successful"
      );
      redirector(data.userType);
    } else {
      toast.error(
        typeof response?.message === "string"
          ? response.message
          : "Invalid email or password"
      );
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
        {/* Email Field */}
        <div className="relative">
          <Mail
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500"
            size={20}
          />
          <input
            {...register("email")}
            type="email"
            placeholder="Email"
            className="w-full py-3 pl-12 pr-5 rounded-lg shadow-sm border border-gray-300 focus:outline-none focus:ring-1 focus:ring-primary transition duration-300 dark:bg-gray-800 dark:border-gray-600"
          />
        </div>
        <FormError error={errors.email?.message} />

        {/* Password Field */}
        <div className="relative">
          <LockKeyholeOpen
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500"
            size={20}
          />
          <input
            {...register("password")}
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            className="w-full py-3 pl-12 pr-5 rounded-lg shadow-sm border border-gray-300 focus:outline-none focus:ring-1 focus:ring-primary transition duration-300 dark:bg-gray-800 dark:border-gray-600"
          />
          <button
            type="button"
            tabIndex={-1}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500"
            onClick={() => setShowPassword((prev) => !prev)}
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        </div>
        <FormError error={errors.password?.message} />

        {/* User Type Select */}
        <Controller
          control={control}
          name="userType"
          render={({ field }) => (
            <Select.Root
              value={field.value}
              onValueChange={field.onChange}
              defaultValue="Institution"
            >
              <Select.Trigger className="w-full py-3 px-4 rounded-lg border flex border-gray-300 shadow-sm text-left focus:outline-none focus:ring-1 focus:ring-primary dark:bg-gray-800 dark:border-gray-600">
                <Select.Value placeholder="Select user type" />
                <Select.Icon className="ml-auto">
                  <ChevronDown size={18} />
                </Select.Icon>
              </Select.Trigger>
              <Select.Portal>
                <Select.Content className="bg-white dark:bg-gray-800 rounded-md shadow-md overflow-hidden">
                  <Select.Viewport className="p-1">
                    {["Institution", "System Admin", "Librarian"].map(
                      (option) => (
                        <Select.Item
                          key={option}
                          value={option}
                          className="cursor-pointer px-4 py-2 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                        >
                          <Select.ItemText>{option}</Select.ItemText>
                        </Select.Item>
                      )
                    )}
                  </Select.Viewport>
                </Select.Content>
              </Select.Portal>
            </Select.Root>
          )}
        />
        <FormError error={errors.userType?.message} />

        {/* Signup Links */}
        <div className="text-center flex gap-2 flex-col w-full">
          <Text size="2">
            Don&apos;t have an account?{" "}
            <Link className="text-primary underline" href="/signup">
              Sign up
            </Link>
          </Text>
          <Link className="text-primary underline" href="/login/forgot">
            Forgot password?
          </Link>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting || !isValid}
          className="w-full mt-4 py-3 rounded-lg flex justify-center items-center gap-4 bg-primary text-white font-semibold hover:bg-primary-dark transition duration-300 dark:bg-primary-dark"
        >
          {isSubmitting ? "Please wait" : "Login"}
          {isSubmitting && <Spinner size="2" />}
        </button>
      </form>
    </>
  );
};

export default LoginForm;
