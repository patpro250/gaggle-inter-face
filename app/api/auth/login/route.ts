import { NextResponse } from "next/server";
import { AUTH_COOKIE_NAME } from "@/lib/auth-cookie";
import axios from "axios";
import http from "http";
import https from "https";

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();

    const apiRes = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/auth/librarians`,
      { email, password },
      {
        validateStatus: () => true,
        transitional: { clarifyTimeoutError: true },
        httpAgent: new http.Agent({ family: 4 }),
        httpsAgent: new https.Agent({ family: 4 }),
      }
    );

    const token = apiRes.headers["x-auth-token"];
    const user = apiRes.data;

    if (!token || apiRes.status !== 200) {
      return NextResponse.json({ error: "Login failed" }, { status: 401 });
    }

    const res = NextResponse.json({ user });
    console.log(user);

    res.cookies.set(AUTH_COOKIE_NAME, token, {
      httpOnly: true,
      path: "/",
      secure: process.env.NODE_ENV === "production",
      maxAge: 60 * 60 * 24, // 1 day
      sameSite: "lax",
    });

    return res;
  } catch (error) {
    console.error("Login error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
