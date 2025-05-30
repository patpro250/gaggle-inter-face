"use server";
import { getApiClient } from "@/app/g/schools/axios";

export const fetchPlans = async () => {
  console.log("Fetching stars data...");
  const api = await getApiClient();
  const response = await api.get(`/plans`);
  return response.data;
};
