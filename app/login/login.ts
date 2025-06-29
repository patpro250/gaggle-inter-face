type Credentials = {
  email: string;
  password: string;
};

type LoginResult = {
  success: boolean;
  message: string;
};

export async function login(credentials: Credentials): Promise<LoginResult> {
  try {
    const res = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(credentials),
    });

    if (!res.ok) {
      const errorData = await res.json();
      return {
        success: false,
        message: errorData.error || "Authentication failed",
      };
    }

    const data = await res.json();
    const user = data.user;

    return {
      success: true,
      message: `Welcome back ${user.firstName || ""} ${
        user.lastName || ""
      }`.trim(),
    };
  } catch (error: any) {
    console.error("Login error:", error);
    return {
      success: false,
      message: error.message || "Unexpected error during authentication",
    };
  }
}
