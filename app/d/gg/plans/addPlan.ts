"use server";

import { getApiClient } from "@/app/g/schools/axios";

export const InitPlan = async (data) => {
  const api = await getApiClient();

  const response = await api.post(`/plans`, data);
  return response.data;
};
