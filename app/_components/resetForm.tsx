"use client";

import { useForm } from "react-hook-form";

import { useMutation } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { PostReset } from "../Hooks/geting";

interface FormValues {
  newPassword: string;
  confirmPassword: string;
}
interface Props {
  basetoken: string;
}

export default function ResetPasswordForm({ basetoken }: Props) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormValues>();

  const mutation = useMutation({
    mutationFn: PostReset,
    onSuccess: () => {
      toast.success("🎉 Password reset successful!");
    },
    onError: (error: unknown) => {
      const message =
        (error as { response?: { data?: { message?: string } } })?.response
          ?.data?.message || "Something went wrong. Please try again.";
      toast.error(message);
    },
  });

  const onSubmit = (data: FormValues) => {
    const dataobj = {
      token: basetoken,
      newPassword: data.newPassword,
    };

    mutation.mutate(dataobj);
    toast.success("sucess");
    console.log(dataobj);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded-md space-y-4"
    >
      <h2 className="text-xl font-semibold text-center text-indigo-600">
        Reset Your Password
      </h2>

      <div>
        <label className="block text-sm mb-1 text-gray-700">New Password</label>
        <input
          type="password"
          {...register("newPassword", { required: "New password is required" })}
          className="w-full px-3 py-2 border rounded-md"
        />
        {errors.newPassword && (
          <p className="text-red-500 text-sm">{errors.newPassword.message}</p>
        )}
      </div>

      <div>
        <label className="block text-sm mb-1 text-gray-700">
          Confirm Password
        </label>
        <input
          type="password"
          {...register("confirmPassword", {
            required: "Please confirm password",
            validate: (val) =>
              val === watch("newPassword") || "Passwords do not match",
          })}
          className="w-full px-3 py-2 border rounded-md"
        />
        {errors.confirmPassword && (
          <p className="text-red-500 text-sm">
            {errors.confirmPassword.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={mutation.isPending}
        className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition"
      >
        {mutation.isPending ? "Resetting..." : "Reset Password"}
      </button>
    </form>
  );
}
