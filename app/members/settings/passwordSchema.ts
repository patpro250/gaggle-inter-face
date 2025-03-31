import { z } from "zod";

const passwordComplexity = z
  .string()
  .min(8, "Password must be at least 8 characters")
  .max(30, "Password must not exceed 30 characters")
  .regex(/[a-z]/, "Password must contain at least one lowercase letter")
  .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
  .regex(/\d/, "Password must contain at least one number")
  .regex(/[\W_]/, "Password must contain at least one symbol")
  .refine(
    (password) => {
      const conditions = [
        /[a-z]/.test(password),
        /[A-Z]/.test(password),
        /\d/.test(password),
        /[\W_]/.test(password),
      ];

      return conditions.filter(Boolean).length >= 4;
    },
    {
      message:
        "Password must meet at least 4 of the 4 complexity requirements (lowercase, uppercase, number, symbol).",
    }
  );

export const passwordSchema = z
  .object({
    oldPassword: passwordComplexity,
    newPassword: passwordComplexity,
    repeatPassword: passwordComplexity,
  })
  .refine((data) => data.newPassword === data.repeatPassword, {
    message: "New passwords do not match",
    path: ["repeatPassword"],
  });
