"use server";

import { getApiClient } from "@/app/g/schools/axios";

export async function addApprovelib(id: string, role: string) {
  try {
    const api = await getApiClient();
    const res = await api.post(`/librarians/approve/${id}`, { role });
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
