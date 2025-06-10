"use client";
import { useOnboardingStore } from "@/app/stores/useOnboardingStore";
import Link from "next/link";

import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const Step3 = () => {
  const router = useRouter();
  const { data } = useOnboardingStore();

  if (!data.name || !data.email || !data.password) {
    toast.error("Your Data Is ready!!");
    router.push("/login");
  }
  return (
    <div>
      <h1> Step 1</h1>
      <div className="w-full bg-amber-0 min-h-[300px] flex flex-col justify-center items-center ">
        <div className=" max-w-3xl text-center">
          <h1 className="text-1xl font-medium text-primary mb-4">
            Your account has been created successfully 🎉
          </h1>
          <p className="text-gray-700 mb-6">Can t wait to log in!</p>
          <Link
            href="/login"
            className="inline-block bg-primary w-full text-white px-6 py-2 rounded-md hover:bg-primary transition-colors"
          >
            Go to Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Step3;
