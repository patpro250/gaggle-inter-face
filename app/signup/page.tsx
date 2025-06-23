"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useRouter } from "next/navigation";
import { fetchinstitutionCode } from "../Hooks/geting";
import toast from "react-hot-toast";

const formSchema = z.object({
  institutionCode: z
    .string()
    .min(6, "Institution code must be at least 6 characters"),
});

type FormData = z.infer<typeof formSchema>;

export default function InstitutionCodeEntry() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setValue,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      institutionCode: "",
    },
  });

  const onSubmit = async (data) => {
    const res = await fetchinstitutionCode(data.institutionCode);
    if (!res.success) {
      toast.error(res.data);
      return;
    }
    console.log("Submitted Institution Code:", data.institutionCode);
    router.push(`/signup/2?code=${data.institutionCode}`);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.toUpperCase();
    setValue("institutionCode", value, { shouldValidate: true });
  };

  return (
    <div className="flex flex-col md:flex-row h-screen overflow-hidden bg-gray-50">
      {/* Illustration Side - Hidden on small screens */}
      <div className="hidden md:flex md:w-1/2 bg-gradient-to-br from-primary to-sub-primary items-center justify-center p-12 text-white">
        <div className="max-w-md w-full">
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-2">Welcome to</h2>
            <h1 className="text-4xl font-extrabold">Niti Book</h1>
          </div>

          {/* Inline SVG Illustration */}
          <svg
            className="w-full h-auto max-h-64 object-contain"
            viewBox="0 0 500 300"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="500" height="300" fill="url(#gradient)" />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3674b5" />
                <stop offset="100%" stopColor="#00a2de" />
              </linearGradient>
            </defs>
            <path
              d="M150 150H350V250H150V150Z"
              fill="#F0F9FF"
              stroke="#93C5FD"
              strokeWidth="2"
            />
            <path d="M140 250H360V260H140V250Z" fill="#BFDBFE" />
            <rect x="180" y="180" width="40" height="70" fill="#93C5FD" />
            <rect x="240" y="180" width="40" height="70" fill="#93C5FD" />
            <path d="M130 150L150 130L370 130L350 150H130Z" fill="#BFDBFE" />
            <path
              d="M250 100C200 100 180 120 150 130L170 150C190 140 220 130 250 130C280 130 310 140 330 150L350 130C320 120 300 100 250 100Z"
              fill="#FEF3C7"
            />
            <path
              d="M200 150L250 180L300 150"
              stroke="#F59E0B"
              strokeWidth="3"
              strokeLinecap="round"
            />
            <path
              d="M100 180H130V230H100V180Z"
              fill="#FECACA"
              stroke="#FCA5A5"
              strokeWidth="2"
            />
            <path d="M100 180H130L120 160L100 180Z" fill="#FEE2E2" />
            <circle cx="80" cy="220" r="15" fill="#A5B4FC" />
            <circle cx="80" cy="220" r="10" fill="#E0E7FF" />
            <circle cx="420" cy="220" r="15" fill="#A5B4FC" />
            <circle cx="420" cy="220" r="10" fill="#E0E7FF" />
          </svg>

          <div className="mt-8">
            <p className=" text-center text-blue-100">
              Connecting students and institutions through seamless digital
              experiences.
            </p>
          </div>
        </div>
      </div>

      {/* Form Side - Scrollable on small screens */}
      <div className="flex-grow overflow-auto flex items-center justify-center p-6">
        <div className="w-full max-w-md bg-white p-6 md:p-10 rounded-xl shadow-sm border border-gray-100">
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Institution Portal
            </h1>
            <p className="text-gray-600">
              Enter your institution code to begin the journey
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <label
                htmlFor="institution-code"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Institution Code
              </label>
              <input
                id="institution-code"
                type="text"
                placeholder="e.g. EDU-1234"
                {...register("institutionCode")}
                onChange={handleInputChange}
                className={`w-full px-4 py-3 border ${
                  errors.institutionCode ? "border-red-300" : "border-gray-300"
                } rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition`}
                autoFocus
              />
              {errors.institutionCode && (
                <p className="mt-2 text-sm text-red-600">
                  {errors.institutionCode.message}
                </p>
              )}
              <p className="mt-2 text-sm text-gray-500">
                This code was provided by your institution administrator
              </p>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-white font-medium ${
                isSubmitting
                  ? "bg-blue-400 cursor-not-allowed"
                  : "bg-sub-primary hover:bg-primary"
              } transition`}
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
                  Verifying...
                </>
              ) : (
                "Continue"
              )}
            </button>
          </form>

          <div className="mt-6 text-center text-sm text-gray-500">
            <p>
              Need help?{" "}
              <a href="#" className="text-primary hover:text-sub-primary-primary">
                Contact support
              </a>
            </p>
            <p className="mt-4">
              New librarian?{" "}
              <a href="/register" className="text-primary hover:text-sub-primary-primary">
                Create an account
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
