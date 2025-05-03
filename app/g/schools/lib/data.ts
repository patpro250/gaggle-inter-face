// @ts-nocheck
import { auth } from "../../../auth";
import api from "../axios";

export async function get(url: string) {
  try {
    const session = await auth();
    const token = session?.user?.token; 

    if (!token) {
      console.warn("No token found in session.");
      return null;
    }

    const response = await api.get(url, {
      headers: {
        "x-auth-token": token,
      },
    });

    return response.status === 200 ? response.data : null;
  } catch (ex) {
    console.error("API GET error:", ex);
    return null;
  }
}
