"use server";
import axios from "axios";
import http from "http";
import https from "https";

const httpAgent = new http.Agent({ family: 4 });
const httpsAgent = new https.Agent({ family: 4 });

export const fetchPlans = async () => {
  const api = process.env.NEXT_PUBLIC_API_URL;

  const response = await axios.get(`${api}/plans`, {
    httpAgent,
    httpsAgent,
  });

  return response.data;
};
