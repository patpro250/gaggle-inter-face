"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useState } from "react";
import toast from "react-hot-toast";
import { PostCreateLibrarian } from "@/app/Hooks/geting";
// Define validation schema with Zod
const librarianSchema = z.object({
  firstName: z
    .string()
    .min(2, "First name must be at least 2 characters")
    .max(50, "First name cannot exceed 50 characters"),
  lastName: z
    .string()
    .min(2, "Last name must be at least 2 characters")
    .max(50, "Last name cannot exceed 50 characters"),
  email: z.string().email("Invalid email address"),
  phone: z
    .string()
    .min(10, "Phone number must be at least 10 characters")
    .max(15, "Phone number cannot exceed 15 characters"),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .regex(/[A-Z]/, "Must contain at least one uppercase letter")
    .regex(/[a-z]/, "Must contain at least one lowercase letter")
    .regex(/[0-9]/, "Must contain at least one number")
    .regex(/[^A-Za-z0-9]/, "Must contain at least one special character"),
  gender: z.enum(["M", "F"]),
  institutionCode: z
    .string()
    .min(4, "Institution code must be at least 4 characters")
    .max(12, "Institution code cannot exceed 12 characters"),
});

type LibrarianFormData = z.infer<typeof librarianSchema>;

export default function CreateLibrarian() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const defaultInstitutionCode = searchParams.get("code")?.trim() || "";
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<LibrarianFormData>({
    resolver: zodResolver(librarianSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      password: "",
      gender: "M",
      institutionCode: defaultInstitutionCode,
    },
  });

  const onSubmit = async (data) => {
    setIsSubmitting(true);

    const res = await PostCreateLibrarian(data);

    if (!res.success) {
      toast.error(res.data);
      setIsSubmitting(false);
    } else {
      toast.success("Librarian created successfully!");
      router.push("/signup/1");
      //   setSubmitSuccess(true);
    }
    // try {
    //   // Simulate API call
    //   await new Promise((resolve) => setTimeout(resolve, 1500));
    //   console.log("Librarian created:", data);

    //   setSubmitSuccess(true);
    //   reset();
    // } catch (error) {
    //   console.error("Error creating librarian:", error);
    // } finally {
    // }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-md overflow-hidden flex flex-col max-h-[90vh]">
        <div className="bg-blue-700 px-6 py-4">
          <h2 className="text-2xl font-bold text-white">
            Create New Librarian
          </h2>
          <p className="text-blue-100">
            Fill in the librarian &lsquo; s details below
          </p>
        </div>

        <div className="p-6 overflow-y-auto">
          {/* {submitSuccess ? (
            
          ) : ( */}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {/* First Name */}
              <InputField
                id="firstName"
                label="First Name"
                register={register}
                error={errors.firstName?.message}
              />

              {/* Last Name */}
              <InputField
                id="lastName"
                label="Last Name"
                register={register}
                error={errors.lastName?.message}
              />

              {/* Email */}
              <InputField
                id="email"
                label="Email"
                register={register}
                error={errors.email?.message}
                type="email"
                full
              />

              {/* Phone */}
              <InputField
                id="phone"
                label="Phone Number"
                register={register}
                error={errors.phone?.message}
                type="tel"
                full
              />

              {/* Password */}
              <InputField
                id="password"
                label="Password"
                register={register}
                error={errors.password?.message}
                type="password"
                full
              />

              {/* Gender */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Gender
                </label>
                <div className="mt-1 space-y-2">
                  {["M", "F"].map((value) => (
                    <div className="flex items-center" key={value}>
                      <input
                        id={`gender-${value}`}
                        type="radio"
                        value={value}
                        {...register("gender")}
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                      />
                      <label
                        htmlFor={`gender-${value}`}
                        className="ml-2 block text-sm text-gray-700"
                      >
                        {value === "M" ? "Male" : "Female"}
                      </label>
                    </div>
                  ))}
                </div>
                {errors.gender && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.gender.message}
                  </p>
                )}
              </div>

              {/* Institution Code */}
              <InputField
                id="institutionCode"
                label="Institution Code"
                register={register}
                error={errors.institutionCode?.message}
              />
            </div>

            {/* Action Buttons */}
            <div className="flex justify-end space-x-3 pt-4">
              <button
                type="button"
                onClick={() => reset()}
                className="inline-flex justify-center py-2 px-4 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
              >
                Reset
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className={`inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white ${
                  isSubmitting ? "bg-blue-400" : "bg-blue-600 hover:bg-blue-700"
                }`}
              >
                {isSubmitting ? (
                  <>
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Creating...
                  </>
                ) : (
                  "Create Librarian"
                )}
              </button>
            </div>
          </form>
          {/* )} */}
        </div>
      </div>
    </div>
  );
}

// Reusable Input Field Component
const InputField = ({
  id,
  label,
  register,
  error,
  type = "text",
  full = false,
}: {
  id: keyof LibrarianFormData;
  label: string;
  register: ReturnType<typeof useForm>["register"];
  error?: string;
  type?: string;
  full?: boolean;
}) => {
  return (
    <div className={full ? "sm:col-span-2" : ""}>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <input
        id={id}
        type={type}
        {...register(id)}
        className={`mt-1 block w-full rounded-md border ${
          error ? "border-red-300" : "border-gray-300"
        } shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2`}
      />
      {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
    </div>
  );
};
