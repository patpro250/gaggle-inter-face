"use server";
// import { getApiClient } from "@/app/g/schools/axios";
import axios from "axios";

export const fetchPlans = async () => {
  const api = process.env.NEXT_PUBLIC_API_URL;

  const response = await axios.get(`${api}/plans`);
  return response.data;
};
