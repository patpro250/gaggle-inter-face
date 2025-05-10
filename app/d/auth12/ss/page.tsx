"use client";
import NavbarCP from "@/app/component/web/nav copy/page";
import Navbar from "@/app/component/web/nav/page";
import { useVerifyName } from "@/app/Hooks/getInsititutionName";
import { useOnboardingStore } from "@/app/stores/useOnboardingStore";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { z } from "zod";
const step2Schema = z.object({
  name: z.string().nonempty("Name is required"),
});
const Step2 = () => {
  const router = useRouter();
  const { loading, valid, verify, errorN } = useVerifyName();
  const { data, setField } = useOnboardingStore();
  const [email, setEmail] = useState(data.email || "");
  useEffect(() => {
    if (!data.email) {
      router.push("/d/auth12/s");
    }
  }, [data.email, router]);

  const [name, setName] = useState(data.email || "");
  const [error, setError] = useState("");

  function handerSubmit2(e: React.FormEvent) {
    e.preventDefault();

    const result = step2Schema.safeParse({ name });

    if (!result.success) {
      setError(result.error.issues[0].message);
      toast.error(result.error.issues[0].message);
      return;
    }
    toast(name);
    const handleSubmit = async () => {
      await verify(name);
      toast(name);
    };
    handleSubmit();
  }

  return (
    <div>
      <h1> Step 1</h1>
      <div className="w-full bg-amber-0 min-h-[300px] flex flex-col justify-center items-center ">
        <form
          onSubmit={handerSubmit2}
          className="w-md mx-auto  p-6   space-y-4"
        >
          <div className="flex flex-col">
            <label
              htmlFor="email"
              className="text-sm font-medium text-gray-700"
            >
              Institution name
            </label>
            <input
              type="email"
              id="email"
              onChange={(e) => setName(e.target.value)}
              placeholder="Institution name"
              className="mt-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            {error && <p className="text-red-500 text-sm mt-1">{error}</p>}

            <label
              htmlFor="email"
              className="text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              disabled
              value={email}
              placeholder="Enter your email"
              className="mt-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-500 text-white py-2 rounded-lg hover:bg-indigo-700 transition-colors"
          >
            {loading ? "Finding Name.." : "Continue"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Step2;
