"use server";
import { getApiClient } from "@/app/g/schools/axios";

export const fetchSinglePlans = async (id: string) => {
  const api = await getApiClient();
  const response = await api.get(`/plans/${id}`);
  return response.data;
};

export const fetchSinglePayment = async (id: string) => {
  const api = await getApiClient();
  const response = await api.get(`/payments/${id}`);
  return response.data;
};
