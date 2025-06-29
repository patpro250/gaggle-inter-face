export const AUTH_COOKIE_NAME = "x-auth-token";

export const getTokenFromRequest = (req: Request): string | null => {
  const cookieHeader = req.headers.get("cookie");
  const match = cookieHeader?.match(/x-auth-token=([^;]+)/);
  return match?.[1] || null;
};
