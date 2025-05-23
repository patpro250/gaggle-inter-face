"use server";

import { getApiClient } from "@/app/g/schools/axios";
export interface PlanData {
  phoneNumber: string;
  planId: string;
  amount: string;
  duration: number;
}

export async function InitiPayment(Plans: PlanData) {
  try {
    const api = await getApiClient();
    const res = await api.post(`/payments/momo`, Plans);
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

// export const fetchPayments = async () => {
//   const api = await getApiClient();
//   const res = await api.get(`/payments`);

//   return res.data;
// };

export const fetchPayments = async () => {
  const api = await getApiClient();
  const response = await api.get(`/payments`);
  return response.data;
};
