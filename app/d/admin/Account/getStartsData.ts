"use server";
import { getApiClient } from "@/app/g/schools/axios";

export const fetchStartsData = async () => {
  console.log("Fetching stars data...");
  const api = await getApiClient();
  const response = await api.get(`analytics/institution/account`);
  return response.data;
};
