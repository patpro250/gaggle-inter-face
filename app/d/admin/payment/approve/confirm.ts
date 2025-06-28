"use server";
import { getApiClient } from "@/app/g/schools/axios";

import axios from "axios";

export async function ConfirmPayment(code: number) {
  try {
    const api = await getApiClient();
    const res = await api.patch(`/payments/confirm`, { code });
    return {
      success: true,
      message: res.data,
    };
  } catch (ex) {
    const errorMsg =
      ex?.response?.data?.message ||
      ex?.response?.data ||
      ex?.message ||
      "Something went wrong";

    return {
      success: false,
      message: errorMsg,
    };
  }
}

export async function Createinsititution(data12) {
  try {
    const URL = process.env.NEXT_PUBLIC_API_URL;

    console.log("Reset payload:", data12); // Debug log

    const res = await axios.post(`${URL}/institutions`, data12);
    return {
      success: true,
      message: res.data,
    };
  } catch (ex) {
    const errorMsg =
      ex?.response?.data?.message ||
      ex?.response?.data ||
      ex?.message ||
      "Something went wrong";

    return {
      success: false,
      message: errorMsg,
    };
  }
}
