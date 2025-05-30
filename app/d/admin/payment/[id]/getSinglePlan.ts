"use server";
import { getApiClient } from "@/app/g/schools/axios";

export const fetchSinglePlans = async (id: string) => {
  console.log("Fetching stars data...");
  const api = await getApiClient();
  const response = await api.get(`/plans/${id}`);
  return response.data;
};
