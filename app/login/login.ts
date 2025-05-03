import { signIn } from "next-auth/react";
import { LibrarianCredentials } from "./LoginForm";

async function loginLibrarian(credentials: LibrarianCredentials) {
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

export default loginLibrarian;