import { useState } from "react";
import { z } from "zod";
import axios from "axios";
import toast from "react-hot-toast";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export enum InstitutionType {
  UNIVERSITY = "UNIVERSITY",
  COLLEGE = "COLLEGE",
  SCHOOL = "SCHOOL",
  PUBLIC_LIBRARY = "PUBLIC_LIBRARY",
  PRIVATE_LIBRARY = "PRIVATE_LIBRARY",
  NON_PROFIT = "NON_PROFIT",
  OTHER = "OTHER",
}

export interface Institution {
  name: string;
  email: string;
  password: string;
  phone: string;
  address: string;
  openingHours: string;
  type: InstitutionType;
}

const institutionSchema = z.object({
  name: z.string().min(3).nonempty(),
  email: z.string().email(),
  password: z
    .string()
    .min(6)
    .regex(/[A-Z]/)
    .regex(/[a-z]/)
    .regex(/[0-9]/)
    .regex(/[#?!@$%^&*-]/),
  phone: z.string().min(10),
  address: z.string().nonempty(),
  openingHours: z.string().nonempty(),
  type: z.nativeEnum(InstitutionType, {
    errorMap: () => ({ message: "Invalid institution type" }),
  }),
});

export function useCreateInstitution() {
  const [loading, setLoading] = useState(false);
  const [errorN, setError] = useState<string | null>(null);
  const [create, setCreate] = useState<boolean>(false);

  const createInstitution = async (institution: Institution) => {
    setError(null);
    const result = institutionSchema.safeParse(institution);
    if (!result.success) {
      setError(result.error.errors[0]?.message || "Validation failed");
      return;
    }

    try {
      setLoading(true);
      const res = await axios.post(`${API_URL}/institutions`, institution);
      if (res?.data) {
        setCreate(true);
      } else {
        throw new Error("Empty response from server");
      }
    } catch (err) {
      const errorMessage =
        err?.response?.data?.message ||
        (typeof err?.response?.data === "string" && err.response.data) ||
        err?.message ||
        "Something went wrong";

      toast.error(errorMessage);
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return { createInstitution, create, loading, errorN };
}
