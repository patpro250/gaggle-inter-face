// useVerifyName.ts
import { useState } from "react";
import { z } from "zod";
import axios from "axios";
import { auth } from "../auth";
const API_URL = process.env.NEXT_PUBLIC_API_URL;
// Zod schema
const nameSchema = z.object({
  name: z
    .string()
    .min(3, "Name must be at least 2 characters")
    .nonempty("Name is required"),
});

export function useVerifyName() {
  const [loading, setLoading] = useState(false);
  const [errorN, setError] = useState<string | null>(null);
  const [valid, setValid] = useState(false);

  const verify = async (name: string) => {
    setError(null);
    setValid(false);

    // Validate with Zod first
    const result = nameSchema.safeParse({ name });

    if (!result.success) {
      const issue = result.error.format().name?._errors?.[0] ?? "Invalid name";
      setError(issue);
      return;
    }

    try {
      setLoading(true);
      const session = await auth();
      const res = await axios.post(
        "http://localhost:4000/institutions/verify",
        { name }
      );
      console.log(res.data);
      if (res.data.valid) {
        setValid(true);
      }
    } catch (err: any) {
      setError(err.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return { verify, loading, errorN, valid };
}
