"use client";

import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import { useOnboardingStore } from "@/app/stores/useOnboardingStore";
import { useEffect, useState } from "react";
import { z } from "zod";
import {
  Institution,
  useCreateInstitution,
} from "@/app/Hooks/useCreateInsititution";

// Password validation schema
const passwordSchema = z
  .string()
  .min(8, "Password must be at least 8 characters long")
  .max(30, "Password must be at most 30 characters long")
  .regex(/[a-z]/, "Must contain at least one lowercase letter")
  .regex(/[A-Z]/, "Must contain at least one uppercase letter")
  .regex(/[0-9]/, "Must contain at least one number")
  .regex(/[^a-zA-Z0-9]/, "Must contain at least one special character");

// Full form validation schema
const formSchema = z.object({
  address: z.string().min(1, "Address is required"),
  phone: z
    .string()
    .min(10, "Phone number must be at least 10 digits")
    .regex(/^\d+$/, "Phone must contain only digits"),
  type: z.string().min(1, "Type is required"),
  openingHours: z.string().min(1, "Opening hour is required"),
  password: passwordSchema,
});

const Step3 = () => {
  const router = useRouter();
  const { data, setField } = useOnboardingStore();
  const { createInstitution, create, loading } = useCreateInstitution();

  const [address, setAddress] = useState(data.address || "");
  const [phone, setPhone] = useState(data.phone || "");
  const [type, setType] = useState(data.type || "");
  const [openingHours, setOpeningHours] = useState(data.openingHours || "");
  const [password, setPassword] = useState(data.password || "");
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    if (!data.email || !data.name) {
      router.push("/d/auth12/s");
    }
  }, [data.email, data.name, router]);

  useEffect(() => {
    if (create) {
      toast.success("Institution created successfully!");
      router.push("../../../d/auth12/ssss/");
    }
  }, [create, router]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const formData = {
      ...data,
      address,
      phone,
      type,
      openingHours,
      password,
    };

    const result = formSchema.safeParse(formData);
    if (!result.success) {
      toast.error(result.error.issues[0].message);
      return;
    }

    // Update store
    setField("address", address);
    setField("phone", phone);
    setField("type", type);
    setField("openingHours", openingHours);
    setField("password", password);

    createInstitution(formData as Institution);

    // if (create) {
    //   router.push("../../../d/auth12/sss/");
    // }
  };

  return (
    <div>
      <h1 className="text-xl font-bold text-center mb-1">
        Step 3: Institution Details
      </h1>
      <div className="w-full overflow-y-auto bg-amber-0 p-30 max-h-[590px] flex flex-col justify-center items-center ">
        <form
          onSubmit={handleSubmit}
          className="w-md mx-auto bg-amber-0    space-y-1"
        >
          <div className="flex flex-col">
            <label className="text-md font-medium flex flex-col gap-2 text-gray-700">
              Address
              <input
                type="text"
                id="address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="Institution Address"
                className="mt-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </label>

            <label className="text-md font-medium flex flex-col gap-2 text-gray-700">
              Opening Hours
              <input
                type="text"
                id="openingHours"
                value={openingHours}
                onChange={(e) => setOpeningHours(e.target.value)}
                placeholder="Opening Hours"
                className="mt-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </label>

            <label className="text-md font-medium flex flex-col gap-2 text-gray-700">
              Phone
              <input
                type="tel"
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Phone Number"
                className="mt-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </label>

            <label className="text-md font-medium flex flex-col gap-2 text-gray-700">
              Institution Type
              <select
                id="type"
                value={type}
                onChange={(e) => setType(e.target.value)}
                className="mt-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                <option value="">Choose Institution Type</option>
                <option value="UNIVERSITY">University</option>
                <option value="COLLEGE">College</option>
                <option value="SCHOOL">School</option>
                <option value="PUBLIC_LIBRARY">Public Library</option>
                <option value="PRIVATE_LIBRARY">Private Library</option>
                <option value="NON_PROFIT">Non Profit</option>
                <option value="OTHER">Other</option>
              </select>
            </label>

            <label className="text-md font-medium flex flex-col gap-2 text-gray-700">
              Password
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="mt-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </label>

            <label className="text-md font-medium flex flex-col gap-2 text-gray-700">
              <input
                type="checkbox"
                checked={showPassword}
                onChange={() => setShowPassword((prev) => !prev)}
              />
              Show password
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-500 text-white py-2 rounded-lg hover:bg-indigo-700 transition-colors"
          >
            {loading ? "Wait..." : "Create"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Step3;
