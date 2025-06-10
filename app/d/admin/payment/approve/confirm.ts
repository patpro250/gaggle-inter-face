"use server";
import { getApiClient } from "@/app/g/schools/axios";

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
