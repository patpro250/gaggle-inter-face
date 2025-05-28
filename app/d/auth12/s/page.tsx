"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { z } from "zod";
import { useOnboardingStore } from "@/app/stores/useOnboardingStore";
import toast from "react-hot-toast";

// Zod schema for this step only
const step1Schema = z.object({
  email: z.string().email("Invalid email").nonempty("Email is required"),
});

const Step1 = () => {
  const router = useRouter();
  const { data, setField } = useOnboardingStore();
  const [email, setEmail] = useState(data.email || "");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const result = step1Schema.safeParse({ email });

    if (!result.success) {
      setError(result.error.issues[0].message);
      toast.error(result.error.issues[0].message);
      return;
    }

    // ✅ valid — save to store
    setField("email", email);
    toast.success("great Next!!");
    // ➡️ Go to next step
    router.push("../../../d/auth12/ss/");
  };

  return (
    <>
      <h1> Step 1</h1>
      <div className="w-full bg-amber-0 min-h-[300px] flex flex-col justify-center items-center ">
        <form onSubmit={handleSubmit} className="w-md mx-auto  p-6   space-y-4">
          <label
            htmlFor="email"
            className="block text-md font-md text-gray-700"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          {error && <p className="text-red-500 text-sm mt-1">{error}</p>}

          <button
            type="submit"
            className="mt-4 w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 transition"
          >
            Continue
          </button>
        </form>
      </div>
    </>
  );
};

export default Step1;
