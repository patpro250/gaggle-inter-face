import { useState } from "react";
import { z } from "zod";
import axios from "axios";
import toast from "react-hot-toast";
import { redirect } from "next/navigation";

const API_URL = process.env.NEXT_PUBLIC_API_URL;
// 1. Institution type enum
export enum InstitutionType {
  UNIVERSITY = "UNIVERSITY",
  COLLEGE = "COLLEGE",
  SCHOOL = "SCHOOL",
  PUBLIC_LIBRARY = "PUBLIC_LIBRARY",
  PRIVATE_LIBRARY = "PRIVATE_LIBRARY",
  NON_PROFIT = "NON_PROFIT",
  OTHER = "OTHER",
}

// 2. Institution interface
export interface Institution {
  name: string;
  email: string;
  password: string;
  phone: string;
  address: string;
  openingHours: string;
  type: InstitutionType;
}

// 3. Zod schema for validation
const institutionSchema = z.object({
  name: z
    .string()
    .min(3, "Name must be at least 3 characters")
    .nonempty("Name is required"),
  email: z.string().email("Invalid email address"),
  password: z
    .string()
    .min(6, "Password must be at least 6 characters")
    .regex(/[A-Z]/, "Password must contain an uppercase letter")
    .regex(/[a-z]/, "Password must contain a lowercase letter")
    .regex(/[0-9]/, "Password must contain a number")
    .regex(/[#?!@$%^&*-]/, "Password must contain a special character"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  address: z.string().nonempty("Address is required"),
  openingHours: z.string().nonempty("Opening hours are required"),
  type: z.nativeEnum(InstitutionType, {
    errorMap: () => ({ message: "Invalid institution type" }),
  }),
});

// 4. Custom hook
export function useCreateInstitution() {
  const [loading, setLoading] = useState(false);
  const [errorN, setError] = useState<string | null>(null);
  const [create, setCreate] = useState<boolean>(false);

  const createInstitution = async (institution: Institution) => {
    setError(null);

    // Validate with Zod before submitting
    const result = institutionSchema.safeParse(institution);
    if (!result.success) {
      setError(result.error.errors[0]?.message || "Validation failed");
      return;
    }

    try {
      setLoading(true);
      const res = await axios.post(`${API_URL}/institutions`, institution);

      // Or setValid(res.data) if response has useful data

      setCreate(true);
    } catch (err: any) {
      console.log(err);
      const errorMessage =
        err.response?.data?.message || // if backend returns { message: "..." }
        err.response?.data || // fallback if response.data is a string
        err.message || // general JS Error object
        "Something went wrong";

      toast.error(errorMessage);

      setError(err.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return { createInstitution, create, loading, errorN };
}
