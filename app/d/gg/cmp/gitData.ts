"use server";
import { getApiClient } from "@/app/g/schools/axios";

export const fetchPayments = async () => {
  const api = await getApiClient();
  const response = await api.get(`/payments/all`);
  return response.data;
};

export const fetchApproved = async () => {
  const api = await getApiClient();
  const response = await api.get(`/payments/approved`);
  return response.data;
};

export interface PaymentData {
  id: string;
}

export async function Approved(id: string) {
  try {
    const api = await getApiClient();
    const res = await api.patch(`/payments/approve/${id}`);
    return {
      success: true,
      message: res.data,
    };
  } catch (ex: any) {
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
