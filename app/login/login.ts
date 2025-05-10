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
      message: "Login successful!",
    };
  } else {
    return {
      success: false,
      message: "Invalid email or password",
    };
  }
} catch (ex) {
  return {
    success: false,
    message: "Invalid email or password",
  }
}
}

export default login;