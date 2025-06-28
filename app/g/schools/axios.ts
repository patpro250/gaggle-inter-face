import { auth } from "@/app/auth";
import axios from "axios";
import { Agent as HttpAgent } from "http";
import { Agent as HttpsAgent } from "https";

const httpAgent = new HttpAgent({ family: 4 });
const httpsAgent = new HttpsAgent({ family: 4 });

export const getApiClient = async () => {
  const session = await auth();

  return axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    withCredentials: true,
    headers: {
      "x-auth-token": session.accessToken,
    },
    httpAgent,
    httpsAgent,
  });
};
