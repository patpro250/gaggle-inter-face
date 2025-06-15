"use server";
import axios from "axios";
import { getApiClient } from "../g/schools/axios";

export interface InstitutionResetData {
  name: string;
  address: string;
  phone: string;
  type: string;
  openingHours: string;
  password: string;
  showPassword: boolean;
}

export const fetchTokenDetail = async (token: string) => {
  const URL = process.env.NEXT_PUBLIC_API_URL;
  console.log(`${URL}/token/${token}`);
  const response = await axios.get(`${URL}/reset-password/token/${token}`);
  return response.data;
};

export const PostReset = async (data: {
  token: string;
  newPassword: string;
}) => {
  const URL = process.env.NEXT_PUBLIC_API_URL;

  console.log("Reset payload:", data); // Debug log

  const response = await axios.post(`${URL}/reset-password/reset`, data); // No { data }
  return response.data;
};

export const Postinsitution = async (data: InstitutionResetData) => {
  const URL = process.env.NEXT_PUBLIC_API_URL;

  console.log("Reset payload:", data); // Debug log

  const response = await axios.post(`${URL}/institutions`, data); // No { data }
  return response.data;
};

export interface PasswordFormData {
  oldPassword: string;
  newPassword: string;
}

type UpdatePasswordFormData = {
  data: PasswordFormData;
};
export const PutPasswordInstitution = async ({
  data,
}: UpdatePasswordFormData) => {
  // const URL = process.env.NEXT_PUBLIC_API_URL;
  const api = await getApiClient();
  const response = await api.put(`institutions/change-password`, data);
  return response.data;
};
