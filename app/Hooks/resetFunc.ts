"use server";

import axios from "axios";

interface DataPayload {
  email: string;
  role: string;
}
const api = process.env.NEXT_PUBLIC_API_URL;
export const ResetInstitution = async (data: DataPayload) => {
  console.log(data, "Payload received");

  if (!data.email || !data.role) {
    return {
      Success: false,
      message: "Email and role are required",
    };
  }

  try {
    const res = await axios.post(`${api}/reset-password`, data);

    return {
      Success: true,
      message: res.data,
    };
  } catch (error) {
    return {
      Success: false,
      message: error?.response?.data || error.message || "Failed to reset",
    };
  }
};

interface ResetData {
  token: string;
  email: string;
  name?: string; // Optional if you want to pass it to the template
}

const apiUrl = process.env.NEXT_PUBLIC_API_URL_APP; // e.g., "https://yourdomain.com/api/send-reset"

export const sendResetEmail = async (data: ResetData) => {
  const { token, email } = data;

  if (!token || !email) {
    return {
      success: false,
      message: "Token and email are required",
    };
  }

  try {
    const response = await axios.post(`${apiUrl}/api/send`, data);

    return {
      success: true,
      message: response.data,
    };
  } catch (error) {
    // console.error(
    //   "Error sending reset email:",
    //   error?.response?.data || error.message
    // );

    return {
      success: false,
      message:
        error?.response?.data || error.message || "Failed to send reset email",
    };
  }
};
