"use server";
import axios from "axios";
import { getApiClient } from "../g/schools/axios";

interface InstitutionCode {
  code: string;
}

interface Librarian {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  password: string;
  gender: "M" | "F";
  institutionCode: string;
}

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
export const fetchinstitutionCode = async (code: InstitutionCode) => {
  try {
    const URL = process.env.NEXT_PUBLIC_API_URL;

    const response = await axios.post(`${URL}/institutions/Authcode`, { code });
    return {
      success: true,
      data: response.data,
    };
  } catch (error) {
    return {
      success: false,
      data:
        error.response?.data ||
        error.message ||
        "Failed to fetch institution code",
    };
  }
};

export const PostCreateLibrarian = async (Librarian: Librarian) => {
  try {
    const URL = process.env.NEXT_PUBLIC_API_URL;
    console.error("Error fetching institution code:", Librarian);
    const response = await axios.post(`${URL}/librarians/create`, Librarian);
    return {
      success: true,
      data: response.data,
    };
  } catch (error) {
    return {
      success: false,
      data:
        error.response?.data ||
        error.message ||
        `Failed to create librarian account of institution code ${Librarian.institutionCode}`,
    };
  }
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
