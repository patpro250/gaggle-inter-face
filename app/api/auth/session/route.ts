import { NextResponse } from "next/server";
import { getTokenFromRequest } from "@/lib/auth-cookie";

export async function GET(req: Request) {
  const token = getTokenFromRequest(req);

  if (!token) return NextResponse.json({ user: null });

  // Optional: verify token using jwt.verify if you trust the issuer
  // Or call a user info endpoint with token

  return NextResponse.json({ token });
}
