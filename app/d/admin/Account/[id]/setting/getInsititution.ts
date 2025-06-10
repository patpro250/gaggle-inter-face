"use server";
import { getApiClient } from "@/app/g/schools/axios";

export const GetInstitution = async (id: string) => {
  console.log("Fetching stars data...");
  const api = await getApiClient();
  const response = await api.get(`institutions/${id}`);
  return response.data;
};

export const PostInstitution = async (data) => {
  const api = await getApiClient();
  const response = await api.put(`institutions/update`, data);
  return response.data;
};
