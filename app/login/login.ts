import { signIn } from "next-auth/react";

enum UserType {
  Institution = "Institution",
  Member = "Member",
  Librarian = "Librarian",
  SystemAdmin = "System Admin"
}

export interface Credentials {
  email: string;
  password: string;
  userType: UserType;
}

async function login(credentials: Credentials) {
  try {
    const result = await signIn("credentials", {
      ...credentials,
      redirect: false,
    });

    if (result?.ok && !result.error) {
      return {
        success: true,
        message: 'Welcome back',
      };
    } else if (result?.error) {
      return {
        success: false,
        message: result.error || "Invalid email or password",
      };
    } else {
      return {
        success: false,
        message: "An unknown error occurred.",
      };
    }
  } catch (ex) {
    return {
      success: false,
      message: ex.message || "An unexpected error occurred.",
    };
  }
}

export default login;
