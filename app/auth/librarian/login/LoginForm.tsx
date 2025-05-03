"use client";

import { LockKeyholeOpen, Mail } from "lucide-react";
import { Spinner, Text } from "@radix-ui/themes";
import Link from "next/link";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import FormError from "../../../_components/FormError";
import loginLibrarian from "./login";
import { redirect } from "next/navigation";
import toast from "react-hot-toast";

const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters long"),
});

export type LibrarianCredentials = z.infer<typeof loginSchema>;

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
  } = useForm<LibrarianCredentials>({
    resolver: zodResolver(loginSchema),
    mode: "onChange",
  });

  const onSubmit = async (data: LibrarianCredentials) => {
    const response = await loginLibrarian(data);
    if (response.success) {
      redirect("/g/schools/dashboard");
    } else {
      toast.error(response.message);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
      <div className="relative">
        <Mail
          size={20}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500"
        />
        <input
          {...register("email")}
          type="email"
          placeholder="Email"
          className="w-full py-3 pl-12 pr-5 rounded-lg shadow-sm border border-gray-300 focus:outline-none focus:ring-1 focus:ring-primary transition duration-300 dark:bg-gray-800 dark:border-gray-600 dark:focus:ring-primary"
        />
      </div>
      <FormError error={errors.email?.message} />
      <div className="relative">
        <LockKeyholeOpen
          size={20}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500"
        />
        <input
          {...register("password")}
          type="password"
          placeholder="Password"
          className="w-full py-3 pl-12 pr-5 rounded-lg shadow-sm border border-gray-300 focus:outline-none focus:ring-1 focus:ring-primary transition duration-300 dark:bg-gray-800 dark:border-gray-600 dark:focus:ring-primary"
        />
      </div>
      <FormError error={errors.password?.message} />
      <div className="text-center w-full">
        <Text size="2">
          Don't have an account?{" "}
          <Link
            className="text-primary underline"
            href="/auth/librarian/signup"
          >
            Sign up
          </Link>
        </Text>
      </div>
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full mt-4 py-3 rounded-lg flex justify-center items-center gap-4 bg-primary text-white font-semibold hover:bg-primary-dark transition duration-300 dark:bg-primary-dark"
      >
        {isSubmitting ? "Please wait" : "Login"}
        {isSubmitting && <Spinner size="2" />}
      </button>
    </form>
  );
};

export default LoginForm;
